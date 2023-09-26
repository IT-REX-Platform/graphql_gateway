import {PluginOrDisabledPlugin} from "@envelop/core";
import {ResolveUserFn, useGenericAuth} from "@envelop/generic-auth";
import * as jose from "jose";

type UserCourseMembership = {
  courseId: string;
  role: string;
}

type UserType = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  authToken: string;
  courseMemberships: UserCourseMembership[];
};

const JWKS = jose.createRemoteJWKSet(
  new URL(
    process.env.JWKS_URL ?? `http://host.docker.internal:9009/realms/GITS/protocol/openid-connect/certs`
  )
);

async function resolveUserAuthenticated(context) {
  try {
    // get user information from request headers
    let authHeader = retrieveHeaderSafe(context, "authorization");

    authHeader = authHeader.replace("Bearer ", "");

    const {payload} = await jose.jwtVerify(
        authHeader,
        JWKS,
        {}
    );

    // query the course service to find out which courses the user is a member of
    const userInfoRes = await context.CourseService.Query.courseMembershipsByUserIds({
      args: {
        userIds: [payload.sub]
      },
      selectionSet: `
      {
        courseId
        role
        course {
          id
          published
          startDate
          endDate
        }
      }
      `
    });

    // check that we received a response
    if (userInfoRes.length < 1) {
      console.error("Failed to retrieve user course memberships.");
      return null;
    }

    const courseMemberships = userInfoRes[0];

    // construct the user object we will return
    const user: UserType = {
      id: payload.sub,
      userName: payload.preferred_username,
      firstName: payload.given_name,
      lastName: payload.family_name,
      authToken: authHeader,
      courseMemberships: courseMemberships.map((membership) => {
        return {
          courseId: membership.courseId,
          role: membership.role,
          published: membership.course.published,
          startDate: membership.course.startDate,
          endDate: membership.course.endDate
        }
      })
    };

    // add json representation of the user object to the context 
    // (will be injected into the request headers to the services)
    context.currentUserJson = JSON.stringify(user);

    return user;
  } catch (e) {
    console.error("Failed to validate token");
    console.error(e);

    return null;
  }
}

function resolveUserSkipAuth(context) {
  return JSON.parse(retrieveHeaderSafe(context, "currentUser"));
}

function retrieveHeadersSafe(context: any) {
  let headers = context.request.headers;
  if (!headers) {
    headers = context.req.headers;
  }
  if (!headers) {
    console.log("No headers found.");
    throw new Error("No headers found");
  }
  return headers;
}

function retrieveHeaderSafe(context, header: string) {
  let headers = retrieveHeadersSafe(context);

  let authHeader = headers.get(header);
  if (!authHeader) {
    authHeader = headers.authorization;
  }
  if (!authHeader) {
    console.log("No header '" + header + "' found.");
    throw new Error("No header '" + header + "' found");
  }
  return authHeader;
}

/**
 * Function which is called for every request to resolve the current user based on data in the request.
 * @param context The GraphQL context
 * @returns Object representing the current user or null if authentication failed
 */
const resolveUserFn: ResolveUserFn<UserType> = async (context) => {
  if (process.env.SKIP_AUTH !== undefined && process.env.SKIP_AUTH.toLowerCase() === "true") {
    return resolveUserSkipAuth(context);
  } else {
    return await resolveUserAuthenticated(context);
  }
};

/**
 * List of Envelop plugins the gateway shall use.
 */
const plugins: PluginOrDisabledPlugin = [
  useGenericAuth({
    resolveUserFn,
    mode: "protect-all",
  }),
];

export default plugins;

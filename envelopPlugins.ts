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

    const {payload, protectedHeader} = await jose.jwtVerify(
        authHeader,
        JWKS,
        {}
    );

    let userInfoRes = await context.UserService.Query.findUserInfos({
      args: {
        ids: [payload.sub]
      },
      selectionSet: `
      {
        courseMemberships {
          courseId
          role
        }
      }
      `
    });

    if(userInfoRes.length < 1) {
      console.error("Failed to retrieve user course memberships.");
      return null;
    }

    let courseInfoRes = await context.CourseService.Query.coursesByIds({
      args: {
        ids: userInfoRes[0].courseMemberships.map((membership) => membership.courseId)
      },
      selectionSet: `
      {
        id
        published
        startDate
        endDate
      }
      `
    });

    let missingCourseCount = userInfoRes[0].courseMemberships.length - courseInfoRes.length;
    if(missingCourseCount > 0) {
      console.error("Failed to retrieve course information for " + missingCourseCount + " course(s).");
      return null;
    }

    let user: UserType = {
      id: payload.sub,
      userName: payload.preferred_username,
      firstName: payload.given_name,
      lastName: payload.family_name,
      authToken: authHeader,
      courseMemberships: userInfoRes[0].courseMemberships.map((membership) => {
        let courseInfo = courseInfoRes.find((course) => course.id === membership.courseId);
        return {
          courseId: membership.courseId,
          role: membership.role,
          published: courseInfo.published,
          startDate: courseInfo.startDate,
          endDate: courseInfo.endDate
        }
      })
    };

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
    //console.log("Context is: ", context);
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
    //console.log("Headers are: ", headers);
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
  if(process.env.SKIP_AUTH !== undefined && process.env.SKIP_AUTH.toLowerCase() === "true") {
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

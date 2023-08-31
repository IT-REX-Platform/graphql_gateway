import {PluginOrDisabledPlugin} from "@envelop/core";
import {ResolveUserFn, useGenericAuth} from "@envelop/generic-auth";
import * as jose from "jose";

type UserType = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  authToken: string;
};

const JWKS = jose.createRemoteJWKSet(
  new URL(
    process.env.JWKS_URL ?? `http://host.docker.internal:9009/realms/GITS/protocol/openid-connect/certs`
  )
);

function resolveUserAuthenticated(context) {
  try {
    // get user information from request headers
    let authHeader = retrieveHeaderSafe(context, "authorization");

    authHeader = authHeader.replace("Bearer ", "");

    const {payload, protectedHeader} = await jose.jwtVerify(
        authHeader,
        JWKS,
        {}
    );

    let user: UserType = {
      id: payload.sub,
      userName: payload.preferred_username,
      firstName: payload.given_name,
      lastName: payload.family_name,
      authToken: authHeader
    };

    context.currentUserJson = JSON.stringify(user);

    return user;
  } catch (e) {
    console.error("Failed to validate token");
    console.error(e);

    return null;
  }
}

function resolveUserSkipAuthDangerous(context) {
  return JSON.parse(retrieveHeaderSafe(context, "currentUser"));
}

const resolveUserFn: ResolveUserFn<UserType> = async (context) => {
  if(process.env.SKIP_AUTH.toLowerCase() === "true") {
    return resolveUserSkipAuthDangerous(context);
  } else {
    return resolveUserAuthenticated(context);
  }
};

const plugins: PluginOrDisabledPlugin = [
  useGenericAuth({
    resolveUserFn,
    mode: "protect-all",
  }),
];

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

export default plugins;

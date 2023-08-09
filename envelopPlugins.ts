import { PluginOrDisabledPlugin } from "@envelop/core";
import { ResolveUserFn, useGenericAuth } from "@envelop/generic-auth";
import { useAuthorizationDirectives } from "./plugins/authorizationDirectivesPlugin";
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

const resolveUserFn: ResolveUserFn<UserType> = async (context) => {
  // Here you can implement any custom sync/async code, and use the context built so far in Envelop and the HTTP request
  // to find the current user.
  // Common practice is to use a JWT token here, validate it, and use the payload as-is, or fetch the user from an external services.
  // Make sure to either return `null` or the user object.

  try {
    // get user information from request headers
    const headers = retrieveHeadersSafe(context);
    let authHeader = retrieveAuthHeaderSafe(headers);

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
};

function retrieveHeadersSafe(context: any) {
  let headers = context.request.headers;
  if (!headers) {
    headers = context.req.headers;
  }
  if (!headers) {
    console.log("No headers found, context is: ", context);
    throw new Error("No headers found");
  }
  return headers;
}

function retrieveAuthHeaderSafe(headers: any) {
  let authHeader = headers.get("authorization");
  if (!authHeader) {
    authHeader = headers.authorization;
  }
  if (!authHeader) {
    console.log("No authorization header found, headers are: ", headers);
    throw new Error("No authorization header found");
  }
  return authHeader;
}

export default [
  useGenericAuth({
    resolveUserFn,
    mode: "protect-all",
  }),
  useAuthorizationDirectives()
];

import { PluginOrDisabledPlugin } from "@envelop/core";
import { ResolveUserFn, useGenericAuth } from "@envelop/generic-auth";
import * as jose from "jose";

type UserType = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
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
    const authHeader = context.request.headers.get("authorization").replace("Bearer ", "");

    const { payload, protectedHeader } = await jose.jwtVerify(
      authHeader,
      JWKS,
      {}
    );

    let user: UserType = {
      id: payload.sub,
      userName: payload.preferred_username,
      firstName: payload.given_name,
      lastName: payload.family_name
    };

    context.currentUserJson = JSON.stringify(user);

    return user;
  } catch (e) {
    console.error("Failed to validate token");
    console.error(e);

    return null;
  }
};

const plugins: PluginOrDisabledPlugin = [
  useGenericAuth({
    resolveUserFn,
    mode: "protect-all",
  }),
];

export default plugins;

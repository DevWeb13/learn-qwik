import { QwikAuth$ } from "@auth/qwik";
import GitHub from "@auth/qwik/providers/github";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
  ({ env }) => ({
    providers: [
      GitHub({
        clientId: env.get("GITHUB_ID"),
        clientSecret: env.get("GITHUB_SECRET"),
      }),
    ],
    trustHost: true,
  }),
);

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
    cookies: {
      sessionToken: {
        name: `__Secure-authjs.session-token`,
        options: {
          httpOnly: true,
          secure: true, // Assure-toi que ce cookie est marqué "Secure"
          sameSite: "lax", // Ajuste selon ton besoin, essaie aussi 'None'
          path: "/",
        },
      },
    },
    trustHost: true,
  }),
);

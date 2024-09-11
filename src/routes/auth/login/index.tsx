// src/routes/auth/login/index.tsx

import { component$ } from "@builder.io/qwik";

import { useLocation } from "@builder.io/qwik-city";

import { useSignIn } from "~/routes/plugin@auth";

// Redirecting if already signed in
// export const onRequest: RequestHandler = (event) => {
//   const session: Session | null = event.sharedMap.get("session");
//   console.log(session);

//   if (session && new Date(session.expires) > new Date()) {
//     console.log("Redirecting to home already signed in");
//     throw event.redirect(302, `/`);
//   }
// };

export default component$(() => {
  const signIn = useSignIn();
  const loc = useLocation();
  const redirectParams = loc.url.searchParams.get("redirectTo");

  return (
    <button
      onClick$={() =>
        signIn.submit({
          providerId: "github",
          options: {
            redirectTo: redirectParams || "/",
          },
        })
      }
    >
      Sign In with GitHub
    </button>
  );
});

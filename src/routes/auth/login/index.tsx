// src/routes/auth/login/index.tsx

import { component$ } from "@builder.io/qwik";

import { useLocation } from "@builder.io/qwik-city";

import { useSignIn } from "~/routes/plugin@auth";

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

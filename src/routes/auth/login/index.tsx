// src/routes/auth/login/index.tsx

import { component$ } from "@builder.io/qwik";
import { routeAction$, useNavigate } from "@builder.io/qwik-city";
import { getSupabaseClient } from "~/utils/supabaseClient";

export const useSignInWithGithub = routeAction$(async (_data, { redirect }) => {
  const supabaseClient = await getSupabaseClient();
  const { data, error } = await supabaseClient.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:5173/auth/callback",
    },
  });

  if (error) {
    console.error("Failed to sign in with GitHub", error);
    return;
  }
  throw redirect(302, data.url);
});

export default component$(() => {
  const signInWithGithubAction = useSignInWithGithub();

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick$={async () => {
          signInWithGithubAction.submit();
        }}
        class="button_base reset_reset button_button button_large button_primary"
      >
        Sign in with GitHub
      </button>
    </div>
  );
});

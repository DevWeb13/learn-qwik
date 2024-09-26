// src/routes/auth/logout/index.tsx

import { component$ } from "@builder.io/qwik";
import { routeAction$, useNavigate } from "@builder.io/qwik-city";
import { getSupabaseClient } from "~/utils/supabaseClient";

export const useSignOut = routeAction$(async () => {
  const supabaseClient = await getSupabaseClient();
  const { error } = await supabaseClient.auth.signOut();

  if (error) {
    console.error("Error during logout:", error);
    return { success: false };
  }

  return { success: true };
});

export default component$(() => {
  const navigate = useNavigate();
  const signOutAction = useSignOut();

  return (
    <div>
      <h1>Logout</h1>
      <button
        onClick$={async () => {
          const { value } = await signOutAction.submit();

          if (value.success) {
            navigate("/"); // Redirect to homepage after successful logout
          } else {
            console.error("Logout failed");
          }
        }}
        class="button_base reset_reset button_button button_large button_primary"
      >
        Logout
      </button>
    </div>
  );
});

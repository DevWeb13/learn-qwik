// src/routes/auth/logout/index.tsx

import { component$ } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import type { Session } from "@auth/core/types";
import { useSignOut } from "~/routes/plugin@auth";

// Redirecting if not signed in
export const onRequest: RequestHandler = (event) => {
  const session: Session | null = event.sharedMap.get("session");
  console.log(session);

  if (!session || new Date(session.expires) < new Date()) {
    throw event.redirect(302, `/`);
  }
};

export default component$(() => {
  const signOut = useSignOut();
  return (
    <button onClick$={() => signOut.submit({ redirectTo: `/test` })}>
      Logout
    </button>
  );
});

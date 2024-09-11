// src/routes/auth/logout/index.tsx

import { component$ } from "@builder.io/qwik";

import { useSignOut } from "~/routes/plugin@auth";

export default component$(() => {
  const signOut = useSignOut();
  return (
    <button onClick$={() => signOut.submit({ redirectTo: `/` })}>Logout</button>
  );
});

// src/routes/learn/dashboard-app/getting-started/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import GettingStartedContent from "~/components/learn/dashboardApp/gettingStartedContent/gettingStartedContent";

export default component$(() => {
  return <GettingStartedContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Getting Started",
  meta: [
    {
      name: "description",
      content: "Getting started with Qwik learning path",
    },
  ],
};

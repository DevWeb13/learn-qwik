// src/routes/learn/dashboard-app/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import DashboardAppContent from "~/components/learn/dashboardApp/dashboardAppContent";

export default component$(() => {
  return <DashboardAppContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Introduction",
  meta: [
    {
      name: "description",
      content: "Introduction to Qwik learning path",
    },
  ],
};

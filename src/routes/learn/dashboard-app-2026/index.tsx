// src/routes/learn/dashboard-app-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { DashboardAppContent2026 } from "~/components/learn/dashboardApp2026/dashboardAppContent2026";

import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <DashboardAppContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Introduction",
  "Learn Qwik 2026 edition. Build a modern full-stack dashboard application using Qwik, Qwik City, and Supabase with production-ready architecture.",
  "https://www.learn-qwik.com/metaDashboard2026.png",
  "https://www.learn-qwik.com/learn/dashboard-app-2026/",
);

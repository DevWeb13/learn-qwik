// src/routes/learn/dashboard-app-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import DashboardApp2026Content from "~/components/learn/dashboardApp2026/dashboardApp2026Content";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <DashboardApp2026Content />;
});

export const head: DocumentHead = createDocumentHead(
  "Introduction",
  "Learn Qwik 2026 edition. Build a modern full-stack dashboard application using Qwik, Qwik City, and Supabase with production-ready architecture.",
  "https://www.learn-qwik.com/metaDashboard2026.png",
  "https://www.learn-qwik.com/learn/dashboard-app-2026/",
);

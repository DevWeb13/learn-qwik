// src/routes/learn/dashboard-app/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import DashboardAppContent from "~/components/learn/dashboardApp/dashboardAppContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <DashboardAppContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Introduction",
  "Welcome to the Qwik course! Start this free interactive course by understanding the main features of Qwik and begin building a full-stack web application.",
  "https://www.learn-qwik.com/metaDashboard.png",
  "https://www.learn-qwik.com/learn/dashboard-app/",
);

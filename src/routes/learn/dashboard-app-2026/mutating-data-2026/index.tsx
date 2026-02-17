// src/routes/learn/dashboard-app/mutating-data/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { MutatingDataContent2026 } from "~/components/learn/dashboardApp2026/mutatingDataContent2026/mutatingDataContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <MutatingDataContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 11: Mutating Data",
  "Learn how to mutate data in your PostgreSQL database using Qwik. Implement mutations using routeActions$() with Form or programmatically.",
  "https://www.learn-qwik.com/metaChapter11.png",
  "https://www.learn-qwik.com/learn/dashboard-app/mutating-data-2026/",
);

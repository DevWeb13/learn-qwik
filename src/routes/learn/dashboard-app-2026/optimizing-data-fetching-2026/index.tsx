// src/routes/learn/dashboard-app/optimizing-data-fetch/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OptimizingDataFetchingContent2026 } from "~/components/learn/dashboardApp2026/optimizingDataFetchingContent2026/optimizingDataFetchingContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <OptimizingDataFetchingContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 8: Optimizing Data Fetch",
  "Learn how to optimize data fetching in Qwik. Understand the basics of optimizing data fetching in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter8.png",
  "https://www.learn-qwik.com/learn/dashboard-app/optimizing-data-fetching-2026/",
);

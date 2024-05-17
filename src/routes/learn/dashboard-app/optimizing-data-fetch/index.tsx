// src/routes/learn/dashboard-app/optimizing-data-fetch/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OptimizingDataFetchContent } from "~/components/learn/dashboardApp/optimizingDataFetchContent/optimizingDataFetchContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <OptimizingDataFetchContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 8: Optimizing Data Fetch",
  "Learn how to optimize data fetching in Qwik. Understand the basics of optimizing data fetching in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter8.png",
  "https://www.learn-qwik.com/learn/dashboard-app/optimizing-data-fetch/",
);

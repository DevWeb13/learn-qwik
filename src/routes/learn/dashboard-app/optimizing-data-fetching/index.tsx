// src/routes/learn/dashboard-app/optimizing-data-fetch/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OptimizingDataFetchingContent } from "~/components/learn/dashboardApp/optimizingDataFetchingContent/optimizingDataFetchingContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <OptimizingDataFetchingContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 8: Optimizing Data Fetch",
  description:
    "Learn how to optimize data fetching in Qwik. Understand the basics of optimizing data fetching in your Qwik application.",
  imageUrl: "https://www.learn-qwik.com/metaChapter8.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/optimizing-data-fetching/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 8: Optimizing Data Fetch",
        item: "https://www.learn-qwik.com/learn/dashboard-app/optimizing-data-fetching/",
      },
    ]),
  ],
});

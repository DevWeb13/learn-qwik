// src/routes/learn/dashboard-app-2026/optimizing-data-fetching-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OptimizingDataFetchingContent2026 } from "~/components/learn/dashboardApp2026/optimizingDataFetchingContent2026/optimizingDataFetchingContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <OptimizingDataFetchingContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik Data Fetching Optimization | routeLoader$ Patterns",
  description:
    "Optimize Qwik data fetching with routeLoader$ placement, route boundaries, parallel loading, and request patterns that avoid unnecessary slow work.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-9-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/optimizing-data-fetching-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 9: Optimizing Data Fetching 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/optimizing-data-fetching-2026/",
      },
    ]),
  ],
});

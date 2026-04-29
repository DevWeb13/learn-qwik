// src/routes/learn/dashboard-app-2026/fetching-data-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { FetchingDataContent2026 } from "~/components/learn/dashboardApp2026/fetchingDataContent2026/fetchingDataContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <FetchingDataContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik routeLoader$ Tutorial | Fetch and Display Data",
  description:
    "Learn Qwik routeLoader$ by fetching dashboard data, shaping server-side results, and displaying reusable data in a Qwik City app.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-8-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/fetching-data-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 8: Fetching Data 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/fetching-data-2026/",
      },
    ]),
  ],
});

// src/routes/learn/dashboard-app/navigating-between-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { NavigatingBetweenPagesContent2026 } from "~/components/learn/dashboardApp2026/navigatingBetweenPagesContent2026/navigatingBetweenPagesContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <NavigatingBetweenPagesContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 5: Navigating Between Pages",
  "Learn how to navigate between pages in Qwik. Understand the basics of routing, creating links, and handling navigation in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter5.png",
  "https://www.learn-qwik.com/learn/dashboard-app/navigating-between-pages-2026/",
);

// src/routes/learn/dashboard-app/creating-layouts-and-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CreatingLayoutsAndPagesContent2026 } from "~/components/learn/dashboardApp2026/creatingLayoutsAndPagesContent2026/creatingLayoutsAndPagesContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <CreatingLayoutsAndPagesContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 4: Creating Layouts and Pages",
  "Learn how to create layouts and pages in your Qwik application. This chapter covers the basics of layout design, page creation, and routing in Qwik.",
  "https://www.learn-qwik.com/metaChapter4.png",
  "https://www.learn-qwik.com/learn/dashboard-app/creating-layouts-and-pages-2026/",
);

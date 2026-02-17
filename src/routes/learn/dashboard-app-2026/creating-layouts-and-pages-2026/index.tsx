// src/routes/learn/dashboard-app/creating-layouts-and-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CreatingLayoutsAndPagesContent from "~/components/learn/dashboardApp/creatingLayoutsAndPagesContent/creatingLayoutsAndPagesContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <CreatingLayoutsAndPagesContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 4: Creating Layouts and Pages",
  "Learn how to create layouts and pages in your Qwik application. This chapter covers the basics of layout design, page creation, and routing in Qwik.",
  "https://www.learn-qwik.com/metaChapter4.png",
  "https://www.learn-qwik.com/learn/dashboard-app/creating-layouts-and-pages/",
);

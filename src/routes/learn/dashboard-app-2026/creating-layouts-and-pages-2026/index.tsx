// src/routes/learn/dashboard-app-2026/creating-layouts-and-pages-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CreatingLayoutsAndPagesContent2026 } from "~/components/learn/dashboardApp2026/creatingLayoutsAndPagesContent2026/creatingLayoutsAndPagesContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <CreatingLayoutsAndPagesContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 4: Creating Layouts and Pages 2026",
  "Understand file-based routing in Qwik, create nested routes, and share UI using layout.tsx in a structured dashboard application.",
  "https://www.learn-qwik.com/meta-chapter-4-2026.png", // Update with the correct image URL for chapter 4 when available
  "https://www.learn-qwik.com/learn/dashboard-app-2026/creating-layouts-and-pages-2026/",
);

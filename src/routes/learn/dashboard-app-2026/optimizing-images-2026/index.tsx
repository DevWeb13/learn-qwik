// src/routes/learn/dashboard-app-2026/optimizing-images-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OptimizingImagesContent2026 } from "~/components/learn/dashboardApp2026/optimizingImagesContent2026/optimizingImagesContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <OptimizingImagesContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 7: Optimizing Images 2026",
  "Optimize image loading in your Qwik app with automatic image processing, responsive sources, and mobile-friendly rendering.",
  "https://www.learn-qwik.com/meta-chapter-7-2026.png",
  "https://www.learn-qwik.com/learn/dashboard-app-2026/optimizing-images-2026/",
);

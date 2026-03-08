// src/routes/learn/dashboard-app-2026/optimizing-fonts-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OptimizingFontsContent2026 } from "~/components/learn/dashboardApp2026/optimizingFontsContent2026/optimizingFontsContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <OptimizingFontsContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 6: Optimizing Fonts 2026",
  "Optimize font loading in your Qwik app with Fontsource, self-hosting, and font-display to improve performance and reduce layout shifts.",
  "https://www.learn-qwik.com/meta-chapter-6-2026.png",
  "https://www.learn-qwik.com/learn/dashboard-app-2026/optimizing-fonts-2026/",
);

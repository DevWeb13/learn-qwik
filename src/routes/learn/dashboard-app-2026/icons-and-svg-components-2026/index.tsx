// src/routes/learn/dashboard-app/working-with-icons-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { IconsAndSVGComponentsContent2026 } from "~/components/learn/dashboardApp2026/IconsAndSVGComponentsContent2026/iconsAndSVGComponentsContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <IconsAndSVGComponentsContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 3: Icons and SVG Components 2026",
  "Learn how to add, customize, and manage icons in your Qwik application using packages and raw SVG components.",
  "https://www.learn-qwik.com/metaChapter3.png",
  "https://www.learn-qwik.com/learn/dashboard-app/working-with-icons-2026/",
);

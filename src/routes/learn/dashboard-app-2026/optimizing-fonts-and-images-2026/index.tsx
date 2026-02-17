// src/routes/learn/dashboard-app/optimizing-fonts-and-images/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import OptimizingFontsAndImagesContent from "~/components/learn/dashboardApp/optimizing-fonts-and-images-content/optimizing-fonts-and-images-content";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <OptimizingFontsAndImagesContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 3: Optimizing Fonts and Images",
  "Optimize fonts and images in your Qwik app to enhance performance. Learn about custom fonts, image strategies, and reducing layout shifts.",
  "https://www.learn-qwik.com/metaChapter3.png",
  "https://www.learn-qwik.com/learn/dashboard-app/optimizing-fonts-and-images/",
);

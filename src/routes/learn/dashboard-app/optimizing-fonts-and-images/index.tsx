// src/routes/learn/dashboard-app/optimizing-fonts-and-images/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import OptimizingFontsAndImagesContent from "~/components/learn/dashboardApp/optimizing-fonts-and-images-content/optimizing-fonts-and-images-content";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <OptimizingFontsAndImagesContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 3: Optimizing Fonts and Images",
  description:
    "Optimize fonts and images in your Qwik app to enhance performance. Learn about custom fonts, image strategies, and reducing layout shifts.",
  imageUrl: "https://www.learn-qwik.com/metaChapter3.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/optimizing-fonts-and-images/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 3: Optimizing Fonts and Images",
        item: "https://www.learn-qwik.com/learn/dashboard-app/optimizing-fonts-and-images/",
      },
    ]),
  ],
});

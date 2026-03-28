// src/routes/learn/dashboard-app-2026/optimizing-fonts-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OptimizingFontsContent2026 } from "~/components/learn/dashboardApp2026/optimizingFontsContent2026/optimizingFontsContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <OptimizingFontsContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 6: Optimizing Fonts 2026",
  description:
    "Optimize font loading in your Qwik app with Fontsource, self-hosting, and font-display to improve performance and reduce layout shifts.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-6-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/optimizing-fonts-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 6: Optimizing Fonts 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/optimizing-fonts-2026/",
      },
    ]),
  ],
});

// src/routes/learn/dashboard-app-2026/working-with-icons-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { IconsAndSVGComponentsContent2026 } from "~/components/learn/dashboardApp2026/IconsAndSVGComponentsContent2026/iconsAndSVGComponentsContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <IconsAndSVGComponentsContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 3: Icons and SVG Components 2026",
  description:
    "Learn how to add, customize, and manage icons in your Qwik application using packages and raw SVG components.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-3-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/working-with-icons-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 3: Icons and SVG Components 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/working-with-icons-2026/",
      },
    ]),
  ],
});

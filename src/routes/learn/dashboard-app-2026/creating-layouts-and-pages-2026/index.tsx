// src/routes/learn/dashboard-app-2026/creating-layouts-and-pages-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CreatingLayoutsAndPagesContent2026 } from "~/components/learn/dashboardApp2026/creatingLayoutsAndPagesContent2026/creatingLayoutsAndPagesContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <CreatingLayoutsAndPagesContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 4: Creating Layouts and Pages 2026",
  description:
    "Understand file-based routing in Qwik, create nested routes, and share UI using layout.tsx in a structured dashboard application.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-4-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/creating-layouts-and-pages-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 4: Creating Layouts and Pages 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/creating-layouts-and-pages-2026/",
      },
    ]),
  ],
});

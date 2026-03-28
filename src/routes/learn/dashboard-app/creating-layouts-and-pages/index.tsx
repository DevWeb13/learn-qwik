// src/routes/learn/dashboard-app/creating-layouts-and-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CreatingLayoutsAndPagesContent from "~/components/learn/dashboardApp/creatingLayoutsAndPagesContent/creatingLayoutsAndPagesContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <CreatingLayoutsAndPagesContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 4: Creating Layouts and Pages",
  description:
    "Learn how to create layouts and pages in your Qwik application. This chapter covers the basics of layout design, page creation, and routing in Qwik.",
  imageUrl: "https://www.learn-qwik.com/metaChapter4.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/creating-layouts-and-pages/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 4: Creating Layouts and Pages",
        item: "https://www.learn-qwik.com/learn/dashboard-app/creating-layouts-and-pages/",
      },
    ]),
  ],
});

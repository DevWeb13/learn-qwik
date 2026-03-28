// src/routes/learn/dashboard-app/navigating-between-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import NavigatingBetweenPagesContent from "~/components/learn/dashboardApp/navigatingBetweenPagesContent/navigatingBetweenPagesContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <NavigatingBetweenPagesContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 5: Navigating Between Pages",
  description:
    "Learn how to navigate between pages in Qwik. Understand the basics of routing, creating links, and handling navigation in your Qwik application.",
  imageUrl: "https://www.learn-qwik.com/metaChapter5.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/navigating-between-pages/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 5: Navigating Between Pages",
        item: "https://www.learn-qwik.com/learn/dashboard-app/navigating-between-pages/",
      },
    ]),
  ],
});

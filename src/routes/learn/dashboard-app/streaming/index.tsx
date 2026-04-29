// src/routes/learn/dashboard-app/streaming/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { StreamingContent } from "~/components/learn/dashboardApp/streamingContent/streamingContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <StreamingContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik Streaming Tutorial | Progressive Data Loading",
  description:
    "Learn how Qwik streaming works, when to use progressive data loading, and how it can render dashboard UI faster.",
  imageUrl: "https://www.learn-qwik.com/metaChapter9.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/streaming/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 9: Streaming",
        item: "https://www.learn-qwik.com/learn/dashboard-app/streaming/",
      },
    ]),
  ],
});

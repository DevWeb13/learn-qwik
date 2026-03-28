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
  title: "Chapter 9: Streaming",
  description:
    "Learn how streaming works in Qwik, when to use it, and how it helps load pages faster by rendering data progressively.",
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

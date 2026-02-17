// src/routes/learn/dashboard-app/streaming/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { StreamingContent } from "~/components/learn/dashboardApp/streamingContent/streamingContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <StreamingContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 9: Streaming",
  "Learn how to stream data in Qwik. Understand the basics of streaming data in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter9.png",
  "https://www.learn-qwik.com/learn/dashboard-app/streaming/",
);

// src/routes/learn/dashboard-app/streaming/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { StreamingContent2026 } from "~/components/learn/dashboardApp2026/streamingContent2026/streamingContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <StreamingContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 9: Streaming",
  "Learn how to stream data in Qwik. Understand the basics of streaming data in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter9.png",
  "https://www.learn-qwik.com/learn/dashboard-app/streaming-2026/",
);

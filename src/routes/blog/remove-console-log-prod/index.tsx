// src/routes/blog/remove-console-log-prod/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { RemoveConsoleLogProdArticle } from "~/components/blog/articles/remove-console-log-prod";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <RemoveConsoleLogProdArticle />;
});

export const head: DocumentHead = createDocumentHead(
  "Learn Qwik (2025) — Remove console.log in production (Qwik + Vite)",
  "Learn how to automatically clean up your production builds by removing console.log using Vite. This works with all Vite-based projects, not only Qwik.",
  "https://www.learn-qwik.com/metaRemoveConsoleLog.png",
  "https://www.learn-qwik.com/blog/remove-console-log-prod/",
);

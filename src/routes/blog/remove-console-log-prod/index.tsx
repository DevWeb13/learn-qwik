// src/routes/blog/remove-console-log-prod/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { RemoveConsoleLogProdArticle } from "~/components/blog/articles/remove-console-log-prod";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <RemoveConsoleLogProdArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Remove console.log in Production (Qwik + Vite) (2025)",
  description:
    "Learn how to automatically clean up your production builds by removing console.log using Vite. This works with all Vite-based projects, not only Qwik.",
  imageUrl: "https://www.learn-qwik.com/metaRemoveConsoleLog.png",
  url: "https://www.learn-qwik.com/blog/remove-console-log-prod/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Remove console.log in Production (Qwik + Vite)",
        item: "https://www.learn-qwik.com/blog/remove-console-log-prod/",
      },
    ]),
  ],
});

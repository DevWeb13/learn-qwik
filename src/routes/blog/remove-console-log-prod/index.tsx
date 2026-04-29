// src/routes/blog/remove-console-log-prod/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { RemoveConsoleLogProdArticle } from "~/components/blog/articles/remove-console-log-prod";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <RemoveConsoleLogProdArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Vite Remove console.log in Production | Qwik, React, Vue",
  description:
    "Remove console.log from production builds with Vite. Works for Qwik, React, Vue, SvelteKit, Astro, and other Vite-based projects.",
  imageUrl: "https://www.learn-qwik.com/metaRemoveConsoleLog.png",
  url: "https://www.learn-qwik.com/blog/remove-console-log-prod/",
  type: "article",
  structuredData: [
    createArticleSchema({
      headline: "Vite Remove console.log in Production",
      description:
        "Remove console.log from production builds with Vite. Works for Qwik, React, Vue, SvelteKit, Astro, and other Vite-based projects.",
      url: "https://www.learn-qwik.com/blog/remove-console-log-prod/",
      imageUrl: "https://www.learn-qwik.com/metaRemoveConsoleLog.png",
      publishedTime: "2025-05-01",
      modifiedTime: "2026-04-25",
      authorName: "Learn Qwik",
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Vite Remove console.log in Production",
        item: "https://www.learn-qwik.com/blog/remove-console-log-prod/",
      },
    ]),
  ],
});

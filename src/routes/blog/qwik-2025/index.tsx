// src/routes/blog/qwik-2025/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Qwik2025Article } from "~/components/blog/articles/qwik2025";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <Qwik2025Article />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "What Is Qwik? Resumability and Performance Explained",
  description:
    "Learn what Qwik is, how resumability works, and why Qwik can ship less JavaScript for faster, more sustainable web apps.",
  imageUrl: "https://www.learn-qwik.com/metaQwik2025.png",
  url: "https://www.learn-qwik.com/blog/qwik-2025/",
  type: "article",
  structuredData: [
    createArticleSchema({
      headline: "What Is Qwik? Resumability and Performance Explained",
      description:
        "Learn what Qwik is, how resumability works, and why Qwik can ship less JavaScript for faster, more sustainable web apps.",
      url: "https://www.learn-qwik.com/blog/qwik-2025/",
      imageUrl: "https://www.learn-qwik.com/metaQwik2025.png",
      publishedTime: "2025-04-01",
      modifiedTime: "2026-04-25",
      authorName: "Learn Qwik",
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "What Is Qwik? Resumability and Performance Explained",
        item: "https://www.learn-qwik.com/blog/qwik-2025/",
      },
    ]),
  ],
});

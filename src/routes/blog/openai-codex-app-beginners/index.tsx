// src/routes/blog/openai-codex-app-beginners/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OpenAICodexAppBeginnersArticle } from "~/components/blog/articles/openai-codex-app-beginners";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <OpenAICodexAppBeginnersArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "What Is OpenAI Codex App? Beginner Guide 2026",
  description:
    "A beginner-friendly explanation of OpenAI Codex App, AI coding agents, parallel software work, and how the developer role changes.",
  imageUrl: "https://www.learn-qwik.com/metaOpenAICodexApp.png",
  url: "https://www.learn-qwik.com/blog/openai-codex-app-beginners/",
  type: "article",
  structuredData: [
    createArticleSchema({
      headline: "What Is OpenAI Codex App?",
      description:
        "A beginner-friendly explanation of OpenAI Codex App, AI coding agents, parallel software work, and how the developer role changes.",
      url: "https://www.learn-qwik.com/blog/openai-codex-app-beginners/",
      imageUrl: "https://www.learn-qwik.com/metaOpenAICodexApp.png",
      publishedTime: "2026-01-01",
      modifiedTime: "2026-04-25",
      authorName: "Learn Qwik",
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "What Is OpenAI Codex App?",
        item: "https://www.learn-qwik.com/blog/openai-codex-app-beginners/",
      },
    ]),
  ],
});

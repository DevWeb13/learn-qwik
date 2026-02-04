// src/routes/blog/openai-codex-app-beginners/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OpenAICodexAppBeginnersArticle } from "~/components/blog/articles/openai-codex-app-beginners";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <OpenAICodexAppBeginnersArticle />;
});

export const head: DocumentHead = createDocumentHead(
  "(2026) | Codex App explained for beginners",
  "Codex App is not about writing code faster. It is about delegating work to AI agents and rethinking the developer’s role.",
  "https://www.learn-qwik.com/metaOpenAICodexApp.png", // 👉 dedicated SEO image (to create or replace later)
  "https://www.learn-qwik.com/blog/openai-codex-app-beginners/",
);

// src/routes/blog/openai-codex-app-beginners/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OpenAICodexAppBeginnersArticle } from "~/components/blog/articles/openai-codex-app-beginners";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <OpenAICodexAppBeginnersArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Codex App Explained for Beginners (2026)",
  description:
    "Codex App is not about writing code faster. It is about delegating work to AI agents and rethinking the developer’s role.",
  imageUrl: "https://www.learn-qwik.com/metaOpenAICodexApp.png",
  url: "https://www.learn-qwik.com/blog/openai-codex-app-beginners/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Codex App Explained for Beginners (2026)",
        item: "https://www.learn-qwik.com/blog/openai-codex-app-beginners/",
      },
    ]),
  ],
});

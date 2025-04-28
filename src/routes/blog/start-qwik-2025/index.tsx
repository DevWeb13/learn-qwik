// src/routes/blog/start-qwik-2025/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { StartQwik2025Article } from "~/components/blog/articles/start-qwik-2025";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <StartQwik2025Article />;
});

export const head: DocumentHead = createDocumentHead(
  "Start a Qwik project in 5 minutes (2025)",
  "Set up a clean and minimal Qwik project in just a few minutes. The perfect starting point for our upcoming Qwik 2025 tutorials.",
  "https://www.learn-qwik.com/metaStartQwik2025.png",
  "https://www.learn-qwik.com/blog/start-qwik-2025/",
);

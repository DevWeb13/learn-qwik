// src/routes/blog/open-terminal-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Qwik119Article } from "~/components/blog/articles/qwik-1-19";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <Qwik119Article />;
});

export const head: DocumentHead = createDocumentHead(
  "(2026) | Qwik 1.19.0: a quiet but strategic update",
  "Qwik 1.19.0 does not try to impress. This release refines the engine, fixes subtle behaviors, and strengthens application reliability in production.",
  "https://www.learn-qwik.com/metaQwik119.png", // 👉 (dedicated SEO image, to create or replace later)
  "https://www.learn-qwik.com/blog/qwik-1-19/",
);

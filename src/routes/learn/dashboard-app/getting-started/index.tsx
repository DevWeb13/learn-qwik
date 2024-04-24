// src/routes/learn/dashboard-app/getting-started/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import GettingStartedContent from "~/components/learn/dashboardApp/gettingStartedContent/gettingStartedContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <GettingStartedContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 1: Getting Started",
  "Get started with Qwik by creating an app using the Qwik CLI. This chapter guides you through setting up your Qwik or Qwik City project from scratch.",
  "https://www.learn-qwik.com/metaChapter1.png",
  "https://www.learn-qwik.com/learn/dashboard-app/getting-started/",
);

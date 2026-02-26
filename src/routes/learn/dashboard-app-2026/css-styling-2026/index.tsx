// src/routes/learn/dashboard-app/css-styling-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CSSStylingContent2026 } from "~/components/learn/dashboardApp2026/cssStylingContent2026/cssStylingContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <CSSStylingContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 2: CSS Styling 2026",
  "Dive into customizing the style of your Qwik application. This chapter covers various methods to enhance your app’s design with CSS and Tailwind CSS.",
  "https://www.learn-qwik.com/metaChapter2.png",
  "https://www.learn-qwik.com/learn/dashboard-app/css-styling-2026/",
);

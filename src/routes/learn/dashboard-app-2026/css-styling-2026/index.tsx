// src/routes/learn/dashboard-app-2026/css-styling-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CSSStylingContent2026 } from "~/components/learn/dashboardApp2026/cssStylingContent2026/cssStylingContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

export default component$(() => {
  return <CSSStylingContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 2: CSS Styling 2026",
  description:
    "Dive into customizing the style of your Qwik application. This chapter covers various methods to enhance your app’s design with CSS and Tailwind CSS.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-2-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/css-styling-2026/",
});

// src/routes/learn/dashboard-app/css-styling/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CSSStylingContent from "~/components/learn/dashboardApp/cssStylingContent/cssStylingContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <CSSStylingContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 2: CSS Styling",
  "Dive into customizing the style of your Qwik application. This chapter covers various methods to enhance your app’s design with CSS and Tailwind CSS.",
  "https://www.learn-qwik.com/metaChapter2.png",
  "https://www.learn-qwik.com/learn/dashboard-app/css-styling/",
);

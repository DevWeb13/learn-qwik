import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { QwikVsReact2026Article } from "~/components/blog/articles/qwik-vs-react-2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <QwikVsReact2026Article />;
});

export const head: DocumentHead = createDocumentHead(
  "Qwik vs React (2026) | Hydration vs Resumability",
  "Qwik vs React in 2026: a deep technical comparison of hydration vs resumability, performance, JavaScript payload size, and edge-ready architecture.",
  "https://www.learn-qwik.com/metaQwikVsReact2026.png",
  "https://www.learn-qwik.com/blog/qwik-vs-react-2026/",
);

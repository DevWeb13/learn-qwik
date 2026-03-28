import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { QwikVsReact2026Article } from "~/components/blog/articles/qwik-vs-react-2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <QwikVsReact2026Article />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik vs React (2026): Hydration vs Resumability",
  description:
    "Qwik vs React in 2026: a deep technical comparison of hydration vs resumability, performance, JavaScript payload size, and edge-ready architecture.",
  imageUrl: "https://www.learn-qwik.com/metaQwikVsReact2026.png",
  url: "https://www.learn-qwik.com/blog/qwik-vs-react-2026/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Qwik vs React (2026): Hydration vs Resumability",
        item: "https://www.learn-qwik.com/blog/qwik-vs-react-2026/",
      },
    ]),
  ],
});

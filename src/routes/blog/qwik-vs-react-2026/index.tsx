import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { QwikVsReact2026Article } from "~/components/blog/articles/qwik-vs-react-2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <QwikVsReact2026Article />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik vs React 2026 | Resumability vs Hydration",
  description:
    "Compare Qwik vs React in 2026: resumability vs hydration, startup performance, JavaScript payload, edge rendering, and developer experience.",
  imageUrl: "https://www.learn-qwik.com/metaQwikVsReact2026.png",
  url: "https://www.learn-qwik.com/blog/qwik-vs-react-2026/",
  type: "article",
  structuredData: [
    createArticleSchema({
      headline: "Qwik vs React 2026",
      description:
        "Compare Qwik vs React in 2026: resumability vs hydration, startup performance, JavaScript payload, edge rendering, and developer experience.",
      url: "https://www.learn-qwik.com/blog/qwik-vs-react-2026/",
      imageUrl: "https://www.learn-qwik.com/metaQwikVsReact2026.png",
      publishedTime: "2026-03-01",
      modifiedTime: "2026-04-25",
      authorName: "Learn Qwik",
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Qwik vs React 2026",
        item: "https://www.learn-qwik.com/blog/qwik-vs-react-2026/",
      },
    ]),
  ],
});

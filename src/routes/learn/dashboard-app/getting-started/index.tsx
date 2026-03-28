// src/routes/learn/dashboard-app/getting-started/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import GettingStartedContent from "~/components/learn/dashboardApp/gettingStartedContent/gettingStartedContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <GettingStartedContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 1: Getting Started",
  description:
    "Get started with Qwik by creating an app using the Qwik CLI. This chapter guides you through setting up your Qwik or Qwik City project from scratch.",
  imageUrl: "https://www.learn-qwik.com/metaChapter1.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/getting-started/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 1: Getting Started",
        item: "https://www.learn-qwik.com/learn/dashboard-app/getting-started/",
      },
    ]),
  ],
});

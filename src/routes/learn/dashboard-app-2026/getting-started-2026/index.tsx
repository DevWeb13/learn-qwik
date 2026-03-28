// src/routes/learn/dashboard-app-2026/getting-started-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { GettingStartedContent2026 } from "~/components/learn/dashboardApp2026/gettingStartedContent2026/gettingStartedContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <GettingStartedContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 1: Getting Started 2026",
  description:
    "Get started with Qwik by creating an app using the Qwik CLI. This chapter guides you through setting up your Qwik or Qwik City project from scratch.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-1-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/getting-started-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 1: Getting Started 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/getting-started-2026/",
      },
    ]),
  ],
});

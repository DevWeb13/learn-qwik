// src/routes/learn/dashboard-app/getting-started/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import GettingStartedContent from "~/components/learn/dashboardApp/gettingStartedContent/gettingStartedContent";

export default component$(() => {
  return <GettingStartedContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Chapter 1: Getting Started",
  meta: [
    {
      name: "description",
      content:
        "Get started with Qwik by creating an app using the Qwik CLI. This chapter guides you through setting up your Qwik or Qwik City project from scratch.",
    },
    {
      property: "og:title",
      content: "Learn Qwik | Chapter 1: Getting Started",
    },
    {
      property: "og:description",
      content:
        "Kick off your learning journey by setting up a new Qwik application. Follow our step-by-step guide to understand the basics of Qwik CLI and project structure.",
    },
    {
      property: "og:image",
      content: "https://www.learn-qwik.com/metaChapter1.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content:
        "https://www.learn-qwik.com/learn/dashboard-app/getting-started/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Learn Qwik | Chapter 1: Getting Started",
    },
    {
      name: "twitter:description",
      content:
        "Start your Qwik development journey by creating a new app with our guide on using the Qwik CLI and exploring project structures.",
    },
    {
      name: "twitter:image",
      content: "https://www.learn-qwik.com/metaChapter1.png",
    },
  ],
};

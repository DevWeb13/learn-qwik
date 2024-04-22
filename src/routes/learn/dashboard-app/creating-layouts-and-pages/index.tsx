// src/routes/learn/dashboard-app/creating-layouts-and-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CreatingLayoutsAndPagesContent from "~/components/learn/dashboardApp/creatingLayoutsAndPagesContent/creatingLayoutsAndPagesContent";

export default component$(() => {
  return <CreatingLayoutsAndPagesContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Chapter 4: Creating Layouts and Pages",
  meta: [
    {
      name: "description",
      content:
        "Learn how to create layouts and pages in your Qwik application. This chapter covers the basics of layout design, page creation, and routing in Qwik.",
    },
    {
      property: "og:title",
      content: "Learn Qwik | Chapter 4: Creating Layouts and Pages",
    },
    {
      property: "og:description",
      content:
        "Discover the essentials of creating layouts and pages in Qwik. Learn how to design layouts, create pages, and implement routing in your web application.",
    },
    {
      property: "og:image",
      content: "https://www.learn-qwik.com/metaChapter2.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://www.learn-qwik.com/learn/dashboard-app/chapter2",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Learn Qwik | Chapter 4: Creating Layouts and Pages",
    },
    {
      name: "twitter:description",
      content:
        "Master the art of creating layouts and pages in Qwik. Understand the basics of layout design, page creation, and routing in your web application.",
    },
    {
      name: "twitter:image",
      content: "https://www.learn-qwik.com/metaChapter4.png",
    },
  ],
};

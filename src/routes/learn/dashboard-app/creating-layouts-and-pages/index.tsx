// src/routes/learn/dashboard-app/creating-layouts-and-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CreatingLayoutsAndPagesContent from "~/components/learn/dashboardApp/creatingLayoutsAndPagesContent/creatingLayoutsAndPagesContent";

export default component$(() => {
  return <CreatingLayoutsAndPagesContent />;
});

export const head: DocumentHead = {
  title: "Chapter 2: CSS Styling - Learn Qwik",
  meta: [
    {
      name: "description",
      content:
        "Dive into customizing the style of your Qwik application. This chapter covers various methods to enhance your app’s design with CSS and Tailwind CSS.",
    },
    {
      property: "og:title",
      content: "Chapter 2: CSS Styling - Learn Qwik",
    },
    {
      property: "og:description",
      content:
        "Learn how to style your Qwik application effectively. Explore different styling techniques including global styles, Tailwind CSS integration, and the use of icons.",
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
      content: "Chapter 2: CSS Styling - Learn Qwik",
    },
    {
      name: "twitter:description",
      content:
        "Master CSS styling in your Qwik projects. This chapter introduces you to CSS customization, from global styles to Tailwind CSS and icon integration.",
    },
    {
      name: "twitter:image",
      content: "https://www.learn-qwik.com/metaChapter2.png",
    },
  ],
};

// src/routes/learn/dashboard-app/css-styling/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CSSStylingContent from "~/components/learn/dashboardApp/cssStylingContent/cssStylingContent";

export default component$(() => {
  return <CSSStylingContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Chapter 2: CSS Styling",
  meta: [
    {
      name: "description",
      content:
        "Dive into customizing the style of your Qwik application. This chapter covers various methods to enhance your app’s design with CSS and Tailwind CSS.",
    },
    {
      property: "og:title",
      content: "Learn Qwik | Chapter 2: CSS Styling",
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
      content: "Learn Qwik | Chapter 2: CSS Styling",
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

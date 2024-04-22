// src/routes/learn/dashboard-app/navigating-between-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import NavigatingBetweenPagesContent from "~/components/learn/dashboardApp/navigatingBetweenPagesContent/navigatingBetweenPagesContent";

export default component$(() => {
  return <NavigatingBetweenPagesContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Chapter 5: Navigating Between Pages",
  meta: [
    {
      name: "description",
      content:
        "Learn how to navigate between pages in Qwik. Understand the basics of routing, creating links, and handling navigation in your Qwik application.",
    },
    {
      property: "og:title",
      content: "Learn Qwik | Chapter 5: Navigating Between Pages",
    },
    {
      property: "og:description",
      content:
        "Discover the essentials of navigating between pages in Qwik. Learn how to create links, handle routing, and manage navigation in your Qwik application.",
    },
    {
      property: "og:image",
      content: "https://www.learn-qwik.com/metaChapter5.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content:
        "https://www.learn-qwik.com/learn/dashboard-app/navigating-between-pages/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Learn Qwik | Chapter 5: Navigating Between Pages",
    },
    {
      name: "twitter:description",
      content:
        "Discover the essentials of navigating between pages in Qwik. Learn how to create links, handle routing, and manage navigation in your Qwik application.",
    },
    {
      name: "twitter:image",
      content: "https://www.learn-qwik.com/metaChapter5.png",
    },
  ],
};

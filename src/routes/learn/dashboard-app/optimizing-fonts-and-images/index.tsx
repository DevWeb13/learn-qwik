// src/routes/learn/dashboard-app/optimizing-fonts-and-images/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import OptimizingFontsAndImagesContent from "~/components/learn/dashboardApp/optimizing-fonts-and-images-content/optimizing-fonts-and-images-content";

export default component$(() => {
  return <OptimizingFontsAndImagesContent />;
});

export const head: DocumentHead = {
  title: "Chapter 3: Optimizing Fonts and Images - Learn Qwik",
  meta: [
    {
      name: "description",
      content:
        "Learn how to optimize fonts and images in your Qwik application to enhance performance and user experience. This chapter covers custom fonts, image optimization strategies, and best practices for reducing layout shifts.",
    },
    {
      property: "og:title",
      content: "Chapter 3: Optimizing Fonts and Images - Learn Qwik",
    },
    {
      property: "og:description",
      content:
        "Discover effective techniques for optimizing fonts and images in Qwik. Understand how to minimize Cumulative Layout Shift (CLS) and enhance loading times for a smoother user experience.",
    },
    {
      property: "og:image",
      content: "https://www.learn-qwik.com/metaChapter3.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://www.learn-qwik.com/learn/dashboard-app/chapter3",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Chapter 3: Optimizing Fonts and Images - Learn Qwik",
    },
    {
      name: "twitter:description",
      content:
        "Master the art of optimizing fonts and images with our guide on Qwik. Reduce load times and improve the stability of your web applications.",
    },
    {
      name: "twitter:image",
      content: "https://www.learn-qwik.com/metaChapter3.png",
    },
  ],
};

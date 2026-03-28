// src/routes/learn/dashboard-app/css-styling/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import CSSStylingContent from "~/components/learn/dashboardApp/cssStylingContent/cssStylingContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <CSSStylingContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 2: CSS Styling",
  description:
    "Dive into customizing the style of your Qwik application. This chapter covers various methods to enhance your app’s design with CSS and Tailwind CSS.",
  imageUrl: "https://www.learn-qwik.com/metaChapter2.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/css-styling/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 2: CSS Styling",
        item: "https://www.learn-qwik.com/learn/dashboard-app/css-styling/",
      },
    ]),
  ],
});

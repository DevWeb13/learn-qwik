// src/routes/learn/dashboard-app-2026/css-styling-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CSSStylingContent2026 } from "~/components/learn/dashboardApp2026/cssStylingContent2026/cssStylingContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <CSSStylingContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik CSS Styling 2026 | Tailwind and CSS Modules",
  description:
    "Style a Qwik app with Tailwind CSS, global CSS, and CSS Modules. Learn practical styling patterns while building the dashboard project.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-2-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/css-styling-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 2: CSS Styling 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/css-styling-2026/",
      },
    ]),
  ],
});

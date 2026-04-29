// src/routes/learn/dashboard-app-2026/navigating-between-pages-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { NavigatingBetweenPagesContent2026 } from "~/components/learn/dashboardApp2026/navigatingBetweenPagesContent2026/navigatingBetweenPagesContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <NavigatingBetweenPagesContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik City Navigation | Link, useNavigate and useLocation",
  description:
    "Navigate between pages in Qwik City with Link, useNavigate(), and useLocation(). Build active dashboard links and clean URL behavior.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-5-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/navigating-between-pages-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 5: Navigating Between Pages 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/navigating-between-pages-2026/",
      },
    ]),
  ],
});

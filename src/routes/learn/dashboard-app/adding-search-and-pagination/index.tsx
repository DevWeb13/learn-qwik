// src/routes/learn/dashboard-app/adding-search-and-pagination/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { AddingSearchAndPaginationContent } from "~/components/learn/dashboardApp/addingSearchAndPaginationContent/addingSearchAndPaginationContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <AddingSearchAndPaginationContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 10: Adding Search and Pagination",
  description:
    "Learn how to add search and pagination to your Qwik application. Implement search and pagination using useLocation() and searchParams.",
  imageUrl: "https://www.learn-qwik.com/metaChapter10.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/adding-search-and-pagination/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 10: Adding Search and Pagination",
        item: "https://www.learn-qwik.com/learn/dashboard-app/adding-search-and-pagination/",
      },
    ]),
  ],
});

// src/routes/learn/dashboard-app/adding-search-and-pagination/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { AddingSearchAndPaginationContent } from "~/components/learn/dashboardApp/addingSearchAndPaginationContent/addingSearchAndPaginationContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <AddingSearchAndPaginationContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 10: Adding Search and Pagination",
  "Learn how to add search and pagination to your Qwik application. Implement search and pagination using useLocation() and searchParams.",
  "https://www.learn-qwik.com/metaChapter10.png",
  "https://www.learn-qwik.com/learn/dashboard-app/adding-search-and-pagination/",
);

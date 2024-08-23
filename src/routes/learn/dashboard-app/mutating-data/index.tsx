// src/routes/learn/dashboard-app/mutating-data/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { MutatingDataContent } from "~/components/learn/dashboardApp/mutatingDataContent/mutatingDataContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <MutatingDataContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 11: Mutating Data",
  "Learn how to mutate data in your PostgreSQL database using Qwik. Implement mutations using server$, routeActions$() and Form",
  "https://www.learn-qwik.com/metaChapter11.png",
  "https://www.learn-qwik.com/learn/dashboard-app/mutating-data/",
);

// src/routes/learn/dashboard-app/fetching-data/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { FetchingDataContent } from "~/components/learn/dashboardApp/fetchingDataContent/fetchingDataContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <FetchingDataContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 7: Fetching Data",
  "Learn how to fetch data in Qwik. Understand the basics of fetching data from a database, displaying it in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter7.png",
  "https://www.learn-qwik.com/learn/dashboard-app/fetching-data/",
);

// src/routes/learn/dashboard-app/fetching-data/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { FetchingDataContent } from "~/components/learn/dashboardApp/fetchingDataContent/fetchingDataContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <FetchingDataContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Chapter 7: Fetching Data",
  description:
    "Learn how to fetch data in Qwik. Understand the basics of fetching data from a database, displaying it in your Qwik application.",
  imageUrl: "https://www.learn-qwik.com/metaChapter7.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/fetching-data/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 7: Fetching Data",
        item: "https://www.learn-qwik.com/learn/dashboard-app/fetching-data/",
      },
    ]),
  ],
});

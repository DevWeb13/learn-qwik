// src/routes/learn/dashboard-app/mutating-data/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { MutatingDataContent } from "~/components/learn/dashboardApp/mutatingDataContent/mutatingDataContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <MutatingDataContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik routeAction$ Tutorial | Forms and Mutations",
  description:
    "Learn Qwik routeAction$ with forms and programmatic mutations. Create, update, and delete PostgreSQL data in a dashboard app.",
  imageUrl: "https://www.learn-qwik.com/metaChapter11.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/mutating-data/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 11: Mutating Data",
        item: "https://www.learn-qwik.com/learn/dashboard-app/mutating-data/",
      },
    ]),
  ],
});

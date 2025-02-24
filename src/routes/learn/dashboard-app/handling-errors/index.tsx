// src/routes/learn/dashboard-app/handling-errors/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { HandlingErrorsContent } from "~/components/learn/dashboardApp/handlingErrorsContent/handlingErrorsContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <HandlingErrorsContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 12: Handling Errors",
  "Learn how to handle errors in your Qwik application. Implement error handling using routeActions$() with Form or programmatically.",
  "https://www.learn-qwik.com/metaChapter12.png",
  "https://www.learn-qwik.com/learn/dashboard-app/handling-errors/",
);

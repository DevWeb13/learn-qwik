// src/routes/learn/dashboard-app/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import DashboardAppContent from "~/components/learn/dashboardApp/dashboardAppContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createBreadcrumbSchema,
  createCourseSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <DashboardAppContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Legacy Edition: Build a Full-Stack Dashboard App",
  description:
    "Welcome to the Learn Qwik legacy course. Start this free interactive course by understanding the main features of Qwik and begin building a full-stack web application.",
  imageUrl: "https://www.learn-qwik.com/metaDashboard.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
    ]),
    createCourseSchema({
      name: "Learn Qwik Legacy Edition",
      description:
        "A practical Qwik course focused on building a full-stack dashboard application with the legacy Learn Qwik path.",
      url: "https://www.learn-qwik.com/learn/dashboard-app/",
      providerName: "Learn Qwik",
    }),
  ],
});

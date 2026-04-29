// src/routes/learn/dashboard-app-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { DashboardAppContent2026 } from "~/components/learn/dashboardApp2026/dashboardAppContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createBreadcrumbSchema,
  createCourseSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <DashboardAppContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik Tutorial 2026 | Build a Full-Stack Dashboard App",
  description:
    "Follow the 2026 Qwik tutorial and build a modern full-stack dashboard app with Qwik, Qwik City, Supabase, Tailwind, auth, and deployment.",
  imageUrl: "https://www.learn-qwik.com/metaDashboard2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
    ]),
    createCourseSchema({
      name: "Learn Qwik 2026 Edition",
      description:
        "A practical Qwik course focused on building a modern full-stack dashboard application with Qwik, Qwik City, and Supabase.",
      url: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      providerName: "Learn Qwik",
    }),
  ],
});

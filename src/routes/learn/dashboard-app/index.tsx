// src/routes/learn/dashboard-app/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import DashboardAppContent from "~/components/learn/dashboardApp/dashboardAppContent";

export default component$(() => {
  return <DashboardAppContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Introduction",
  meta: [
    {
      name: "description",
      content:
        "Welcome to the Qwik course! Start this free interactive course by understanding the main features of Qwik and begin building a full-stack web application.",
    },
    {
      property: "og:title",
      content: "Learn Qwik | Introduction",
    },
    {
      property: "og:description",
      content:
        "Dive into Qwik with our free interactive course. Learn to build a full-stack web application by covering essential web development concepts and techniques.",
    },
    {
      property: "og:image",
      content: "https://www.learn-qwik.com/metaDashboard.png",
    },
    {
      property: "og:type",
      content: "article",
    },
    {
      property: "og:url",
      content: "https://www.learn-qwik.com/learn/dashboard-app/",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Learn Qwik | Introduction",
    },
    {
      name: "twitter:description",
      content:
        "Join our free interactive Qwik course to learn the fundamentals of building a full-stack web application. Explore the essentials of web development with Qwik.",
    },
    {
      name: "twitter:image",
      content: "https://www.learn-qwik.com/metaDashboard.png",
    },
  ],
};

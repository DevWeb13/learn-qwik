// src/routes/learn/dashboard-app/setting-up-your-database/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SettingUpYourDatabaseContent } from "~/components/learn/dashboardApp/settingUpYourDatabaseContent/settingUpYourDatabaseContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <SettingUpYourDatabaseContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik Database Setup | PostgreSQL Dashboard Tutorial",
  description:
    "Set up a PostgreSQL database for a Qwik dashboard app. Create tables, seed data, connect your app, and prepare server-side queries.",
  imageUrl: "https://www.learn-qwik.com/metaChapter6.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app/setting-up-your-database/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "Legacy Edition: Build a Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app/",
      },
      {
        name: "Chapter 6: Setting Up Your Database",
        item: "https://www.learn-qwik.com/learn/dashboard-app/setting-up-your-database/",
      },
    ]),
  ],
});

// src/routes/learn/dashboard-app/setting-up-your-database/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SettingUpYourDatabaseContent2026 } from "~/components/learn/dashboardApp2026/settingUpYourDatabaseContent2026/settingUpYourDatabaseContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <SettingUpYourDatabaseContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 6: Setting Up Your Database",
  "Learn how to set up a database in Qwik. Understand the basics of connecting to a database, creating tables, and querying data in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter6.png",
  "https://www.learn-qwik.com/learn/dashboard-app/setting-up-your-database-2026/",
);

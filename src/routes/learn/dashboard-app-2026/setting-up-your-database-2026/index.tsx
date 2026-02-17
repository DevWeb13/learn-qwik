// src/routes/learn/dashboard-app/setting-up-your-database/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { SettingUpYourDatabaseContent } from "~/components/learn/dashboardApp/settingUpYourDatabaseContent/settingUpYourDatabaseContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <SettingUpYourDatabaseContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 6: Setting Up Your Database",
  "Learn how to set up a database in Qwik. Understand the basics of connecting to a database, creating tables, and querying data in your Qwik application.",
  "https://www.learn-qwik.com/metaChapter6.png",
  "https://www.learn-qwik.com/learn/dashboard-app/setting-up-your-database/",
);

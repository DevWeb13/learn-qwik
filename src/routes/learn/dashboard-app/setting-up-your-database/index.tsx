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
  title: "Chapter 6: Setting Up Your Database",
  description:
    "Learn how to set up a database in Qwik. Understand the basics of connecting to a database, creating tables, and querying data in your Qwik application.",
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

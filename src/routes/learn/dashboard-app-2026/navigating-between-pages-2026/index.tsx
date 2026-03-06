// src/routes/learn/dashboard-app/navigating-between-pages/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { NavigatingBetweenPagesContent2026 } from "~/components/learn/dashboardApp2026/navigatingBetweenPagesContent2026/navigatingBetweenPagesContent2026";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <NavigatingBetweenPagesContent2026 />;
});

export const head: DocumentHead = createDocumentHead(
  "Chapter 5: Navigating Between Pages 2026",
  "Learn how to navigate between pages in Qwik City with Link, useNavigate, and useLocation. Improve dashboard navigation, active links, and URL consistency.",
  "https://www.learn-qwik.com/meta-chapter-5-2026.png",
  "https://www.learn-qwik.com/learn/dashboard-app-2026/navigating-between-pages-2026/",
);

// src/routes/blog/open-terminal-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OpenTerminalUbuntuArticle } from "~/components/blog/articles/open-terminal-ubuntu";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <OpenTerminalUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Open the Terminal on Ubuntu (2025)",
  description:
    "Learn how to open and use the Terminal on Ubuntu. The essential first step to install Node.js and start building your Qwik project.",
  imageUrl: "https://www.learn-qwik.com/metaOpenTerminalUbuntu.png",
  url: "https://www.learn-qwik.com/blog/open-terminal-ubuntu/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Open the Terminal on Ubuntu (2025)",
        item: "https://www.learn-qwik.com/blog/open-terminal-ubuntu/",
      },
    ]),
  ],
});

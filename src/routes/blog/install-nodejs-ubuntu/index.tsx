// src/routes/blog/install-nodejs-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { InstallNodeJsUbuntuArticle } from "~/components/blog/articles/install-nodejs-ubuntu";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <InstallNodeJsUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Install Node.js and NPM on Ubuntu (2025)",
  description:
    "Step-by-step instructions to install Node.js and npm on Ubuntu. Includes commands, explanations, and source links.",
  imageUrl: "https://www.learn-qwik.com/metaInstallNodeUbuntu.png",
  url: "https://www.learn-qwik.com/blog/install-nodejs-ubuntu/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Install Node.js and NPM on Ubuntu (2025)",
        item: "https://www.learn-qwik.com/blog/install-nodejs-ubuntu/",
      },
    ]),
  ],
});

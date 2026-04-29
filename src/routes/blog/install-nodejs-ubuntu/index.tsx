// src/routes/blog/install-nodejs-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { InstallNodeJsUbuntuArticle } from "~/components/blog/articles/install-nodejs-ubuntu";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <InstallNodeJsUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Install Node.js and npm on Ubuntu | Step-by-Step",
  description:
    "Install Node.js and npm on Ubuntu from the terminal. Follow clear commands, check your versions, and prepare your machine for a Qwik project.",
  imageUrl: "https://www.learn-qwik.com/metaInstallNodeUbuntu.png",
  url: "https://www.learn-qwik.com/blog/install-nodejs-ubuntu/",
  type: "article",
  structuredData: [
    createArticleSchema({
      headline: "Install Node.js and npm on Ubuntu",
      description:
        "Install Node.js and npm on Ubuntu from the terminal. Follow clear commands, check your versions, and prepare your machine for a Qwik project.",
      url: "https://www.learn-qwik.com/blog/install-nodejs-ubuntu/",
      imageUrl: "https://www.learn-qwik.com/metaInstallNodeUbuntu.png",
      publishedTime: "2025-04-01",
      modifiedTime: "2026-04-25",
      authorName: "Learn Qwik",
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Install Node.js and npm on Ubuntu",
        item: "https://www.learn-qwik.com/blog/install-nodejs-ubuntu/",
      },
    ]),
  ],
});

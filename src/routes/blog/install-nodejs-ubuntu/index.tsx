// src/routes/blog/install-nodejs-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { InstallNodeJsUbuntuArticle } from "~/components/blog/articles/install-nodejs-ubuntu";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <InstallNodeJsUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead(
  "Learn Qwik From A to Z (2025) — Install Node.js and NPM on Ubuntu (1/∞)",
  "Step-by-step instructions to install Node.js and npm on Ubuntu. Includes commands, explanations, and source links.",
  "https://www.learn-qwik.com/metaInstallNodeUbuntu.png", // 👉 image SEO à ajouter
  "https://www.learn-qwik.com/blog/install-nodejs-ubuntu/",
);

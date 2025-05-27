// src/routes/blog/install-vscode-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { InstallVSCodeUbuntuArticle } from "~/components/blog/articles/install-vscode-ubuntu";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <InstallVSCodeUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead(
  "From A to Z (2025) | Install Visual Studio Code on Ubuntu (2/∞)",
  "Complete step-by-step guide to install Visual Studio Code on Ubuntu using the official repository. Safe and easy method for beginners.",
  "https://www.learn-qwik.com/metaInstallVSCodeUbuntu.png", // 👉 image SEO à ajouter
  "https://www.learn-qwik.com/blog/install-vscode-ubuntu/",
);

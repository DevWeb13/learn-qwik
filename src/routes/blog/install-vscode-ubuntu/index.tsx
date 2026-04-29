// src/routes/blog/install-vscode-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { InstallVSCodeUbuntuArticle } from "~/components/blog/articles/install-vscode-ubuntu";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <InstallVSCodeUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Install VS Code on Ubuntu with APT | Step-by-Step",
  description:
    "Install Visual Studio Code on Ubuntu using the official Microsoft APT repository. Follow the terminal commands step by step and launch VS Code safely.",
  imageUrl: "https://www.learn-qwik.com/metaInstallVSCodeUbuntu.png",
  url: "https://www.learn-qwik.com/blog/install-vscode-ubuntu/",
  type: "article",
  structuredData: [
    createArticleSchema({
      headline: "Install VS Code on Ubuntu with APT",
      description:
        "Install Visual Studio Code on Ubuntu using the official Microsoft APT repository. Follow the terminal commands step by step and launch VS Code safely.",
      url: "https://www.learn-qwik.com/blog/install-vscode-ubuntu/",
      imageUrl: "https://www.learn-qwik.com/metaInstallVSCodeUbuntu.png",
      publishedTime: "2025-05-01",
      modifiedTime: "2026-04-25",
      authorName: "Learn Qwik",
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Install VS Code on Ubuntu with APT",
        item: "https://www.learn-qwik.com/blog/install-vscode-ubuntu/",
      },
    ]),
  ],
});

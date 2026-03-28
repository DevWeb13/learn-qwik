// src/routes/blog/install-vscode-ubuntu/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { InstallVSCodeUbuntuArticle } from "~/components/blog/articles/install-vscode-ubuntu";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <InstallVSCodeUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Install VS Code on Ubuntu (2025)",
  description:
    "Complete step-by-step guide to install Visual Studio Code on Ubuntu using the official repository. Safe and easy method for beginners.",
  imageUrl: "https://www.learn-qwik.com/metaInstallVSCodeUbuntu.png",
  url: "https://www.learn-qwik.com/blog/install-vscode-ubuntu/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Install VS Code on Ubuntu (2025)",
        item: "https://www.learn-qwik.com/blog/install-vscode-ubuntu/",
      },
    ]),
  ],
});

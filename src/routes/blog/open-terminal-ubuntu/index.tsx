import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { OpenTerminalUbuntuArticle } from "~/components/blog/articles/open-terminal-ubuntu";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <OpenTerminalUbuntuArticle />;
});

export const head: DocumentHead = createDocumentHead(
  "How to Open the Terminal on Ubuntu (2025)",
  "Learn how to open and use the Terminal on Ubuntu. The essential first step to install Node.js and start building your Qwik project.",
  "https://www.learn-qwik.com/metaOpenTerminalUbuntu.png", // 👉 (image SEO dédiée, à créer ou remplacer plus tard)
  "https://www.learn-qwik.com/blog/open-terminal-ubuntu/",
);

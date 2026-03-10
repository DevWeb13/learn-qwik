import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CreateQwikAppCliArticle } from "~/components/blog/articles/create-qwik-app-cli";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

export default component$(() => {
  return <CreateQwikAppCliArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Create a Qwik App with the CLI | From A to Z (2025) | Part 3",
  description:
    "Beginner-friendly step-by-step guide to creating your first Qwik app with the official CLI, using the terminal, installing dependencies, and opening the project in VS Code.",
  imageUrl: "https://www.learn-qwik.com/metaCreateQwikAppCli.png",
  url: "https://www.learn-qwik.com/blog/create-qwik-app-cli/",
  type: "article",
});

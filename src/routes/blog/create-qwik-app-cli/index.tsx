import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CreateQwikAppCliArticle } from "~/components/blog/articles/create-qwik-app-cli";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <CreateQwikAppCliArticle />;
});

export const head: DocumentHead = createDocumentHead(
  "Learn Qwik From A to Z (2025) — Create a Qwik App with the CLI (3/∞)",
  "Beginner-friendly guide to creating a new Qwik app using the official CLI. Step-by-step instructions using only the terminal.",
  "https://www.learn-qwik.com/metaCreateQwikAppCli.png", // 👉 image SEO à ajouter
  "https://www.learn-qwik.com/blog/create-qwik-app-cli/",
);

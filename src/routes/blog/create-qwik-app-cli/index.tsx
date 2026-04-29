import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { CreateQwikAppCliArticle } from "~/components/blog/articles/create-qwik-app-cli";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import {
  createArticleSchema,
  createBreadcrumbSchema,
} from "~/utils/structuredData";

export default component$(() => {
  return <CreateQwikAppCliArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "How to Install Qwik with the CLI | Create a Qwik App",
  description:
    "Install Qwik step by step with the official CLI. Create a new Qwik app, install dependencies, handle setup prompts, and open the project in VS Code.",
  imageUrl: "https://www.learn-qwik.com/metaCreateQwikAppCli.png",
  url: "https://www.learn-qwik.com/blog/create-qwik-app-cli/",
  type: "article",
  structuredData: [
    createArticleSchema({
      headline: "How to Install Qwik with the CLI",
      description:
        "Install Qwik step by step with the official CLI. Create a new Qwik app, install dependencies, handle setup prompts, and open the project in VS Code.",
      url: "https://www.learn-qwik.com/blog/create-qwik-app-cli/",
      imageUrl: "https://www.learn-qwik.com/metaCreateQwikAppCli.png",
      publishedTime: "2025-05-01",
      modifiedTime: "2026-04-25",
      authorName: "Learn Qwik",
    }),
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "How to Install Qwik with the CLI",
        item: "https://www.learn-qwik.com/blog/create-qwik-app-cli/",
      },
    ]),
  ],
});

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Qwik2BetaArticle } from "~/components/blog/articles/qwik-2-beta";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

export default component$(() => {
  return <Qwik2BetaArticle />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik 2.0 Beta: New APIs and Faster Builds",
  description:
    "Discover what’s new in Qwik 2.0 Beta: faster builds, new async APIs, cleaner internals, and the main changes from Qwik v1.",
  imageUrl: "https://www.learn-qwik.com/metaQwik2Beta.png",
  url: "https://www.learn-qwik.com/blog/qwik-2-beta/",
  type: "article",
});

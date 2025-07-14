import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Qwik2BetaArticle } from "~/components/blog/articles/qwik-2-beta";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <Qwik2BetaArticle />;
});

export const head: DocumentHead = createDocumentHead(
  "(2025) | Qwik 2.0 Beta is here – New APIs, Faster Builds, Better Dev Experience",
  "Discover everything about Qwik 2.0 Beta: core rewrite, blazing-fast builds, new async APIs, and improved maintainability. See what’s new and how to migrate from v1 to v2.",
  "https://www.learn-qwik.com/metaQwik2Beta.png",
  "https://www.learn-qwik.com/blog/qwik-2-beta/",
);

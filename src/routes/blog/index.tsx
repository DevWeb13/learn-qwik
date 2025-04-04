// src/routes/blog/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BlogContent } from "~/components/blog/blogContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <BlogContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Blog",
  "Browse the latest Qwik framework releases directly from GitHub. Stay informed with all updates, fixes, and performance improvements.",
  "https://www.learn-qwik.com/metaBlog.png",
  "https://www.learn-qwik.com/blog/",
);

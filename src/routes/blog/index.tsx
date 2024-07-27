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
  "The last news about Qwik and the web development world.",
  "https://www.learn-qwik.com/metaBlog.png",
  "https://www.learn-qwik.com/blog/",
);

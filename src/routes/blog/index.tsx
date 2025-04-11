// src/routes/blog/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BlogContent } from "~/components/blog/blogContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <BlogContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Learn Qwik Blog",
  "Read expert articles and insights on Qwik. Learn how to build faster, more sustainable apps with less JavaScript.",
  "https://www.learn-qwik.com/metaBlog.png",
  "https://www.learn-qwik.com/blog/",
);

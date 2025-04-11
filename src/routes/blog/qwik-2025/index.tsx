// src/routes/blog/qwik-2025/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Qwik2025Article } from "~/components/blog/articles/qwik2025";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <Qwik2025Article />;
});

export const head: DocumentHead = createDocumentHead(
  "Qwik in 2025: Why It’s the Future of Web Development",
  "Qwik is revolutionizing frontend development in 2025 with resumability, instant performance, and sustainability. Learn why it’s the framework of the future.",
  "https://www.learn-qwik.com/metaQwik2025.png",
  "https://www.learn-qwik.com/blog/qwik-2025/",
);

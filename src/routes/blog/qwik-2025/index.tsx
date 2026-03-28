// src/routes/blog/qwik-2025/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Qwik2025Article } from "~/components/blog/articles/qwik2025";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <Qwik2025Article />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik in 2025: Why It’s the Future of Web Development",
  description:
    "Qwik is revolutionizing frontend development in 2025 with resumability, instant performance, and sustainability. Learn why it’s the framework of the future.",
  imageUrl: "https://www.learn-qwik.com/metaQwik2025.png",
  url: "https://www.learn-qwik.com/blog/qwik-2025/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Qwik in 2025: Why It’s the Future of Web Development",
        item: "https://www.learn-qwik.com/blog/qwik-2025/",
      },
    ]),
  ],
});

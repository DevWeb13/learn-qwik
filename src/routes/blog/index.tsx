// src/routes/blog/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { BlogContent } from "~/components/blog/blogContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <BlogContent />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik Blog: Tutorials, Security News and Practical Guides",
  description:
    "Explore the Learn Qwik blog: Qwik tutorials, security advisories, release coverage, framework comparisons, and practical guides for modern web development.",
  imageUrl: "https://www.learn-qwik.com/metaBlog.png",
  url: "https://www.learn-qwik.com/blog/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
    ]),
  ],
});

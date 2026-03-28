// src/routes/blog/qwik-1-19/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { Qwik119Article } from "~/components/blog/articles/qwik-1-19";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <Qwik119Article />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik 1.19.0: A Discreet but Strategic Update (2026)",
  description:
    "Qwik 1.19.0 does not try to impress. This release refines the engine, fixes subtle behaviors, and strengthens application reliability in production.",
  imageUrl: "https://www.learn-qwik.com/metaQwik119.png",
  url: "https://www.learn-qwik.com/blog/qwik-1-19/",
  type: "article",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      { name: "Blog", item: "https://www.learn-qwik.com/blog/" },
      {
        name: "Qwik 1.19.0: A Discreet but Strategic Update (2026)",
        item: "https://www.learn-qwik.com/blog/qwik-1-19/",
      },
    ]),
  ],
});

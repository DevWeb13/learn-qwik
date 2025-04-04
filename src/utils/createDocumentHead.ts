import type { DocumentHead } from "@builder.io/qwik-city";

export const createDocumentHead = (
  title: string,
  description: string,
  imageUrl: string,
  url: string,
): DocumentHead => {
  return {
    title: "Learn Qwik | " + title,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        property: "og:title",
        content: "Learn Qwik | " + title,
      },
      {
        property: "og:description",
        content: description,
      },
      {
        property: "og:image",
        content: imageUrl,
      },
      {
        property: "og:type",
        content: "article",
      },
      {
        property: "og:url",
        content: url,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Learn Qwik | " + title,
      },
      {
        name: "twitter:description",
        content: description,
      },
      {
        name: "twitter:image",
        content: imageUrl,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: url,
      },
    ],    
  };
};

import type { DocumentHead } from "@builder.io/qwik-city";

interface CreateDocumentHead2026Props {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  type?: "website" | "article";
}

export const createDocumentHead2026 = ({
  title,
  description,
  imageUrl,
  url,
  type = "article",
}: CreateDocumentHead2026Props): DocumentHead => {
  const fullTitle = `Learn Qwik | ${title}`;

  return {
    title: fullTitle,
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "author",
        content: "LaReponseDev",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: fullTitle,
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
        content: type,
      },
      {
        property: "og:url",
        content: url,
      },
      {
        property: "og:site_name",
        content: "Learn Qwik",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: fullTitle,
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
  };
};

// src/utils/createDocumentHead2026.ts
import type { DocumentHead } from "@builder.io/qwik-city";

interface JsonLdScript {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
}

interface CreateDocumentHead2026Props {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  imageHeight?: number;
  imageWidth?: number;
  url: string;
  type?: "website" | "article";
  robots?: string;
  structuredData?: JsonLdScript[];
  siteName?: string;
}

export const createDocumentHead2026 = ({
  title,
  description,
  imageUrl,
  imageAlt,
  imageHeight,
  imageWidth,
  url,
  type = "article",
  robots = "max-image-preview:large",
  structuredData = [],
  siteName = "Learn Qwik",
}: CreateDocumentHead2026Props): DocumentHead => {
  const urlObject = new URL(url);

  const hasFileExtension = /\.[a-z0-9]+$/i.test(urlObject.pathname);

  if (!hasFileExtension && !urlObject.pathname.endsWith("/")) {
    urlObject.pathname = `${urlObject.pathname}/`;
  }

  const normalizedUrl = urlObject.toString();

  const isHome =
    normalizedUrl === "https://www.learn-qwik.com/" ||
    normalizedUrl === "https://learn-qwik.com/";

  const fullTitle = isHome ? title : `${title} | ${siteName}`;
  const resolvedImageAlt = imageAlt ?? fullTitle;

  return {
    title: fullTitle,
    links: [
      {
        rel: "canonical",
        href: normalizedUrl,
      },
    ],
    meta: [
      {
        name: "description",
        content: description,
      },
      {
        name: "robots",
        content: robots,
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
      ...(imageWidth
        ? [
            {
              property: "og:image:width",
              content: imageWidth.toString(),
            },
          ]
        : []),
      ...(imageHeight
        ? [
            {
              property: "og:image:height",
              content: imageHeight.toString(),
            },
          ]
        : []),
      {
        property: "og:image:alt",
        content: resolvedImageAlt,
      },
      {
        property: "og:type",
        content: type,
      },
      {
        property: "og:url",
        content: normalizedUrl,
      },
      {
        property: "og:site_name",
        content: siteName,
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
      {
        name: "twitter:image:alt",
        content: resolvedImageAlt,
      },
    ],
    scripts: structuredData.map((item) => ({
      props: {
        type: "application/ld+json",
      },
      script: JSON.stringify(item),
    })),
  };
};

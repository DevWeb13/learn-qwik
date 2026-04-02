// src/routes/releases/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ReleasesContent } from "~/components/releases/releasesContent";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <ReleasesContent />;
});

export const head = ({ url }: { url: URL }): DocumentHead => {
  const rawPage = Number.parseInt(url.searchParams.get("page") || "1", 10);
  const page = Number.isFinite(rawPage) && rawPage > 1 ? rawPage : 1;

  const canonicalUrl =
    page === 1
      ? "https://www.learn-qwik.com/releases/"
      : `https://www.learn-qwik.com/releases/?page=${page}`;

  const title = page === 1 ? "Qwik Releases" : `Qwik Releases | Page ${page}`;

  const description =
    page === 1
      ? "Browse the latest Qwik framework releases directly from GitHub. Stay informed with updates, fixes, and performance improvements."
      : `Browse page ${page} of the latest Qwik framework releases. Stay informed with updates, fixes, and performance improvements.`;

  return createDocumentHead2026({
    title,
    description,
    imageUrl: "https://www.learn-qwik.com/metaReleases.png",
    url: canonicalUrl,
    type: "website",
    robots: page === 1 ? "max-image-preview:large" : "noindex, follow",
    structuredData:
      page === 1
        ? [
            createBreadcrumbSchema([
              { name: "Home", item: "https://www.learn-qwik.com/" },
              {
                name: "Releases",
                item: "https://www.learn-qwik.com/releases/",
              },
            ]),
          ]
        : [],
  });
};

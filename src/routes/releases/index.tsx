// src/routes/releases/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ReleasesContent } from "~/components/releases/releasesContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <ReleasesContent />;
});

export const head = ({ url }: { url: URL }): DocumentHead => {
  const pageParam = url.searchParams.get("page");
  const page = pageParam ? parseInt(pageParam) : 1;

  const title = page > 1 ? `Releases – Page ${page}` : "Releases";
  const description =
    page > 1
      ? `Browse page ${page} of the latest Qwik framework releases. Stay informed with updates, fixes, and improvements.`
      : "Browse the latest Qwik framework releases directly from GitHub. Stay informed with all updates, fixes, and performance improvements.";

  const basePath = "https://www.learn-qwik.com/releases/";

  const links = [];

  // Canonical
  links.push({
    tag: "link",
    rel: "canonical",
    href: page === 1 ? basePath : `${basePath}?page=${page}`,
  });

  return createDocumentHead(
    title,
    description,
    "https://www.learn-qwik.com/metaReleases.png",
    url.href,
  );
};

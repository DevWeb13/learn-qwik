// src/routes/releases/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { ReleasesContent } from "~/components/releases/releasesContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <ReleasesContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Releases",
  "Browse the latest Qwik framework releases directly from GitHub. Stay informed with all updates, fixes, and performance improvements.",
  "https://www.learn-qwik.com/metaReleases.png",
  "https://www.learn-qwik.com/releases/",
);

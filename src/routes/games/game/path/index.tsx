// src/routes/games/game/path/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { QwikPathContent } from "~/components/games/game/qwikpath/qwikpathContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <QwikPathContent />;
});

export const head: DocumentHead = createDocumentHead(
  "QwikPath | Logic Puzzle Made with Qwik",
  "Play QwikPath, a logic puzzle where you connect numbers in order to fill the grid. Built with Qwik. Fast, fun, and minimal JavaScript.",
  "https://www.learn-qwik.com/metaQwikPath.png",
  "https://www.learn-qwik.com/games/game/path/",
);

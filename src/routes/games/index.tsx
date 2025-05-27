// src/routes/games/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { GamesContent } from "~/components/games/gamesContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <GamesContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Play Daily Logic Games Built with Qwik – Learn Qwik",
  "Discover fun and fast daily games made with Qwik. Train your brain, challenge your friends, and explore what Qwik can do through addictive logic puzzles.",
  "https://www.learn-qwik.com/metaGames.png",
  "https://www.learn-qwik.com/games/",
);

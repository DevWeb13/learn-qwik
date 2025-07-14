// src/routes/games/game/path/rules/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { QwikPathRulesContent } from "~/components/games/game/qwikpath/qwikPathRulesContent";
import { createDocumentHead } from "~/utils/createDocumentHead";

export default component$(() => {
  return <QwikPathRulesContent />;
});

export const head: DocumentHead = createDocumentHead(
  "QwikPath Rules | How to Play the Daily Logic Puzzle",
  "Learn how to play QwikPath: rules, gameplay, saving, and leaderboard system. Connect numbers in order and fill every square. Fast and fun with Qwik.",
  "https://www.learn-qwik.com/metaQwikPath.png",
  "https://www.learn-qwik.com/games/game/path/rules/",
);

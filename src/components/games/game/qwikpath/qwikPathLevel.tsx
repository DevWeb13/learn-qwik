// src/components/games/game/qwikpath/qwikPathLevel.tsx

import { component$ } from "@builder.io/qwik";
import { BackButton } from "~/components/UI/backButton/backButton";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";

import {
  useLevel,
  useLevelLeaderboard,
  useSavedProgress,
} from "~/routes/games/game/path/[level]";
import { useCompletedLevels } from "~/routes/games/game/path/layout";
import { useProfile } from "~/routes/layout";
import type {
  QwikPathClue,
  QwikPathLevelData,
} from "~/types/games/qwikpath.types";
import { formatTime } from "~/utils/formatTime";
import { isSubscriptionActive } from "~/utils/subscription";
import { GameGrid } from "./gameGrid";
import { ResolvedGrid } from "./resolvedGrid";

type QwikPathLevelProps = {
  level: string;
};

export const QwikPathLevel = component$<QwikPathLevelProps>(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  const level = useLevel();
  const levelLeaderboard = useLevelLeaderboard();
  const completedLevels = useCompletedLevels();
  const completed = completedLevels.value?.find(
    (l) => l.level_id === level.value.id,
  );
  const savedProgress = useSavedProgress();

  const completedPath = completed?.completed_path as
    | { x: number; y: number }[]
    | undefined;

  if ("errorMessage" in level.value || !level.value.id) {
    return (
      <div class="text-center text-red-500">
        {level.value.errorMessage || "Level ID not found"}
      </div>
    );
  }

  const levelData: QwikPathLevelData = {
    gridSize: level.value.grid_size,
    clues: level.value.clues as QwikPathClue[],
  };

  function renderGameContent() {
    if (completedPath) {
      console.log("completedPath", completedPath);
      return (
        <>
          <div class="w-full rounded-lg border border-green-200 bg-green-50 p-6 text-center text-green-700 shadow-sm">
            <p class="text-lg font-semibold">
              ✅ You have already completed this level!
            </p>
            <p class="mt-2 text-sm">
              Time:{" "}
              <span class="font-mono">{formatTime(completed!.time_taken)}</span>
            </p>
          </div>

          <ResolvedGrid
            gridSize={levelData.gridSize}
            clues={levelData.clues}
            path={completedPath}
          />
        </>
      );
    }

    if (savedProgress.value) {
      console.log("savedProgress", savedProgress.value);
      const progress = {
        elapsed_seconds: savedProgress.value.elapsed_seconds,
        last_path: String(savedProgress.value.last_path),
        last_history: String(savedProgress.value.last_history),
      };
      return (
        <GameGrid
          levelData={levelData}
          levelId={level.value.id as string}
          savedProgress={progress}
        />
      );
    }

    return (
      console.log("levelData", levelData),
      (<GameGrid levelData={levelData} levelId={level.value.id as string} />)
    );
  }

  return (
    <main class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-4 px-4 md:gap-6">
        <h1 class="text-center text-4xl font-bold md:text-6xl">
          <span class="text-blue-500">Qwik</span> Path – Level{" "}
          {level.value.level_number}
        </h1>
        <p class="max-w-xl text-center text-gray-700">
          Connect the numbers in order and fill every cell of the grid to win.
        </p>
      </header>

      <div class="relative flex w-full max-w-screen-xl flex-col gap-6 px-4 md:flex-row">
        <section class="flex w-full flex-col gap-6 md:max-w-[calc(100%-300px)]">
          {renderGameContent()}

          <section class="mt-8 w-full max-w-screen-xl px-4 md:px-0">
            <h2 class="mb-6 text-center text-2xl font-bold text-gray-900 md:text-left">
              Top Players – Level {level.value.level_number}
            </h2>
            <div class="overflow-x-auto rounded-lg bg-gray-50 shadow-sm">
              <table class="w-full table-auto text-left text-sm text-gray-700">
                <thead class="border-b bg-white text-xs uppercase text-gray-500">
                  <tr>
                    <th class="px-4 py-3">Rank</th>
                    <th class="px-4 py-3">Player</th>
                    <th class="px-4 py-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {levelLeaderboard.value?.map((player) => {
                    const isCurrentUser = player.user_id === profile.value?.id;
                    const userNotInTop = isCurrentUser && player.rank > 5;

                    return (
                      <>
                        {/* Séparateur visuel si le joueur est hors top 5 */}
                        {userNotInTop && (
                          <tr key="separator" class="border-t">
                            <td
                              colSpan={3}
                              class="px-4 py-2 text-xs text-gray-400"
                            >
                              Your rank
                            </td>
                          </tr>
                        )}

                        <tr
                          key={player.user_id}
                          class={`border-t hover:bg-gray-100 ${
                            isCurrentUser ? "bg-yellow-50 font-bold" : ""
                          }`}
                        >
                          <td class="px-4 py-2 font-mono">#{player.rank}</td>
                          <td class="px-4 py-2">{player.player}</td>
                          <td class="px-4 py-2">
                            {formatTime(player.time_taken)}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </section>

        <BackButton href="/games/game/path/" label="Back to Levels" />

        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </main>
  );
});

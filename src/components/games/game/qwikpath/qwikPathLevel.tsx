import { component$, useStylesScoped$ } from "@builder.io/qwik";
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

export const QwikPathLevel = component$(() => {
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

  useStylesScoped$(`
    .leaderboard-table {
      background: #1f1f1f;
      color: #e0e0e0;
      font-family: 'Courier New', Courier, monospace;
      border-radius: 12px;
      overflow: auto;
      width: 100%;
      max-width: 100%;
    }

    .leaderboard-table thead {
      background-color: #292929;
      text-transform: uppercase;
      font-size: 0.75rem;
      color: #888;
    }

    .leaderboard-table thead th {
      padding: 12px 16px;
      white-space: nowrap;
    }

    .leaderboard-table tbody tr {
      transition: background 0.2s;
    }

    .leaderboard-table tbody tr:hover {
      background: #333;
    }

    .leaderboard-table td {
      padding: 12px 16px;
      border-bottom: 1px solid #333;
      white-space: nowrap;
    }

    .leaderboard-highlight {
      background: #3b0764;
      color: #fff;
    }

    .leaderboard-medal {
      font-size: 1.2rem;
    }
  `);

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
      const progress = {
        elapsed_seconds: savedProgress.value.elapsed_seconds,
        last_path: String(savedProgress.value.last_path),
        last_history: String(savedProgress.value.last_history),
        back_count: Number(savedProgress.value.back_count),
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
      <GameGrid levelData={levelData} levelId={level.value.id as string} />
    );
  }

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-4 px-4 md:gap-6">
        <h1 class="text-center text-4xl font-bold md:text-6xl">
          <span class="text-blue-500">Qwik</span> Path | Level{" "}
          {level.value.level_number}
        </h1>
        <p class="max-w-xl text-center text-gray-700">
          Connect the numbers in order and fill every cell of the grid to win.
        </p>
      </header>

      <main class="relative flex w-full max-w-screen-2xl flex-col justify-center gap-4 px-4 md:flex-row">
        <section class="flex w-full flex-col gap-6 md:max-w-[calc(100%-300px)]">
          <section class="w-full ">
            <h2 class="mb-6 text-center text-2xl font-bold text-gray-900 md:text-left">
              Top Players – Level {level.value.level_number}
            </h2>
            <div class="leaderboard-table shadow-sm">
              <table class="w-full min-w-[480px] table-auto text-left text-sm">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Time</th>
                    <th>Backs</th>
                  </tr>
                </thead>
                <tbody>
                  {levelLeaderboard.value?.map((player) => {
                    const isCurrentUser = player.user_id === profile.value?.id;
                    const userNotInTop = isCurrentUser && player.rank > 5;

                    const medal =
                      player.rank === 1
                        ? "🥇"
                        : player.rank === 2
                          ? "🥈"
                          : player.rank === 3
                            ? "🥉"
                            : `#${player.rank}`;

                    return (
                      <>
                        {userNotInTop && (
                          <tr key="separator">
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
                          class={
                            isCurrentUser
                              ? "leaderboard-highlight font-bold"
                              : ""
                          }
                        >
                          <td class="leaderboard-medal">{medal}</td>
                          <td>{player.player}</td>
                          <td>{formatTime(player.time_taken)}</td>
                          <td>{player.back_count}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          {renderGameContent()}
        </section>

        <BackButton href="/games/game/path/" label="Back to Levels" />

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});

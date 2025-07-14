// src/components/games/game/qwikpath/qwikPathLevel.tsx

import { component$, useStylesScoped$ } from "@builder.io/qwik";
import CompletedLevelsButtonImg from "~/assets/img/games/game/gamePath/completed-levels-button.png?jsx";
import PlayNextLevelImgButton from "~/assets/img/games/game/gamePath/play-next-level-button.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";

import { Link } from "@builder.io/qwik-city";
import QwikPathGraf from "~/assets/img/games/game/gamePath/qwik-path-graf.png?jsx";
import {
  useCompletedLevel,
  useLevel,
  useLevelLeaderboard,
  useSavedProgress,
  useTotalPlayersForLevel,
} from "~/routes/games/game/path/[level]";
import { useNextLevels } from "~/routes/games/game/path/layout";
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

  const savedProgress = useSavedProgress();

  const completed = useCompletedLevel();

  const totalPlayersForLevel = useTotalPlayersForLevel();

  const nextLevels = useNextLevels();

  const completedPath = completed.value?.completed_path as
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

  const is_publishable =
    level.value.published_at && new Date(level.value.published_at) < new Date();

  if ("errorMessage" in level.value || !level.value.id || !is_publishable) {
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
    if (completedPath && completed.value) {
      return (
        <>
          <div class="w-full rounded-lg border border-green-200 bg-green-50 p-6 text-center text-green-700 shadow-sm">
            <p class="text-lg font-semibold">
              ✅ You have already completed this level!
            </p>
            <p class="mt-2 text-sm">
              Time:{" "}
              <span class="font-mono">
                {formatTime(completed.value.time_taken)}
              </span>
            </p>
          </div>

          <ResolvedGrid
            gridSize={levelData.gridSize}
            clues={levelData.clues}
            path={completedPath}
          />
          {nextLevels.value.length > 0 ? (
            <div class="flex justify-center">
              <Link
                href={`/games/game/path/${nextLevels.value[0].level_number}`}
                class=" flex h-32 w-32  items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(255,0,255,0.9)] transition-transform duration-200 hover:scale-105"
              >
                <PlayNextLevelImgButton alt="Play Next Level" />
              </Link>
            </div>
          ) : (
            <div class="flex justify-center">
              <Link
                href="/games/game/path/completed/"
                class=" flex h-32 w-32  items-center justify-center rounded-full bg-gradient-to-br from-teal-800 via-green-300 to-emerald-800 shadow-[0_0_20px_rgba(255,0,255,0.9)] transition-transform duration-200 hover:scale-105"
              >
                <CompletedLevelsButtonImg alt="Completed Levels" />
              </Link>
            </div>
          )}
        </>
      );
    }

    if (savedProgress.value) {
      const progress = {
        elapsed_seconds: savedProgress.value.elapsed_seconds,
        last_path: String(savedProgress.value.last_path),
        last_history: String(savedProgress.value.last_history),
        back_count: Number(savedProgress.value.back_count),
        invalid_order: Boolean(savedProgress.value.invalid_order),
        invalid_last_path: Boolean(savedProgress.value.invalid_last_path),
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
    <>
      <header class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="sr-only">Qwik Path | Level {level.value.level_number}</h1>

        <QwikPathGraf class="h-[200px] w-[300px] object-cover md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px]" />

        <p class="text-center text-2xl font-bold md:text-4xl">
          Level {level.value.level_number}
        </p>

        <p class="max-w-xl text-center text-gray-700">
          Connect the numbers in order and fill every cell of the grid to win.
        </p>
      </header>

      <main class="relative flex w-full max-w-screen-xl flex-col justify-center gap-4 px-4 md:flex-row">
        <section class="flex w-full flex-col gap-6 md:max-w-[calc(100%-300px)]">
          <section class="w-full ">
            <div class=" flex items-center justify-between py-4">
              <h2 class="  text-left text-xl font-bold text-gray-900">
                Top Players
              </h2>
              <p class=" text-right text-base font-bold text-gray-500 ">
                {totalPlayersForLevel.value?.toLocaleString()} players in total
              </p>
            </div>
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
                  {levelLeaderboard.value &&
                  levelLeaderboard.value.length > 0 ? (
                    levelLeaderboard.value.map((player) => {
                      const isCurrentUser =
                        player.user_id === profile.value?.id;
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
                                colSpan={4}
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
                    })
                  ) : (
                    <tr>
                      <td
                        colSpan={4}
                        class="px-4 py-3 text-center text-sm text-gray-500"
                      >
                        No players have completed this level yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {renderGameContent()}
        </section>

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </>
  );
});

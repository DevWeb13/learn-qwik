import { $, component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { BackButton } from "~/components/UI/backButton/backButton";
import {
  useCompletedLevels,
  useLeaderboard,
  useNextLevels,
  useTotalPlayers,
} from "~/routes/games/game/path/layout";
import { useProfile } from "~/routes/layout";
import { formatTime } from "~/utils/formatTime";
import { isSubscriptionActive } from "~/utils/subscription";
import { LevelCard } from "./levelCard";

export const QwikPathContent = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);
  const nextLevels = useNextLevels();
  const showCompleted = useSignal(false);
  const completedLevels = useCompletedLevels();
  const totalPlayers = useTotalPlayers();

  const loadCompletedLevels = $(() => {
    completedLevels.submit();
    showCompleted.value = true;
  });

  const leaderboard = useLeaderboard();

  useStylesScoped$(`
    .levels_grid {
      gap: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }

    .leaderboard-table {
      background: #1f1f1f;
      color: #e0e0e0;
      font-family: 'Courier New', Courier, monospace;
      border-radius: 12px;
      overflow: auto;
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

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="max-w-[80%] text-center text-4xl font-semibold md:max-w-[100%] md:text-6xl">
          <span class="text-blue-500">Qwik</span> Path | Daily Logic Puzzle
        </h1>
        <p class="max-w-xl text-center text-gray-900">
          Connect numbers in order and fill every cell. A new puzzle every day,
          powered by Qwik.
        </p>
      </header>

      <main class="relative flex w-full max-w-screen-xl flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-8 md:max-w-[calc(100%-300px)]">
          <section class="w-full">
            <div class=" flex items-center justify-between py-4">
              <h2 class=" text-center text-2xl font-bold text-gray-900 ">
                Top Players
              </h2>
              <p class=" text-center text-xl font-bold text-gray-500 ">
                {totalPlayers.value?.toLocaleString()} players in total
              </p>
            </div>
            <div class="leaderboard-table w-full overflow-x-auto shadow-sm">
              <table class="w-full min-w-[480px] table-auto text-left text-sm">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Levels</th>
                    <th>Total Time</th>
                    <th>Backs</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.value?.map((player) => {
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
                          <td>{player.levels}</td>
                          <td>{formatTime(player.total_time)}</td>
                          <td>{player.total_back_count}</td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>

          <section class="w-full">
            <h2 class="mb-6 text-center text-2xl font-bold text-gray-900 md:text-left">
              Available Levels
            </h2>
            <div class="levels_grid">
              {nextLevels.value.map((level) => (
                <LevelCard
                  key={level.id}
                  levelNumber={level.level_number}
                  difficulty={level.difficulty}
                  href={`/games/game/path/${level.level_number}`}
                  completed={false}
                  disabled={false}
                />
              ))}
            </div>
          </section>

          <section class="w-full">
            <h2 class="mb-6 text-center text-2xl font-bold text-gray-900 md:text-left">
              Completed Levels
            </h2>

            {showCompleted.value === false && (
              <button
                class="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                onClick$={loadCompletedLevels}
              >
                Show Completed Levels
              </button>
            )}

            {showCompleted.value === true && (
              <div class="levels_grid">
                {completedLevels.value?.data.map((level) => (
                  <LevelCard
                    key={level.level_id}
                    levelNumber={level.level_number}
                    difficulty={level.difficulty}
                    href={`/games/game/path/${level.level_number}`}
                    completed={true}
                    timeTaken={formatTime(level.time_taken)}
                  />
                ))}
              </div>
            )}
          </section>
        </div>

        <BackButton href="/games/" label="Back to Games" />

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});

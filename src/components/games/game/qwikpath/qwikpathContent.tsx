import { component$, useStylesScoped$ } from "@builder.io/qwik";

import QwikPathGraf from "~/assets/img/games/game/gamePath/qwik-path-graf.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import {
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
  const totalPlayers = useTotalPlayers();
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
    <>
      <header class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="sr-only">Qwik Path | Daily Logic Puzzle</h1>

        <QwikPathGraf class="h-[200px] w-[300px] object-cover md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px]" />

        <p
          class="max-w-xl bg-gradient-to-r from-fuchsia-500 via-pink-500 to-indigo-400 bg-clip-text 
         text-center  
         text-3xl font-extrabold uppercase tracking-widest 
         text-transparent drop-shadow-[0_1px_2px_rgba(255,0,255,0.6)] md:text-4xl"
        >
          Daily Logic Puzzle
        </p>

        <p class="max-w-xl text-center font-mono text-xl text-pink-500">
          Connect numbers in order and fill every cell. A new puzzle every day,
          powered by Qwik.
        </p>
      </header>

      <main class="relative flex w-full max-w-screen-xl flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-8 md:max-w-[calc(100%-300px)]">
          <section class="w-full">
            <div class=" flex items-center justify-between gap-8 py-4">
              <h2
                class="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-indigo-400 bg-clip-text 
            text-2xl 
           font-extrabold uppercase tracking-widest text-transparent 
           drop-shadow-[0_1px_2px_rgba(255,0,255,0.6)]"
              >
                Top Players
              </h2>
              <p class="font-mono text-lg font-bold tracking-wide text-pink-500">
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

          <section class="flex w-full flex-col gap-4">
            <h2
              class="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-indigo-400 bg-clip-text 
           text-2xl 
           font-extrabold uppercase tracking-widest text-transparent 
           drop-shadow-[0_1px_2px_rgba(255,0,255,0.6)]"
            >
              Available Levels
            </h2>

            {nextLevels.value.length === 0 ? (
              <p class="text-center text-gray-500">
                No more levels available. Wait for the next one!
              </p>
            ) : (
              ["easy", "medium", "hard"].map((difficulty) => {
                const levelsByDifficulty = nextLevels.value.filter(
                  (level) => level.difficulty === difficulty,
                );

                if (levelsByDifficulty.length === 0) return null;

                return (
                  <div key={difficulty} class="mb-8">
                    <h3
                      class="mb-4 text-center text-lg font-bold capitalize 
         text-sky-600 md:text-left"
                    >
                      {difficulty}
                    </h3>
                    <div class="levels_grid">
                      {levelsByDifficulty.map((level) => (
                        <LevelCard
                          key={level.id}
                          levelNumber={level.level_number}
                          difficulty={level.difficulty}
                          href={`/games/game/path/${level.level_number}`}
                          completed={false}
                          published_at={new Date(level.published_at)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })
            )}
          </section>
        </div>

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </>
  );
});

// src/components/games/game/qwikpath/qwikPathContent.tsx

import { component$, useStylesScoped$ } from "@builder.io/qwik";
import MetaQwikPathLevelOne from "~/assets/img/games/game/gamePath/metaQwikPathLevelOne.png?jsx";
import { BlogCard } from "~/components/blog/blogCard";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { BackButton } from "~/components/UI/backButton/backButton";
import {
  useCompletedLevels,
  useLeaderboard,
  useLevels,
} from "~/routes/games/game/path/layout";

import { useProfile } from "~/routes/layout";
import { formatTime } from "~/utils/formatTime";
import { isSubscriptionActive } from "~/utils/subscription";

export const QwikPathContent = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);
  const levels = useLevels();
  const completedLevels = useCompletedLevels();
  const leaderboard = useLeaderboard();

  console.log(completedLevels.value);

  const getCompletedLevel = (levelId: string) =>
    completedLevels.value?.find((l) => l.level_id === levelId);

  useStylesScoped$(`
    .levels_grid {
      gap: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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

      <main class="relative flex w-full max-w-screen-2xl flex-col justify-center gap-4 px-4 md:flex-row">
        <section class="flex w-full flex-col gap-8 md:max-w-[calc(100%-300px)]">
          <h2 class="text-2xl font-bold text-gray-900">Available Levels</h2>

          <div class="levels_grid">
            {levels.value.map((level) => {
              const completed = getCompletedLevel(level.id);
              return (
                <BlogCard
                  key={level.id}
                  title={`Qwik Path | Level ${level.level_number} | ${level.difficulty}`}
                  href={`/games/game/path/${level.level_number}`}
                  date={new Date(level.published_at).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )}
                  readTime={
                    completed
                      ? `✅ Completed | ⏱ ${formatTime(completed.time_taken)}`
                      : "1 min to play"
                  }
                  cta={completed ? "Replay (disabled)" : "Play level →"}
                >
                  <MetaQwikPathLevelOne
                    class="h-full w-full object-contain object-center"
                    alt="QwikPath level preview"
                  />
                </BlogCard>
              );
            })}
          </div>

          <section class="mt-12 w-full max-w-screen-2xl px-4 md:px-0">
            <h2 class="mb-6 text-center text-2xl font-bold text-gray-900 md:text-left">
              Top Players
            </h2>
            <div class="overflow-x-auto rounded-lg bg-gray-50 shadow-sm">
              <table class="w-full table-auto text-left text-sm text-gray-700">
                <thead class="border-b bg-white text-xs uppercase text-gray-500">
                  <tr>
                    <th class="px-4 py-3">Rank</th>
                    <th class="px-4 py-3">Player</th>
                    <th class="px-4 py-3">Levels</th>
                    <th class="px-4 py-3">Total Time</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard.value?.map((player) => {
                    const isCurrentUser = player.user_id === profile.value?.id;
                    const userNotInTop = isCurrentUser && player.rank > 5;

                    return (
                      <>
                        {/* Séparateur visuel si le joueur est hors top 5 */}
                        {userNotInTop && (
                          <tr key="separator" class="border-t">
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
                          class={`border-t hover:bg-gray-100 ${
                            isCurrentUser ? "bg-yellow-50 font-bold" : ""
                          }`}
                        >
                          <td class="px-4 py-2 font-mono">#{player.rank}</td>
                          <td class="px-4 py-2">{player.player}</td>
                          <td class="px-4 py-2">{player.levels}</td>
                          <td class="px-4 py-2">
                            {formatTime(player.total_time)}
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

        <BackButton href="/games/" label="Back to Games" />

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});

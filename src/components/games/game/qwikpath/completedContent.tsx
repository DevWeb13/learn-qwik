import { component$, useStylesScoped$ } from "@builder.io/qwik";
import QwikPathGraf from "~/assets/img/games/game/gamePath/qwik-path-graf.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { useCompletedLevels } from "~/routes/games/game/path/completed";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";
import { LevelCard } from "./levelCard";

export const CompletedContent = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);
  const completedLevels = useCompletedLevels();

  console.log(completedLevels.value);

  useStylesScoped$(`
    .levels_grid {
      gap: 16px;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    }
      `);
  return (
    <>
      <header class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="sr-only">Qwik Path | Daily Logic Puzzle</h1>

        <QwikPathGraf class="h-[200px] w-[300px] object-cover md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px]" />

        <p class="max-w-xl text-center text-2xl font-semibold text-gray-900 md:text-3xl">
          Daily Logic Puzzle
        </p>

        <p class="max-w-xl text-center text-gray-900">
          Connect numbers in order and fill every cell. A new puzzle every day,
          powered by Qwik.
        </p>
      </header>

      <main class="relative flex w-full max-w-screen-xl flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-8 md:max-w-[calc(100%-300px)]">
          <section class="w-full">
            <h2 class="mb-6 text-center text-xl font-bold text-gray-900 md:text-left">
              Completed Levels
            </h2>

            {["easy", "medium", "hard"].map((difficulty) => {
              const levelsByDifficulty = completedLevels.value.data.filter(
                (level) => level.difficulty === difficulty,
              );

              if (levelsByDifficulty.length === 0) return null;

              return (
                <div key={difficulty} class="mb-8">
                  <h3 class="mb-4 text-center text-lg font-bold capitalize text-gray-800 md:text-left">
                    {difficulty}
                  </h3>
                  <div class="levels_grid">
                    {levelsByDifficulty.map((level) => (
                      <LevelCard
                        key={level.level_id}
                        levelNumber={level.level_number}
                        difficulty={level.difficulty}
                        href={`/games/game/path/${level.level_number}`}
                        completed={true}
                        completed_at={new Date(level.completed_at)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        </div>

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </>
  );
});

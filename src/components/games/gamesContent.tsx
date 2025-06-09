import { component$, useStylesScoped$ } from "@builder.io/qwik";
import MetaQwikPath from "~/assets/img/games/game/gamePath/metaQwikPath.png?jsx";
import QwikGamesGraf from "~/assets/img/games/game/gamePath/qwik-games-graf.png?jsx";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";
import { DesktopStickyAd } from "../desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "../mobileStickyAd/mobileStickyAd";
import { GameCard } from "./gameCard";

export const GamesContent = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  useStylesScoped$(`
    .games_grid_single {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `);

  return (
    <div class="font-retro relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-4 px-4 md:gap-8">
        <h1 class="sr-only">Qwik Games | Logic & Speed Challenges</h1>

        <QwikGamesGraf class="h-[200px] w-[300px] object-cover md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px]" />

        <p class="max-w-xl text-center text-2xl font-semibold text-gray-900 md:text-3xl">
          <span class="text-blue-500">Qwik</span> Games
        </p>

        <p class="max-w-xl text-center text-gray-900">
          Smart and fast-paced games built with Qwik, test your logic, climb the
          leaderboard, and challenge players from around the world.
        </p>
      </header>

      <main class="relative flex w-full max-w-screen-2xl flex-col justify-center gap-4 px-4 md:flex-row">
        <section class="flex w-full flex-col gap-8 md:min-w-[360px] md:max-w-[calc(100%-300px)]">
          <h2 class="text-xl font-bold text-gray-900">
            <span class="text-blue-500">Available</span> Games
          </h2>

          <div class="games_grid_single">
            <GameCard
              title="Qwik Path | Daily Logic Puzzle"
              description="Connect numbers and fill the grid. A fresh challenge every day."
              href="/games/game/path/"
              date="May 2025"
              readTime="1 min to play"
              cta="Play now →"
            >
              <MetaQwikPath
                class="h-full w-full object-contain object-center"
                alt="QwikPath logic puzzle preview"
              />
            </GameCard>
          </div>
        </section>

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});

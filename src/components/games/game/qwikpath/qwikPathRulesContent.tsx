import { component$, useStylesScoped$ } from "@builder.io/qwik";
import BackButtonImg from "~/assets/img/games/game/gamePath/back-button.png?jsx";
import QwikPathGraf from "~/assets/img/games/game/gamePath/qwik-path-graf.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const QwikPathRulesContent = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  useStylesScoped$(`
ol, ul {
  list-style-type: decimal;
  padding-left: 3rem;

}
    `);

  return (
    <>
      <header class="max-w-screen flex flex-col items-center gap-4 px-4 md:gap-8">
        <QwikPathGraf class="h-[200px] w-[300px] object-cover md:h-[300px] md:w-[450px] lg:h-[400px] lg:w-[600px]" />

        <h1 class="text-center text-3xl font-bold text-gray-900 md:text-4xl">
          <span class="sr-only">Qwik Path</span>Game Rules
        </h1>
        <p class=" text-center text-gray-700">
          Learn how Qwik Path works: gameplay, saving, and leaderboard rules.
        </p>
      </header>

      <main class="relative flex w-full max-w-screen-xl flex-col justify-center gap-8 px-4 pb-16 md:flex-row">
        <div class="flex w-full flex-col gap-8 md:max-w-[calc(100%-300px)]">
          <section class="flex w-full flex-col gap-4 rounded-lg bg-fuchsia-100 p-4 font-mono text-gray-900  shadow">
            <h2 class="border-b border-gray-300 pb-2 text-center text-2xl font-bold">
              <span class="text-4xl">🎯</span> Game Objective
            </h2>
            <p>
              Connect the indexes in ascending order (1 → 2 → 3 → …) while
              filling every cell on the grid. Each cell can be used only once.
              <br />
              The last cell of the path must be the highest index.
            </p>
          </section>

          <section class="flex w-full flex-col gap-4 rounded-lg bg-fuchsia-100 p-4 font-mono text-gray-900  shadow">
            <h2 class="border-b border-gray-300 pb-2 text-center text-2xl font-bold">
              <span class="text-4xl">🕹️</span> How to Play
            </h2>
            <ul class="flex w-full flex-col gap-1">
              <li>
                The game starts when you click on index 1: the timer begins and
                other indexes appear.
              </li>
              <li>You can move horizontally or vertically.</li>
              <li>Each square can only be visited once.</li>
              <li>
                You can undo your last move using the <strong>BackCount</strong>{" "}
                button.
                <BackButtonImg
                  alt="BackCount button"
                  class="inline-block h-6 w-6 stroke-[#e0e0e0] transition duration-200 hover:stroke-white"
                />
              </li>
              <li>
                If you leave the page, your progress and timer are automatically
                saved.
              </li>
              <li>When you return, the game continues where you left off.</li>
              <li>
                The level is complete once all cells are filled, indexes were
                followed in correct order, and the final cell is the highest
                index.
              </li>
              <li>
                Each level can only be played once. Your score is saved to the
                leaderboard.
              </li>
            </ul>
          </section>
          <section class="flex w-full flex-col gap-4 rounded-lg bg-fuchsia-100 p-4 font-mono text-gray-900  shadow">
            <h2 class="border-b border-gray-300 pb-2 text-center text-2xl font-bold">
              <span class="text-4xl">🏆</span> Leaderboard System
            </h2>
            <div class="flex w-full flex-col gap-2">
              <h3 class="text-lg font-bold text-gray-900 ">
                📊 Global Leaderboard
              </h3>
              <p>
                Players are ranked based on the following criteria (in order):
              </p>
              <ol class="flex w-full flex-col gap-1">
                <li>Total levels completed</li>
                <li>Lowest total completion time</li>
                <li>Fewest total BackCounts used</li>
              </ol>
            </div>
            <div class="flex w-full flex-col gap-2">
              <h3 class="text-lg font-bold text-gray-900 ">
                📈 Per-Level Leaderboard
              </h3>
              <p>For each level:</p>
              <ol class="flex w-full flex-col gap-1">
                <li>Fastest completion time</li>
                <li>Fewest BackCounts in case of tie</li>
              </ol>
            </div>
            <div class="flex w-full flex-col gap-2">
              <h3 class="text-lg font-bold text-gray-900 ">🧑‍💻 Display</h3>
              <p>
                Each leaderboard shows the top 3 players as well as your own
                current rank.
              </p>
            </div>
          </section>
        </div>

        {!isSubscribed && <DesktopStickyAd />}
      </main>

      {!isSubscribed && <MobileStickyAd />}
    </>
  );
});

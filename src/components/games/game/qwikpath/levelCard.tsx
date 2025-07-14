import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ComingSoonButtonImg from "~/assets/img/games/game/gamePath/coming-soon-button.png?jsx";
import PlayLevelButtonImg from "~/assets/img/games/game/gamePath/play-level-button.png?jsx";
import ResultsButtonImg from "~/assets/img/games/game/gamePath/results-button-link.png?jsx";

interface LevelCardProps {
  levelNumber: number;
  difficulty: string;
  href: string;
  completed?: boolean;
  timeTaken?: string;
  published_at?: Date;
  completed_at?: Date;
}

export const LevelCard = component$<LevelCardProps>(
  ({
    levelNumber,
    difficulty,
    href,
    completed,

    published_at,
    completed_at,
  }) => {
    const difficultyColor =
      {
        easy: "bg-green-500",
        medium: "bg-yellow-500",
        hard: "bg-red-500",
      }[difficulty.toLowerCase() as "easy" | "medium" | "hard"] ||
      "bg-gray-500";

    const is_publishable = published_at && published_at < new Date();

    let backgroundGradient = "";

    if (completed) {
      backgroundGradient = "from-teal-800 via-green-500 to-emerald-800";
    } else if (!is_publishable) {
      backgroundGradient = "from-gray-700 via-gray-500 to-gray-900";
    } else {
      switch (difficulty.toLowerCase()) {
        case "easy":
          backgroundGradient = "from-purple-900 via-fuchsia-800 to-indigo-900";
          break;
        case "medium":
          backgroundGradient = "from-indigo-900 via-purple-700 to-pink-700";
          break;
        default:
          backgroundGradient = "from-gray-800 via-gray-600 to-gray-900";
          break;
      }
    }

    return (
      <div
        class={`relative flex w-full flex-col gap-4 rounded-xl 
         bg-gradient-to-br ${backgroundGradient} p-4

         text-white shadow-xl hover:shadow-[0_0_20px_rgba(255,0,255,0.9)]  ${completed && "from-teal-800 via-green-500 to-emerald-800"}
         
         `}
      >
        <div class="flex items-center justify-between px-2 py-1">
          <h3 class="font-mono text-xl font-bold tracking-wider text-white drop-shadow-sm">
            Level {levelNumber}
          </h3>
          <span
            class={`rounded-md border border-white  px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white shadow-sm backdrop-blur-md ${difficultyColor}`}
          >
            {difficulty}
          </span>
        </div>

        {completed ? (
          <div class="flex justify-center">
            <Link
              href={href}
              class=" flex h-32 w-32  items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(255,0,255,0.9)] transition-transform duration-200 hover:scale-105"
            >
              <ResultsButtonImg alt="Results" />
            </Link>
          </div>
        ) : (
          <div class="flex justify-center">
            {is_publishable ? (
              <Link
                href={href}
                class=" flex h-32 w-32  items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(255,0,255,0.6)] transition-transform duration-200 hover:scale-105"
              >
                <PlayLevelButtonImg alt="Play Level" />
              </Link>
            ) : (
              <div class="flex h-32 w-32 cursor-not-allowed items-center justify-center rounded-full bg-gradient-to-br from-gray-500 to-gray-700 shadow-[0_0_20px_rgba(255,0,255,0.9)] ">
                <ComingSoonButtonImg alt="Coming Soon" />
              </div>
            )}
          </div>
        )}

        <p class="text-center  text-xs text-white">
          {published_at
            ? "Published " + published_at.toLocaleDateString()
            : "Completed " + completed_at?.toLocaleDateString()}
        </p>
      </div>
    );
  },
);

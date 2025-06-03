import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface LevelCardProps {
  levelNumber: number;
  difficulty: string;
  href: string;
  completed?: boolean;
  timeTaken?: string;
  disabled?: boolean;
}

export const LevelCard = component$<LevelCardProps>(
  ({ levelNumber, difficulty, href, completed, timeTaken, disabled }) => {
    const difficultyColor =
      {
        easy: "bg-green-500",
        medium: "bg-yellow-500",
        hard: "bg-red-500",
      }[difficulty.toLowerCase() as "easy" | "medium" | "hard"] ||
      "bg-gray-500";

    return (
      <div class="relative w-full rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold">#{levelNumber}</h3>
          <span
            class={`rounded-full px-2 py-0.5 text-xs font-semibold uppercase text-white ${difficultyColor}`}
          >
            {difficulty}
          </span>
        </div>

        <div class="mt-2 text-sm text-gray-300">
          {completed ? (
            <p>
              ✅ Completed · ⏱ <span class="font-mono">{timeTaken}</span>
            </p>
          ) : (
            <p>1 min to play</p>
          )}
        </div>

        <Link
          href={href}
          class={`mt-4 inline-block w-full rounded-md px-4 py-2 text-center text-sm font-semibold text-white transition-all duration-200 ${
            completed || disabled
              ? " bg-gray-500 hover:bg-gray-500"
              : "bg-sky-600 hover:bg-sky-700"
          }`}
          tabIndex={completed || disabled ? -1 : 0}
        >
          {completed ? "View Results →" : "Play level →"}
        </Link>
      </div>
    );
  },
);

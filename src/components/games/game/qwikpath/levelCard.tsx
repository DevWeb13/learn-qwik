import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiArrowRightSolid } from "@qwikest/icons/heroicons";

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
      <div class="relative w-full  rounded-xl bg-[#1f1f1f] p-4 text-[#e0e0e0] shadow-md transition-transform hover:-translate-y-1 hover:text-white hover:shadow-lg">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-bold">#{levelNumber}</h3>
          <span
            class={`rounded-full px-4 py-2 text-xs  uppercase  ${difficultyColor}`}
          >
            {difficulty}
          </span>
        </div>

        <div class="mt-4  text-xs ">
          {completed ? (
            <p class="align-text-bottom">
              ✅ Completed · ⏱ <span class="font-mono">{timeTaken}</span>
            </p>
          ) : (
            <p>1 min to play</p>
          )}
        </div>

        <Link
          href={href}
          class={`mt-4 flex w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-center text-sm transition-all  duration-200 hover:text-white ${
            completed || disabled
              ? " bg-gray-500 hover:bg-gray-600"
              : "bg-sky-600 hover:bg-sky-700 "
          }`}
          tabIndex={completed || disabled ? -1 : 0}
        >
          {completed ? (
            <>
              <p>View Results</p>
              <HiArrowRightSolid class="strokeWidth-2 h-6 w-6 stroke-white" />
            </>
          ) : (
            <>
              <p>Play Level</p>
              <HiArrowRightSolid class="strokeWidth-2 h-6 w-6 stroke-white" />
            </>
          )}
        </Link>
      </div>
    );
  },
);

// src/components/games/game/qwikpath/resolvedGrid.tsx

import { component$ } from "@builder.io/qwik";

type ResolvedGridProps = {
  gridSize: number;
  clues: { x: number; y: number; value: number }[];
  path: { x: number; y: number }[];
};

export const ResolvedGrid = component$<ResolvedGridProps>(
  ({ gridSize, clues, path }) => {
    const grid = Array.from({ length: gridSize }, (_, y) =>
      Array.from({ length: gridSize }, (_, x) => {
        const clue = clues.find((c) => c.x === x && c.y === y);
        return clue ? clue.value : null;
      }),
    );

    return (
      <div
        class="mx-auto grid max-w-[360px]"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {grid.flatMap((row, y) =>
          row.map((cellValue, x) => {
            const inPath = path.some((p) => p.x === x && p.y === y);
            return (
              <div
                key={`${x}-${y}`}
                class={`flex aspect-square items-center justify-center border-[2.5px] border-black text-sm font-bold
                ${inPath ? "bg-green-200 text-green-800" : cellValue !== null ? "bg-blue-100 text-blue-700" : "bg-white text-gray-900"}`}
              >
                {cellValue ?? ""}
              </div>
            );
          }),
        )}
      </div>
    );
  },
);

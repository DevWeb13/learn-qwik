import { component$ } from "@builder.io/qwik";

import Corner from "~/assets/img/games/game/gamePath/corner.png?jsx";
import Endpoint from "~/assets/img/games/game/gamePath/endpoint.png?jsx";
import StartSingle from "~/assets/img/games/game/gamePath/start-single.png?jsx";
import Straight from "~/assets/img/games/game/gamePath/straight.png?jsx";
import { getTileInfosFromPath } from "~/utils/games/path-tiles";

export const ResolvedGrid = component$<{
  gridSize: number;
  clues: { x: number; y: number; value: number }[];
  path: { x: number; y: number }[];
}>(({ gridSize, clues, path }) => {
  const tileInfos = getTileInfosFromPath(path);
  const getTile = (x: number, y: number) => {
    return tileInfos.find((t) => t.pos.x === x && t.pos.y === y);
  };

  const grid = Array.from({ length: gridSize }, (_, y) =>
    Array.from({ length: gridSize }, (_, x) => {
      const clue = clues.find((c) => c.x === x && c.y === y);
      return clue ? clue.value : null;
    }),
  );

  return (
    <div
      class="mx-auto grid w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px]"
      style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
    >
      {grid.flatMap((row, y) =>
        row.map((cellValue, x) => {
          const index = y * gridSize + x;
          const inPath = path.some((p) => p.x === x && p.y === y);
          const tile = getTile(x, y);

          return (
            <div
              key={index}
              class={`flex aspect-square items-center justify-center
              border-b-[2.5px] border-r-[2.5px] border-black
              font-bold tracking-tight
              ${y === 0 ? "border-t-[2.5px]" : ""}
              ${x === 0 ? "border-l-[2.5px]" : ""}
              ${
                inPath
                  ? cellValue !== null
                    ? "bg-purple-400/60 text-white"
                    : "bg-purple-200 text-blue-700"
                  : cellValue !== null
                    ? "bg-blue-100 text-blue-700"
                    : "bg-white text-gray-900"
              }`}
            >
              <div class="relative flex h-full w-full items-center justify-center">
                {tile && (
                  <div
                    class="absolute inset-0 z-0"
                    style={{ transform: `rotate(${tile.rotation}deg)` }}
                  >
                    {tile.type === "start" && (
                      <StartSingle class="h-full w-full" />
                    )}
                    {tile.type === "end" && <Endpoint class="h-full w-full" />}
                    {tile.type === "straight" && (
                      <Straight class="h-full w-full" />
                    )}
                    {tile.type === "corner" && <Corner class="h-full w-full" />}
                  </div>
                )}

                <span class="z-10 text-xl font-bold text-blue-700">
                  {cellValue ?? ""}
                </span>
              </div>
            </div>
          );
        }),
      )}
    </div>
  );
});

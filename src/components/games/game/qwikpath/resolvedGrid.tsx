import { component$ } from "@builder.io/qwik";

import CornerLeftBottom from "~/assets/img/games/game/gamePath/neon/green/corner-left-bottom.png?jsx";
import CornerLeftUp from "~/assets/img/games/game/gamePath/neon/green/corner-left-up.png?jsx";
import CornerRightBottom from "~/assets/img/games/game/gamePath/neon/green/corner-right-bottom.png?jsx";
import CornerRightUp from "~/assets/img/games/game/gamePath/neon/green/corner-right-up.png?jsx";
import EndpointBottom from "~/assets/img/games/game/gamePath/neon/green/endpoint-bottom.png?jsx";
import EndpointLeft from "~/assets/img/games/game/gamePath/neon/green/endpoint-left.png?jsx";
import EndpointRight from "~/assets/img/games/game/gamePath/neon/green/endpoint-right.png?jsx";
import EndpointUp from "~/assets/img/games/game/gamePath/neon/green/endpoint-up.png?jsx";
import StartSingle from "~/assets/img/games/game/gamePath/neon/green/start-single.png?jsx";
import StraightHorizontal from "~/assets/img/games/game/gamePath/neon/green/straight-horizontal.png?jsx";
import StraightVertical from "~/assets/img/games/game/gamePath/neon/green/straight-vertical.png?jsx";
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
              border-b-[1.5px] border-r-[1.5px] border-black
              font-bold tracking-tight
              ${y === 0 ? "border-t-[1.5px]" : ""}
              ${x === 0 ? "border-l-[1.5px]" : ""}
              ${
                inPath
                  ? cellValue !== null
                    ? "bg-teal-400/60 text-white"
                    : "bg-teal-200 text-blue-700"
                  : cellValue !== null
                    ? "bg-teal-100 text-blue-700"
                    : "bg-teal-50 text-gray-900"
              }`}
            >
              <div class="relative flex h-full w-full items-center justify-center">
                {tile && (
                  <div class="absolute inset-0 z-0">
                    {tile.type === "start" && (
                      <StartSingle class="h-full w-full" />
                    )}
                    {tile.type === "end-right" && (
                      <EndpointRight class="h-full w-full" />
                    )}
                    {tile.type === "end-left" && (
                      <EndpointLeft class="h-full w-full" />
                    )}
                    {tile.type === "end-bottom" && (
                      <EndpointBottom class="h-full w-full" />
                    )}
                    {tile.type === "end-up" && (
                      <EndpointUp class="h-full w-full" />
                    )}
                    {tile.type === "straight-horizontal" && (
                      <StraightHorizontal class="h-full w-full" />
                    )}
                    {tile.type === "straight-vertical" && (
                      <StraightVertical class="h-full w-full" />
                    )}
                    {tile.type === "corner-right-up" && (
                      <CornerRightUp class="h-full w-full" />
                    )}
                    {tile.type === "corner-right-bottom" && (
                      <CornerRightBottom class="h-full w-full" />
                    )}
                    {tile.type === "corner-left-up" && (
                      <CornerLeftUp class="h-full w-full" />
                    )}
                    {tile.type === "corner-left-bottom" && (
                      <CornerLeftBottom class="h-full w-full" />
                    )}
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

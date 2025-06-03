/* eslint-disable qwik/no-use-visible-task */
// src/components/games/game/qwikpath/gameGrid.tsx

import {
  $,
  component$,
  useComputed$,
  useOnWindow,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { useValidateLevel } from "~/routes/games/game/path/[level]";
import type { QwikPathLevelData } from "~/types/games/qwikpath.types";
import { getTileInfosFromPath } from "~/utils/games/path-tiles";
import { getFullPath } from "~/utils/games/path-utils";
import { Chrono } from "./chrono";

import Corner from "~/assets/img/games/game/gamePath/corner.png?jsx";
import Endpoint from "~/assets/img/games/game/gamePath/endpoint.png?jsx";
import StartSingle from "~/assets/img/games/game/gamePath/start-single.png?jsx";
import Straight from "~/assets/img/games/game/gamePath/straight.png?jsx";

export interface Position {
  x: number;
  y: number;
}

type GameGridProps = {
  levelData: QwikPathLevelData;
  levelId: string;
  savedProgress?: {
    elapsed_seconds: number;
    last_path: string;
    last_history: string;
    back_count: number;
  } | null;
};

export const GameGrid = component$<GameGridProps>(
  ({ levelData, levelId, savedProgress }) => {
    const { gridSize, clues } = levelData;

    const initialPath: Position[] = savedProgress
      ? JSON.parse(savedProgress.last_path)
      : [];

    const path = useSignal<Position[]>(initialPath);
    const elapsedSeconds = useSignal(savedProgress?.elapsed_seconds ?? 0);
    const gameStarted = useSignal(savedProgress ? true : false);
    const backCount = useSignal(savedProgress?.back_count ?? 0);

    const clickedNumbers = useSignal<number[]>(() => {
      return initialPath
        .map((pos) => {
          const val = clues.find((c) => c.x === pos.x && c.y === pos.y)?.value;
          return val !== undefined && val !== 1 ? val : null;
        })
        .filter((v): v is number => v !== null);
    });

    const initialHistory: Position[][] = savedProgress?.last_history
      ? JSON.parse(savedProgress.last_history)
      : // fallback pour rétrocompatibilité (comme avant)
        (() => {
          const result: Position[][] = [];
          if (initialPath.length === 0) return result;
          let segment: Position[] = [initialPath[0]];
          for (let i = 1; i < initialPath.length; i++) {
            const prev = initialPath[i - 1];
            const curr = initialPath[i];
            const sameLine = prev.x === curr.x || prev.y === curr.y;
            if (sameLine) {
              segment.push(curr);
            } else {
              result.push(segment);
              segment = [curr];
            }
          }
          result.push(segment);
          return result;
        })();

    const history = useSignal<Position[][]>(initialHistory);

    const invalidClickMessage = useSignal<string | null>(null);
    const validateLevelAction = useValidateLevel();
    const hasSubmitted = useSignal(false);

    const grid = Array.from({ length: gridSize }, (_, y) =>
      Array.from({ length: gridSize }, (_, x) => {
        const clue = clues.find((c) => c.x === x && c.y === y);
        return clue ? clue.value : null;
      }),
    );

    const isSolved = useComputed$(() => {
      const expected = [...clickedNumbers.value];
      const required = clues
        .map((c) => c.value)
        .filter((v) => v !== 1)
        .sort((a, b) => a - b);
      const allNumbersInOrder = expected.every((n, i) => n === required[i]);
      return (
        path.value.length === gridSize * gridSize &&
        allNumbersInOrder &&
        clickedNumbers.value.length === required.length
      );
    });

    const goBack = $(() => {
      if (history.value.length > 0) {
        const lastMove = history.value.pop();
        if (lastMove) {
          backCount.value += 1;
          path.value = path.value.filter(
            (p) => !lastMove.some((pos) => pos.x === p.x && pos.y === p.y),
          );
          for (const pos of lastMove) {
            const value = grid[pos.y][pos.x];
            if (value !== null && value !== 1) {
              clickedNumbers.value.pop();
            }
          }
          const expected = [...clickedNumbers.value];
          const required = clues
            .map((c) => c.value)
            .filter((v) => v !== 1)
            .sort((a, b) => a - b);
          const allNumbersInOrder = expected.every((n, i) => n === required[i]);
          invalidClickMessage.value = allNumbersInOrder
            ? null
            : "Oops! Les chiffres doivent être cochés dans l'ordre.";
        }
      }
    });

    useVisibleTask$(({ track }) => {
      track(() => isSolved.value);
      if (isSolved.value && !hasSubmitted.value) {
        hasSubmitted.value = true;
        validateLevelAction.submit({
          level_id: levelId,
          time_taken: elapsedSeconds.value,
          completed_path: JSON.stringify(path.value),
          back_count: backCount.value,
        });
      }
    });

    const saveProgress = $(() => {
      if (gameStarted.value && !isSolved.value && path.value.length > 0) {
        const payload = {
          level_id: levelId,
          elapsed_seconds: elapsedSeconds.value,
          last_path: JSON.stringify(path.value),
          last_history: JSON.stringify(history.value),
          back_count: backCount.value,
        };

        const blob = new Blob([JSON.stringify(payload)], {
          type: "application/json",
        });

        navigator.sendBeacon("/api/save-progress", blob);
      }
    });

    useOnWindow("beforeunload", saveProgress);
    useOnWindow("pagehide", saveProgress);

    const loc = useLocation();
    useVisibleTask$(({ track }) => {
      track(() => loc.isNavigating);
      saveProgress();
    });

    const tileInfos = useComputed$(() => getTileInfosFromPath(path.value));

    const getTile = (x: number, y: number) => {
      return tileInfos.value.find((t) => t.pos.x === x && t.pos.y === y);
    };

    return (
      <div class="mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px]">
        <Chrono
          gameStarted={gameStarted}
          elapsedSeconds={elapsedSeconds}
          isSolved={isSolved}
        />

        {invalidClickMessage.value && (
          <p class="mb-2 text-center text-sm text-red-600">
            {invalidClickMessage.value}
          </p>
        )}

        <div
          class="grid"
          style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
        >
          {grid.flatMap((row, y) =>
            row.map((cellValue, x) => {
              const index = y * gridSize + x;
              const inPath = path.value.some((p) => p.x === x && p.y === y);
              const last = path.value.at(-1);
              const isStartCell = cellValue === 1;

              const isSameLine = last && (last.x === x || last.y === y);
              const potentialPath =
                last && isSameLine ? getFullPath(last, { x, y }) : [];
              const allFree = potentialPath.every(
                (pos) =>
                  !path.value.some((p) => p.x === pos.x && p.y === pos.y),
              );

              const clickable =
                !inPath &&
                ((path.value.length === 0 && isStartCell) ||
                  (last && isSameLine && allFree));

              const showValue = cellValue === 1 || gameStarted.value || inPath;
              const tile = getTile(x, y);

              return (
                <button
                  key={index}
                  disabled={!clickable || isSolved.value}
                  onClick$={() => {
                    if (!gameStarted.value) gameStarted.value = true;

                    const pointsToAdd =
                      path.value.length === 0 ? [{ x, y }] : potentialPath;

                    path.value = [...path.value, ...pointsToAdd];
                    history.value = [...history.value, pointsToAdd];

                    for (const pos of pointsToAdd) {
                      const val = grid[pos.y][pos.x];
                      if (val !== null && val !== 1) {
                        clickedNumbers.value = [...clickedNumbers.value, val];
                      }
                    }

                    const expected = [...clickedNumbers.value];
                    const required = clues
                      .map((c) => c.value)
                      .filter((v) => v !== 1)
                      .sort((a, b) => a - b);
                    const allNumbersInOrder = expected.every(
                      (n, i) => n === required[i],
                    );
                    invalidClickMessage.value = allNumbersInOrder
                      ? null
                      : "Oops! Les chiffres doivent être cochés dans l'ordre.";
                  }}
                  class={`flex aspect-square items-center justify-center
                    border-b-[2.5px] border-r-[2.5px] border-black
                    font-bold tracking-tight transition-colors duration-150 ease-in-out
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
                        {tile.type === "end" && (
                          <Endpoint class="h-full w-full" />
                        )}
                        {tile.type === "straight" && (
                          <Straight class="h-full w-full" />
                        )}
                        {tile.type === "corner" && (
                          <Corner class="h-full w-full" />
                        )}
                      </div>
                    )}

                    <span class="z-10 text-xl font-bold text-blue-700">
                      {showValue ? (cellValue ?? "") : ""}
                    </span>
                  </div>
                </button>
              );
            }),
          )}
        </div>

        {isSolved.value && (
          <p class="mt-4 text-center font-semibold text-green-600">
            🎉 Puzzle completed!
          </p>
        )}

        {!isSolved.value && (
          <div class="mt-4 flex justify-center">
            <button
              onClick$={goBack}
              class="rounded bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-300"
            >
              Back
            </button>
          </div>
        )}
      </div>
    );
  },
);

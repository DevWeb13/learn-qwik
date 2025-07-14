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

import BackButtonImg from "~/assets/img/games/game/gamePath/back-button.png?jsx";
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
    invalid_order: boolean;
    invalid_last_path: boolean;
  } | null;
};

export const GameGrid = component$<GameGridProps>(
  ({ levelData, levelId, savedProgress }) => {
    const { gridSize, clues } = levelData;

    const initialPath: Position[] = savedProgress
      ? JSON.parse(savedProgress.last_path)
      : [];

    console.log("savedProgress", savedProgress);

    const path = useSignal<Position[]>(initialPath);
    const elapsedSeconds = useSignal(savedProgress?.elapsed_seconds ?? 0);
    const gameStarted = useSignal(savedProgress ? true : false);
    const backCount = useSignal(savedProgress?.back_count ?? 0);
    const invalidOrder = useSignal(savedProgress?.invalid_order ?? false);
    const invalidLastPath = useSignal(
      savedProgress?.invalid_last_path ?? false,
    );

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
      console.log("expected: ", expected);

      const required = clues
        .map((c) => c.value)
        .filter((v) => v !== 1)
        .sort((a, b) => a - b);
      console.log("required: ", required);

      const lastClue = clues.at(-1);

      console.log("lastClue: ", lastClue);

      const lastPath = path.value.at(-1);
      console.log("lastPath: ", lastPath);
      const allNumbersInOrder = expected.every((n, i) => n === required[i]);

      console.log("clickedNumbers.value: ", clickedNumbers.value);
      const checkLastClicked =
        lastClue?.x === lastPath?.x && lastClue?.y === lastPath?.y;

      const checkIfGridIsComplete = path.value.length === gridSize * gridSize;

      const checkIfGridIsCompleteAndcheckLastClicked =
        checkIfGridIsComplete && checkLastClicked;

      const checkIsValid =
        checkIfGridIsCompleteAndcheckLastClicked && allNumbersInOrder;

      return checkIsValid;
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
          const lastClue = clues.at(-1);
          // const lastPath = path.value.at(-1);
          // const checkLastClicked =
          //   lastClue?.x === lastPath?.x && lastClue?.y === lastPath?.y;
          const checkIfLastClueIsInPath = path.value.some(
            (pos) => pos.x === lastClue?.x && pos.y === lastClue.y,
          );
          // const checkIfGridIsComplete =
          //   path.value.length === gridSize * gridSize;
          invalidOrder.value = !allNumbersInOrder;
          invalidLastPath.value = checkIfLastClueIsInPath;
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
          invalid_order: invalidOrder.value,
          invalid_last_path: invalidLastPath.value,
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
        <div class="mb-4 flex items-center justify-around">
          <div class="flex items-center gap-2">
            <p class="text-blue-600">{backCount.value}</p>
            <button
              onClick$={goBack}
              class="h-20 w-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_20px_rgba(255,0,255,0.6)] transition-transform duration-200 hover:scale-105"
            >
              <BackButtonImg class="h-full w-full" />
            </button>
          </div>

          <Chrono
            gameStarted={gameStarted}
            elapsedSeconds={elapsedSeconds}
            isSolved={isSolved}
          />
        </div>

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

              console.log(tile);

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
                    const lastClue = clues.at(-1);
                    const lastPath = path.value.at(-1);
                    const checkLastClicked =
                      lastClue?.x === lastPath?.x &&
                      lastClue?.y === lastPath?.y;
                    console.log("checkLastClicked: ", checkLastClicked);
                    const checkIfLastClueIsInPath = path.value.some(
                      (pos) => pos.x === lastClue?.x && pos.y === lastClue.y,
                    );
                    console.log(
                      "checkIfLastClueIsInPath: ",
                      checkIfLastClueIsInPath,
                    );
                    const checkIfGridIsComplete =
                      path.value.length === gridSize * gridSize;
                    console.log(
                      "checkIfGridIsComplete: ",
                      checkIfGridIsComplete,
                    );

                    const checkIfGridIsCompleteAndcheckLastClicked =
                      checkIfGridIsComplete && checkLastClicked;
                    invalidOrder.value = !allNumbersInOrder;
                    invalidLastPath.value =
                      checkIfLastClueIsInPath &&
                      !checkIfGridIsCompleteAndcheckLastClicked;

                    console.log("invalidOrder.value: ", invalidOrder.value);
                    console.log(
                      "invalidLastPath.value: ",
                      invalidLastPath.value,
                    );
                  }}
                  class={`flex aspect-square items-center justify-center
                    border-b-[1.5px] border-r-[1.5px] border-black
                    font-bold tracking-tight transition-colors duration-150 ease-in-out
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
                      {showValue ? (cellValue ?? "") : ""}
                    </span>
                  </div>
                </button>
              );
            }),
          )}
        </div>

        <div class="mt-4 h-[24px]">
          {invalidOrder.value && (
            <p class="text-center text-sm text-red-600">
              Oops! Les chiffres doivent être cochés dans l'ordre.
            </p>
          )}
          {!invalidOrder.value && invalidLastPath.value && (
            <p class="text-center text-sm text-red-600">
              Oops! Le dernier chiffre doit être coché sur la dernière case.
            </p>
          )}
        </div>

        <div class="mt-4 h-[24px]">
          {isSolved.value && (
            <p class="mt-4 text-center font-semibold text-green-600">
              🎉 Puzzle completed!
            </p>
          )}
        </div>
      </div>
    );
  },
);

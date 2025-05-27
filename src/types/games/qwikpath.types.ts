// src/types/games/qwikpath.types.ts

export type QwikPathClue = {
  x: number;
  y: number;
  value: number;
};

export type QwikPathLevelData = {
  gridSize: number;
  clues: QwikPathClue[];
};

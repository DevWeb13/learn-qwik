import type { Position } from "~/components/games/game/qwikpath/gameGrid";

export const getFullPath = (from: Position, to: Position): Position[] => {
  const path: Position[] = [];
  if (from.x === to.x) {
    const step = from.y < to.y ? 1 : -1;
    for (let y = from.y + step; y !== to.y + step; y += step) {
      path.push({ x: from.x, y });
    }
  } else if (from.y === to.y) {
    const step = from.x < to.x ? 1 : -1;
    for (let x = from.x + step; x !== to.x + step; x += step) {
      path.push({ x, y: from.y });
    }
  }
  return path;
};

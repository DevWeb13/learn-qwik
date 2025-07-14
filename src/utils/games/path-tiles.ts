// src/utils/games/path-tiles.ts

import type { Position } from "~/components/games/game/qwikpath/gameGrid";

export type TileInfo = {
  pos: Position;
  type:
    | "start"
    | "end-right"
    | "end-left"
    | "end-bottom"
    | "end-up"
    | "end"
    | "straight-horizontal"
    | "straight-vertical"
    | "corner-right-up"
    | "corner-right-bottom"
    | "corner-left-up"
    | "corner-left-bottom";
};

export function getTileInfosFromPath(path: Position[]): TileInfo[] {
  const result: TileInfo[] = [];
  let type: TileInfo["type"] = "start";

  for (let i = 0; i < path.length; i++) {
    const curr = path[i];

    // Cas 1 : début
    if (i === 0) {
      if (path.length === 1) {
        result.push({ pos: curr, type: "start" });
        continue;
      }
      const next = path[i + 1];

      const dx = next.x - curr.x;
      const dy = next.y - curr.y;

      if (dx === 1) result.push({ pos: curr, type: "end-left" });
      if (dx === -1) result.push({ pos: curr, type: "end-right" });
      if (dy === -1) result.push({ pos: curr, type: "end-bottom" });
      if (dy === 1) result.push({ pos: curr, type: "end-up" });

      continue;
    }

    // Cas 2 : fin
    if (i === path.length - 1) {
      const prev = path[i - 1];
      const dx = prev.x - curr.x;
      const dy = curr.y - prev.y;

      if (dx === 1) result.push({ pos: curr, type: "end-left" });
      if (dx === -1) result.push({ pos: curr, type: "end-right" });
      if (dy === 1) result.push({ pos: curr, type: "end-bottom" });
      if (dy === -1) result.push({ pos: curr, type: "end-up" });

      continue;
    }

    // Cas 3 : au milieu
    const prev = path[i - 1];
    const next = path[i + 1];
    const dx1 = curr.x - prev.x;
    const dy1 = curr.y - prev.y;
    const dx2 = next.x - curr.x;
    const dy2 = next.y - curr.y;

    if (
      (dx1 !== 0 && dx2 !== 0 && dx1 === dx2) ||
      (dy1 !== 0 && dy2 !== 0 && dy1 === dy2)
    ) {
      const isVertical = dy1 !== 0;
      result.push({
        pos: curr,
        type: isVertical ? "straight-vertical" : "straight-horizontal",
      });
    } else {
      // Rotation 0° ↘ (gauche→bas) et ↖ (bas→gauche)
      if (
        (dx1 === 1 && dy1 === 0 && dx2 === 0 && dy2 === 1) || // ↘
        (dx1 === 0 && dy1 === -1 && dx2 === -1 && dy2 === 0) // ↖
      ) {
        type = "corner-right-up";
      }
      // Rotation 90° ↗ (gauche→haut) et ↙ (haut→gauche)
      else if (
        (dx1 === 1 && dy1 === 0 && dx2 === 0 && dy2 === -1) || // ↗
        (dx1 === 0 && dy1 === 1 && dx2 === -1 && dy2 === 0) // ↙
      ) {
        type = "corner-right-bottom";
      }
      // Rotation 180° ↖ (droite→haut) et ↘ (haut→droite)
      else if (
        (dx1 === -1 && dy1 === 0 && dx2 === 0 && dy2 === -1) || // ↖
        (dx1 === 0 && dy1 === 1 && dx2 === 1 && dy2 === 0) // ↘
      ) {
        type = "corner-left-bottom";
      }
      // Rotation 270° ↙ (droite→bas) et ↗ (bas→droite)
      else if (
        (dx1 === -1 && dy1 === 0 && dx2 === 0 && dy2 === 1) || // ↙
        (dx1 === 0 && dy1 === -1 && dx2 === 1 && dy2 === 0) // ↗
      ) {
        type = "corner-left-up";
      }

      result.push({ pos: curr, type });
    }
  }

  return result;
}

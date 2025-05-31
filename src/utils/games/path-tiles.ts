import type { Position } from "~/components/games/game/qwikpath/gameGrid";

export function getTileInfosFromPath(path: Position[]): {
  pos: Position;
  type: "start" | "end" | "straight" | "corner";
  rotation: number;
}[] {
  const result: {
    pos: Position;
    type: "start" | "end" | "straight" | "corner";
    rotation: number;
  }[] = [];

  for (let i = 0; i < path.length; i++) {
    const curr = path[i];

    // Cas 1 : début
    if (i === 0) {
      if (path.length === 1) {
        result.push({ pos: curr, type: "start", rotation: 0 });
        continue;
      }
      const next = path[i + 1];

      const dx = next.x - curr.x;
      const dy = next.y - curr.y;

      let rotation = 0;
      if (dx === 1) rotation = 180;
      if (dx === -1) rotation = 0;
      if (dy === -1) rotation = 90;
      if (dy === 1) rotation = 270;

      result.push({ pos: curr, type: "end", rotation });
      continue;
    }

    // Cas 2 : fin
    if (i === path.length - 1) {
      const prev = path[i - 1];
      const dx = prev.x - curr.x;
      const dy = curr.y - prev.y;

      let rotation = 0;
      if (dx === 1) rotation = 180;
      if (dx === -1) rotation = 0;
      if (dy === 1) rotation = 90;
      if (dy === -1) rotation = 270;

      result.push({ pos: curr, type: "end", rotation });
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
        type: "straight",
        rotation: isVertical ? 90 : 0,
      });
    } else {
      let rotation = 0;

      // Rotation 0° ↘ (gauche→bas) et ↖ (bas→gauche)
      if (
        (dx1 === 1 && dy1 === 0 && dx2 === 0 && dy2 === 1) || // ↘
        (dx1 === 0 && dy1 === -1 && dx2 === -1 && dy2 === 0) // ↖
      ) {
        rotation = 0;
      }
      // Rotation 90° ↗ (gauche→haut) et ↙ (haut→gauche)
      else if (
        (dx1 === 1 && dy1 === 0 && dx2 === 0 && dy2 === -1) || // ↗
        (dx1 === 0 && dy1 === 1 && dx2 === -1 && dy2 === 0) // ↙
      ) {
        rotation = 90;
      }
      // Rotation 180° ↖ (droite→haut) et ↘ (haut→droite)
      else if (
        (dx1 === -1 && dy1 === 0 && dx2 === 0 && dy2 === -1) || // ↖
        (dx1 === 0 && dy1 === 1 && dx2 === 1 && dy2 === 0) // ↘
      ) {
        rotation = 180;
      }
      // Rotation 270° ↙ (droite→bas) et ↗ (bas→droite)
      else if (
        (dx1 === -1 && dy1 === 0 && dx2 === 0 && dy2 === 1) || // ↙
        (dx1 === 0 && dy1 === -1 && dx2 === 1 && dy2 === 0) // ↗
      ) {
        rotation = 270;
      }

      result.push({ pos: curr, type: "corner", rotation });
    }
  }

  return result;
}

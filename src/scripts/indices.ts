// src/scripts/indices.ts

import { mkdirSync, readFileSync, writeFileSync } from "fs";
import path from "path";

const chemins: number[][][] = JSON.parse(readFileSync("chemins.json", "utf-8"));
console.log(`📦 Nombre total de chemins : ${chemins.length}`);

// Génère les sous-séquences
function* sousSequences(chemin: number[][]) {
  const n = chemin.length;
  const total = 1 << (n - 2);
  for (let mask = 0; mask < total; mask++) {
    const indices = [0];
    for (let i = 1; i < n - 1; i++) {
      if (mask & (1 << (i - 1))) indices.push(i);
    }
    indices.push(n - 1);
    yield indices;
  }
}

// Vérifie unicité
function estUnique(
  chemin: number[][],
  indices: number[][],
  tousChemins: number[][][],
): boolean {
  for (const autre of tousChemins) {
    if (JSON.stringify(autre) === JSON.stringify(chemin)) continue;
    let i = 0;
    for (let j = 0; j < autre.length; j++) {
      const [x1, y1] = indices[i];
      const [x2, y2] = autre[j];
      if (x1 === x2 && y1 === y2) {
        i++;
        if (i === indices.length) break;
      }
    }
    if (i === indices.length) return false;
  }
  return true;
}

// Formate les indices pour Supabase
function indicesToClues(indices: number[][]): string {
  return JSON.stringify(
    indices.map(([x, y], i) => ({
      x,
      y,
      value: i + 1,
    })),
  );
}

// Applique une rotation (0°, 90°, 180°, 270°)
function rotateIndices(
  indices: number[][],
  gridSize: number,
  rotation: number,
): number[][] {
  switch (rotation % 360) {
    case 90:
      return indices.map(([x, y]) => [y, gridSize - 1 - x]);
    case 180:
      return indices.map(([x, y]) => [gridSize - 1 - x, gridSize - 1 - y]);
    case 270:
      return indices.map(([x, y]) => [gridSize - 1 - y, x]);
    default:
      return indices;
  }
}

// 🔧 Paramètres
const MIN_INDICES = 5;
const blocSize = 50;
const outputDir = path.join("output_sql");
const LIMIT = 1081;

mkdirSync(outputDir, { recursive: true });

let blocSQL = "";
let blocNum = 3;

chemins.slice(0, 0 + LIMIT).forEach((chemin, i) => {
  if (i % blocSize === 0)
    console.log(`🔄 Traitement du chemin ${i + 1}/${LIMIT}`);

  let minIndices: number[][] = [];
  let minCount = chemin.length;

  for (const indicesPos of sousSequences(chemin)) {
    const indices = indicesPos.map((idx) => chemin[idx]);
    if (indices.length < MIN_INDICES) continue;

    if (estUnique(chemin, indices, chemins)) {
      if (indices.length < minCount) {
        minCount = indices.length;
        minIndices = indices;
      }
      break;
    }
  }

  const gridSize = Math.max(...chemin.map(([x, y]) => Math.max(x, y))) + 1;
  const rotation = (i % 4) * 90;
  const rotatedIndices = rotateIndices(minIndices, gridSize, rotation);
  const clues = indicesToClues(rotatedIndices);
  const START_LEVEL = 75;
  const levelNumber = START_LEVEL + i;

  const sql = `INSERT INTO "public"."levels" (grid_size, clues, difficulty, published_at, level_number) VALUES ('${gridSize}', '${clues}', 'hard', NOW(), '${levelNumber}');\n`;
  blocSQL += sql;

  if ((i + 1) % blocSize === 0 || i === LIMIT - 1) {
    const filePath = path.join(outputDir, `levels_${blocNum}.sql`);
    writeFileSync(filePath, blocSQL, "utf-8");
    console.log(`✅ Bloc ${blocNum} écrit : ${filePath}`);
    blocNum++;
    blocSQL = "";
  }
});

console.log("🎉 Fini !");

// import { readFileSync } from "fs";

// // Lecture des chemins uniques
// const chemins: number[][][] = JSON.parse(readFileSync("chemins.json", "utf-8"));

// console.log(`Nombre de chemins à traiter : ${chemins.length}`);

// // Génère toutes les sous-séquences strictement croissantes d'indices
// function* sousSequences(chemin: number[][]) {
//   // On veut toutes les sous-séquences d'indices (toujours inclure début et fin)
//   const n = chemin.length;
//   // On génère tous les sous-ensembles d'indices intermédiaires
//   const total = 1 << (n - 2); // 2^(n-2) possibilités pour les indices intermédiaires
//   for (let mask = 0; mask < total; mask++) {
//     const indices = [0];
//     for (let i = 1; i < n - 1; i++) {
//       if (mask & (1 << (i - 1))) indices.push(i);
//     }
//     indices.push(n - 1);
//     yield indices;
//   }
// }

// // Fonction pour vérifier si une séquence d'indices force le chemin unique
// function estUnique(
//   chemin: number[][],
//   indices: number[][],
//   tousChemins: number[][][],
// ): boolean {
//   for (const autre of tousChemins) {
//     if (JSON.stringify(autre) === JSON.stringify(chemin)) continue;

//     let i = 0;
//     for (let j = 0; j < autre.length; j++) {
//       const [x1, y1] = indices[i];
//       const [x2, y2] = autre[j];
//       if (x1 === x2 && y1 === y2) {
//         i++;
//         if (i === indices.length) break;
//       }
//     }

//     if (i === indices.length) {
//       // => Tous les indices apparaissent dans cet ordre dans "autre"
//       return false;
//     }
//   }

//   return true;
// }

// const chemin = chemins[0]; // ou tout autre numéro

// let minIndices: number[][] = [];
// let minCount = chemin.length;
// const MIN_INDICES = 4; // 🟡 Modifie ici le nombre minimal d’indices à tester

// console.log(
//   `Chemin sélectionné :`,
//   chemin.map(([x, y]) => `(${x},${y})`).join(" -> "),
// );

// let counter = 0;

// for (const indicesPos of sousSequences(chemin)) {
//   const indices = indicesPos.map((idx) => chemin[idx]);

//   if (indices.length < MIN_INDICES) continue; // ⛔ saute les combinaisons trop courtes

//   counter++;
//   if (counter % 500000 === 0) {
//     console.log(`Testé ${counter} combinaisons...`);
//   }

//   if (estUnique(chemin, indices, chemins)) {
//     if (indices.length < minCount) {
//       minCount = indices.length;
//       minIndices = indices;
//     }
//     break; // ⛔ On garde le premier trouvé avec le minimum autorisé
//   }
// }

// console.log(
//   "Indices minimaux à placer :",
//   minIndices.map(([x, y]) => `(${x},${y})`).join(", "),
// );

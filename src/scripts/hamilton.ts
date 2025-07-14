// src/scripts/hamilton.ts

import { writeFileSync } from "fs";

// Récupération des arguments de la ligne de commande
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: ts-node hamilton.ts <largeur> <hauteur>");
  process.exit(1);
}

const largeur = parseInt(args[0], 10);
const hauteur = parseInt(args[1], 10);

if (isNaN(largeur) || isNaN(hauteur) || largeur < 2 || hauteur < 2) {
  console.error("Les dimensions doivent être des entiers >= 2.");
  process.exit(1);
}

console.log(`Grille de ${largeur} x ${hauteur}`);

type Coord = [number, number];

type Path = Coord[];

function voisins([x, y]: Coord, largeur: number, hauteur: number): Coord[] {
  const moves = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  return moves
    .map(([dx, dy]) => [x + dx, y + dy] as Coord)
    .filter(([nx, ny]) => nx >= 0 && nx < largeur && ny >= 0 && ny < hauteur);
}

function cheminsHamiltoniens(
  largeur: number,
  hauteur: number,
  chemin: Path = [[0, 0]],
  visites: Set<string> = new Set(["0,0"]),
): Path[] {
  if (chemin.length === largeur * hauteur) {
    return [chemin];
  }
  const derniers = voisins(chemin[chemin.length - 1], largeur, hauteur);
  let result: Path[] = [];
  for (const next of derniers) {
    const key = `${next[0]},${next[1]}`;
    if (!visites.has(key)) {
      visites.add(key);
      result = result.concat(
        cheminsHamiltoniens(largeur, hauteur, [...chemin, next], visites),
      );
      visites.delete(key);
    }
  }
  return result;
}

console.log("Génération des chemins hamiltoniens depuis chaque case...");
let chemins: Path[] = [];
for (let x = 0; x < largeur; x++) {
  for (let y = 0; y < hauteur; y++) {
    chemins = chemins.concat(
      cheminsHamiltoniens(largeur, hauteur, [[x, y]], new Set([`${x},${y}`])),
    );
  }
}
console.log(
  `Nombre total (brut) de chemins trouvés (tous départs) : ${chemins.length}`,
);

function rotate90(path: Path, largeur: number): Path {
  return path.map(([x, y]) => [y, largeur - 1 - x]);
}

function rotate180(path: Path, largeur: number, hauteur: number): Path {
  return path.map(([x, y]) => [largeur - 1 - x, hauteur - 1 - y]);
}

function rotate270(path: Path, hauteur: number): Path {
  return path.map(([x, y]) => [hauteur - 1 - y, x]);
}

function mirrorH(path: Path, largeur: number): Path {
  return path.map(([x, y]) => [largeur - 1 - x, y]);
}

function mirrorV(path: Path, hauteur: number): Path {
  return path.map(([x, y]) => [x, hauteur - 1 - y]);
}

function mirrorDiag1(path: Path): Path {
  // Diagonale principale (x=y)
  return path.map(([x, y]) => [y, x]);
}

function mirrorDiag2(path: Path, largeur: number, hauteur: number): Path {
  // Diagonale secondaire (x+y=largeur-1)
  return path.map(([x, y]) => [largeur - 1 - y, hauteur - 1 - x]);
}

function pathToString(path: Path): string {
  return path.map(([x, y]) => `${x},${y}`).join(";");
}

function allVariants(path: Path, largeur: number, hauteur: number): string[] {
  const variants = new Set<string>();
  let transforms: Path[] = [];
  if (largeur === hauteur) {
    // Carré : toutes les symétries et rotations
    transforms = [
      path,
      rotate90(path, largeur),
      rotate180(path, largeur, hauteur),
      rotate270(path, hauteur),
      mirrorH(path, largeur),
      mirrorV(path, hauteur),
      mirrorDiag1(path),
      mirrorDiag2(path, largeur, hauteur),
    ];
  } else {
    // Rectangle : seulement miroir H, V, et rotation 180°
    transforms = [
      path,
      mirrorH(path, largeur),
      mirrorV(path, hauteur),
      rotate180(path, largeur, hauteur),
    ];
  }
  for (const t of transforms) {
    variants.add(pathToString(t));
  }
  return Array.from(variants);
}

console.log("Filtrage des chemins équivalents par symétrie/rotation...");
const uniques = new Set<string>();
const cheminsUniques: Path[] = [];
for (const chemin of chemins) {
  const variants = allVariants(chemin, largeur, hauteur);
  // On prend la version lexicographiquement minimale comme identifiant de la classe
  const id = variants.sort()[0];
  if (!uniques.has(id)) {
    uniques.add(id);
    cheminsUniques.push(chemin);
  }
}
console.log(
  `Nombre de chemins uniques (après filtrage) : ${cheminsUniques.length}`,
);
cheminsUniques.forEach((chemin, i) => {
  console.log(
    `Chemin unique ${i + 1} :`,
    chemin.map(([x, y]) => `(${x},${y})`).join(" -> "),
  );
});

writeFileSync("chemins.json", JSON.stringify(cheminsUniques, null, 2), "utf-8");
console.log("Chemins uniques exportés dans chemins.json");

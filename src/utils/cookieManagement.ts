// src/utils/cookieManagement.ts

export const initCookie = (name: string, days: number) => {
  const existingCookie = getCookie(name); // Utilisez la fonction getCookie pour vérifier si le cookie existe déjà
  if (!existingCookie) {
    // Vérifie si le cookie n'existe pas
    const encodedValue = encodeURIComponent(JSON.stringify([])); // Encode un tableau vide
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodedValue};${expires};path=/`; // Définit le cookie avec le tableau vide
  }
};

export const getCookie = (name: string) => {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(name + "="));
  if (cookie) {
    const value = cookie.split("=")[1];
    try {
      return JSON.parse(decodeURIComponent(value));
    } catch (e) {
      console.error("Erreur de parsing du cookie:", e);
      return undefined;
    }
  }
  return undefined; // Retourne undefined si le cookie n'est pas trouvé
};

export const setCookie = (name: string, value: number, days: number) => {
  const existingValues = getCookie(name); // Récupère le tableau actuel ou un tableau vide
  if (!existingValues.includes(value)) {
    // Vérifie si la valeur n'est pas déjà présente
    existingValues.push(value); // Ajoute la nouvelle valeur au tableau
    const encodedValue = encodeURIComponent(JSON.stringify(existingValues)); // Encode le tableau mis à jour
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${encodedValue};${expires};path=/`; // Met à jour le cookie
  }
};

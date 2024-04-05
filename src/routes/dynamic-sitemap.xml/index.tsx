// src/routes/dynamic-sitemap.xml/index.tsx

import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  const validRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => typeof route === "string")
    .filter((route) => !route.includes("dynamic-sitemap.xml")) // Exclure la route du sitemap
    .filter((route, index, self) => self.indexOf(route) === index); // Supprimer les doublons

  // Supprimez /learn de validRoutes s'il y est déjà pour éviter de le dupliquer
  const filteredRoutes = validRoutes.filter((route) => route !== "/learn");

  const sitemap = createSitemap([
    { loc: "/", priority: 1 },
    { loc: "/learn", priority: 0.8 }, // Ajouté manuellement
    ...filteredRoutes.map((route) => ({
      loc: route,
      priority: 0.7,
    })),
  ]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });

  ev.send(response);
};

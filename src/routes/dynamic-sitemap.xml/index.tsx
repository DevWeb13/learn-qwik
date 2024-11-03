// src/routes/dynamic-sitemap.xml/index.tsx

import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  const learnRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route.startsWith("learn/dashboard-app/"));

  const privacyPolicy = "/privacy/";
  learnRoutes.push(privacyPolicy);

  // Définissez le nombre de pages de blog dynamiquement
  const totalBlogPages = 30; // ou une valeur récupérée dynamiquement
  const blogPages = Array.from(
    { length: totalBlogPages },
    (_, i) => `/blog/?page=${i + 1}`,
  );

  // Créez le sitemap avec toutes les routes
  const sitemap = createSitemap([
    { loc: "/", priority: 1 },
    ...learnRoutes.map((route) => ({
      loc: route,
      priority: 0.9,
    })),
    ...blogPages.map((page) => ({
      loc: page,
      priority: 0.8, // Priorité plus faible pour les pages de blog si nécessaire
    })),
  ]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });

  ev.send(response);
};

// src/routes/dynamic-sitemap.xml/index.tsx

import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  const allRoutes = routes.map(([route]) => route as string);

  const learnRoutes2026 = allRoutes.filter((route) =>
    route.startsWith("learn/dashboard-app-2026/"),
  );

  const starterPackRoutes = allRoutes.filter((route) =>
    route.startsWith("starter-pack/"),
  );

  const blogRoutes = allRoutes.filter((route) => route.startsWith("blog/"));

  const learnRoutes = allRoutes.filter((route) =>
    route.startsWith("learn/dashboard-app/"),
  );

  const sitemap = createSitemap([
    { loc: "/", priority: 1 },

    ...starterPackRoutes.map((route) => ({
      loc: route,
      priority: 1,
    })),

    ...learnRoutes2026.map((route) => ({
      loc: route,
      priority: 1,
    })),

    ...blogRoutes.map((route) => ({
      loc: `/${route}`,
      priority: 0.9,
    })),

    ...learnRoutes.map((route) => ({
      loc: route,
      priority: 0.8,
    })),

    {
      loc: "/releases/",
      priority: 0.7,
    },
  ]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });

  ev.send(response);
};

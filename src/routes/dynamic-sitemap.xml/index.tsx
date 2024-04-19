// src/routes/dynamic-sitemap.xml/index.tsx

import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  // console.log({ routes });

  const learnRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route.startsWith("learn/dashboard-app"));

  // console.log({ learnRoutes });

  const sitemap = createSitemap([
    { loc: "/", priority: 1 },
    ...learnRoutes.map((route) => ({
      loc: route,
      priority: 0.9,
    })),
  ]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });

  ev.send(response);
};

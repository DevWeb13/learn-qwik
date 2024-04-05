import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  const blogRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route.startsWith("/learn"));

  const sitemap = createSitemap([
    { loc: "/", priority: 1 },
    // { loc: "/learn", priority: 0.8 },
    ...blogRoutes.map((route) => ({
      loc: route,
      priority: 0.8,
    })),
  ]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });

  ev.send(response);
};

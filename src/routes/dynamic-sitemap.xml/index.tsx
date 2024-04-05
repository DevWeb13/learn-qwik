import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  // const blogRoutes = routes
  //   .map(([route]) => route as string)
  //   .filter((route) => route.startsWith("/"));

  const sitemap = createSitemap([
    { loc: "/", priority: 1 },
    { loc: "/learn", priority: 0.8 },
    ...routes.map((route) => ({
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

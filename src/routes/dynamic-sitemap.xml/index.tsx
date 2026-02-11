// src/routes/dynamic-sitemap.xml/index.tsx

import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  console.log("Generating sitemap.xml...");
  console.log(
    "Available routes:",
    routes.map(([route]) => route),
  );
  const learnRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route.startsWith("learn/dashboard-app/"));

  const blogRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route.startsWith("blog/"));

  const totalReleasesPages = 30;
  const releasePages = Array.from({ length: totalReleasesPages }, (_, i) =>
    i === 0 ? "/releases/" : `/releases/?page=${i + 1}`,
  );

  const privacyPolicyAndTermsOfUseRoute = routes
    .map(([route]) => route as string)
    .filter(
      (route) => route === "privacy-policy/" || route === "terms-of-use/",
    );

  const accountRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route.startsWith("account/"));

  const sitemap = createSitemap([
    { loc: "/", priority: 1 },
    ...learnRoutes.map((route) => ({
      loc: route,
      priority: 0.9,
    })),
    ...blogRoutes.map((route) => ({
      loc: `/${route}`,
      priority: 0.8,
    })),
    ...releasePages.map((page) => ({
      loc: page,
      priority: 0.7,
    })),
    ...accountRoutes.map((route) => ({
      loc: route,
      priority: 0.7,
    })),
    ...privacyPolicyAndTermsOfUseRoute.map((route) => ({
      loc: route,
      priority: 0.6,
    })),
  ]);

  const response = new Response(sitemap, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });

  ev.send(response);
};

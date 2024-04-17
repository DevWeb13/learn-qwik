// src/routes/dynamic-sitemap.xml/index.tsx

import type { RequestHandler } from "@builder.io/qwik-city";
import { routes } from "@qwik-city-plan";
import { createSitemap } from "./create-sitemap";

export const onGet: RequestHandler = (ev) => {
  // const validRoutes = routes
  //   .map(([route]) => route as string)
  //   .filter((route) => typeof route === "string")
  //   .filter((route) => !route.includes("dynamic-sitemap.xml")); // Exclure la route du sitemap

  console.log({ routes });

  const learnRoutes = routes
    .map(([route]) => route as string)
    .filter((route) => route.startsWith("learn/dashboard-app"));

  console.log({ learnRoutes });

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

// src/routes/dynamic-sitemap.xml/index.tsx

// import type { RequestHandler } from "@builder.io/qwik-city";
// import { routes } from "@qwik-city-plan";
// import { createSitemap } from "./create-sitemap";

// export const onGet: RequestHandler = (ev) => {
//   const learnRoutes = routes
//     .map(([route]) => `https://www.learn-qwik.com${route}` as string) // Préfixer les routes avec l'URL complète
//     .filter((route) =>
//       route.startsWith("https://www.learn-qwik.com/learn/dashboard-app"),
//     );

//   const sitemap = createSitemap([
//     { loc: "https://www.learn-qwik.com/", priority: 1 },
//     ...learnRoutes.map((route) => ({
//       loc: route,
//       priority: 0.8, // Ajuster la priorité si nécessaire
//     })),
//   ]);

//   const response = new Response(sitemap, {
//     status: 200,
//     headers: { "Content-Type": "text/xml" },
//   });

//   ev.send(response);
// };

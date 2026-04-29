// src/routes/learn/dashboard-app-2026/icons-and-svg-components-2026/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import { IconsAndSVGComponentsContent2026 } from "~/components/learn/dashboardApp2026/IconsAndSVGComponentsContent2026/iconsAndSVGComponentsContent2026";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";
import { createBreadcrumbSchema } from "~/utils/structuredData";

export default component$(() => {
  return <IconsAndSVGComponentsContent2026 />;
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Qwik Icons and SVG Components | 2026 Tutorial",
  description:
    "Add icons to a Qwik app with icon packages and custom SVG components. Learn when to use libraries, inline SVG, and reusable components.",
  imageUrl: "https://www.learn-qwik.com/meta-chapter-3-2026.png",
  url: "https://www.learn-qwik.com/learn/dashboard-app-2026/icons-and-svg-components-2026/",
  type: "website",
  structuredData: [
    createBreadcrumbSchema([
      { name: "Home", item: "https://www.learn-qwik.com/" },
      {
        name: "2026 Edition: Build a Modern Full-Stack Dashboard App",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/",
      },
      {
        name: "Chapter 3: Icons and SVG Components 2026",
        item: "https://www.learn-qwik.com/learn/dashboard-app-2026/icons-and-svg-components-2026/",
      },
    ]),
  ],
});

// src/routes/learn/dashboard-app/optimizing-fonts-and-images/index.tsx

import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import OptimizingFontsAndImagesContent from "~/components/learn/dashboardApp/optimizing-fonts-and-images-content/optimizing-fonts-and-images-content";

export default component$(() => {
  return <OptimizingFontsAndImagesContent />;
});

export const head: DocumentHead = {
  title: "Learn Qwik | Optimizing Fonts and Images",
  meta: [
    {
      name: "description",
      content:
        "Continue working on your home page by adding a hero image and a custom font.",
    },
  ],
};

// src/components/blog/cardNewsSkeleton.tsx

import { component$, useStylesScoped$ } from "@builder.io/qwik";

export const CardNewsSkeleton = component$(() => {
  useStylesScoped$(`
    @keyframes loading {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }

    .skeleton {
      background: linear-gradient(90deg, #e2e8f0 25%, #f7fafc 50%, #e2e8f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
      border-radius: 4px;
    }

    .skeleton-text {
      height: 1em;
      background: #cbd5e0;
      border-radius: 4px;
    }

    .skeleton-header {
      width: 80%;
      margin-bottom: 8px;
    }

    .skeleton-body {
      width: 100%;
      margin-top: 8px;
    }

    
  `);

  return (
    <article class="skeleton mb-4 min-h-[300px] overflow-hidden rounded-lg border border-gray-300 p-4 shadow-md">
      <div class="flex items-center justify-between">
        <p class="skeleton-text skeleton-header"></p>
      </div>
      <div class="skeleton-text skeleton-header mt-2 block"></div>
      <div class="skeleton-text skeleton-body mt-2"></div>
      <div class="skeleton-text skeleton-body mt-2"></div>
      <div class="skeleton-text skeleton-body mt-2"></div>
    </article>
  );
});

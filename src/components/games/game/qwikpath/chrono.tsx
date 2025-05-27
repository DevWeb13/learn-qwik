// src/components/games/game/qwikpath/chrono.tsx

import type { Signal } from "@builder.io/qwik";
import {
  $,
  component$,
  useOnDocument,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";

export const Chrono = component$<{
  gameStarted: Signal<boolean>;
  elapsedSeconds: Signal<number>;
  isSolved: Signal<boolean>;
}>(({ gameStarted, elapsedSeconds, isSolved }) => {
  const isTabVisible = useSignal(true);
  const intervalRef = useSignal<number>();

  // Pause le chrono si l’onglet est caché
  useOnDocument(
    "visibilitychange",
    $(() => {
      isTabVisible.value = !document.hidden;
    }),
  );

  // Gère le timer
  useVisibleTask$(({ cleanup }) => {
    intervalRef.value = window.setInterval(() => {
      if (gameStarted.value && !isSolved.value && isTabVisible.value) {
        elapsedSeconds.value += 1;
      }
    }, 1000);

    cleanup(() => clearInterval(intervalRef.value));
  });

  return (
    <p class="mb-4 text-center text-sm font-semibold text-gray-700">
      Time: {String(Math.floor(elapsedSeconds.value / 60)).padStart(2, "0")}:
      {String(elapsedSeconds.value % 60).padStart(2, "0")}
    </p>
  );
});

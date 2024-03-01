import { useSignal, useOnWindow, $ } from "@builder.io/qwik";

export function useScrollYPosition() {
  const position = useSignal(0);
  useOnWindow(
    "scroll",
    $(() => {
      // Accès direct à window.scrollY pour obtenir la position de défilement verticale
      const scrollY = window.scrollY;
      position.value = scrollY;
    }),
  );
  return position;
}

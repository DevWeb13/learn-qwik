import { component$, Slot } from "@builder.io/qwik";

interface InfoBox2026Props {
  emoji: string;
  colorVar: string; // ex: "--qwik-light-purple"
}

export const InfoBox2026 = component$<InfoBox2026Props>(
  ({ emoji, colorVar }) => {
    return (
      <div
        class="flex items-center gap-2 p-3"
        style={{
          outline: `2px solid var(${colorVar})`,
          backgroundColor: `color-mix(in srgb, var(${colorVar}) 10%, transparent)`,
        }}
      >
        <span class="text-2xl">{emoji}</span>
        <p class="m-0">
          <Slot />
        </p>
      </div>
    );
  },
);

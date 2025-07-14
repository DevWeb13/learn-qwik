import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white  font-retro md:px-12">
      <Slot />
    </div>
  );
});

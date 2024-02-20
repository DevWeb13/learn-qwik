import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <main>
      <div>
        <div class="flex flex-col items-center px-4">
          <h1 class="mb-4 max-w-[80%] text-center text-4xl font-semibold md:mb-8 md:max-w-[100%] md:text-6xl">
            Start building with{" "}
            <a
              href="https://qwik.dev"
              class="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Qwik
            </a>
          </h1>
          <div class="max-w-xl text-center text-gray-900 md:mb-16">
            Go from beginner to expert by learning the foundations of Qwik and
            building a fully functional demo website that uses all the latest
            features.
          </div>
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

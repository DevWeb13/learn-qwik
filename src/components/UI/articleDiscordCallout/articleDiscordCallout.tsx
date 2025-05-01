import { component$ } from "@builder.io/qwik";

export const ArticleDiscordCallout = component$(() => {
  return (
    <div class="mt-12 rounded-lg border border-blue-200 bg-blue-50 p-6 text-center text-blue-900 shadow-sm">
      <p class="text-lg font-semibold">Have questions, issues, or feedback?</p>
      <p class="mt-2">
        Join our{" "}
        <a
          href="https://discord.gg/cZBNKyeeNq"
          target="_blank"
          class="text-blue-600 underline hover:text-blue-800"
        >
          official Learn Qwik Discord server
        </a>{" "}
        to get help and connect with the community.
      </p>
    </div>
  );
});

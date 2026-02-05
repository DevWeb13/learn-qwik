// src/components/blog/articles/openai-codex-app-beginners.tsx

import { component$ } from "@builder.io/qwik";

import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import { BackButton } from "~/components/UI/backButton/backButton";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

import MetaOpenAICodexApp from "~/assets/img/openai-codex-app/metaOpenAICodexApp.png?jsx";

export const OpenAICodexAppBeginnersArticle = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <main class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <header class="flex flex-col items-center gap-2 px-4 md:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold md:max-w-[100%] md:text-5xl">
          Codex App explained for beginners
        </h1>
        <h2 class="max-w-[80%] text-center text-2xl font-semibold text-gray-800 md:max-w-[100%] md:text-4xl">
          From AI assistant to AI worker
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          Codex App is not about writing code faster. It is about changing who
          actually does the work.
        </p>
        <p class="mt-1 max-w-xl text-center text-sm text-gray-600">
          Note: Learn Qwik usually focuses on the Qwik framework. This article
          is a short off-topic piece exploring a broader trend in software
          development and AI tooling.
        </p>
      </header>

      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaOpenAICodexApp
                  class="h-full w-full object-contain object-center"
                  alt="OpenAI Codex App overview"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Codex App introduces an agent-based approach to software
                  development
                </figcaption>
              </figure>

              <section class="my-8 rounded-lg border border-gray-200 bg-gray-50 p-6">
                <h3 class="mb-4 text-xl font-semibold text-gray-900">
                  Codex App | Quick facts
                </h3>

                <ul class="space-y-2 text-gray-800">
                  <li>Product: OpenAI Codex App</li>
                  <li>
                    Type: Desktop application for AI-driven software development
                  </li>
                  <li>
                    Main purpose: Coordinate multiple AI agents on the same
                    codebase
                  </li>
                  <li>
                    Key feature: Parallel agents with isolated Git worktrees
                  </li>
                  <li>
                    User role: Review, validate, and merge AI-generated changes
                  </li>
                  <li>Not designed for: Learning programming from scratch</li>
                  <li>Current availability: macOS only</li>
                  <li>Linux support: Not announced</li>
                </ul>
              </section>

              <h3>The real problem Codex App tries to solve</h3>
              <p>
                Most AI coding tools are built around a simple interaction
                pattern. You ask a question, the AI generates code, and then you
                take over. This works well for small tasks, isolated snippets,
                or quick experiments.
              </p>
              <p>
                The problem appears as soon as a project grows beyond a few
                files. Real software development is not mainly about writing
                code. It is about managing change over time. Files evolve,
                features interact, bugs appear in unexpected places, and ideas
                compete with each other.
              </p>
              <p>
                In practice, developers spend a large part of their time
                coordinating work. They review changes, compare approaches,
                revert experiments, and keep mental models of what the code is
                supposed to do. The bottleneck is not typing speed. The
                bottleneck is cognitive load.
              </p>
              <p>
                Codex App is designed around this reality. It does not try to
                help you write code faster. It tries to reduce the cost of
                managing multiple changes and ideas at the same time.
              </p>

              <h3>What Codex App actually is</h3>
              <p>
                Codex App is not a chat interface and it is not a traditional
                IDE. It is an environment built to coordinate multiple AI agents
                working on the same project.
              </p>
              <p>
                Each agent is given a specific task and works in its own
                isolated version of the codebase. This isolation is essential.
                It allows the AI to explore ideas, refactor code, or fix bugs
                without putting the main project at risk.
              </p>
              <p>
                Instead of directly changing your files, Codex App produces
                concrete proposals. You can inspect what was changed, understand
                why it was changed, and decide whether it should be merged or
                discarded.
              </p>
              <p>
                The important point is responsibility. The AI does the
                execution, but the developer remains the decision-maker. Codex
                App is about delegation, not abdication.
              </p>

              <h3>How this is different from ChatGPT</h3>
              <p>
                ChatGPT is fundamentally conversational. You describe a problem,
                it replies with an answer, and then it waits. Even when it
                generates code, the workflow is still centered around
                discussion.
              </p>
              <p>
                Codex App shifts this model. Instead of asking for suggestions,
                you assign work. The AI runs tasks in the background, modifies
                code in isolated environments, and returns results that can be
                reviewed.
              </p>
              <p>
                This difference matters because it changes how you interact with
                the tool. You stop thinking in terms of prompts and start
                thinking in terms of tasks and outcomes. The mental model is
                closer to managing a junior developer than chatting with an
                assistant.
              </p>

              <h3>What beginners should understand</h3>
              <p>
                Codex App is not designed to teach programming concepts from
                scratch. It does not explain syntax, fundamentals, or best
                practices in a step by step manner.
              </p>
              <p>
                Its purpose is to help ship real projects with less manual
                effort. That means it assumes you already have a basic
                understanding of how software projects are structured, even if
                you are still early in your learning journey.
              </p>
              <p>
                For beginners, the key lesson is not about automation. It is
                about structure. Codex App makes visible something that is often
                hidden: most of the work in software development happens around
                the code, not inside individual lines of code.
              </p>

              <h3>The mental shift that matters</h3>
              <p>
                Codex App changes the role of the developer. You move from
                writing everything yourself to guiding, validating, and
                deciding.
              </p>
              <p>
                This does not make developers less important. It makes their
                judgment more central. You are responsible for defining goals,
                evaluating trade-offs, and accepting or rejecting changes.
              </p>
              <p>
                In that sense, Codex App does not replace developers. It
                amplifies the parts of the job that require understanding and
                responsibility, while delegating repetitive execution to
                machines.
              </p>

              <h3>One sentence summary</h3>
              <p>
                Codex App turns AI into a worker that executes tasks, while the
                developer remains the one who thinks, decides, and takes
                responsibility.
              </p>

              <ArticleDiscordCallout />

              <section class="mt-8 text-sm text-gray-600">
                <p>
                  Source:{" "}
                  <a
                    href="https://openai.com/index/introducing-the-codex-app/"
                    class="underline hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Introducing the Codex App | Official OpenAI announcement
                  </a>
                </p>
              </section>
            </article>
          </div>
        </div>
        <BackButton />
        {!isSubscribed && <DesktopStickyAd />}
      </div>
      {!isSubscribed && <MobileStickyAd />}
    </main>
  );
});

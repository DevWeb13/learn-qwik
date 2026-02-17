// src/components/learn/dashboardApp2026/dashboardApp2026Content.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import BlankLink from "~/components/UI/blankLink/blankLink";
import Feedback from "~/components/UI/feedback/feedback";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";

import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions from "~/assets/img/dashboard.png?jsx";
import GoToNextChapterBlock2026 from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock2026";

export default component$(() => {
  return (
    <article class="mt-8 w-full max-w-6xl">
      <div class="prose prose-vercel max-w-none">
        <h1>Learn Qwik | Interactive Dashboard Overview (2026 Edition)</h1>

        <p>
          Welcome to the updated 2026 edition of the Qwik course. In this
          interactive course, you'll learn the main features of Qwik by building
          a full-stack web application from scratch.
        </p>

        <SubtitleWithAnchor
          id="what-well-be-building"
          title="What we'll be building"
        />

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions
            alt="Screenshots of the dashboard project showing desktop and mobile versions."
            class="rounded-md"
          />
        </figure>

        <p>
          In this course, we will build a simplified financial dashboard that
          includes:
        </p>

        <ul>
          <li>A public home page.</li>
          <li>A login page.</li>
          <li>Protected dashboard pages.</li>
          <li>The ability to add, edit, and delete invoices.</li>
        </ul>

        <p>
          The dashboard will also include a database, which you'll configure in{" "}
          <Link href="/learn/dashboard-app-2026/setting-up-your-database/">
            a dedicated chapter
          </Link>
          .
        </p>

        <p>
          By the end of this course, you'll have the essential skills to build
          real-world full-stack Qwik applications.
        </p>

        <SubtitleWithAnchor id="overview" title="Overview" />

        <p>Here’s what you’ll learn:</p>

        <ul>
          <li>
            <strong>Styling:</strong> Different approaches to styling Qwik
            applications.
          </li>
          <li>
            <strong>Optimizations:</strong> How to optimize images, fonts, and
            links.
          </li>
          <li>
            <strong>Routing:</strong> Nested layouts and file-based routing with
            Qwik City.
          </li>
          <li>
            <strong>Data Fetching:</strong> Server loaders, streaming, and best
            practices.
          </li>
          <li>
            <strong>Search & Pagination:</strong> Using URL search params
            effectively.
          </li>
          <li>
            <strong>Mutating Data:</strong> Server actions and UI updates.
          </li>
          <li>
            <strong>Error Handling:</strong> Handling errors and 404 pages.
          </li>
          <li>
            <strong>Form Validation & Accessibility:</strong> Server-side
            validation and accessible forms.
          </li>
          <li>
            <strong>Authentication:</strong> Adding authentication and securing
            user sessions.
          </li>
          <li>
            <strong>Metadata:</strong> Preparing your application for SEO and
            social sharing.
          </li>
        </ul>

        <SubtitleWithAnchor
          id="prerequisite-knowledge"
          title="Prerequisite knowledge"
        />

        <p>
          This course assumes a basic understanding of web development and
          JavaScript. While prior experience with React is not required,
          familiarity with reactive state management and asynchronous
          programming will help you understand Qwik more effectively.
        </p>

        <SubtitleWithAnchor
          id="system-requirements"
          title="System requirements"
        />

        <ul>
          <li>
            Node.js 18.17.0 or later.{" "}
            <BlankLink href="https://nodejs.org/en" text="Download here" />
          </li>
          <li>macOS, Windows (including WSL), or Linux.</li>
          <li>
            A{" "}
            <BlankLink href="https://github.com/join/" text="GitHub account" />{" "}
            and a{" "}
            <BlankLink href="https://vercel.com/signup" text="Vercel account" />
            .
          </li>
        </ul>

        <SubtitleWithAnchor
          id="join-the-conversation"
          title="Join the conversation"
        />

        <p>
          If you have questions or feedback, join the discussion on{" "}
          <BlankLink
            href="https://discord.com/invite/XzMucY7756"
            text="Discord"
          />{" "}
          or contribute on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/learn-qwik/"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="mx-auto my-16 flex w-full max-w-[640px] flex-col items-center gap-6 text-center">
        <h2 class="text-3xl font-semibold">Ready to get started?</h2>
        <p>
          Now that you understand the structure of the course, let's begin
          building the application.
        </p>

        <GoToNextChapterBlock2026
          goToChapter={1}
          title="Getting Started"
          text="Create your Qwik application and run the development server."
        />
      </div>

      <Feedback />

      <div class="mb-24"></div>
    </article>
  );
});

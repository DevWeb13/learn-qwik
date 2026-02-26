// src/components/learn/dashboardApp2026/dashboardApp2026Content.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import BlankLink from "~/components/UI/blankLink/blankLink";
import Feedback from "~/components/UI/feedback/feedback";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";

import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions from "~/assets/img/dashboard.png?jsx";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";

export const DashboardAppContent2026 = component$(() => {
  return (
    <>
      <article class="prose prose-vercel max-w-none">
        <div class="mb-10">
          <h1
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 2.5rem; --text-line-height: 3.5rem; --text-letter-spacing: -0.058125rem; --text-weight: 600;"
          >
            Learn Qwik | Interactive Dashboard Overview |{" "}
            <span class="text-(--qwik-dark-blue)">2026 Edition</span>
          </h1>
        </div>
        <p>
          Welcome to the Qwik course. In this free interactive experience, you
          will learn the core concepts of Qwik by building a complete full-stack
          web application from scratch. Not a toy example, but a real
          application with authentication, database integration, and production
          ready patterns.
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
          Throughout this course, you will build a simplified financial
          dashboard that includes:
        </p>

        <ul>
          <li>A public home page.</li>
          <li>A login page.</li>
          <li>Protected dashboard routes.</li>
          <li>The ability to create, edit, and delete invoices.</li>
        </ul>

        <p>
          The application will also include a real database, which you will
          configure in{" "}
          <Link href="/learn/dashboard-app-2026/setting-up-your-database-2026/">
            a dedicated chapter
          </Link>
          .
        </p>

        <p>
          By the end of this course, you will understand how Qwik handles
          rendering, routing, data loading, mutations, and performance
          optimization. You will be able to build real-world full-stack Qwik
          applications with confidence.
        </p>

        <SubtitleWithAnchor id="overview" title="Overview" />

        <p>Here is what you will learn:</p>

        <ul>
          <li>
            <strong>Styling:</strong> Modern approaches to styling Qwik
            applications.
          </li>
          <li>
            <strong>Performance and Optimization:</strong> Working with images,
            fonts, links, and resumability best practices.
          </li>
          <li>
            <strong>Routing:</strong> Nested layouts and file-based routing with
            Qwik City.
          </li>
          <li>
            <strong>Data Fetching:</strong> Server loaders, streaming, and clean
            architecture patterns.
          </li>
          <li>
            <strong>Search and Pagination:</strong> Using URL search parameters
            effectively.
          </li>
          <li>
            <strong>Data Mutations:</strong> Server actions and reactive UI
            updates.
          </li>
          <li>
            <strong>Error Handling:</strong> Building robust error states and
            handling 404 pages.
          </li>
          <li>
            <strong>Forms and Accessibility:</strong> Server-side validation and
            accessible user interfaces.
          </li>
          <li>
            <strong>Authentication:</strong> Securing sessions and protecting
            routes.
          </li>
          <li>
            <strong>Metadata and SEO:</strong> Preparing your application for
            search engines and social sharing.
          </li>
        </ul>

        <SubtitleWithAnchor
          id="prerequisite-knowledge"
          title="Prerequisite knowledge"
        />

        <p>
          You should be comfortable with basic HTML, CSS, and modern JavaScript.
          Understanding asynchronous programming with promises and async await
          is important. Prior experience with React or another reactive
          framework is helpful but not required.
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
          <li>macOS, Windows including WSL, or Linux.</li>
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
          Have questions or feedback? Join the discussion on{" "}
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
      </article>

      <div class="mx-auto my-16 flex w-full max-w-160 flex-col items-center gap-6 text-center">
        <h2 class="text-3xl font-semibold">Ready to get started?</h2>
        <p>
          Now that you understand what we will build and what you will learn,
          let us begin creating the application.
        </p>

        <GoToNextChapterBlock
          version="2026"
          goToChapter={1}
          title="Getting Started"
          text="Create your Qwik application and run the development server."
        />
      </div>

      <Feedback />

      <div class="mb-24"></div>
    </>
  );
});

// src/components/learn/dashboardApp2026/dashboardApp2026Content.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import BlankLink from "~/components/UI/blankLink/blankLink";
import Feedback from "~/components/UI/feedback/feedback";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";

import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions from "~/assets/img/dashboard.png?jsx";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";

export const DashboardAppContent2026 = component$(() => {
  return (
    <>
      <article class="prose prose-vercel max-w-none">
        <div class="mb-10">
          <PageTitle version="2026 Edition" />
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

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <div
          aria-hidden="true"
          class="mx-auto h-32 w-px bg-linear-to-t from-blue-300 md:h-48"
        ></div>
        <div
          aria-hidden="true"
          class="relative flex h-24 w-24 items-center justify-center rounded-full bg-blue-300 text-[48px] font-semibold text-blue-900  md:h-32 md:w-32 md:text-[72px]"
        >
          <svg
            class="with-icon_icon__MHUeb"
            data-testid="geist-icon"
            fill="none"
            height="24"
            shape-rendering="geometricPrecision"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            width="24"
            style="color: currentcolor; width: 64px; height: 64px;"
          >
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"></path>
          </svg>
        </div>
        <h2
          class="text_wrapper block pb-2 pt-8"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
        >
          Ready to get started?
        </h2>
        <div class="text-center">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial;"
          >
            Now that you understand what we will build and what you will learn,
            let us begin creating the application.
          </p>
        </div>
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

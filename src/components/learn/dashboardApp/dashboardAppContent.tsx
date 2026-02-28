// src/components/learn/dashboardApp/dashboardAppContent.tsx

import { component$ } from "@builder.io/qwik";

import BlankLink from "~/components/UI/blankLink/blankLink";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";

import { Link } from "@builder.io/qwik-city";
import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions from "~/assets/img/dashboard.png?jsx";

export default component$(() => {
  return (
    <>
      <article class="prose prose-vercel max-w-none">
        <div class="mb-10">
          <h1
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 2.5rem; --text-line-height: 3.5rem; --text-letter-spacing: -0.058125rem; --text-weight: 600;"
          >
            Learn Qwik | Interactive Dashboard Overview
          </h1>
        </div>
        <p>
          Welcome to the Qwik course! In this free interactive course, you'll
          learn the main features of Qwik by building a full-stack web
          application.
        </p>
        <SubtitleWithAnchor
          id="what-well-be-building"
          title="What we'll be building"
        />

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions
            alt="Screenshots of the dashboard project showing desktop and mobile versions."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          For this course, we'll be building a simplified version of the
          financial dashboard that has:
        </p>
        <ul>
          <li>A public home page.</li>
          <li>A login page.</li>
          <li>Dashboard pages that are protected by authentication.</li>
          <li>The ability for users to add, edit, and delete invoices.</li>
        </ul>

        <p>
          The dashboard will also have an accompanying database, which you'll
          set up in{" "}
          <Link href="/learn/dashboard-app/setting-up-your-database/">
            a later chapter
          </Link>
          .
        </p>

        <p>
          By the end of the course, you'll have the essential skills needed to
          start building full-stack Qwik applications.
        </p>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor id="overview" title="Overview" />

        <p>Here's an overview of features you'll learn about in this course:</p>
        <ul>
          <li>
            <strong>Styling</strong>: The different ways to style your
            application in Qwik.
          </li>
          <li>
            <strong>Optimizations</strong>: How to optimize images, links, and
            fonts.
          </li>
          <li>
            <strong>Routing</strong>: How to create nested layouts and pages
            using file-system routing.
          </li>
          <li>
            <strong>Data Fetching</strong>: How to set up a database on Vercel,
            and best practices for fetching and streaming.
          </li>
          <li>
            <strong>Search and Pagination</strong>: How to implement search and
            pagination using URL Search Params.
          </li>
          <li>
            <strong>Mutating Data:</strong>: How to mutate data using Qwik
            endpoints and client-side fetchers for dynamic and efficient UI
            updating.
          </li>
          <li>
            <strong>Error Handling:</strong> How to handle general and{" "}
            <code>404</code> not found errors.
          </li>
          <li>
            <strong>Form Validation and Accessibility:</strong> How to do
            server-side form validation and tips for improving accessibility.
          </li>
          <li>
            <strong>Authentication</strong>: How to add authentication to your
            app using{" "}
            <a href="https://authjs.dev/" rel="noopener " target="_blank">
              <code>Auth0</code>
              <span class="inline-flex">
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
                  style="color: currentcolor; width: 14px; height: 14px;"
                >
                  <path d="M7 17L17 7"></path>
                  <path d="M7 7h10v10"></path>
                </svg>
              </span>
            </a>{" "}
            with Qwik integrations to secure and manage user sessions
            efficiently.
          </li>
          <li>
            <strong>Metadata</strong>: How to add metadata and prepare your
            application for social sharing.
          </li>
        </ul>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor
          id="prerequisite-knowledge"
          title="Prerequisite knowledge"
        />

        <p>
          This course assumes you have a basic understanding of web development
          and JavaScript. If you're new to modern web frameworks, we recommend
          familiarizing yourself with the fundamentals of web components,
          reactive state management, and asynchronous programming. While Qwik
          does not require{" "}
          <BlankLink
            href="https://nextjs.org/learn/react-foundations"
            text="React"
          />{" "}
          knowledge, understanding these concepts will help you grasp Qwik's
          unique features more effectively.
        </p>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor
          id="system-requirements"
          title="System requirements"
        />

        <p>
          Before you start this course, make sure your system meets the
          following requirements:
        </p>
        <ul>
          <li>
            Node.js 18.17.0 or later installed.{" "}
            <BlankLink href="https://nodejs.org/en" text="Download here" />.
          </li>
          <li>Operating systems: macOS, Windows (including WSL), or Linux.</li>
        </ul>
        <p>
          In addition, you'll also need a{" "}
          <BlankLink href="https://github.com/join/" text="GitHub Account" />{" "}
          and a{" "}
          <BlankLink href="https://vercel.com/signup" text="Vercel Account" />.
          .
        </p>

        {/* <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div> */}

        <SubtitleWithAnchor
          id="join-the-conversation"
          title="Join the conversation"
        />

        <p>
          If you have questions about this course or would like to provide
          feedback, you can ask our community on{" "}
          <BlankLink
            href="https://discord.com/invite/XzMucY7756"
            text="Discord"
          />{" "}
          or{" "}
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
            Now that you've been introduced to the course, let's dive in.
          </p>
        </div>
        <GoToNextChapterBlock
          version="Legacy"
          goToChapter={1}
          title="Getting Started"
          text="Learn how to create a Qwik application and run your local
          development server."
        />
      </div>

      <Feedback />

      <div class="mb-10 md:mb-30"></div>
    </>
  );
});

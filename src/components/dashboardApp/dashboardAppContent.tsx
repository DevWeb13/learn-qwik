import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions from "~/assets/img/dashboard.avif?jsx";
import Feedback from "../UI/feedback/feedback";
import Popover from "~/lib/qwikUI/popover/popover";

export default component$(() => {
  useStyles$(`
  .prose :where(h2):not(:where([class~=not-prose] *)) {
      color: var(--tw-prose-headings);
      font-weight: 700;
      font-size: 1.5em;
      margin-top: 2em;
      margin-bottom: 1em;
      line-height: 1.3333333;
  }
  .prose-vercel :where(h2):not(:where([class~=not-prose] *)) {
      font-weight: 600;
      scroll-margin-top: 51px;
  }
  .prose-vercel :where(h2:not(:is(h1+h2))):not(:where([class~=not-prose] *)) {
    border-top-style: solid;
    border-top-width: 1px;
    border-color: var(--ds-gray-200);
    padding-top: 2.5rem;
    scroll-margin-top: 50px;
}
.prose-vercel :where([data-docs-heading]):not(:where([class~=not-prose] *)) a span {
  display: inline-flex;
  margin-left: 0.375rem;
  visibility: hidden;
  opacity: 0;
}
.prose-vercel :where([data-docs-heading]):not(:where([class~=not-prose] *)) a:hover span {
  visibility: visible;
  opacity: 1;
}

.prose :where(figure):not(:where([class~=not-prose] *)) {
  margin-top: 2em;
  margin-bottom: 2em;
}

.prose :where(h2+*):not(:where([class~=not-prose] *)) {
  margin-top: 0;
}



.prose :where(p):not(:where([class~=not-prose] *)) {
  margin-top: 1.25em;
  margin-bottom: 1.25em;
}

.prose :where(ul):not(:where([class~=not-prose] *)) {
  list-style-type: disc;
  margin-top: 1.25em;
  margin-bottom: 1.25em;
  padding-left: 1.625em;
}

.prose :where(li):not(:where([class~=not-prose] *)) {
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}
.prose :where(ul>li):not(:where([class~=not-prose] *)) {
  padding-left: 0.375em;
}

.prose :where(a):not(:where([class~=not-prose] *)) {
  color: var(--tw-prose-links);
  text-decoration: underline;
  font-weight: 500;
}
.prose-vercel :where(a):not(:where([class~=not-prose] *)) {
  text-decoration: none;
  font-weight: inherit;
}
.prose-vercel :where([data-docs-heading]):not(:where([class~=not-prose] *)) a {
  color: inherit;
}
@media (hover: hover){

  a:hover {
      color: #68b5fb;
  }
}


  `);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <div class="mb-10">
          <h1
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 2.5rem; --text-line-height: 3.5rem; --text-letter-spacing: -0.058125rem; --text-weight: 600;"
          >
            Learn Qwik
          </h1>
        </div>
        <p>
          Welcome to the Qwik course! In this free interactive course, you'll
          learn the main features of Qwik by building a full-stack web
          application.
        </p>
        <h2 id="what-well-be-building" data-docs-heading="">
          <Link href="#what-well-be-building">
            What we'll be building
            <span>
              <svg viewBox="0 0 16 16" height="0.7em" width="0.7em">
                <g stroke-width="1.2" fill="none" stroke="currentColor">
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                  ></path>
                </g>
              </svg>
            </span>
          </Link>
        </h2>
        <figure>
          <ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions
            alt="Screenshots of the dashboard project showing desktop and mobile versions."
            class="block rounded-md border border-gray-200 bg-gray-100 dark:hidden"
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
        <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/22">
          <p>
            The dashboard will also have an accompanying database, which you'll
            set up in{" "}
            <span class="text-cyan-500">
              {/* <Link href="/learn/dashboard-app/setting-up-your-database"> */}
              a later chapter
            </span>
            {/* </Link> */}.
          </p>
        </Popover>
        <p>
          By the end of the course, you'll have the essential skills needed to
          start building full-stack Qwik applications.
        </p>
        <h2 id="overview" data-docs-heading="">
          <a href="#overview">
            Overview
            <span>
              <svg viewBox="0 0 16 16" height="0.7em" width="0.7em">
                <g stroke-width="1.2" fill="none" stroke="currentColor">
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </h2>
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
            <a
              href="https://authjs.dev/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
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
        <h2 id="prerequisite-knowledge" data-docs-heading="">
          <a href="#prerequisite-knowledge">
            Prerequisite knowledge
            <span>
              <svg viewBox="0 0 16 16" height="0.7em" width="0.7em">
                <g stroke-width="1.2" fill="none" stroke="currentColor">
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </h2>
        <p>
          This course assumes you have a basic understanding of web development
          and JavaScript. If you're new to modern web frameworks, we recommend
          familiarizing yourself with the fundamentals of web components,
          reactive state management, and asynchronous programming. While Qwik
          does not require{" "}
          <Link
            href="https://nextjs.org/learn/react-foundations"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            React
          </Link>{" "}
          knowledge, understanding these concepts will help you grasp Qwik's
          unique features more effectively.
        </p>
        <h2 id="system-requirements" data-docs-heading="">
          <a href="#system-requirements">
            System requirements
            <span>
              <svg viewBox="0 0 16 16" height="0.7em" width="0.7em">
                <g stroke-width="1.2" fill="none" stroke="currentColor">
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </h2>
        <p>
          Before you start this course, make sure your system meets the
          following requirements:
        </p>
        <ul>
          <li>
            Node.js 18.17.0 or later installed.{" "}
            <a
              href="https://nodejs.org/en"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              Download here
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
            </a>
            .
          </li>
          <li>Operating systems: macOS, Windows (including WSL), or Linux.</li>
        </ul>
        <p>
          In addition, you'll also need a{" "}
          <a
            href="https://github.com/join/"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            GitHub Account
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
          and a{" "}
          <a
            href="https://vercel.com/signup"
            rel="noopener noreferrer"
            target="_blank"
          >
            Vercel Account
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
          </a>
          .
        </p>
        <h2 id="join-the-conversation" data-docs-heading="">
          <a href="#join-the-conversation">
            Join the conversation
            <span>
              <svg viewBox="0 0 16 16" height="0.7em" width="0.7em">
                <g stroke-width="1.2" fill="none" stroke="currentColor">
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
                  ></path>
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
                  ></path>
                </g>
              </svg>
            </span>
          </a>
        </h2>
        <p>
          If you have questions about this course or would like to provide
          feedback, you can ask our community on{" "}
          <Link
            href="https://discord.gg/XzMucY7756"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            Discord
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
          </Link>{" "}
          or{" "}
          <Link
            href="https://github.com/DevWeb13/learn-qwik"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
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
          </Link>
          .
        </p>
      </div>
      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <div
          aria-hidden="true"
          class="mx-auto h-32 w-[1px] bg-gradient-to-t from-blue-300 md:h-48"
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
        <div class="border-gray-alpha-400 mt-8 flex w-full flex-col items-center justify-center gap-1 rounded-lg border px-4 py-8 shadow-md md:mt-12">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            Next Up
          </p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 1.25rem; --text-line-height: 1.5rem; --text-letter-spacing: -0.020625rem; --text-weight: 600;"
          >
            1: Getting Started
          </p>
          <p
            class="text_wrapper max-w-[540px] pb-4 pt-3 md:pb-6"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; --text-align: center;"
          >
            Learn how to create a Qwik application and run your local
            development server.
          </p>
          <div class="w-full md:w-fit">
            <a
              role="link"
              tabIndex={0}
              href="/learn/dashboard-app/getting-started"
              type="submit"
              class="button_base reset_reset button_button reset_reset button_large button_invert"
              data-geist-button=""
              data-prefix="false"
              data-suffix="true"
              data-version="v1"
              style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
            >
              <span class="button_content">Start Chapter 1</span>
              <span class="button_suffix">
                <svg
                  data-testid="geist-icon"
                  height="16"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  width="16"
                  style="color: currentcolor;"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>

      <Feedback />

      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});

import { component$ } from "@builder.io/qwik";

import ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions from "~/assets/img/dashboard.avif?jsx";

export default component$(() => {
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <div class="mb-10">
          <h1
            class="text_wrapper__i87JK"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 2.5rem; --text-line-height: 3.5rem; --text-letter-spacing: -0.058125rem; --text-weight: 600;"
          >
            Learn Next.js
          </h1>
        </div>
        <p>
          Welcome to the Next.js App Router course! In this free interactive
          course, you'll learn the main features of Next.js by building a
          full-stack web application.
        </p>
        <h2 id="what-well-be-building" data-docs-heading="">
          <a href="#what-well-be-building">
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
          </a>
        </h2>
        <figure>
          <ScreenshotsOfTheDashboardProjectShowingDesktopAndMobileVersions alt="Screenshots of the dashboard project showing desktop and mobile versions." />
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
          <a href="/learn/dashboard-app/setting-up-your-database">
            a later chapter
          </a>
          .
        </p>
        <p>
          By the end of the course, you'll have the essential skills needed to
          start building full-stack Next.js applications.
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
            application in Next.js.
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
            <strong>Mutating Data:</strong> How to mutate data using React
            Server Actions, and revalidate the Next.js cache.
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
            application using{" "}
            <a
              href="https://next-auth.js.org/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              <code>NextAuth.js</code>
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
            and Middleware.
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
          This course assumes you have a basic understanding of React and
          JavaScript. If you're new to React, we recommend going through our{" "}
          <a href="/learn/react-foundations">React Foundations</a> course first
          to learn the fundamentals of React, such as components, props, state,
          and hooks, and newer features like Server Components and Suspense.
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
          <a
            href="https://discord.com/invite/Q3AsD4efFC"
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
          </a>{" "}
          or{" "}
          <a
            href="https://github.com/vercel/next-learn"
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
          </a>
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
          class="text_wrapper__i87JK block pb-2 pt-8"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
        >
          Ready to get started?
        </h2>
        <div class="text-center">
          <p
            class="text_wrapper__i87JK"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial;"
          >
            Now that you've been introduced to the course, let's dive in.
          </p>
        </div>
        <div class="border-gray-alpha-400 mt-8 flex w-full flex-col items-center justify-center gap-1 rounded-lg px-4 py-8 shadow-md md:mt-12">
          <p
            class="text_wrapper__i87JK"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
          >
            Next Up
          </p>
          <p
            class="text_wrapper__i87JK"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --text-size: 1.25rem; --text-line-height: 1.5rem; --text-letter-spacing: -0.020625rem; --text-weight: 600;"
          >
            1: Getting Started
          </p>
          <p
            class="text_wrapper__i87JK max-w-[540px] pb-4 pt-3 md:pb-6"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; --text-align: center;"
          >
            Learn how to create a Next.js application and run your local
            development server.
          </p>
          <div class="w-full md:w-fit">
            <a
              role="link"
              tabIndex={0}
              href="/learn/dashboard-app/getting-started"
              type="submit"
              class="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_large__fuY6E button_invert__YNhnn"
              data-geist-button=""
              data-prefix="false"
              data-suffix="true"
              data-version="v1"
              style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
            >
              <span class="button_content__1aE1_">Start Chapter 1</span>
              <span class="button_suffix__ucg7R">
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
      <div class="feedback_inlineWrapper__DQQFm">
        <div
          class="feedback_inlineTriggerWrapper__o7yUx"
          style="height: 48px; border-radius: 30px;"
        >
          <div class="feedback_trigger__0zjFw">
            <p
              class="text_wrapper__i87JK"
              data-version="v1"
              style="--text-color: var(--ds-gray-1000); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
            >
              Was this helpful?
            </p>
            <span class="feedback_emojisWrapper__iwjKS">
              <button
                aria-checked="false"
                aria-label="Select Love it! emoji"
                class="feedback_emoji__VX_rC"
                role="radio"
                type="button"
              >
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
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.5 8.97498H3.875V9.59998C3.875 11.4747 5.81046 12.8637 7.99817 12.8637C10.1879 12.8637 12.125 11.4832 12.125 9.59998V8.97498H11.5H4.5ZM7.99817 11.6137C6.59406 11.6137 5.63842 10.9482 5.28118 10.225H10.7202C10.3641 10.9504 9.40797 11.6137 7.99817 11.6137Z"
                    fill="currentColor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.15295 4.92093L5.375 3.5L4.59705 4.92093L3 5.21885L4.11625 6.39495L3.90717 8L5.375 7.30593L6.84283 8L6.63375 6.39495L7.75 5.21885L6.15295 4.92093ZM11.403 4.92093L10.625 3.5L9.84705 4.92093L8.25 5.21885L9.36625 6.39495L9.15717 8L10.625 7.30593L12.0928 8L11.8837 6.39495L13 5.21885L11.403 4.92093Z"
                    fill="var(--ds-amber-800)"
                  ></path>
                </svg>
              </button>
              <button
                aria-checked="false"
                aria-label="Select It’s okay emoji"
                class="feedback_emoji__VX_rC"
                role="radio"
                type="button"
              >
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
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.5249 10.8478L11.8727 10.3286L10.8342 9.6329L10.4863 10.1522C9.94904 10.9543 9.0363 11.4802 8.00098 11.4802C6.96759 11.4802 6.05634 10.9563 5.51863 10.1567L5.16986 9.63804L4.13259 10.3356L4.48137 10.8542C5.2414 11.9844 6.53398 12.7302 8.00098 12.7302C9.47073 12.7302 10.7654 11.9816 11.5249 10.8478ZM6.75 6.75C6.75 7.30228 6.30228 7.75 5.75 7.75C5.19772 7.75 4.75 7.30228 4.75 6.75C4.75 6.19772 5.19772 5.75 5.75 5.75C6.30228 5.75 6.75 6.19772 6.75 6.75ZM10.25 7.75C10.8023 7.75 11.25 7.30228 11.25 6.75C11.25 6.19772 10.8023 5.75 10.25 5.75C9.69771 5.75 9.25 6.19772 9.25 6.75C9.25 7.30228 9.69771 7.75 10.25 7.75Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button
                aria-checked="false"
                aria-label="Select Not great emoji"
                class="feedback_emoji__VX_rC"
                role="radio"
                type="button"
              >
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
                    d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM5.75 7.75C6.30228 7.75 6.75 7.30228 6.75 6.75C6.75 6.19772 6.30228 5.75 5.75 5.75C5.19772 5.75 4.75 6.19772 4.75 6.75C4.75 7.30228 5.19772 7.75 5.75 7.75ZM11.25 6.75C11.25 7.30228 10.8023 7.75 10.25 7.75C9.69771 7.75 9.25 7.30228 9.25 6.75C9.25 6.19772 9.69771 5.75 10.25 5.75C10.8023 5.75 11.25 6.19772 11.25 6.75ZM11.5249 11.2622L11.8727 11.7814L10.8342 12.4771L10.4863 11.9578C9.94904 11.1557 9.0363 10.6298 8.00098 10.6298C6.96759 10.6298 6.05634 11.1537 5.51863 11.9533L5.16986 12.4719L4.13259 11.7744L4.48137 11.2558C5.2414 10.1256 6.53398 9.37982 8.00098 9.37982C9.47073 9.37982 10.7654 10.1284 11.5249 11.2622Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <button
                aria-checked="false"
                aria-label="Select Hate it emoji"
                class="feedback_emoji__VX_rC"
                role="radio"
                type="button"
              >
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
                    d="M4 9V16H5.5V9H4ZM12 9V16H10.5V9H12Z"
                    fill="var(--ds-blue-700)"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8C14.5 9.57941 13.9367 11.0273 13 12.1536V14.2454C14.8289 12.7793 16 10.5264 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 10.5264 1.17107 12.7793 3 14.2454V12.1536C2.06332 11.0273 1.5 9.57941 1.5 8ZM8 14.5C8.51627 14.5 9.01848 14.4398 9.5 14.3261V15.8596C9.01412 15.9518 8.51269 16 8 16C7.48731 16 6.98588 15.9518 6.5 15.8596V14.3261C6.98152 14.4398 7.48373 14.5 8 14.5ZM3.78568 8.36533C4.15863 7.98474 4.67623 7.75 5.25 7.75C5.82377 7.75 6.34137 7.98474 6.71432 8.36533L7.78568 7.31548C7.14222 6.65884 6.24318 6.25 5.25 6.25C4.25682 6.25 3.35778 6.65884 2.71432 7.31548L3.78568 8.36533ZM10.75 7.75C10.1762 7.75 9.65863 7.98474 9.28568 8.36533L8.21432 7.31548C8.85778 6.65884 9.75682 6.25 10.75 6.25C11.7432 6.25 12.6422 6.65884 13.2857 7.31548L12.2143 8.36533C11.8414 7.98474 11.3238 7.75 10.75 7.75ZM6.25 12H9.75C9.75 11.0335 8.9665 10.25 8 10.25C7.0335 10.25 6.25 11.0335 6.25 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </span>
          </div>
          <div>
            <form>
              <div class="feedback_formWrapper__bL7px">
                <textarea
                  class="feedback_textarea__iiRZ8"
                  id="feedback-textarea"
                  placeholder="Your feedback..."
                ></textarea>
                <div
                  class="text_wrapper__i87JK feedback_markdown-tip__xldJV"
                  data-version="v1"
                  style="--text-color: var(--ds-gray-900); --text-size: 0.75rem; --text-line-height: 1rem; --text-letter-spacing: initial; --text-weight: 400;"
                >
                  <svg
                    fill="none"
                    height="14"
                    viewBox="0 0 22 14"
                    width="22"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clip-rule="evenodd"
                      d="M19.5 1.25H2.5C1.80964 1.25 1.25 1.80964 1.25 2.5V11.5C1.25 12.1904 1.80964 12.75 2.5 12.75H19.5C20.1904 12.75 20.75 12.1904 20.75 11.5V2.5C20.75 1.80964 20.1904 1.25 19.5 1.25ZM2.5 0C1.11929 0 0 1.11929 0 2.5V11.5C0 12.8807 1.11929 14 2.5 14H19.5C20.8807 14 22 12.8807 22 11.5V2.5C22 1.11929 20.8807 0 19.5 0H2.5ZM3 3.5H4H4.25H4.6899L4.98715 3.82428L7 6.02011L9.01285 3.82428L9.3101 3.5H9.75H10H11V4.5V10.5H9V6.79807L7.73715 8.17572L7 8.97989L6.26285 8.17572L5 6.79807V10.5H3V4.5V3.5ZM15 7V3.5H17V7H19.5L17 9.5L16 10.5L15 9.5L12.5 7H15Z"
                      fill="var(--ds-gray-700)"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  supported.
                </div>
              </div>
              <div
                class="feedback_actions___tqt_"
                style="justify-content: flex-end;"
              >
                <button
                  type="submit"
                  class="button_base__BjwbK reset_reset__KRyvc button_button__81573 reset_reset__KRyvc button_small__iQMBm button_invert__YNhnn"
                  data-geist-button=""
                  data-prefix="false"
                  data-suffix="false"
                  data-version="v1"
                  style="--geist-icon-size: 16px;"
                >
                  <span class="button_content__1aE1_">Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});

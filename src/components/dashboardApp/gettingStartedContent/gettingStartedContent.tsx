// src/components/dashboardApp/gettingStartedContent/gettingStartedContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";

import InstyledPage from "~/assets/img/unstyled-page.png?jsx";
import Feedback from "../../UI/feedback/feedback";
import CodeBlock from "../../UI/codeBlock/codeBlock";
import { TerminalSvg } from "~/assets/svg/terminalSvg/terminalSvg";
// import { JavascriptSvg } from "~/assets/svg/javascriptSvg/javascriptSvg";
import FolderStructure from "./folderStructure/folderStructure";

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

.prose :where(code):not(:where([class~=not-prose] *)) {
  color: var(--tw-prose-code);
  font-weight: 600;
  font-size: .875em;
}
.prose-vercel :where(code):not(:where([class~=not-prose] *)) {
  font-weight: inherit;
  background-color: var(--ds-gray-100);
  border-radius: 0.375rem;
  border-width: 1px;
  border-color: var(--ds-gray-200);
  padding: 0.125rem 0.25rem;
}

.prose :where(h3):not(:where([class~=not-prose] *)) {
  color: var(--tw-prose-headings);
  font-weight: 600;
  font-size: 1.25em;
  margin-top: 1.6em;
  margin-bottom: 0.6em;
  line-height: 1.6;
}
.prose-vercel :where(h3):not(:where([class~=not-prose] *)) {
  font-weight: 600;
  scroll-margin-top: 51px;
}




  `);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <div class="not-prose mb-4 flex flex-col items-start gap-2 md:mb-10 md:flex-row md:items-center md:gap-6">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 md:h-[72px] md:w-[72px]">
            <p
              class="text_wrapper"
              data-version="v1"
              style="--text-color: var(--ds-gray-900); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
            >
              1
            </p>
          </div>
          <hgroup>
            <div class="hidden md:block">
              <p
                class="text_wrapper"
                data-version="v1"
                style="--text-color: var(--ds-gray-900); --text-size: 0.875rem; --text-line-height: 1.25rem; --text-letter-spacing: initial; --text-weight: 400;"
              >
                Chapter 1
              </p>
            </div>
            <h1
              class="text_wrapper"
              data-version="v1"
              style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
            >
              Getting Started
            </h1>
          </hgroup>
        </div>
        <h2 id="creating-a-new-project" data-docs-heading="">
          <a href="#creating-a-new-project">
            Create an app using the CLI
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
          First, create a Qwik application with the Qwik CLI, which generates a
          blank starter so that you can quickly familiarize yourself with it.
          You can use this same command to create either Qwik or Qwik City
          project.
        </p>
        <p>
          To create a Qwik app, open your terminal,{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line#basic_built-in_terminal_commands"
            rel="noopener noreferrer nofollow"
            target="_blank"
          >
            <code>cd</code>
            <span class="inline-flex">
              <svg
                class="with-icon_icon"
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
          into the folder you'd like to keep your project, and run the following
          command:
        </p>
        <CodeBlock
          icon={<TerminalSvg classList="with_icon_icon" />}
          text="Terminal"
          code={`npm create qwik@latest`}
        />
        {/* <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-color-text);">npm </span>
              <span style="color: var(--shiki-token-string);">create</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string);">qwik@latest</span>
            </span>
          </code> */}
        {/* </CodeBlock> */}

        <p>
          The CLI guides you through an interactive menu to set the
          project-name, select one of the starters and asks if you want to
          install the dependencies.
        </p>

        <p>
          Enter the name of your project, for the purpose of this course, we'll
          use <code>./qwik-dashboard</code>.
        </p>

        {/* <CodeBlock
          icon={<TerminalSvg classList="with_icon_icon" />}
          text="Terminal"
        >
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                Let's create a Qwik App ✨ (v1.4.5)
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">│</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                ◇ Where would you like to create your new project? (Use '.' or
                './' for current directory)
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                │ ./qwik-dashboard
              </span>
            </span>
          </code>
        </CodeBlock> */}

        <p>
          Select the starter, for this course, we'll use
          <code> Empty App (Qwik City + Qwik)</code>
        </p>

        {/* <CodeBlock
          icon={<TerminalSvg classList="with_icon_icon" />}
          text="Terminal"
        >
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-color-text);">│</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                ◇ Select a starter
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                │ Empty App (Qwik City + Qwik)
              </span>
            </span>
          </code>
        </CodeBlock> */}

        <p>
          For the next step, the CLI will ask if you want to install the npm
          dependancies and initialize the git repository. For the purpose of
          this course, we'll select <code>Yes</code> for both options. The CLI
          even offers you a little joke if you want 🤪.
        </p>

        {/* <CodeBlock
          icon={<TerminalSvg classList="with_icon_icon" />}
          text="Terminal"
        >
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-color-text);">│</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                ◇ Would you like to install npm dependencies?
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">│ Yes</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">│</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                ◇ Initialize a new git repository?
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">│ Yes</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">│</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">
                ◇ Finishing the install. Wanna hear a joke?
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">│ Yes</span>
            </span>
          </code>
        </CodeBlock> */}

        <p>
          The CLI will then create the project and install the dependencies. It
          will also initialize a git repository. Happy coding! 🎉
        </p>

        <h2 id="exploring-the-project" data-docs-heading="">
          <a href="#exploring-the-project">
            Exploring the project
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
          Unlike tutorials that have you write code from scratch, much of the
          code for this course is already written for you. This better reflects
          real-world development, where you'll likely be working with existing
          codebases.
        </p>
        <p>
          Our goal is to help you focus on learning the main features of Qwik,
          without having to write <em>all</em> the application code.
        </p>
        <p>
          After installation, navigate to <code>qwik-dashboard</code> and open
          the project in your code editor.
        </p>
        {/* <CodeBlock
          icon={<TerminalSvg classList="with_icon_icon" />}
          text="Terminal"
        >
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-token-function);">cd</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string);">
                qwik-dashboard
              </span>
            </span>
          </code>
        </CodeBlock>

        <CodeBlock
          icon={<TerminalSvg classList="with_icon_icon" />}
          text="Terminal"
        >
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-token-function);">code .</span>
            </span>
          </code>
        </CodeBlock> */}

        <p>Let's spend some time exploring the project.</p>
        <h3 id="folder-structure" data-docs-heading="">
          <a href="#folder-structure">
            Folder structure
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
        </h3>
        <p>
          You'll notice that the project has the following folder structure:
        </p>
        <FolderStructure />

        <ul>
          <li>
            <strong>
              <code>src/routes/</code>
            </strong>
            : Special directory for Qwik City since it's the directory where
            Qwik City will look for your pages. Folders and files inside this
            directory have a special meaning and they will be mapped to the URL
            of your app.
          </li>
          <ul>
            <li>
              <strong>
                <code>src/routes/index.tsx</code>
              </strong>
              : Homepage of your app.
            </li>
            <li>
              <strong>
                <code>src/routes/layout.tsx</code>
              </strong>
              : Root layout of your app, all pages will be rendered inside this
              layout.
            </li>
          </ul>
          <p class="dark-plus">
            Refer to the docs{" "}
            <a href="https://qwik.dev/docs/routing/">Routing</a> section for
            more information.
          </p>
          <li>
            <strong>
              <code>src/components/</code>
            </strong>
            : Is a directory by convention. All Qwik starters will have this
            directory, but you can change it if you want. This directory is
            where you should put your components, ie, reusable pieces of code
            that can be used in multiple places. They are not routes or layouts,
            but they can be used inside them.
            <p>
              For example, a <code>Button</code> component should be inside{" "}
              <code>src/components/button/button.tsx</code>.
            </p>
          </li>
          <li>
            <strong>
              <code>public/</code>
            </strong>
            : Contains static assets such as images, fonts, and icons. When you
            build your app, these files will be copied to the <code>dist/</code>{" "}
            directory and served at the root.
          </li>
          <li>
            <strong>
              <code>/public</code>
            </strong>
            : Contains all the static assets for your application, such as
            images.
            <p>
              Refer to{" "}
              <a
                href="https://vitejs.dev/guide/build.html#public-base-path"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Vite configuration for more information
              </a>
              .
            </p>
          </li>
          <li>
            <strong>
              <code>src/entry.ssr.tsx</code>
            </strong>
            : SSR entry point, in all cases the application is rendered outside
            the browser, this entry point will be the common one.
          </li>
          <ul>
            <li>Server (express, cloudflare...)</li>
            <li>npm run start</li>
            <li>npm run preview</li>
            <li>npm run build</li>
          </ul>

          <li>
            <strong>
              <code>src/root.tsx</code>
            </strong>
            : Is the entry point for the application tree. It's the first
            component that will be rendered. It's the root of the tree.
          </li>

          <li>
            <strong>
              <code>src/global.css</code>
            </strong>
            : Is a global CSS file, if you need to define some CSS that is used
            in multiple places in your app, you can define it here.
            <p>
              The root component (<code>src/root.tsx</code>) imports this file
              by default.
            </p>
          </li>

          <li>
            <strong>
              <code>tsconfig.json</code>
            </strong>
            : Contains the TypeScript compiler configuration. It's standard for
            any TypeScript project.
          </li>

          <li>
            <strong>
              <code>vite.config.ts</code>
            </strong>
            : Qwik uses Vite to build the project. Contains the Vite
            configuration. It's standard for any Vite project. Please refer to
            the{" "}
            <a
              href="https://vitejs.dev/config/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Vite documentation
            </a>{" "}
            for more information.
          </li>
        </ul>
        <p>
          Feel free to explore these folders, and don't worry if you don't
          understand everything the code is doing yet.
        </p>
        <h3 id="placeholder-data" data-docs-heading="">
          <a href="#placeholder-data">
            Placeholder data
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
        </h3>
        <p>
          When you're building user interfaces, it helps to have some
          placeholder data. If a database or API is not yet available, you can:
        </p>
        <ul>
          <li>Use placeholder data in JSON format or as JavaScript objects.</li>
          <li>
            Use a 3rd party service like{" "}
            <a
              href="https://mockapi.io/"
              rel="noopener noreferrer nofollow"
              target="_blank"
            >
              mockAPI
              <span class="inline-flex">
                <svg
                  class="with-icon_icon"
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
        </ul>
        <p>
          For this project, we've provided some placeholder data in{" "}
          <code>app/lib/placeholder-data.js</code>. Each JavaScript object in
          the file represents a table in your database. For example, for the
          invoices table:
        </p>
        {/* <CodeBlock icon={<JavascriptSvg />} text="/app/lib/placeholder-data.js">
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-token-keyword);">const</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-constant);">invoices</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-keyword);">=</span>
              <span style="color: var(--shiki-color-text);"> [</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">{` {`}</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> customer_id</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> customers[</span>
              <span style="color: var(--shiki-token-constant);">0</span>
              <span style="color: var(--shiki-color-text);">].id</span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> amount</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-constant);">15795</span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> status</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string-expression);">
                'pending'
              </span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> date</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string-expression);">
                '2022-12-06'
              </span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">{`  }`}</span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">{`  {`}</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> customer_id</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> customers[</span>
              <span style="color: var(--shiki-token-constant);">1</span>
              <span style="color: var(--shiki-color-text);">].id</span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> amount</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-constant);">20348</span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> status</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string-expression);">
                'pending'
              </span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> date</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string-expression);">
                '2022-11-14'
              </span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">{`  }`}</span>
              <span style="color: var(--shiki-token-punctuation);">,</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-comment);">// ...</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">];</span>
            </span>
          </code>
        </CodeBlock> */}

        <p>
          In the chapter on{" "}
          <a href="/learn/dashboard-app/setting-up-your-database">
            setting up your database
          </a>
          , you'll use this data to <em>seed</em> your database (populate it
          with some initial data).
        </p>
        <h3 id="typescript" data-docs-heading="">
          <a href="#typescript">
            TypeScript
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
        </h3>
        <p>
          You may also notice most files have a <code>.ts</code> or{" "}
          <code>.tsx</code> suffix. This is because the project is written in
          TypeScript. We wanted to create a course that reflects the modern web
          landscape.
        </p>
        <p>
          It's okay if you don't know TypeScript - we'll provide the TypeScript
          code snippets when required.
        </p>
        <p>
          For now, take a look at the <code>/app/lib/definitions.ts</code> file.
          Here, we manually define the types that will be returned from the
          database. For example, the invoices table has the following types:
        </p>
        {/* <CodeBlock icon={<TerminalSvg />} text="/app/lib/definitions.ts">
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-token-keyword);">export</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-keyword);">type</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-function);">Invoice</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-keyword);">=</span>
              <span style="color: var(--shiki-color-text);">{` {`}</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> id</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-constant);">string</span>
              <span style="color: var(--shiki-color-text);">;</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> customer_id</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-constant);">string</span>
              <span style="color: var(--shiki-color-text);">;</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> amount</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-constant);">number</span>
              <span style="color: var(--shiki-color-text);">;</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> date</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-constant);">string</span>
              <span style="color: var(--shiki-color-text);">;</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-comment);">
                // In TypeScript, this is called a string union type.
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-comment);">
                // It means that the "status" property can only be one of the
                two strings: 'pending' or 'paid'.
              </span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);"> status</span>
              <span style="color: var(--shiki-token-keyword);">:</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string-expression);">
                'pending'
              </span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-keyword);">│</span>
              <span style="color: var(--shiki-color-text);"> </span>
              <span style="color: var(--shiki-token-string-expression);">
                'paid'
              </span>
              <span style="color: var(--shiki-color-text);">;</span>
            </span>
            <span class="line">
              <span style="color: var(--shiki-color-text);">{`};`}</span>
            </span>
          </code>
        </CodeBlock> */}
        <p>
          By using TypeScript, you can ensure you don't accidentally pass the
          wrong data format to your components or database, like passing a{" "}
          <code>string</code> instead of a <code>number</code> to invoice{" "}
          <code>amount</code>.
        </p>
        <blockquote class="p-3 text-sm">
          <p>
            <strong>If you're a TypeScript developer:</strong>
          </p>
          <ul>
            <li>
              We're manually declaring the data types, but for better
              type-safety, we recommend{" "}
              <a
                href="https://www.prisma.io/"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                Prisma
                <span class="inline-flex">
                  <svg
                    class="with-icon_icon"
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
              , which automatically generates types based on your database
              schema.
            </li>
            <li>
              Next.js detects if your project uses TypeScript and automatically
              installs the necessary packages and configuration. Next.js also
              comes with a{" "}
              <a
                href="https://nextjs.org/docs/app/building-your-application/configuring/typescript#typescript-plugin"
                rel="noopener noreferrer"
                target="_blank"
              >
                TypeScript plugin
                <span class="inline-flex">
                  <svg
                    class="with-icon_icon"
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
              for your code editor, to help with auto-completion and
              type-safety.
            </li>
          </ul>
        </blockquote>
        <h2 id="running-the-development-server" data-docs-heading="">
          <a href="#running-the-development-server">
            Running the development server
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
          Run <code>npm run start</code> to start the development server.
        </p>
        {/* <CodeBlock icon={<TerminalSvg />} text="Terminal">
          <code class="code_block_code">
            <span class="line">
              <span style="color: var(--shiki-color-text);">npm </span>
              <span style="color: var(--shiki-token-string);">run start</span>
            </span>
          </code>
        </CodeBlock> */}

        <p>
          <code>npm run start</code> starts your Qwik development server on port{" "}
          <code>5173</code>. Your browser is automatically open. Your home page
          should look like this:
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <InstyledPage
            alt="Unstyled page with the title 'Acme', a description, and login link."
            class="block w-full rounded-md border border-gray-200 bg-gray-100 dark:hidden"
          />
        </figure>
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
          1
          <div class="text-vercel-100 border-vercel-100 absolute bottom-0 right-0 flex h-8 w-8 translate-x-[6px] translate-y-[6px] items-center justify-center rounded-full border-[3px] bg-blue-700 md:h-10 md:w-10">
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
                d="M15.5607 3.99999L15.0303 4.53032L6.23744 13.3232C5.55403 14.0066 4.44599 14.0066 3.76257 13.3232L4.2929 12.7929L3.76257 13.3232L0.969676 10.5303L0.439346 9.99999L1.50001 8.93933L2.03034 9.46966L4.82323 12.2626C4.92086 12.3602 5.07915 12.3602 5.17678 12.2626L13.9697 3.46966L14.5 2.93933L15.5607 3.99999Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        <h2
          class="text_wrapper block pb-2 pt-8"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
        >
          You've Completed Chapter 1
        </h2>
        <div class="text-center">
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial;"
          >
            Congratulations! You've created a Next.js application using the
            starter example and ran the development server.
          </p>
        </div>
        <div class="border-gray-alpha-400 mt-8 flex w-full flex-col items-center justify-center gap-1 rounded-lg px-4 py-8 shadow-md md:mt-12">
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
            2: CSS Styling
          </p>
          <p
            class="text_wrapper max-w-[540px] pb-4 pt-3 md:pb-6"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; --text-align: center;"
          >
            Let's work on your home page and discuss the different ways you can
            style your application.
          </p>
          <div class="w-full md:w-fit">
            <a
              role="link"
              tabIndex={0}
              href="/learn/dashboard-app/css-styling"
              type="submit"
              class="button_base reset_reset button_button  button_large button_invert"
              data-geist-button=""
              data-prefix="false"
              data-suffix="true"
              data-version="v1"
              style="min-width: 100%; max-width: 100%; --geist-icon-size: 16px;"
            >
              <span class="button_content">Start Chapter 2</span>
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
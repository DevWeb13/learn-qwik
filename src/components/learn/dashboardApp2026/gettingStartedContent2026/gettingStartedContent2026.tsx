// src/components/learn/dashboardApp2026/gettingStartedContent2026/gettingStartedContent2026.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import StartPage from "~/assets/img/start-page.png?jsx";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";
import { FolderStructure2026 } from "./folderStructure2026/folderStructure2026";

export const GettingStartedContent2026 = component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle
          chapterNumber={1}
          chapterTitle="Getting Started with Qwik | Your First Interactive App"
          version="2026 Edition"
        />

        <p>
          In this first chapter, you will set up a brand new Qwik application
          using the official CLI, explore its folder structure, and understand
          the core architectural concept that makes Qwik unique: resumability.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Create an app using the CLI",
              emoji: "🛠️",
              anchor: "creating-a-new-project",
            },
            {
              title: "Exploring the project",
              emoji: "🔍",
              anchor: "exploring-the-project",
            },
            {
              title: "Understanding Qwik’s Mental Model",
              emoji: "🧠",
              anchor: "understanding-qwiks-mental-model",
            },
            {
              title: "Running the development server",
              emoji: "🚀",
              anchor: "running-the-development-server",
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🛠️ Create an app using the CLI"
          id="creating-a-new-project"
        />

        <p>
          Qwik is built around a simple but powerful idea: ship as little
          JavaScript to the browser as possible. From the very beginning, your
          project is configured for server-side rendering and optimized for
          resumability. This means the application can continue exactly where
          the server left off, without re-executing everything in the browser.
        </p>

        <p>Let’s create our first Qwik application using the official CLI.</p>

        <p>
          Open your terminal, navigate to the directory where you want to create
          your project, and run the following command:
        </p>

        <CodeBlock
          text="Terminal"
          code={`npm create qwik@latest`}
          hideLineNumbers
        />

        <p>
          This course is built using Qwik 1.19 (the latest version at the time
          of recording). Minor differences may appear in future releases, but
          the core concepts remain the same.
        </p>

        <p>
          The CLI will guide you through an interactive setup where you will:
        </p>

        <ul>
          <li>
            Choose a project directory, for example{" "}
            <code>./qwik-dashboard-2026</code>
          </li>
          <li>Select a starter template</li>
          <li>Install npm dependencies</li>
          <li>Initialize a Git repository</li>
          <li>Optionally enjoy a small CLI joke</li>
        </ul>

        <p>
          When prompted to select a starter, choose{" "}
          <code>Empty App (Qwik City + Qwik)</code>.
        </p>

        <p>
          We intentionally start with the Empty App so you can clearly
          understand how Qwik structures an application without additional UI
          libraries or abstractions.
        </p>

        <p>
          When asked whether to install dependencies and initialize Git, select{" "}
          <code>Yes</code> for both.
        </p>

        <p>
          The CLI will generate the project and prepare a clean Git repository.
          It even includes a small joke at the end, a nice touch from the Qwik
          team.
        </p>

        <SubtitleWithAnchor
          title="🔍 Exploring the project"
          id="exploring-the-project"
        />

        <p>After installation, navigate into your project directory:</p>

        <CodeBlock
          text="Terminal"
          code={`cd qwik-dashboard-2026`}
          hideLineNumbers
        />

        <p>Then open it in your code editor:</p>

        <CodeBlock text="Terminal" code={`code .`} hideLineNumbers />

        <p>
          Unlike tutorials that have you write every file from scratch, much of
          the code for this course is already written for you. This better
          reflects real-world development, where you'll likely be working with
          existing codebases.
        </p>

        <p>
          Our goal is to help you focus on learning the main features of Qwik,
          without having to write <em>all</em> the application code.
        </p>

        <SubtitleWithAnchor
          title="If npm install fails"
          id="npm-install-fails"
          level="h3"
        />

        <p>
          During the CLI setup, dependencies are normally installed
          automatically. However, in some environments you may encounter an{" "}
          <code>ERESOLVE</code>
          error when running <code>npm install</code>.
        </p>

        <p>
          This is currently related to an ESLint peer dependency conflict. The
          starter template may include <code>@eslint/js</code> set to
          <code>"latest"</code>, which installs ESLint v10. However, Qwik 1.19
          depends on ESLint v9.
        </p>

        <p>If you see an error similar to:</p>

        <CodeBlock
          text="Terminal"
          code={`ERESOLVE could not resolve
peer eslint@"^10.0.0" from @eslint/js@10.x`}
          hideLineNumbers
        />

        <p>
          Open your <code>package.json</code> file and replace the existing
          <code>@eslint/js</code> version (often set to <code>"latest"</code>)
          inside <code>devDependencies</code> with:
        </p>

        <CodeBlock
          text="package.json"
          language="json"
          code={`"@eslint/js": "^9"`}
          hideLineNumbers
        />

        <p>Then run:</p>

        <CodeBlock text="Terminal" code={`npm install`} hideLineNumbers />

        <p>This aligns ESLint versions correctly and resolves the conflict.</p>

        <p>
          Related GitHub issue:{" "}
          <Link
            href="https://github.com/QwikDev/qwik/issues/8308"
            target="_blank"
            rel="noopener noreferrer"
          >
            ESLint v10 peer dependency conflict | Qwik issue #8308
          </Link>
        </p>

        <p>Happy coding 🎉</p>

        <p>Let's spend some time exploring the project.</p>

        <SubtitleWithAnchor
          title="Folder structure"
          id="folder-structure"
          level="h3"
        />

        <p>
          You'll notice that the project has the following folder structure:
        </p>

        <FolderStructure2026 />

        <ul>
          <li>
            <strong>
              <code>src/routes/</code>
            </strong>
            : Special directory used by Qwik City. Files and folders inside this
            directory are automatically mapped to routes in your application.
          </li>

          <ul>
            <li>
              <strong>
                <code>src/routes/index.tsx</code>
              </strong>
              : The homepage of your application.
            </li>
          </ul>

          <p class="dark-plus">
            Refer to the docs{" "}
            <Link
              href="https://qwik.dev/docs/routing/"
              target="_blank"
              rel="noopener"
              class="underline"
            >
              Routing
            </Link>{" "}
            section for more information.
          </p>

          <li>
            <strong>
              <code>src/components/</code>
            </strong>
            : Directory for reusable components. These are not routes, but
            building blocks that can be used inside routes or layouts.
            <p>
              For example, a <code>Button</code> component could live inside{" "}
              <code>src/components/button/button.tsx</code>.
            </p>
          </li>

          <li>
            <strong>
              <code>public/</code>
            </strong>
            : Contains static assets such as images, fonts, icons,{" "}
            <code>manifest.json</code> and <code>robots.txt</code>. These files
            are served from the root of your application.
          </li>

          <li>
            <strong>
              <code>src/root.tsx</code>
            </strong>
            : The root component of your application. It defines the top-level
            structure of your app and connects Qwik City routing to your UI.
          </li>

          <li>
            <strong>
              <code>src/global.css</code>
            </strong>
            : Global styles shared across the application. This file is imported
            by <code>root.tsx</code>.
          </li>

          <li>
            <strong>
              <code>src/entry.ssr.tsx</code>
            </strong>
            : Entry point for server-side rendering. This file is responsible
            for rendering the application on the server.
          </li>

          <li>
            <strong>
              <code>src/entry.dev.tsx</code>
            </strong>
            : Development mode entry point used when running the dev server.
          </li>

          <li>
            <strong>
              <code>src/entry.preview.tsx</code>
            </strong>
            : Entry used when running a production preview build.
          </li>

          <li>
            <strong>
              <code>eslint.config.js</code>
            </strong>
            : ESLint configuration for maintaining code quality.
          </li>

          <li>
            <strong>
              <code>qwik.env.d.ts</code>
            </strong>
            : Type definitions for environment variables used by Qwik.
          </li>

          <li>
            <strong>
              <code>tsconfig.json</code>
            </strong>
            : TypeScript configuration for the project.
          </li>

          <li>
            <strong>
              <code>vite.config.ts</code>
            </strong>
            : Configuration file for Vite, the build tool used by Qwik.
          </li>
        </ul>

        <p>
          The exact structure may evolve between Qwik versions, but the core
          concepts remain the same.
        </p>

        <p>
          Don't worry if everything is not fully clear yet. We will explore
          these files progressively throughout the course.
        </p>

        <SubtitleWithAnchor
          title="🧠 Understanding Qwik’s Mental Model"
          id="understanding-qwiks-mental-model"
        />

        <p>
          Most modern frameworks make a page interactive by re-executing the
          application in the browser. After the HTML is rendered, JavaScript
          runs again on the client to “hydrate” the component tree.
        </p>

        <p>Qwik takes a different approach.</p>

        <p>
          Instead of replaying the entire application in the browser, Qwik
          serializes the application state during server-side rendering and
          allows the browser to resume execution from that exact point. This
          concept is called <strong>resumability</strong>.
        </p>

        <p>
          When the page loads, the browser does not need to execute all
          components again. It only downloads and runs the specific pieces of
          JavaScript required for the interaction that just occurred.
        </p>

        <p>
          By default, a Qwik City project is configured for server-side
          rendering. However, Qwik can also generate fully static sites. The key
          idea is that its architecture always supports resumability, regardless
          of how the application is deployed.
        </p>

        <p>
          Files like <code>entry.ssr.tsx</code> are part of this rendering
          pipeline. They enable the server-side rendering process that makes
          resumability possible.
        </p>

        <p>
          Throughout this course, you’ll progressively see how routing, loaders,
          and streaming build on this model to keep JavaScript delivery minimal
          and performance predictable.
        </p>

        <SubtitleWithAnchor
          title="🚀 Running the development server"
          id="running-the-development-server"
        />

        <p>
          Run <code>npm run start</code> to start the development server.
        </p>

        <CodeBlock text="Terminal" code={`npm run start`} hideLineNumbers />
        <p>
          Your browser will automatically open at{" "}
          <a href="http://localhost:5173/" target="_blank">
            http://localhost:5173/
          </a>
          . Your home page should look like this:
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <StartPage
            alt="Unstyled page with the title 'Acme', a description, and login link."
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 1 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-1---Getting-Started-2026"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={1}
          text="Congratulations! You've created a Qwik application from scratch
           and ran the development server."
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={2}
          title="CSS Styling"
          text="Let's work on your home page and discuss the different ways you can
        style your application."
        />
      </div>
      <Feedback />
      <div class="mb-10 md:mb-30"></div>
    </>
  );
});

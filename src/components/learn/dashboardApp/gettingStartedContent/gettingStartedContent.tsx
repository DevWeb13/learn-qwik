// src/components/dashboardApp/gettingStartedContent/gettingStartedContent.tsx

import { component$ } from "@builder.io/qwik";
import StartPage from "~/assets/img/start-page.png?jsx";
import Feedback from "~/components/UI/feedback/feedback";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import FolderStructure from "./folderStructure/folderStructure";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import BlankLink from "~/components/UI/blankLink/blankLink";

export default component$(() => {
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={1} chapterTitle="Getting Started" />

        <SubtitleWithAnchor
          title="Create an app using the CLI"
          id="creating-a-new-project"
        />

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
            rel="noopener "
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
          text="Terminal"
          code={`npm create qwik@latest`}
          hideLineNumbers
        />

        <p>
          The CLI guides you through an interactive menu to set the
          project-name, select one of the starters and asks if you want to
          install the dependencies.
        </p>

        <p>
          Enter the name of your project, for the purpose of this course, we'll
          use <code>./qwik-dashboard</code>.
        </p>

        <p>
          Select the starter, for this course, we'll use
          <code> Empty App (Qwik City + Qwik)</code>
        </p>

        <p>
          For the next step, the CLI will ask if you want to install the npm
          dependancies and initialize the git repository. For the purpose of
          this course, we'll select <code>Yes</code> for both options. The CLI
          even offers you a little joke if you want 🤪.
        </p>

        <p>
          The CLI will then create the project and install the dependencies. It
          will also initialize a git repository.
        </p>

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9590753558"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Exploring the project"
          id="exploring-the-project"
        />

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
          After installation, navigate to <code>qwik-dashboard</code>
        </p>
        <CodeBlock text="Terminal" code={`cd qwik-dashboard`} hideLineNumbers />
        <p> and open the project in your code editor.</p>
        <CodeBlock text="Terminal" code={`code .`} hideLineNumbers />

        <p>Happy coding! 🎉</p>

        <p>Let's spend some time exploring the project.</p>

        <div class="px-4 py-8 md:px-8 md:py-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="5651508543"
          ></ins>
        </div>

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
            <p>
              Refer to{" "}
              <a
                href="https://vitejs.dev/guide/build.html#public-base-path"
                target="_blank"
                rel="noopener "
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
              rel="noopener "
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

        <div class="px-4 py-8 md:px-8 md:py-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="6773018523"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Placeholder data"
          id="placeholder-data"
          level="h3"
        />

        <p>
          When you're building user interfaces, it helps to have some
          placeholder data. If a database or API is not yet available, you can:
        </p>
        <ul>
          <li>Use placeholder data in JSON format or as JavaScript objects.</li>
          <li>
            Use a 3rd party service like{" "}
            <a href="https://mockapi.io/" rel="noopener " target="_blank">
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
          For this project, we provide you with placeholder data that you can
          <span class="font-bold"> download</span> it here:{" "}
        </p>
        <ul>
          <li>
            {" "}
            <a
              href="/downloads/placeholder-data.js"
              download="placeholder-data.js"
            >
              <code>placeholder-data.js 💾</code>
            </a>
          </li>
        </ul>

        <p>
          In the <code>src</code> folder, create a <code>lib</code> directory
          and add your file: <code>src/lib/placeholder-data.js</code>.
        </p>

        <p>
          Each JavaScript object in the file represents a table in your
          database. For example, for the invoices table:
        </p>

        <CodeBlock
          text="/src/lib/placeholder-data.js"
          icon="javascript"
          language="javascript"
          code={`const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ...
];`}
        />

        <p>
          In the chapter on{" "}
          <a href="/learn/dashboard-app/setting-up-your-database">
            setting up your database
          </a>
          , you'll use this data to <em>seed</em> your database (populate it
          with some initial data).
        </p>

        <div class="px-4 py-8 md:px-8 md:py-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="4649418066"
          ></ins>
        </div>

        <SubtitleWithAnchor title="TypeScript" id="typescript" level="h3" />

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
          For now, download the{" "}
          <a href="/downloads/definitions.ts" download="definitions.ts">
            <code>definitions.ts</code>
          </a>{" "}
          file and push it into <code>src/lib/definitions.ts</code>. Here, we
          manually define the types that will be returned from the database. For
          example, the invoices table has the following types:
        </p>

        <CodeBlock
          text="/src/lib/definitions.ts"
          icon="typescript"
          language="typescript"
          code={`export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};`}
        />

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
              If you are using Qwik for your development, be aware that
              TypeScript is natively integrated into the framework. From the
              initialization of your Qwik project, TypeScript is configured and
              ready to use, which optimizes development and enhances type safety
              in your application.
            </li>
            <li>
              For even more robust type safety, using{" "}
              <a href="https://www.prisma.io/" rel="noopener " target="_blank">
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
              </a>{" "}
              with Qwik can automatically generate types based on your database
              schema, thus improving the integrity and maintainability of your
              code.
            </li>
          </ul>
        </blockquote>

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="1520691849"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Running the development server"
          id="running-the-development-server"
        />

        <p>
          Run <code>npm run start</code> to start the development server.
        </p>

        <CodeBlock text="Terminal" code={`npm run start`} hideLineNumbers />
        <p>
          Your browser is automatically open at this url{" "}
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

        <div class="px-4 pt-8 md:px-8 md:pt-20">
          <ins
            class="adsbygoogle"
            style="display:flex; text-align:center; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="9931365026"
          ></ins>
        </div>

        <div class="prose prose-vercel flex max-w-none items-center justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BzpWsu_uxRU?si=xvub8XcNA4aOXvuC"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </div>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 1 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/getting-started"
            text="GitHub"
          />
          .
        </p>
      </div>
      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={1}
          text="Congratulations! You've created a Qwik application from scratch
           and ran the development server."
        />
        <GoToNextChapterBlock
          goToChapter={2}
          title="CSS Styling"
          text="Let's work on your home page and discuss the different ways you can
        style your application."
        />
      </div>
      <Feedback />
    </>
  );
});

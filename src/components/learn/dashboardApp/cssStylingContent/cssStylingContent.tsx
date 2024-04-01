// src/components/dashboardApp/cssStylingContent/cssStylingContent.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import InstyledPage from "~/assets/img/instyled-page.png?jsx";
import StyledPage from "~/assets/img/styled-page.png?jsx";

export default component$(() => {
  useStyles$(``);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={2} chapterTitle="CSS Styling" />
        <p style="vertical-align: inherit;">
          Actuellement, votre page d'accueil a le style par défaut de Qwik. Dans
          ce chapitre, vous allez apprendre à personnaliser le style de votre
          application Qwik de différentes manières.
        </p>
        <div class="not-prose in-this-chapter_wrapper__yrXTP mb-4 rounded-[12px] md:mx-[-64px] md:my-12 md:bg-[#fafafa] md:p-4 md:px-[64px] md:py-12">
          <p
            class="text_wrapper pb-1"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.25rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.020625rem; --sm-text-size: 1.25rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.020625rem; --smd-text-size: 1.5rem; --smd-text-line-height: 2rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.029375rem; --md-text-size: 1.5rem; --md-text-line-height: 2rem; --md-text-weight: 600; --md-text-letter-spacing: -0.029375rem; --lg-text-size: 1.5rem; --lg-text-line-height: 2rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.029375rem;"
          >
            Dans ce chapitre...
          </p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; margin: 0px;"
          >
            Voici les sujets que nous aborderons
          </p>
          <TableOfTopicsCovered />
        </div>
        <SubtitleWithAnchor
          title="Adding Tailwind CSS"
          id="adding-tailwind-css"
        />

        <p>
          An easy way to style your Qwik application is by using Tailwind CSS.
          It is a utility-first CSS framework that helps you build modern
          designs without ever leaving your HTML.
        </p>

        <p>
          Tout d'abord, nous allons modifier le contenu de notre fichier
          <code>src/routes/index.tsx</code>.
        </p>

        <CodeBlock
          text="src/routes/index.tsx"
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
// import { HiArrowRightOutline } from "@qwikest/icons/heroicons";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        {/* <AcmeLogo /> */}
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p class="text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to LRDAcme.</strong> This is the example for the{" "}
            <Link
              href="https://www.learn-qwik.com/learn/"
              target="_blank"
              class="text-blue-500"
            >
              Qwik Learn Course
            </Link>
            , brought to you by{" "}
            <Link href="https://www.lareponsedev.com/" target="_blank">
              LaReponseDev
            </Link>{" "}
            .
          </p>
          <Link
            href="/login"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span>
            {/* <HiArrowRightOutline /> */}
          </Link>
        </div>
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
  `}
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 1, character: 0 },
              // end at the end of the line
              end: { line: 3, character: 0 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 6, character: 0 },
              // end at the end of the line
              end: { line: 40, character: 0 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Dans ce fichier le style Tailwind a déja été ajouté pour vous, le but
          n'est pas de vous apprendre Tailwind CSS mais de vous montrer comment
          l'ajouter à votre application Qwik.
        </p>

        <p>Pour l'instant, si vous exécutez votre application, vous verrez :</p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <InstyledPage
            alt="Unstyled page with the title 'Acme', a description, and login link."
            class="block w-full rounded-md border border-gray-200 bg-gray-100 dark:hidden"
          />
        </figure>
        <p>
          Vous remarquerez que les styles ne sont pas appliqués. Cela est normal
          car Tailwind CSS n'est pas encore installé.
        </p>

        <p>
          Pour ajouter Tailwind CSS à votre application, rien de plus simple,
          dans le terminal exécutez la commande suivante :
        </p>

        <CodeBlock text="Terminal" code={`npm run qwik add tailwind`} />

        <p>
          The previous command updates your app with the necessary dependencies.
        </p>

        <p>It also adds new files to your project folder:</p>
        <ul>
          <li>
            <code>postcss.config.js</code>
          </li>
          <li>
            <code>tailwind.config.js</code>
          </li>
          <li>
            <code>.vscode/settings.json</code>
          </li>
        </ul>
        <p>
          and modifies your <code>src/global.css</code> to include
        </p>

        <CodeBlock
          text="src/global.css"
          code={`/**
* Tailwind CSS imports
* View the full documentation at https://tailwindcss.com
*/
@tailwind base;
@tailwind components;
@tailwind utilities;`}
          copyButton={false}
        />
        <p>
          Now, if you run your application, you should see the Tailwind CSS
          styles applied to your home page. You can also customize the styles by
          editing the <code>tailwind.config.js</code> file.
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <StyledPage />
        </figure>
        <p>
          Félicitations ! Vous avez appris à ajouter Tailwind CSS à votre
          application Qwik.
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={2}
          text="Well done! You've learned about the different ways of styling a Qwik application."
        />
        <GoToNextChapterBlock
          goToChapter={3}
          title="Optimizing Fonts and Images"
          text="Continue working on your home page by adding a hero image and a custom font."
          disabledButton={true}
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});

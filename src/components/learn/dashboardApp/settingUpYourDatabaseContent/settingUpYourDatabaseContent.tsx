// src/components/learn/dashboardApp/settingUpYourDatabase/settingUpYourDatabase.tsx

import { component$, useStyles$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";

import CompletedDeploymentVercelFail from "~/assets/img/completedDeploymentVercelFail.png?jsx";
import ConnectDatabase from "~/assets/img/connectDatabase.png?jsx";
import ConnectStore from "~/assets/img/connectStore.png?jsx";
import DatabaseCreationModal from "~/assets/img/databaseCreationModal.png?jsx";
import DatabaseTables from "~/assets/img/databaseTables.avif?jsx";
import ErrorAfterDeploymentVercel from "~/assets/img/errorAfterDeploymentVercel.png?jsx";
import HiddenDatabaseSecrets from "~/assets/img/hiddenDatabaseSecrets.png?jsx";
import ImportInVercel from "~/assets/img/importInVercel.png?jsx";
import NameAndDeployVercel from "~/assets/img/nameAndDeployVercel.png?jsx";
import VercelDeploymentPageFailDetails from "~/assets/img/vercel-deployment-page-fail-details.png?jsx";
import VercelDeploymentsPageFail from "~/assets/img/vercel-deployments-page-fail.png?jsx";
import VercelDeploymentsPageSuccess from "~/assets/img/vercel-deployments-page-success.png?jsx";
import VercelEdgeFinishPrompt from "~/assets/img/vercelEdgeFinishPrompt.png?jsx";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import Feedback from "~/components/UI/feedback/feedback";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";

export const SettingUpYourDatabaseContent = component$(() => {
  useStyles$(``);
  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle chapterNumber={6} chapterTitle="Setting Up Your Database" />
        <p>
          Before you can continue working on your dashboard, you'll need some
          data. In this chapter, you'll be setting up a PostgreSQL database
          using <code>`@vercel/postgres`</code>. If you're already familiar with
          PostgreSQL and would prefer to use your own provider, you can skip
          this chapter and set it up on your own. Otherwise, let's continue!
        </p>

        <TableOfTopicsCovered
          topics={[
            {
              title: "Push your project to GitHub.",
              icon: "github",
            },
            {
              title:
                "Set up a Vercel account and link your GitHub repo for instant previews and deployments.",
              icon: "vercel",
            },
            {
              title: "Create and link your project to a Postgres database.",
              icon: "postgres",
            },
            {
              title: "Seed the database with initial data.",
              icon: "database",
            },
          ]}
        />

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Create a GitHub repository"
          id="create-a-github-repository"
        />
        <p>
          To start, let's push your repository to Github if you haven't done so
          already. This will make it easier to set up your database and deploy.
        </p>
        <p>
          If you need help setting up your repository, take a look at{" "}
          <BlankLink
            href="https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories"
            text="this guide on GitHub"
          />
          .
        </p>
        <blockquote class="p-3 text-sm">
          <p>
            <strong>Good to know:</strong>
          </p>
          <ul>
            <li>
              You can also use other Git provider like GitLab or Bitbucket.
            </li>
            <li>
              If you're new to GitHub, we recommend the{" "}
              <BlankLink
                href="https://desktop.github.com/"
                text="GitHub Desktop App"
              />{" "}
              for a simplified development workflow.
            </li>
          </ul>
        </blockquote>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Create a Vercel account"
          id="create-a-vercel-account"
        />
        <p>
          Visit{" "}
          <BlankLink
            href="https://vercel.com/signup"
            text="vercel.com/signup"
          />{" "}
          to create an account. Choose the free "hobby" plan. Select Continue
          with GitHub to connect your GitHub and Vercel accounts.
        </p>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Connect and deploy your project"
          id="connect-and-deploy-your-project"
        />
        <p>
          Next, you'll be taken to this screen where you can select and{" "}
          <span class="font-bold">import</span> the GitHub repository you've
          just created:
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <ImportInVercel
            alt="Screenshots of page where you can import your GitHub repository in Vercel."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          Name your project and click <span class="font-bold">Deploy</span>.
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <NameAndDeployVercel
            alt="Screenshots of page where you can name and deploy your project in Vercel."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>
          By connecting your GitHub repository, whenever you push changes to
          your main branch, Vercel will automatically redeploy your application
          with no configuration needed. When opening pull requests, you'll also
          have{" "}
          <BlankLink
            href="https://vercel.com/docs/deployments/preview-deployments#preview-urls"
            text="instant previews"
          />
          which allow you to catch deployment errors early and share a preview
          of your project with team members for feedback.
        </p>
        <p>
          <span class="font-bold">Congratulations!</span> 🎉 Your project is now
          deployed in vercel{" "}
          <span class="font-bold">
            BUT AS YOU CAN SEE IT DOESN'T WORK YET. 💩
          </span>
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <CompletedDeploymentVercelFail
            alt="Screenshots of page where you can see that your project is deployed but it doesn't work yet."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          If you click on the link, you'll see that the project is deployed but
          your page display an error 404.
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <ErrorAfterDeploymentVercel
            alt="Screenshots of page where you can see the 404 error after deployment in Vercel."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          <span class="font-bold">Don't worry</span> 😟, this is normal because
          we haven't yet installed the{" "}
          <BlankLink
            href="https://qwik.dev/docs/deployments/vercel-edge/"
            text="Vercel Edge Adapter"
          />{" "}
          . Let's do that now. 👇
        </p>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Install the Vercel Edge Adapter"
          id="install-the-vercel-edge-adapter"
        />
        <p>
          To install the Vercel Edge Adapter, it's very simple, run the
          following command in your terminal:
        </p>
        <CodeBlock
          code={`npm run qwik add vercel-edge`}
          language="bash"
          hideLineNumbers
          text="Terminal"
        />
        <p>
          This command open a interactive script, you can see all the
          modifications that will be made.
        </p>
        <p>
          Press <code>`Enter`</code> to start the installation.
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <VercelEdgeFinishPrompt
            alt="Screenshots of terminal where you can see the interactive script success message after installing the Vercel Edge Adapter."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>
        <p>
          Great 🎉, you have add Vercel Edge Adapter on your project. Now, push
          your changes to GitHub for create new deployment on Vercel.
        </p>
        <p>
          Your project <span class="font-bold">SHOULD</span> now be deployed on
          Vercel, but you'll see that it{" "}
          <span class="font-bold">still doesn't work!!! </span>💩 This time, the
          deployment failed completely. 😱
        </p>
        <p>Resolve the error by following the next steps 👇</p>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Resolve Vercel error"
          id="resolve-vercel-error"
        />

        <p>
          If you go to the deployments page of your project on Vercel, you'll
          see that the deployment failed.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <VercelDeploymentsPageFail
            alt="Screenshots of page where you can see the deployments page of your project on Vercel and the deployment failed."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>Click on the failed deployment to see the error details.</p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <VercelDeploymentPageFailDetails
            alt="Screenshots of page where you can see the error details after clicking on the failed deployment."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>
          As you can see the error is related to an unsupported module by
          Vercel. To resolve this issue, I found the following solution on the{" "}
          <BlankLink
            href="https://discord.com/invite/ujYcpYgFW3"
            text="Official Qwik Discord"
          />
        </p>

        <p>
          In the <code>`package.json`</code> file of your project, move the
          dependency <code>`@qwikest/icons`</code> from the{" "}
          <code>`dependencies`</code> section to the{" "}
          <code>`devDependencies`</code> section.
        </p>

        <CodeBlock
          code={`{
... // Other dependencies
  "devDependencies": {
    "@builder.io/qwik": "^1.5.1",
    "@builder.io/qwik-city": "^1.5.1",
    "@types/eslint": "^8.56.5",
    "@types/node": "^20.11.24",
    "@typescript-eslint/eslint-plugin": "^7.1.0",
    "@typescript-eslint/parser": "^7.1.0",
    "autoprefixer": "^10.4.14",
    "eslint": "^8.57.0",
    "eslint-plugin-qwik": "^1.5.1",
    "postcss": "^8.4.31",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.4",
    "tailwindcss": "3.3.3",
    "typescript": "5.3.3",
    "undici": "*",
    "vercel": "^29.1.1",
    "vite": "^5.1.4",
    "vite-tsconfig-paths": "^4.2.1",
    "@qwikest/icons": "^0.0.13"
  },
  "dependencies": {
    "@fontsource-variable/inter": "^5.0.17"
    "@qwikest/icons": "^0.0.13"
  }
}`}
          language="json"
          hideLineNumbers
          icon="json"
          text="/package.json"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 21, character: 0 },
              // end at the end of the line
              end: { line: 21, character: 31 },
              properties: { class: "newLine" },
            },
            {
              // line and character are 0-indexed
              start: { line: 25, character: 0 },
              // end at the end of the line
              end: { line: 25, character: 31 },
              properties: { class: "deleteLine" },
            },
          ]}
        />

        <p>
          Then, push your changes to GitHub to create a new deployment on
          Vercel.
        </p>

        <p>
          And there you go, your project is now deployed on Vercel and working
          correctly. 🎉🚀
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <VercelDeploymentsPageSuccess
            alt="Screenshots of page where you can see the deployment success."
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <blockquote class="p-3 text-sm">
          <p>
            <strong>Personal note:</strong>
          </p>
          <ul>
            <li>
              I had a lot of trouble and wasted a lot of time deploying Qwik's
              projects on Vercel. I don't know the exact cause of this error and
              therefore cannot explain it to you, if you yourself encounter
              deployment problems on Vercel, I advise you to join the{" "}
              <BlankLink
                href="https://discord.com/invite/ujYcpYgFW3"
                text="Official Qwik Discord"
              />{" "}
              and ask for help. Community members are very responsive and will
              help you solve your problem.{" "}
            </li>
            <li>
              You can also join{" "}
              <BlankLink
                href="https://discord.com/invite/cZBNKyeeNq"
                text="Learn Qwik Discord"
              />
              , I would be happy to help you if I can. 😁
            </li>
          </ul>
        </blockquote>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Create a Postgres database"
          id="create-a-postgres-database"
        />
        {/* Francais */}
        <p>
          To set up a database, select the <strong>Storage</strong> tab from
          your project dashboard. Select <strong>Postgres → Create</strong>.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <ConnectStore
            alt="Connect Store screen showing the Postgres option along with KV, Blob and Edge Config"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>
          Accept the terms, assign a name to your database, and ensure your
          database region is set to <strong>Washington D.C (iad1)</strong> -
          this is the{" "}
          <BlankLink
            href="https://vercel.com/docs/functions/configuring-functions/region#select-a-default-serverless-region"
            text="default region"
          />{" "}
          for all new Vercel projects. By placing your database in the same
          region or close to your applicationcode, you can reduce{" "}
          <BlankLink
            href="https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency"
            text="latency"
          />{" "}
          for data requests.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <DatabaseCreationModal
            alt="Database creation modal showing the database name and region"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <blockquote class="p-3 text-sm">
          <p>
            <strong>Good to know</strong>: You cannot change the database region
            once it has been initalized. If you wish to use a different{" "}
            <BlankLink
              href="https://vercel.com/docs/storage/vercel-postgres/limits#supported-regions"
              text="region"
            />
            , you should set it before creating a database.
          </p>
        </blockquote>

        <p>
          Next, click the <strong>Connect</strong> button:
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <ConnectDatabase
            alt="Database connect button modal"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>
          Once connected, navigate to the <code>.env.local</code> tab, click{" "}
          <strong>Show secret</strong> and <strong>Copy Snippet</strong>.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <HiddenDatabaseSecrets
            alt="The .env.local tab showing the hidden database secrets"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p class="dark-plus">
          <span>⚠️</span>{" "}
          <span>
            Make sure you <strong>reveal the secrets</strong> before copying
            them.
          </span>
        </p>

        <p>
          At the root of your project, create a new file called{" "}
          <code>.env</code> and paste the copied snippet.
        </p>

        <p class="dark-plus">
          <span>⚠️</span>{" "}
          <span>
            <strong>Important:</strong> Go to the <code>.gitignore</code> file
            and add the <code>.env</code> file to prevent it from being pushed
            to GitHub. This file contains sensitive information that should not
            be shared.
          </span>
        </p>

        <p>
          Finally, paste and run the following code in your terminal to install
          the{" "}
          <BlankLink
            href="https://vercel.com/docs/storage/vercel-postgres/sdk"
            text=" Vercel Postgres SDK"
          />{" "}
          .
        </p>

        <CodeBlock
          code={`npm install --save-dev @vercel/postgres`}
          language="bash"
          hideLineNumbers
          text="Terminal"
        />

        <p class="dark-plus">
          <span>⚠️</span>{" "}
          <span>
            <strong>Attention:</strong> You must install the{" "}
            <code>`@vercel/postgres`</code> package as a{" "}
            <code>`devDependency`</code> to avoid deployment issues on Vercel.
          </span>
        </p>

        <p>
          Great! 🎉, you've successfully connected your project to a Postgres
          database on Vercel! 🚀
        </p>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Seed your database"
          id="seed-your-database"
        />

        <p>
          Now that your database has been created, let's seed it with some
          initial data. This will allow you to have some data to work with as
          you build the dashboard.
        </p>

        <p>
          At the root of your project, create a new folder called{" "}
          <code>`script`</code>
        </p>

        <p>
          <strong>Download</strong> the following file and place it in the{" "}
          <code>`script`</code> folder:
        </p>

        <ul>
          <li>
            <a href="/downloads/seed.js" download="seed.js">
              <code>seed.js 💾</code>
            </a>
          </li>
        </ul>

        <p>
          This script contains the instructions for creating and seeding the{" "}
          <code>invoices</code>, <code>customers</code>, <code>user</code>,{" "}
          <code>revenue</code> tables.
        </p>

        <p>
          Don't worry if you don't understand everything the code is doing, but
          to give you an overview, the script uses <strong>SQL</strong> to
          create the tables, and the data from{" "}
          <code>{`placeholder-data.js`}</code> file to populate them after
          they've been created.
        </p>

        <p>
          Next, in your <code>`package.json`</code> file, add the following line
          to your scripts:
        </p>

        <CodeBlock
          code={`"scripts": {
  "build": "qwik build",
  "build.client": "vite build",
  "build.preview": "vite build --ssr src/entry.preview.tsx",
  "build.server": "vite build -c adapters/vercel-edge/vite.config.ts",
  "build.types": "tsc --incremental --noEmit",
  "deploy": "vercel deploy",
  "dev": "vite --mode ssr",
  "dev.debug": "node --inspect-brk ./node_modules/vite/bin/vite.js --mode ssr --force",
  "fmt": "prettier --write .",
  "fmt.check": "prettier --check .",
  "lint": "eslint \\"src/**/*.ts*\\"",
  "preview": "qwik build preview && vite preview --open",
  "start": "vite --open --mode ssr",
  "qwik": "qwik",
  "seed": "node -r dotenv/config ./scripts/seed.js"
},`}
          language="json"
          icon="json"
          hideLineNumbers
          text="/package.json"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 15, character: 0 },
              // end at the end of the line
              end: { line: 15, character: 51 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          This is the command that will execute <code>{`seed.js`}</code>.
        </p>

        <p>
          To avoid TypeScript errors, you can also add these lines to your{" "}
          <code>`tsconfig.json`</code> file:
        </p>

        <CodeBlock
          code={`{
  ... //
  "include": [
    "src",
    "./*.d.ts",
    "./*.config.ts",
    "scripts/seed.js"
  ]
}`}
          language="json"
          icon="json"
          hideLineNumbers
          text="tsconfig.json"
          decorations={[
            {
              // line and character are 0-indexed
              start: { line: 6, character: 0 },
              // end at the end of the line
              end: { line: 6, character: 21 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          This script needs <code>`bcrypt`</code> to run. Run the following
          command to install them:
        </p>

        <CodeBlock
          code={`npm install bcrypt`}
          language="bash"
          hideLineNumbers
          text="Terminal"
        />

        <p>
          Now, for seed your database, run the following command in your
          terminal:
        </p>

        <CodeBlock
          code={`npm run seed`}
          language="bash"
          hideLineNumbers
          text="Terminal"
        />

        <p>
          You should see some <code>`console.log`</code> messages in your
          terminal to let you know the script is running.
        </p>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <Quiz
          question="What is 'seeding' in the context of databases?"
          options={[
            {
              text: "Deleting all data in the database",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Importing the schema of a database",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "Populating the database with an initial set of data",
              isCorrect: true,
              letter: "C",
            },
            {
              text: "Creating relationships between tables in a database",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Read the section above."
          responseText="That's right! Seeding is useful when you want to have some data to work with as you build your application."
        />

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <blockquote class="p-3 text-sm">
          <p>
            <strong>Troubleshooting</strong>:
          </p>
          <ul>
            <li>
              Make sure to reveal your database secrets before copying it into
              your <code>.env</code> file.
            </li>
            <li>
              The script uses <code>bcrypt</code> to hash the user's password,
              if <code>bcrypt</code> isn't compatible with your environment, you
              can update the script to use{" "}
              <BlankLink
                href="https://www.npmjs.com/package/bcryptjs"
                text="`bcryptjs`"
              />{" "}
              instead.
            </li>
            <li>
              If you run into any issues while seeding your database and want to
              run the script again, you can drop any existing tables by running{" "}
              <code>DROP TABLE tablename</code> in your database query
              interface. See the{" "}
              <Link href="#executing-queries">executing queries section</Link>{" "}
              below for more details. But be careful, this command will delete
              the tables and all their data. It's ok to do this with your
              example app since you're working with placeholder data, but you
              shouldn't run this command in a production app.
            </li>
            <li>
              If you continue to experience issues while seeding your Vercel
              Postgres database, go to{" "}
              <BlankLink
                href="https://discord.com/invite/cZBNKyeeNq"
                text="Learn Qwik Discord"
              />
              .
            </li>
          </ul>
        </blockquote>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor
          title="Exploring your database"
          id="exploring-your-database"
        />

        <p>
          Let's see what your database looks like. Go back to Vercel, and click{" "}
          <strong>Data</strong> on the sidenav.
        </p>

        <p>
          In this section, you'll find the four new tables: users, customers,
          invoices, and revenue.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <DatabaseTables
            alt="Database screen showing dropdown list with four tables: users, customers, invoices, and revenue"
            class="block rounded-md border border-gray-200 bg-gray-100 "
          />
        </figure>

        <p>
          By selecting each table, you can view its records and ensure the
          entries align with the data from <code>{`placeholder-data.js`}</code>{" "}
          file.
        </p>

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <SubtitleWithAnchor title="Executing queries" id="executing-queries" />

        <p>
          You can switch to the "query" tab to interact with your database. This
          section supports standard SQL commands. For instance, inputting{" "}
          <code>`DROP TABLE customers`</code> will delete "customers" table
          along with all its data - <strong>so be careful!</strong>
        </p>

        <p>
          Let's run your first database query. Paste and run the following SQL
          code into the Vercel interface:
        </p>

        <CodeBlock
          code={`SELECT invoices.amount, customers.name
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
WHERE invoices.amount = 666;`}
          displayCodeBlockHeader={false}
          displayCopyButtonAbsolute
        />

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <Quiz
          question="Which customer does this invoice belong to?"
          options={[
            {
              text: "Lee Robinson",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Evil Rabbit",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Delba de Oliveira",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Steph Dietz",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Make sure your query is correct!"
          responseText="That's right! The invoice with an amount of 666 belongs to Evil Rabbit."
        />

        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>

        <p>
          Congratulations, you've successfully set up your database in Qwik! 🎉
        </p>

        <SubtitleWithAnchor title="Source code" id="source-code" />

        <p>
          You can find the source code for chapter 6 on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard/tree/8-chapter-6-setting-up-your-database"
            text="GitHub"
          />
          .
        </p>
        <div class="px-4 md:px-8 ">
          <ins
            class="adsbygoogle"
            style="display:flex; justify-content:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-2091224773462896"
            data-ad-slot="2773109472"
          ></ins>
        </div>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={6}
          text="Well done! You've learned how to set up a database in Qwik."
        />
        <GoToNextChapterBlock
          version="Legacy"
          goToChapter={7}
          title="Fetching Data"
          text="Learn how to fetch data from your database in Qwik."
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </>
  );
});

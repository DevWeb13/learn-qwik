import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgCopyCliCommand from "~/assets/img/create-qwik-app-cli/copy-cli-command.png?jsx";
import ImgCreateFolderName from "~/assets/img/create-qwik-app-cli/create-folder-name.png?jsx";
import ImgGitError from "~/assets/img/create-qwik-app-cli/error-git.png?jsx";
import ImgInitGit from "~/assets/img/create-qwik-app-cli/init-git-repository.png?jsx";
import ImgInstallDependencies from "~/assets/img/create-qwik-app-cli/install-npm-dependencies.png?jsx";
import MetaCreateQwikAppCli from "~/assets/img/create-qwik-app-cli/metaCreateQwikAppCli.png?jsx";
import ImgMoveProjectFolder from "~/assets/img/create-qwik-app-cli/move-project-folder.png?jsx";
import ImgOpenProjectInVSCode from "~/assets/img/create-qwik-app-cli/open-project-in-vscode.png?jsx";
import ImgOpenTerminal from "~/assets/img/create-qwik-app-cli/open-terminal.png?jsx";
import ImgOrganizeYourWorkspace from "~/assets/img/create-qwik-app-cli/organize-your-workspace.png?jsx";
import ImgPasteCliCommand from "~/assets/img/create-qwik-app-cli/paste-cli-command.png?jsx";
import ImgProjectOpenInVSCode from "~/assets/img/create-qwik-app-cli/project-open-in-vscode.png?jsx";
import ImgQwikAppCreated from "~/assets/img/create-qwik-app-cli/qwik-app-created.png?jsx";
import ImgResolveGitError from "~/assets/img/create-qwik-app-cli/resolve-git-error.png?jsx";
import ImgSelectStarter from "~/assets/img/create-qwik-app-cli/select-starter.png?jsx";
import ImgWannaHearAJoke from "~/assets/img/create-qwik-app-cli/wanna-hear-a-joke.png?jsx";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import { BackToBlogButton } from "~/components/UI/backToBlogButton/backToBlogButton";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const CreateQwikAppCliArticle = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <div class="flex flex-col items-center gap-2 px-4 md:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold md:max-w-[100%] md:text-5xl">
          Create a Qwik App with the CLI (3/∞)
        </h1>
        <h2 class="max-w-[80%] text-center text-2xl font-semibold text-gray-800 md:max-w-[100%] md:text-4xl">
          Learn Qwik from A to Z (2025)
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          Learn how to create a brand new Qwik app using only the terminal,
          step-by-step, even if you're just getting started.
        </p>
      </div>

      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaCreateQwikAppCli
                  class="h-full w-full object-contain object-center"
                  alt="Create a Qwik App with the CLI"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Create a Qwik App with the CLI
                </figcaption>
              </figure>

              <h3>🚀 Why use the Qwik CLI?</h3>
              <p>
                The Qwik CLI helps you scaffold a fully functional application
                in seconds. It's the official way to start working with Qwik,
                and ensures you get the best project structure with all the
                essential tools already configured.
              </p>

              <h3>🎒 Prerequisites</h3>
              <ul>
                <li>
                  ✅ Ubuntu 22.04 LTS (or newer) 👉{" "}
                  <a
                    href="https://ubuntu.com/download/desktop"
                    target="_blank"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    Download Ubuntu
                  </a>
                </li>
                <li>
                  ✅ A basic understanding of the terminal 👉{" "}
                  <Link
                    href="/blog/open-terminal-ubuntu/"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    See our guide
                  </Link>
                </li>
                <li>
                  ✅ Node.js v18.17+ and npm 👉{" "}
                  <Link
                    href="/blog/install-nodejs-ubuntu/"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    See our guide
                  </Link>
                </li>
                <li>
                  ✅ A code editor like VSCode 👉{" "}
                  <Link
                    href="/blog/install-vscode-ubuntu/"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    See our guide
                  </Link>
                </li>
              </ul>

              <h3>📂 Start by opening your Terminal</h3>
              <figure>
                <ImgOpenTerminal
                  class="rounded-md shadow-md"
                  alt="Open the Terminal on Ubuntu"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Click the Terminal icon from the left sidebar or use the
                  shortcut <strong>Ctrl + Alt + T</strong>. Not sure how? Check
                  out our{" "}
                  <Link
                    href="/blog/open-terminal-ubuntu/"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    dedicated guide
                  </Link>
                  .
                </figcaption>
              </figure>

              <h3>📁 Organize your workspace</h3>
              <p>
                It’s a good habit to keep your development projects in one
                dedicated folder. Let’s create a new folder called{" "}
                <code>dev</code> inside your home directory.
              </p>

              <CodeBlock
                code={`mkdir dev\ncd dev`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />

              <figure>
                <ImgOrganizeYourWorkspace
                  class="rounded-md shadow-md"
                  alt="Create dev folder in the terminal"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Type <code>mkdir dev</code> to create a new folder, then move
                  into it with <code>cd dev</code>. This keeps your Qwik
                  projects cleanly separated from other files.
                </figcaption>
              </figure>

              <h3>✨ Grab the Qwik CLI command</h3>
              <p>
                The easiest way to get the exact command is to copy it directly
                from the Qwik homepage. This ensures you always run the latest
                version.
              </p>
              <figure>
                <ImgCopyCliCommand
                  class="rounded-md shadow-md"
                  alt="Copy npm create qwik@latest command from Qwik.dev"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Visit{" "}
                  <a
                    href="https://qwik.dev"
                    target="_blank"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    qwik.dev
                  </a>{" "}
                  and click the “npm create qwik@latest” button to copy the
                  command.
                </figcaption>
              </figure>

              <h3>💻 Paste and run the command</h3>
              <p>
                Now go back to your terminal and paste the command you just
                copied from the Qwik website. This will launch the CLI wizard
                and guide you through the setup.
              </p>

              <CodeBlock
                code={`npm create qwik@latest`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />

              <figure>
                <ImgPasteCliCommand
                  class="rounded-md shadow-md"
                  alt="Paste npm create qwik@latest in the terminal"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Paste the command into your terminal and press{" "}
                  <strong>Enter</strong> to begin creating your Qwik app.
                </figcaption>
              </figure>

              <h3>📦 Name your project folder</h3>
              <p>
                The first question from the Qwik CLI asks where to create your
                new app. It's best to give it a clear and simple name. In this
                example, we use <code>./qwik-app</code>, which creates a folder
                called <code>qwik-app</code> inside the current directory.
              </p>

              <CodeBlock
                code={`./qwik-app`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />

              <figure>
                <ImgCreateFolderName
                  class="rounded-md shadow-md"
                  alt="Enter project folder name in Qwik CLI"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  We type <code>./qwik-app</code> to create the project in a new
                  folder named <strong>qwik-app</strong>. You can change this
                  name to anything you want.
                </figcaption>
              </figure>

              <h3>🧱 Choose your starter template</h3>
              <p>
                Next, the Qwik CLI will ask which type of app you want to
                create. We recommend selecting{" "}
                <code>Empty App (Qwik City + Qwik)</code>. This gives you a
                minimal but complete starting point, including routing via Qwik
                City.
              </p>

              <figure>
                <ImgSelectStarter
                  class="rounded-md shadow-md"
                  alt="Select starter template in Qwik CLI"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Choose the first option:{" "}
                  <strong>Empty App (Qwik City + Qwik)</strong> to get started
                  with the standard project structure and routing support.
                </figcaption>
              </figure>

              <h3>📦 Install npm dependencies</h3>
              <p>
                Qwik uses <code>npm</code> to manage all its packages. When
                prompted, select <strong>Yes</strong> to automatically install
                everything your project needs to work.
              </p>

              <figure>
                <ImgInstallDependencies
                  class="rounded-md shadow-md"
                  alt="Install npm dependencies in Qwik CLI"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Choose <strong>Yes</strong> to let the CLI handle the initial
                  setup for you. This may take a few seconds depending on your
                  internet connection.
                </figcaption>
              </figure>

              <h3>🗂️ Initialize a Git repository</h3>
              <p>
                Git is a version control system that helps you track your
                changes and collaborate with others. Select <strong>Yes</strong>{" "}
                when asked to initialize a Git repository — it's highly
                recommended for any project.
              </p>

              <figure>
                <ImgInitGit
                  class="rounded-md shadow-md"
                  alt="Initialize git repository in Qwik CLI"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Select <strong>Yes</strong> to set up Git. This will create a{" "}
                  <code>.git</code> folder inside your project and prepare it
                  for version control.
                </figcaption>
              </figure>

              <h3>🎉 Wanna hear a joke?</h3>
              <p>
                As a fun final touch, the Qwik CLI asks if you want to hear a
                joke while it finishes setting up your project. Totally
                optional, but we recommend saying <strong>Yes</strong> — it adds
                a nice smile to your workflow 😄
              </p>

              <figure>
                <ImgWannaHearAJoke
                  class="rounded-md shadow-md"
                  alt="Qwik CLI joke prompt"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Say <strong>Yes</strong> for a fun surprise before the
                  installation completes!
                </figcaption>
              </figure>

              <h3>⚠️ Git failed to initialize? Don’t panic.</h3>
              <p>
                Sometimes, the CLI tries to set up a Git repository but fails —
                usually due to missing configurations or permissions. This is
                totally normal and nothing to worry about.
              </p>

              <figure>
                <ImgGitError
                  class="rounded-md shadow-md"
                  alt="Git failed to initialize in Qwik CLI"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  If you see this red warning, don’t panic — we’ll fix it
                  manually in the next step.
                </figcaption>
              </figure>

              <p>
                This happens even to experienced developers. We’ll handle it
                right after the project finishes installing.
              </p>

              <h3>✅ Your Qwik app has been created successfully</h3>
              <p>
                The CLI has finished its work! Your new Qwik project is now
                ready in the <code>qwik-app</code> folder. The success message
                confirms that all dependencies were installed.
              </p>

              <figure>
                <ImgQwikAppCreated
                  class="rounded-md shadow-md"
                  alt="Qwik project successfully created"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  🎉 Installation complete! Your Qwik app is now available in{" "}
                  <code>qwik-app</code>.
                </figcaption>
              </figure>

              <p>
                Before continuing, we’ll fix the Git initialization error, then
                open the project in Visual Studio Code.
              </p>

              <p>
                Let’s head into the project folder and take care of those last
                steps manually.
              </p>

              <h3>📂 Move into your Qwik project</h3>
              <p>
                Now that the project is created, you need to{" "}
                <strong>navigate inside the new folder</strong> to start working
                on it.
              </p>

              <CodeBlock
                code={`cd qwik-app`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />

              <figure>
                <ImgMoveProjectFolder
                  class="rounded-md shadow-md"
                  alt="Navigate into the Qwik project folder"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Use <code>cd qwik-app</code> to enter your new project
                  directory.
                </figcaption>
              </figure>

              <p>
                From here, you’ll be able to initialize Git manually and launch
                your app in Visual Studio Code.
              </p>

              <h3>🔧 Fix the Git error (if needed)</h3>
              <p>
                If you saw a red warning earlier about Git failing to
                initialize, don’t worry — it’s common on fresh Ubuntu installs.
              </p>
              <p>
                Just run the command manually to initialize a Git repository in
                your project folder:
              </p>

              <CodeBlock
                code={`git init`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />

              <figure>
                <ImgResolveGitError
                  class="rounded-md shadow-md"
                  alt="Fix Git initialization error"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Run <code>git init</code> to fix the Git issue and prepare
                  your project for version control.
                </figcaption>
              </figure>

              <p>
                This step ensures you can use Git to track changes or connect to
                GitHub later.
              </p>

              <h3>🧑‍💻 Launch your Qwik project in Visual Studio Code</h3>
              <p>
                Let’s now open the freshly created Qwik app in your code editor.
              </p>
              <p>Use this command to open the current directory in VS Code:</p>

              <CodeBlock
                code={`code .`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />

              <figure>
                <ImgOpenProjectInVSCode
                  class="rounded-md shadow-md"
                  alt="Open Qwik project in VS Code"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  This command opens your Qwik project directly in Visual Studio
                  Code.
                </figcaption>
              </figure>

              <p>
                You’ll now see your project structure in the file explorer,
                ready to code, configure, or run.
              </p>

              <h3>🎉 Project ready in VS Code</h3>
              <p>
                Congratulations! Your Qwik application is now fully set up and
                opened in Visual Studio Code.
              </p>
              <figure>
                <ImgProjectOpenInVSCode
                  class="rounded-md shadow-md"
                  alt="Qwik app opened in Visual Studio Code"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Your app is ready — explore the folder structure, run the
                  server, or start customizing your Qwik components.
                </figcaption>
              </figure>

              <h3>🎥 Watch the video</h3>
              <p>
                Prefer to follow visually? Here's the full process on video:
              </p>
              <div class="aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ihptoWtP-8Y" // Remplace avec l'ID de ta vidéo
                  title="Create a Qwik App with the CLI"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>

              <h3>✅ Your Qwik App is Fully Installed</h3>
              <p>
                You’ve just created your first Qwik app. In the next chapter,
                we’ll run the development server and start editing your project.
              </p>

              <ArticleDiscordCallout />

              <h3>⏭️ Next step</h3>
              <p>
                Now that your app is ready, let's run it locally and explore the
                Qwik structure.
              </p>
              <p>
                Next 👉{" "}
                <span class="cursor-not-allowed text-gray-400">
                  Run your Qwik App
                </span>
              </p>
            </article>
          </div>
        </div>
        <BackToBlogButton />

        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});

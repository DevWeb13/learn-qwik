// src/components/blog/articles/install-nodejs-ubuntu.tsx

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgAptUpdate from "~/assets/img/install-node/apt-update.png?jsx";
import ImgCurlScript from "~/assets/img/install-node/curl-nodesource.png?jsx";
import ImgInstallCurl from "~/assets/img/install-node/install-curl.png?jsx";
import ImgInstallNode from "~/assets/img/install-node/install-nodejs.png?jsx";
import MetaInstallNodeUbuntu from "~/assets/img/install-node/metaInstallNodeUbuntu.png?jsx";
import ImgNodeVersion from "~/assets/img/install-node/node-version.png?jsx";
import ImgNpmVersion from "~/assets/img/install-node/npm-version.png?jsx";
import ImgOpenTerminal from "~/assets/img/install-node/open-terminal.png?jsx";
import ImgPassword from "~/assets/img/install-node/password.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import { BackButton } from "~/components/UI/backButton/backButton";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";

export const InstallNodeJsUbuntuArticle = component$(() => {
  return (
    <main class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 lg:px-12 lg:py-20">
      {/* ✅ Main Title */}
      <header class="flex flex-col items-center gap-3 px-4 lg:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold lg:max-w-full lg:text-5xl">
          Install Node.js and NPM on Ubuntu
        </h1>
        <h2 class="text-center text-sm font-medium text-gray-600 lg:text-base">
          Part 1 of the Learn Qwik From A to Z (2025) series
        </h2>
        <p class="mt-2 max-w-2xl text-center text-gray-700">
          This guide will help you install Node.js and npm safely on Ubuntu
          using official sources.
        </p>
      </header>

      {/* ✅ Article + ad */}
      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 lg:flex-row">
        <div class="flex w-full flex-col gap-4 lg:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaInstallNodeUbuntu
                  class="h-full w-full object-contain object-center"
                  alt="Install Node.js on Ubuntu"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Install Node.js on Ubuntu
                </figcaption>
              </figure>

              {/* ✅ Introduction */}
              <h3>🚀 Why Are We Starting from Scratch?</h3>
              <p>
                In this "Learn Qwik from A to Z (2025)" series, we are
                rebuilding everything from zero. The goal is to guide absolute
                beginners — and those who want a clean and solid foundation —
                through each step required to set up a complete Qwik development
                environment.
              </p>
              <p>
                Before diving into Qwik itself, it's essential to prepare your
                system properly. This starts with installing Node.js and npm,
                which are necessary to run Qwik and manage its dependencies
                smoothly and safely.
              </p>
              <p>
                We won’t go into every advanced detail, but we’ll make sure you
                install everything the right way, so you can focus on learning
                and building real Qwik applications with confidence.
              </p>

              {/* ✅ Prerequisites */}
              <h3>🎒 Prerequisites for Building a Qwik App</h3>
              <p>
                Before creating your first project, here's what you'll need:
              </p>
              <ul>
                <li>
                  ✅ <strong>Ubuntu 22.04 LTS</strong> (or another recent
                  version) 👉{" "}
                  <a
                    href="https://ubuntu.com/download/desktop"
                    target="_blank"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    Download Ubuntu
                  </a>
                </li>
                <li>
                  ✅ <strong>Basic Terminal commands</strong> 👉{" "}
                  <Link
                    href="/blog/open-terminal-ubuntu/"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    Open Terminal on Ubuntu (see our previous guide)
                  </Link>
                </li>
                <li>
                  ◇ <strong>Node.js v18.17 or higher</strong> (you are here)
                </li>
                <li>
                  ◇ <strong>Visual Studio Code (or Cursor)</strong> 👉{" "}
                  <Link
                    href="/blog/install-vscode-ubuntu/"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    Install Visual Studio Code on Ubuntu
                  </Link>
                </li>
              </ul>

              <h3>📌 Open your Terminal</h3>
              <figure>
                <ImgOpenTerminal
                  class="rounded-md shadow-md"
                  alt="Open Terminal Ubuntu"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Launch your Terminal from the sidebar or press Ctrl + Alt + T.
                  If it's not pinned, refer to our{" "}
                  <Link href="/blog/open-terminal-ubuntu/">
                    previous article
                  </Link>
                  .
                </figcaption>
              </figure>

              <h3>🔄 Update your package list</h3>
              <p>
                To make sure Ubuntu uses the most recent sources, update your
                package index:
              </p>
              <CodeBlock
                code={`sudo apt update`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgAptUpdate
                  class="rounded-md shadow-md"
                  alt="sudo apt update"
                />
              </figure>

              <h3>🔐 Enter your password</h3>
              <p>
                Because you're using <code>sudo</code>, Ubuntu asks for your
                admin password. Type it and press Enter.
              </p>
              <figure>
                <ImgPassword
                  class="rounded-md shadow-md"
                  alt="Sudo password prompt"
                />
              </figure>

              <h3>📦 Install curl (if not installed)</h3>
              <p>
                <code>curl</code> is required to fetch external scripts like the
                Node.js installer. Most systems have it by default:
              </p>
              <CodeBlock
                code={`sudo apt install curl -y`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgInstallCurl
                  class="rounded-md shadow-md"
                  alt="Install curl on Ubuntu"
                />
              </figure>

              <h3>🌐 Add the official Node.js setup script</h3>
              <p>
                This command comes from{" "}
                <a
                  href="https://github.com/nodesource/distributions"
                  target="_blank"
                >
                  NodeSource’s GitHub page
                </a>
                . It adds the latest LTS version (v18) to your system:
              </p>
              <CodeBlock
                code={`curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgCurlScript
                  class="rounded-md shadow-md"
                  alt="NodeSource script"
                />
              </figure>

              <h3>📥 Install Node.js (and npm)</h3>
              <p>
                After adding the repo, you can install both Node.js and npm in
                one go:
              </p>
              <CodeBlock
                code={`sudo apt install nodejs -y`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgInstallNode
                  class="rounded-md shadow-md"
                  alt="Install Node.js"
                />
              </figure>

              <h3>✅ Check Node.js version</h3>
              <p>To make sure Node.js is installed correctly:</p>
              <CodeBlock
                code={`node -v`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgNodeVersion
                  class="rounded-md shadow-md"
                  alt="Check Node.js version"
                />
              </figure>

              <h3>✅ Check npm version</h3>
              <p>And finally, make sure npm is installed too:</p>
              <CodeBlock
                code={`npm -v`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgNpmVersion
                  class="rounded-md shadow-md"
                  alt="Check npm version"
                />
              </figure>

              {/* ✅ Video */}
              <h3>🎥 Watch the Video</h3>
              <p>
                If you’re not sure how to open the Terminal on Ubuntu, don’t
                worry, this short video will show you exactly what to do step by
                step.
              </p>

              <div class="aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ryxw1Xe92LQ"
                  title="How to open the Terminal on Ubuntu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>

              <h3>🎉 Well done!</h3>
              <p>
                Congratulations — you’ve successfully installed{" "}
                <strong>Node.js</strong> and <strong>npm</strong> on your Ubuntu
                system. This means your computer is now fully ready to start
                creating Qwik projects and running modern JavaScript tools
                without any issues.
              </p>
              <p>
                This was a crucial step, and by completing it, you've laid a
                solid foundation for all your future Qwik development. Keep up
                the great work, and let's move forward to the next exciting
                step!
              </p>

              <ArticleDiscordCallout />

              <h3>🚀 Next step</h3>
              <p>
                You're ready to install Visual Studio Code or Cursor, and start
                building your first Qwik app.
              </p>
              <p>
                Next step 👉{" "}
                <Link
                  href="/blog/install-vscode-ubuntu/"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  <strong>Install VS Code on Ubuntu</strong>
                </Link>
                .
              </p>
            </article>
          </div>
        </div>
        <BackButton />

        <DesktopStickyAd />
      </div>

      <MobileStickyAd />
    </main>
  );
});

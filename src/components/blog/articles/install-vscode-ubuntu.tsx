import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import ImgPassword from "~/assets/img/install-node/password.png?jsx";
import ImgAddKey from "~/assets/img/install-vscode/add-key.png?jsx";
import ImgAddRepo from "~/assets/img/install-vscode/add-repo.png?jsx";
import ImgAptUpdate from "~/assets/img/install-vscode/apt-update.png?jsx";
import ImgInstallVSCode from "~/assets/img/install-vscode/install-vscode.png?jsx";
import ImgLaunchVSCode from "~/assets/img/install-vscode/launch-vscode.png?jsx";
import MetaInstallVSCodeUbuntu from "~/assets/img/install-vscode/metaInstallVSCodeUbuntu.png?jsx";
import ImgOpenTerminal from "~/assets/img/install-vscode/open-terminal.png?jsx";
import ImgUpdateAfterRepo from "~/assets/img/install-vscode/update-repo.png?jsx";
import ImgVSCodeOpened from "~/assets/img/install-vscode/vscode-opened.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import { ArticleDiscordCallout } from "~/components/UI/articleDiscordCallout/articleDiscordCallout";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const InstallVSCodeUbuntuArticle = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      <div class="flex flex-col items-center gap-2 px-4 md:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold md:max-w-[100%] md:text-5xl">
          Learn Qwik from A to Z (2025)
        </h1>
        <h2 class="max-w-[80%] text-center text-2xl font-semibold text-gray-800 md:max-w-[100%] md:text-4xl">
          Install Visual Studio Code on Ubuntu (2/∞)
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          This guide will help you install Visual Studio Code easily and safely
          on Ubuntu using official sources.
        </p>
      </div>

      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <MetaInstallVSCodeUbuntu
                  class="h-full w-full object-contain object-center"
                  alt="Install Visual Studio Code on Ubuntu"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Install Visual Studio Code on Ubuntu
                </figcaption>
              </figure>
              <h3>🚀 Why install Visual Studio Code?</h3>

              <p>
                Visual Studio Code is one of the most popular code editors. It's
                fast, extensible and offers great support for JavaScript and
                Qwik development. Before starting any Qwik project, installing
                VS Code is highly recommended.
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
                  ✅ <strong>Node.js v18.17 or higher</strong> 👉{" "}
                  <Link
                    href="/blog/install-nodejs-ubuntu/"
                    class="text-blue-600 underline hover:text-blue-800"
                  >
                    Install Node.js and NPM on Ubuntu (see our previous guide)
                  </Link>
                </li>
                <li>
                  ◇ <strong>Visual Studio Code (or Cursor)</strong> (you are
                  here)
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
                Always update your package list to make sure you have the latest
                package information.
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

              <h3>🔑 Add Microsoft’s GPG key</h3>
              <p>
                Before installing Visual Studio Code, Ubuntu must be able to
                verify that the packages really come from Microsoft and are safe
                to install. This is why we need to add Microsoft's official GPG
                key. Without this, Ubuntu would block the installation for
                security reasons.
              </p>
              <p>
                👉 This command comes directly from the official documentation
                of Visual Studio Code on Linux:{" "}
                <a
                  href="https://code.visualstudio.com/docs/setup/linux"
                  target="_blank"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  https://code.visualstudio.com/docs/setup/linux
                </a>
              </p>
              <CodeBlock
                code={`wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgAddKey
                  class="rounded-md shadow-md"
                  alt="Add Microsoft GPG Key"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Adding Microsoft's GPG key to allow Ubuntu to trust VS Code
                  packages
                </figcaption>
              </figure>

              <h3>➕ Add the official Visual Studio Code repository</h3>
              <p>
                By default, Ubuntu does not know where to find Visual Studio
                Code. To make it available through the package manager (
                <code>apt</code>), we need to add Microsoft's official
                repository to Ubuntu's list of sources.
              </p>
              <p>
                This repository contains the latest stable releases of Visual
                Studio Code, and ensures you will always get the official and
                up-to-date version when running <code>apt install</code>.
              </p>
              <p>
                👉 This command comes from the official Visual Studio Code
                installation guide for Linux:{" "}
                <a
                  href="https://code.visualstudio.com/docs/setup/linux"
                  target="_blank"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  https://code.visualstudio.com/docs/setup/linux
                </a>
              </p>
              <CodeBlock
                code={`sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgAddRepo
                  class="rounded-md shadow-md"
                  alt="Add VS Code repository"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Adding Microsoft's official repository so Ubuntu can download
                  Visual Studio Code
                </figcaption>
              </figure>

              <h3>🔄 Update your package list again</h3>
              <p>
                After adding the repository, refresh your package list again.
              </p>
              <CodeBlock
                code={`sudo apt update`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgUpdateAfterRepo
                  class="rounded-md shadow-md"
                  alt="Update package list after adding repo"
                />
              </figure>

              <h3>📥 Install Visual Studio Code</h3>
              <p>
                Now that the repository is added and your package list is up to
                date, you can install Visual Studio Code just like any other
                software using <code>apt</code>.
              </p>
              <p>
                This command will download and install the latest stable version
                of Visual Studio Code directly from Microsoft's repository:
              </p>
              <CodeBlock
                code={`sudo apt install code -y`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgInstallVSCode
                  class="rounded-md shadow-md"
                  alt="Install Visual Studio Code"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Installing Visual Studio Code using the apt command
                </figcaption>
              </figure>

              <h3>🚀 Launch Visual Studio Code</h3>
              <p>
                Visual Studio Code is now installed on your system! You can
                launch it at any time by typing <code>code</code> in your
                Terminal.
              </p>
              <p>
                Alternatively, you can also find it in the Ubuntu application
                menu, like any other app.
              </p>
              <CodeBlock
                code={`code`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />
              <figure>
                <ImgLaunchVSCode
                  class="rounded-md shadow-md"
                  alt="Launch Visual Studio Code"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Launching Visual Studio Code from the Terminal
                </figcaption>
              </figure>

              {/* ✅ Video */}
              <h3>🎥 Watch the Video</h3>
              <p>
                Not sure about all the steps or just want to see it in action?
                No problem! Watch this short video to see exactly how to install
                Visual Studio Code on Ubuntu, step by step.
              </p>

              <div class="aspect-video w-full overflow-hidden rounded-lg shadow-md">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/rMi0tJtR0ns"
                  title="How to install Visual Studio Code on Ubuntu"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>

              <h3>🎉 Well done!</h3>
              <p>
                Visual Studio Code is now installed and ready to use on your
                Ubuntu system. You can start installing extensions and preparing
                your Qwik project!
              </p>
              <figure>
                <ImgVSCodeOpened
                  class="rounded-md shadow-md"
                  alt="VS Code opened"
                />
              </figure>

              <ArticleDiscordCallout />

              <h3>🚀 Next step</h3>
              <p>
                You are now ready to create your first Qwik app from scratch!
              </p>
              <p>
                Next step 👉{" "}
                <span class="cursor-not-allowed text-gray-400">
                  Create your first Qwik app
                </span>
              </p>
            </article>
          </div>
        </div>

        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});

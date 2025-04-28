import { component$ } from "@builder.io/qwik";
import ImgOpenApplications from "~/assets/img/open-applications-ubuntu.png?jsx";
import ImgPinTerminal from "~/assets/img/pin-terminal-ubuntu.png?jsx";
import ImgSearchTerminal from "~/assets/img/search-terminal-ubuntu.png?jsx";
import ImgTerminalInDash from "~/assets/img/terminal-in-dash.png?jsx";
import ImgTerminalOpenedLs from "~/assets/img/terminal-opened-ls.png?jsx";
import ImgTerminalOpened from "~/assets/img/terminal-opened.png?jsx";
import { DesktopStickyAd } from "~/components/desktopStickyAd/desktopStickyAd";
import { MobileStickyAd } from "~/components/mobileStickyAd/mobileStickyAd";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const OpenTerminalUbuntuArticle = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  return (
    <div class="relative flex min-h-screen w-full flex-col items-center gap-8 bg-white py-12 md:px-12 md:py-20">
      {/* ✅ Main Title */}
      <div class="flex flex-col items-center gap-2 px-4 md:gap-4">
        <h1 class="max-w-[90%] text-center text-3xl font-bold md:max-w-[100%] md:text-5xl">
          Learn Qwik from A to Z (2025)
        </h1>
        <h2 class="max-w-[80%] text-center text-2xl font-semibold text-gray-800 md:max-w-[100%] md:text-4xl">
          Open the Terminal on Ubuntu (0/∞)
        </h2>
        <p class="mt-2 max-w-xl text-center text-gray-700">
          Learn how to open and use the Terminal on Ubuntu. The essential first
          step to install Node.js and start building your Qwik project.
        </p>
      </div>

      {/* ✅ Article + ad */}
      <div class="relative flex w-full max-w-screen-lg flex-col justify-center gap-4 px-4 md:flex-row">
        <div class="flex w-full flex-col gap-4 md:max-w-[calc(100%-300px)]">
          <div class="flex flex-col gap-6 rounded-lg bg-white p-6 pt-0 shadow-md">
            <article class="prose prose-lg max-w-none text-gray-800">
              <figure>
                <ImgTerminalOpened
                  class="h-full w-full object-contain object-center"
                  alt="Ubuntu Terminal Opened"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  Starting your Qwik journey from scratch on Ubuntu.
                </figcaption>
              </figure>

              {/* ✅ Introduction */}
              <h3>🚀 Why Are We Starting from Scratch?</h3>
              <p>
                In this "Learn Qwik from A to Z (2025)" series, we are
                rebuilding everything from zero. The goal is to guide absolute
                beginners — and those who want a clean foundation — through
                every essential step to set up a complete Qwik development
                environment.
              </p>
              <p>
                We won't dive into every technical detail, but we'll make sure
                you know everything important to install, configure, and start
                developing your first real Qwik application, smoothly and
                confidently.
              </p>

              {/* ✅ Prerequisites */}
              <h3>🎒 Prerequisites for Building a Qwik App</h3>
              <p>
                Before creating your first project, here's what you'll need:
              </p>
              <ul>
                <li>
                  ✅ <strong>Ubuntu 22.04 LTS</strong> (or another recent
                  version)
                </li>
                <li>
                  ◇ <strong>Basic Terminal commands</strong> (you are here)
                </li>
                <li>
                  ◇ <strong>Node.js v18.17 or higher</strong> (coming soon)
                </li>
                <li>
                  ◇ <strong>Visual Studio Code (or Cursor)</strong> (coming
                  soon)
                </li>
              </ul>

              <p>
                👉 If you don't have Ubuntu installed yet, you can download it
                from the official website:{" "}
                <a
                  href="https://ubuntu.com/download/desktop"
                  target="_blank"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  ubuntu.com/download/desktop
                </a>
                .
              </p>

              {/* ✅ Steps */}
              <h3>📂 Step 0: Open the Terminal on Ubuntu</h3>
              <ol class="list-inside list-decimal space-y-6 pl-4 md:list-outside md:pl-8">
                <li>
                  <p>
                    Click on the <strong>Activities</strong> menu at the{" "}
                    <strong>bottom left</strong> of your screen.
                  </p>
                  <figure>
                    <ImgOpenApplications
                      alt="Open Activities Menu Ubuntu"
                      class="mx-auto rounded-md shadow-md"
                    />
                    <figcaption class="mt-2 text-center text-sm text-gray-500">
                      The Activities button to access all your apps.
                    </figcaption>
                  </figure>
                </li>

                <li>
                  <p>
                    In the search bar, type <strong>Terminal</strong> to find
                    the app.
                  </p>
                  <figure>
                    <ImgSearchTerminal
                      alt="Search Terminal on Ubuntu"
                      class="mx-auto rounded-md shadow-md"
                    />
                    <figcaption class="mt-2 text-center text-sm text-gray-500">
                      Searching for the Terminal application.
                    </figcaption>
                  </figure>
                </li>

                <li>
                  <p>
                    Right-click on the Terminal icon and choose{" "}
                    <strong>"Pin to Dash"</strong>.
                  </p>
                  <figure>
                    <ImgPinTerminal
                      alt="Pin Terminal to Dash"
                      class="mx-auto rounded-md shadow-md"
                    />
                    <figcaption class="mt-2 text-center text-sm text-gray-500">
                      Pinning the Terminal for faster access.
                    </figcaption>
                  </figure>
                </li>

                <li>
                  <p>Click on the Terminal icon from the sidebar to open it!</p>
                  <figure>
                    <ImgTerminalInDash
                      alt="Terminal Icon in Sidebar"
                      class="mx-auto rounded-md shadow-md"
                    />
                    <figcaption class="mt-2 text-center text-sm text-gray-500">
                      Terminal pinned and ready to launch.
                    </figcaption>
                  </figure>
                </li>

                <li>
                  <p>
                    Your Terminal window should now be open and ready for use.
                  </p>
                  <figure>
                    <ImgTerminalOpened
                      alt="Opened Terminal on Ubuntu"
                      class="mx-auto rounded-md shadow-md"
                    />
                    <figcaption class="mt-2 text-center text-sm text-gray-500">
                      The Ubuntu Terminal open and ready.
                    </figcaption>
                  </figure>
                </li>
              </ol>

              {/* ✅ Check Terminal */}
              <h3>👨‍💻 Check if Everything Works</h3>
              <p>Run this command to check if your Terminal works:</p>

              <CodeBlock
                code={`ls`}
                language="bash"
                icon="terminal"
                text="Terminal"
                hideLineNumbers
              />

              <figure>
                <ImgTerminalOpenedLs
                  alt="Terminal showing the result of ls command"
                  class="mx-auto rounded-md shadow-md"
                />
                <figcaption class="mt-2 text-center text-sm text-gray-500">
                  The result of running <code>ls</code> — showing files and
                  folders.
                </figcaption>
              </figure>

              <p>
                <strong>Explanation:</strong> The <code>ls</code> command lists
                the files and folders inside your current directory.
              </p>

              {/* ✅ Video */}
              <h3>🎥 Watch the Video</h3>
              <p>
                Watch this quick video showing exactly how to open the Terminal:
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

              {/* ✅ CTA */}
              <p>
                Now that your Terminal is open and working, you're ready to
                install Node.js — the first tool needed to start developing your
                Qwik app! 🚀
              </p>

              <p>
                Next step: <strong>Install Node.js on Ubuntu</strong> →{" "}
                <a
                  href="/blog/install-nodejs-ubuntu/"
                  class="text-blue-600 underline hover:text-blue-800"
                >
                  Go to the next chapter
                </a>
                .
              </p>
            </article>
          </div>
        </div>

        {/* ✅ Right ad */}
        {!isSubscribed && <DesktopStickyAd />}
      </div>

      {!isSubscribed && <MobileStickyAd />}
    </div>
  );
});

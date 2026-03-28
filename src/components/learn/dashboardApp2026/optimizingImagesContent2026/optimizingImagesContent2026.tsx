// src/components/learn/dashboardApp2026/optimizingImagesContent2026/optimizingImagesContent2026.tsx

import { component$, useSignal } from "@builder.io/qwik";
import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import { GoToNextChapterBlock } from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import { PageTitle } from "~/components/UI/pageTitle/pageTitle";
import { Quiz } from "~/components/UI/quiz/quiz";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import TableOfTopicsCovered2026 from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered2026";

import AddDesktopHeroImg2026 from "~/assets/img/addDesktopHeroImg2026.png?jsx";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import { ImageSoluce2026 } from "./imageSoluce2026/imageSoluce2026";

export const OptimizingImagesContent2026 = component$(() => {
  const imageSoluceDisplay2026 = useSignal(false);

  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle version="2026 Edition" />

        <p>
          In the previous chapter, you optimized font loading in your Qwik
          application. Now let&apos;s continue improving the homepage by working
          on image loading.
        </p>

        <p>
          In this chapter, you&apos;ll see how Qwik handles image optimization,
          then add a desktop hero image and a mobile version for smaller
          screens.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Why image optimization matters",
              emoji: "🖼️",
              anchor: "why-optimize-images",
            },
            {
              title: "How Qwik image optimization works",
              emoji: "⚙️",
              anchor: "how-does-it-work-with-qwik",
            },
            {
              title: "Adding the desktop hero image",
              emoji: "🖥️",
              anchor: "adding-the-desktop-hero-image",
            },
            {
              title: "Practice: add the mobile hero image",
              emoji: "📱",
              anchor: "practice-adding-the-mobile-hero-image",
            },
            {
              title: "Use eager loading and fetch priority for hero images",
              emoji: "🚀",
              anchor: "use-eager-loading-and-fetch-priority-for-hero-images",
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🖼️ Why optimize images?"
          id="why-optimize-images"
        />

        <p>
          Images often represent a large part of a page&apos;s total weight. If
          they are too large or poorly delivered, they can slow down loading,
          waste bandwidth, and hurt the experience, especially on mobile
          networks.
        </p>

        <p>
          In Qwik, responsive image optimization is built in. It relies on{" "}
          <code>vite-imagetools</code>, so you do not need to install an
          additional image component just to get started.
        </p>

        <p>
          The goal is simple: serve lighter images, generate responsive sources,
          and let the browser choose the most suitable version for the
          user&apos;s device. Qwik also includes image dimensions automatically,
          which helps prevent layout reflows and improves visual stability.
        </p>

        <p>
          Under the hood, the final output stays simple: Qwik renders optimized
          images as regular <code>{`<img>`}</code> elements in the HTML.
        </p>

        <SubtitleWithAnchor
          title="⚙️ How does it work with Qwik?"
          id="how-does-it-work-with-qwik"
        />

        <ol class="ml-1">
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">1.</span>
            <span class="font-bold">Importing images: </span>
            you import an image from the <code>src</code> folder. Qwik then
            generates optimized responsive image variants for different
            breakpoints.
          </li>
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">2.</span>
            <span class="font-bold">
              Rendering the <code>{`<img>`}</code> element:{" "}
            </span>
            Qwik renders an optimized <code>{`<img>`}</code> element with a{" "}
            <code>srcset</code>, so the browser can choose the most appropriate
            source depending on the screen size and resolution.
          </li>
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">3.</span>
            <span class="font-bold">Image attributes: </span>
            images use <code>loading="lazy"</code> and{" "}
            <code>decoding="async"</code> by default, which helps improve
            loading performance without blocking page rendering.
          </li>
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">4.</span>
            <span class="font-bold">Suffix: </span>
            add the <code>?jsx</code> suffix at the end of the image import path
            to enable Qwik&apos;s image optimization pipeline. Keep{" "}
            <code>jsx</code> at the end of the path, otherwise TypeScript may
            complain.
          </li>
        </ol>

        <p>
          In short, Qwik keeps the developer API small while still generating
          responsive image output, automatic dimensions, and optimized delivery
          under the hood.
        </p>

        <SubtitleWithAnchor
          title="🖥️ Adding the desktop hero image"
          id="adding-the-desktop-hero-image"
        />

        <p>
          Let&apos;s add a hero image to your dashboard. This version will be
          displayed on larger screens.
        </p>

        <p>
          In your <code>src/assets/</code> folder, create a new folder called{" "}
          <code>img</code>.
        </p>

        <p>
          <span class="font-bold">Download</span> the desktop hero image here
          and add it to the <code>src/assets/img/</code> folder.
        </p>

        <ul>
          <li>
            <a href="/downloads/heroImg.png" download="heroImg.png">
              <code>heroImg.png 💾</code>
            </a>
          </li>
        </ul>

        <p>
          In your <code>src/routes/index.tsx</code> file, import the image. Do
          not forget the <code>?jsx</code> suffix at the end of the import path.
        </p>

        <p>Then add the hero image to your file:</p>

        <CodeBlock
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";
import styles from "./home.module.css";

import HeroImg from "~/assets/img/heroImg.png?jsx";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <LRDQwikLogo />
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div class={styles.shape} />
          <p class="lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to LRDQwik.</strong> This is the example for the{" "}
            <Link
              href="https://www.learn-qwik.com/learn/dashboard-app-2026/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500"
            >
              Learn Qwik Course
            </Link>
            , brought to you by{" "}
            <Link
              href="https://www.lareponsedev.fr/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500"
            >
              LaReponseDev
            </Link>{" "}
            .
          </p>
          <Link
            href="/dashboard/"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Go To Dashboard</span>
            <HiArrowRightOutline class="h-4 w-4" />
          </Link>
        </div>
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <HeroImg class="hidden md:block" />
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
};`}
          language="tsx"
          text="src/routes/index.tsx"
          icon="typescript"
          decorations={[
            {
              start: { line: 6, character: 0 },
              end: { line: 6, character: 51 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 48, character: 0 },
              end: { line: 48, character: 45 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>This is what your homepage should look like now:</p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <AddDesktopHeroImg2026
            alt="Desktop hero image displayed on the homepage."
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <SubtitleWithAnchor
          title="📱 Practice: add the mobile hero image"
          id="practice-adding-the-mobile-hero-image"
        />

        <p>
          Now it&apos;s your turn. Add a mobile hero image to your dashboard.
          This version will be displayed on smaller screens.
        </p>

        <p>
          You can <span class="font-bold">download</span> the mobile hero image
          here:
        </p>

        <ul>
          <li>
            <a href="/downloads/heroMobileImg.png" download="heroMobileImg.png">
              <code>heroMobileImg.png 💾</code>
            </a>
          </li>
        </ul>

        <p>
          Once you&apos;re ready, expand the code snippet below to reveal the
          solution.
        </p>

        <div class="bg-vercel-200 -mx-5 mb-8 p-5.25 md:-mx-15.5 md:rounded-2xl md:p-4 md:px-15.5 md:py-12">
          <button
            class="button_base reset_reset button_button geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (imageSoluceDisplay2026.value = !imageSoluceDisplay2026.value)
            }
          >
            <span class="button_prefix">
              {imageSoluceDisplay2026.value ? <EyeBarredSvg /> : <EyeSvg />}
            </span>
            <span class="button_content">
              {imageSoluceDisplay2026.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>

          {imageSoluceDisplay2026.value && <ImageSoluce2026 />}
        </div>

        <SubtitleWithAnchor
          title="🔎 Inspecting the rendered HTML"
          id="inspecting-the-rendered-html"
          level="h3"
        />

        <p>
          Once both images are added, you can inspect the homepage in your
          browser devtools and look at the HTML that Qwik actually renders.
        </p>

        <p>
          Here, Qwik outputs responsive <code>{`<img>`}</code> elements with{" "}
          <code>srcset</code>, automatic <code>width</code> and{" "}
          <code>height</code>, and default loading behavior.
        </p>

        <CodeBlock
          code={`<div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
  <img
    loading="lazy"
    srcset="
      /@imagetools/... 200w,
      /@imagetools/... 400w,
      /@imagetools/... 600w,
      /@imagetools/... 800w,
      /@imagetools/... 866w"
    width="866"
    height="621"
    class="hidden md:block"
  />
  <img
    loading="lazy"
    srcset="
      /@imagetools/... 200w,
      /@imagetools/... 275w"
    width="275"
    height="522"
    class="block md:hidden"
  />
</div>`}
          language="tsx"
          text="Rendered HTML in the browser"
          icon="html"
          hideLineNumbers
          copyButton={false}
        />

        <p>
          Here, you can see two optimized <code>{`<img>`}</code> elements, each
          with its own responsive <code>srcset</code>, generated{" "}
          <code>width</code> and <code>height</code> values, and{" "}
          <code>loading="lazy"</code> in the rendered HTML.
        </p>

        <SubtitleWithAnchor
          title="🚀 Use eager loading and fetch priority for hero images"
          id="use-eager-loading-and-fetch-priority-for-hero-images"
        />

        <p>
          Lazy loading is usually a great default for offscreen images, because
          it avoids downloading them too early.
        </p>

        <p>
          But hero images are different. In this example, both hero images are
          visible immediately when the page loads, depending on the screen size.
          For images in the first viewport, it makes more sense to use{" "}
          <code>loading="eager"</code> instead. And for a truly important image,
          you can also raise its priority with <code>fetchPriority="high"</code>
          .
        </p>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          Qwik uses <code>loading="lazy"</code> by default for optimized images,
          which is usually a smart choice for offscreen content, as explained in
          the{" "}
          <BlankLink
            href="https://qwik.dev/docs/integrations/image-optimization/"
            text="Qwik image optimization docs"
          />
          . But for hero images visible in the first viewport, it is better to
          switch to <code>loading="eager"</code>. For a truly critical image,
          you can also use <code>fetchPriority="high"</code>, as recommended in{" "}
          <BlankLink
            href="https://web.dev/articles/browser-level-image-lazy-loading?hl=fr#loading-priority"
            text="web.dev's guide to browser-level image lazy loading"
          />
          .
        </InfoBox2026>

        <p>
          You can override the default behavior by passing the{" "}
          <code>loading</code> and <code>fetchPriority</code> props directly to
          the image components:
        </p>

        <CodeBlock
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";
import styles from "./home.module.css";

import HeroImg from "~/assets/img/heroImg.png?jsx";
import HeroMobileImg from "~/assets/img/heroMobileImg.png?jsx";

export default component$(() => {
  return (
    <main class="flex min-h-screen flex-col p-6">
      <div class="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <LRDQwikLogo />
      </div>
      <div class="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div class="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div class={styles.shape} />
          <p class="lusitana text-xl text-gray-800 md:text-3xl md:leading-normal">
            <strong>Welcome to LRDQwik.</strong> This is the example for the{" "}
            <Link
              href="https://www.learn-qwik.com/learn/dashboard-app-2026/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500"
            >
              Learn Qwik Course
            </Link>
            , brought to you by{" "}
            <Link
              href="https://www.lareponsedev.fr/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-500"
            >
              LaReponseDev
            </Link>{" "}
            .
          </p>
          <Link
            href="/dashboard/"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Go To Dashboard</span>
            <HiArrowRightOutline class="h-4 w-4" />
          </Link>
        </div>
        <div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <HeroImg
            class="hidden md:block"
            loading="eager"
            fetchPriority="high"
          />
          <HeroMobileImg
            class="block md:hidden"
            loading="eager"
            fetchPriority="high"
          />
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
};`}
          language="tsx"
          text="src/routes/index.tsx"
          icon="typescript"
          decorations={[
            {
              start: { line: 51, character: 0 },
              end: { line: 52, character: 32 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 56, character: 0 },
              end: { line: 57, character: 32 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          In JSX, the prop is written as <code>fetchPriority</code>. In the
          rendered HTML, it appears as <code>fetchpriority</code>.
        </p>

        <p>
          If you inspect the rendered HTML again, you should now see{" "}
          <code>loading="eager"</code> and <code>fetchpriority="high"</code> on
          both images:
        </p>

        <CodeBlock
          code={`<div class="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
  <img
    loading="eager"
    fetchpriority="high"
    srcset="
      /@imagetools/... 200w,
      /@imagetools/... 400w,
      /@imagetools/... 600w,
      /@imagetools/... 800w,
      /@imagetools/... 866w"
    width="866"
    height="621"
    class="hidden md:block"
  />
  <img
    loading="eager"
    fetchpriority="high"
    srcset="
      /@imagetools/... 200w,
      /@imagetools/... 275w"
    width="275"
    height="522"
    class="block md:hidden"
  />
</div>`}
          language="tsx"
          text="Rendered HTML after the update"
          icon="html"
          hideLineNumbers
          copyButton={false}
        />

        <p>
          This example shows how you can start with Qwik&apos;s defaults,
          inspect the rendered HTML, and then adjust the loading behavior when
          an image is critical for the first screen.
        </p>

        <Quiz
          question="What does the ?jsx suffix do when importing an image in Qwik?"
          options={[
            {
              text: "It enables Qwik's image optimization pipeline for that image import.",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "It converts the image into an SVG component.",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "It disables lazy loading for better SEO.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "It forces the browser to always load the largest version first.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="This suffix is what tells Qwik to treat the image as an optimized asset."
          responseText="Using the ?jsx suffix activates Qwik's image optimization flow. That allows the framework to generate responsive sources and modern formats, making image delivery lighter and more efficient."
        />

        <Quiz
          displayHeader={false}
          question="Why use separate desktop and mobile hero images?"
          options={[
            {
              text: "Because browsers cannot resize the same image on different screens.",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because using different images can better match the available screen space and improve the visual result on each device.",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Because Qwik only supports one image per breakpoint.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Because mobile devices cannot display imported images from src/assets.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think layout and usability, not superstition."
          responseText="A desktop hero image and a mobile hero image can be designed for very different screen proportions. That gives you better control over composition, readability, and the overall user experience."
        />

        <Quiz
          displayHeader={false}
          question={
            'Why is loading="eager" a better choice here for the hero images?'
          }
          options={[
            {
              text: "Because eager loading is always better than lazy loading for every image on a page.",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because these hero images are visible in the first viewport, so they should start loading immediately.",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Because Qwik does not support lazy loading for mobile images.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: 'Because loading="eager" automatically converts the images into AVIF.',
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about where the images appear when the page first loads."
          responseText="These hero images are visible immediately when the page loads, depending on the screen size. For important first-screen images like these, eager loading is usually a better choice than lazy loading, because it lets the browser start loading them right away."
        />

        <SubtitleWithAnchor
          title="Recommended reading"
          id="recommended-reading"
          level="h3"
        />

        <p>
          Here are two useful references if you want to explore image
          optimization in more detail.
        </p>

        <ul>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/integrations/image-optimization/"
              text="Qwik Docs | Image optimization"
            />
          </li>
          <li>
            <BlankLink
              href="https://web.dev/articles/browser-level-image-lazy-loading"
              text="web.dev | Browser-level image lazy loading"
            />
          </li>
        </ul>

        <SubtitleWithAnchor title="Source code" level="h3" id="source-code" />

        <p>
          You can find the source code for chapter 7 2026 Edition on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-7-Optimizing-Images"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={7}
          text="You've learned how to optimize and render responsive images in your Qwik app."
          version="2026 Edition"
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={8}
          title="Fetching Data"
          text="Learn how to load dashboard data with routeLoader$() using mocked local data in a clean, reusable architecture."
        />
      </div>
    </>
  );
});

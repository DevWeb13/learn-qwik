// src/components/dashboardApp/optimizing-fonts-and-images-content/optimizing-fonts-and-images-content.tsx

import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import Feedback from "~/components/UI/feedback/feedback";
import GoToNextChapterBlock from "~/components/UI/goToNextChapterBlock/goToNextChapterBlock";
import PageTitle from "~/components/UI/pageTitle/pageTitle";
import CompletedChapter from "~/components/UI/completedChapter/completedChapter";
import TableOfTopicsCovered from "~/components/UI/tableOfTopicsCovered/tableOfTopicsCovered";
import SubtitleWithAnchor from "~/components/UI/subtitleWithAnchor/subtitleWithAnchor";
import BlankLink from "~/components/UI/blankLink/blankLink";
import CodeBlock from "~/components/UI/codeBlock/codeBlock";
import { EyeSvg } from "~/assets/svg/eyeSvg/eyeSvg";
import { EyeBarredSvg } from "~/assets/svg/eyeBarred/eyeBarred";
import { FontSoluce } from "./fontSoluce/fontSoluce";

import AddLusitanaAndLRDQwikLogoImg from "~/assets/img/addLusitanaAndLRDQwikLogo.png?jsx";
import AddInterImg from "~/assets/img/addInterImg.png?jsx";

export default component$(() => {
  const fontSoluceDisplay = useSignal(false);
  useStyles$(``);
  return (
    <article
      class="mt-8 w-full min-w-0 max-w-6xl px-1 md:px-6"
      style="min-height: calc(100vh - 103px);"
    >
      <div class="prose prose-vercel max-w-none">
        <PageTitle
          chapterNumber={3}
          chapterTitle="Optimizing Fonts and Images"
        />
        <p style="vertical-align: inherit;">
          In the previous chapter, you learned how to style your Qwil
          application. Let's continue working on your home page by adding a
          custom font and a hero image.
        </p>
        <div class="not-prose in-this-chapter_wrapper__yrXTP mb-4 rounded-[12px] md:mx-[-64px] md:my-12 md:bg-[#fafafa] md:p-4 md:px-[64px] md:py-12">
          <p
            class="text_wrapper pb-1"
            data-version="v1"
            style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.25rem; --xs-text-line-height: 1.5rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.020625rem; --sm-text-size: 1.25rem; --sm-text-line-height: 1.5rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.020625rem; --smd-text-size: 1.5rem; --smd-text-line-height: 2rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.029375rem; --md-text-size: 1.5rem; --md-text-line-height: 2rem; --md-text-weight: 600; --md-text-letter-spacing: -0.029375rem; --lg-text-size: 1.5rem; --lg-text-line-height: 2rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.029375rem;"
          >
            In this chapter...
          </p>
          <p
            class="text_wrapper"
            data-version="v1"
            style="--text-color: var(--ds-gray-900); --xs-text-size: 0.875rem; --xs-text-line-height: 1.25rem; --xs-text-weight: 400; --xs-text-letter-spacing: initial; --sm-text-size: 0.875rem; --sm-text-line-height: 1.25rem; --sm-text-weight: 400; --sm-text-letter-spacing: initial; --smd-text-size: 1rem; --smd-text-line-height: 1.5rem; --smd-text-weight: 400; --smd-text-letter-spacing: initial; --md-text-size: 1rem; --md-text-line-height: 1.5rem; --md-text-weight: 400; --md-text-letter-spacing: initial; --lg-text-size: 1rem; --lg-text-line-height: 1.5rem; --lg-text-weight: 400; --lg-text-letter-spacing: initial; margin: 0px;"
          >
            Here are the topics we will cover:
          </p>
          <TableOfTopicsCovered
            topics={[
              {
                title: "Different ways to add custom fonts",
                icon: "t",
              },
              {
                title: "Different ways to add images",
                icon: "imageIcon",
              },
            ]}
          />
        </div>
        <SubtitleWithAnchor
          title="Why Optimize Fonts?"
          id="why-optimize-fonts"
        />
        <p>
          Fonts play a crucial role in web design, but using custom fonts can
          impact performance since these fonts need to be downloaded on a
          visitor’s first visit to a site.
        </p>
        <p>
          <BlankLink
            href="https://web.dev/articles/cls"
            text="Cumulative Layout Shift (CLS)"
          />{" "}
          is a metric used by Google to assess performance and user experience.
          With fonts, CLS can occur when the browser initially renders text with
          a fallback or system font, and then replaces it with a custom font
          once loaded. This change can affect the size, spacing, or layout of
          the text, influencing other elements on the page.
        </p>
        // Add Image
        <p>
          In Qwik, you can optimize font loading by using the{" "}
          <code>`font-display`</code> property to control how fonts are loaded.
          Common values for this property include <code>`swap`</code> and{" "}
          <code>`fallback`</code>, allowing you to choose between different
          loading strategies.
        </p>
        <p>
          To further improve performance, Qwik recommends self-hosting your
          fonts. Instead of using third-party providers like Google Fonts, you
          can download the font files and serve them from your own domain, which
          reduces network requests and enhances privacy as well as performance,
          especially in PWA scenarios or under limited connectivity.
        </p>
        <p>
          This ensures that the custom font is used efficiently, minimizing
          impacts on CLS and enhancing the overall user experience.
        </p>
        <SubtitleWithAnchor title="Google Fonts" id="google-fonts" />
        <p>
          Google Fonts is a popular open source library, offering over 1500 font
          families.
        </p>
        <p>
          While they are easy to use, they involve downloading a CSS file and
          fonts from different domains, causing a noticeable delay and switch in
          font loading despite using <code>swap</code>.
        </p>
        <p>Here's what happens:</p>
        <ol class="ml-1">
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">1.</span>The
            browser spots the{" "}
            <code>{`<link href="https://fonts.googleapis.com/css2">`}</code>{" "}
            tag, which prompts it to request a CSS file.
          </li>
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">2. </span>After
            analyzing the file, it realizes a web font from{" "}
            <code>https://fonts.gstatic.com</code> is needed, leading to another
            request.
          </li>
        </ol>
        <p>
          To mitigate this, we can <span class="font-bold">self host</span> our
          fonts.
        </p>
        <SubtitleWithAnchor title="Self Hosting" id="self-hosting" />
        <p>
          Rather than using a third-party provider like Google Fonts, we can
          self-host our fonts. This means we download the font files and serve
          them from our own domain.
        </p>
        <p>Some benefits include:</p>
        <ul class="text-[--qwik-dark-blue]">
          <li class=" ">
            <span class="mr-2 text-[--ds-gray-1000]">Improved performance</span>
          </li>
          <li class=" ">
            <span class="mr-2 text-[--ds-gray-1000]">
              More privacy as Google tracks font usage.
            </span>
          </li>
          <li class="">
            <span class="mr-2 text-[--ds-gray-1000]">
              {" "}
              Self-hosted fonts load offline, useful for PWA's or low
              connectivity situations.
            </span>
          </li>
        </ul>
        <SubtitleWithAnchor title="Fontsource" id="fontsource" />
        <p>
          Self-hosting with{" "}
          <BlankLink href="https://fontsource.org/" text="fontsource" />
          is as easy as an npm install. It includes all of the google fonts, as
          well as{" "}
          <BlankLink
            href="https://github.com/fontsource/font-files/tree/main/fonts/other"
            text="other open source fonts"
          />
          , without the hassle of managing the files yourself.
        </p>
        <SubtitleWithAnchor
          title="Adding a primary font with Fontsource"
          id="adding-a-primary-font-with-fontsource"
        />
        <p>
          To add a custom font to your Qwik application, you need to download
          the font files and add them to your project.
        </p>
        <p>
          For your dashboard, let's use the variable version of the{" "}
          <code>`Inter`</code> font by Fontsource.
        </p>
        <p>
          First, install{" "}
          <BlankLink
            text="@fontsource-variable/inter"
            href="https://fontsource.org/fonts/inter/install"
          />
          :
        </p>
        <CodeBlock
          code={`npm install @fontsource-variable/inter`}
          language="bash"
          text="Terminal"
          icon="terminal"
          hideLineNumbers
        />
        <p>
          Next, use the font in your <code>src/global.css</code> file, you
          choose 'Advanced Usage' and copy the font-face declaration:
        </p>
        <CodeBlock
          code={`/* inter-latin-wght-normal */
@font-face {
  font-family: "Inter Variable";
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url(@fontsource-variable/inter/files/inter-latin-wght-normal.woff2)
    format("woff2-variations");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
    U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}`}
          language="css"
          text="src/global.css"
          icon="css"
          hideLineNumbers
        />
        <p>
          Now, you can use the <code>`Inter`</code> font in your Qwik
          application.
        </p>
        <p>
          To use the font in your CSS, you can reference the font family in your
          styles:
        </p>
        <CodeBlock
          code={`body {
  font-family: "Inter Variable", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}`}
          language="css"
          text="src/global.css"
          icon="css"
          hideLineNumbers
        />
        <p>
          By adding <code class="whitespace-nowrap">`Inter`</code> to the{" "}
          <code class="whitespace-nowrap">{"<body>"}</code>element, the font
          will be applied throughout your application. Here, you're also adding{" "}
          <code class="whitespace-nowrap">`-webkit-font-smoothing`</code> and{" "}
          <code class="whitespace-nowrap">`-moz-osx-font-smoothing`</code> to
          ensure the font looks crisp on different browsers. It's not necessary
          to use this class, but it adds a nice touch.
        </p>
        <p>
          Navigate to your browser, open dev tools and select the{" "}
          <code class="whitespace-nowrap">{"<body>"}</code> element. You should
          see <code>Inter</code> are now applied under styles.
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <AddInterImg
            alt="Inter font applied to the body element."
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>
        <SubtitleWithAnchor
          title="Add a second font by hosting it in your project"
          id="add-a-second-font-by-hosting-it-in-your-project"
        />
        <p>You can also host font files directly on our application.</p>
        <p>
          <span class="font-bold">Now it's your turn!</span> Import a secondary
          font called <code>`Lusitana`</code> by hosting the font files in your
          project. You must pass the font files to the{" "}
          <code>src/global.css</code> file with the font-face declaration, and
          create a <code>`.lusitana`</code> class in your CSS file to apply the
          font to specific elements.
        </p>
        <p>
          Add your class to the <code>{"<p>"}</code> element in your{" "}
          <code>src/routes/index.tsx/</code> file.
        </p>
        <p>
          For this practice, you use the{" "}
          <BlankLink
            href="https://gwfh.mranftl.com/fonts"
            text="Google Webfonts Helper"
          />
          , which is a tool that allows you to download the optimized google
          fonts.
        </p>
        <p>
          You must take the two font-weight (regular, 700) files and add them to
          your project.
        </p>
        <blockquote class="p-3 text-sm">
          <p>
            <strong>Hints:</strong>
          </p>
          <ul>
            <li>
              In{" "}
              <BlankLink
                href="https://gwfh.mranftl.com/fonts/lusitana?subsets=latin"
                text="Google Webfonts Helper/lusitana"
              />{" "}
              check the 700 box.
            </li>
            <li>
              You can customize folder prefix to adjust your{" "}
              <code>@font-face</code> declaration. (e.g.{" "}
              <code>"./assets/fonts/"</code>)
            </li>
            <li>
              Don't forget copy the font-face declaration and add it to your{" "}
              <code>src/global.css</code> file.
            </li>
            <li>
              Download the font zip files, extract them and add the two fonts
              files to your project.
            </li>
            <li>
              Create a <code>/fonts</code> folder into <code>src/assets/</code>{" "}
              directory and add the font files there.
            </li>
          </ul>
        </blockquote>
        <div class="bg-vercel-200 -mx-5 mb-8 p-[21px] md:-mx-[62px] md:rounded-[16px] md:p-4 md:px-[62px] md:py-12">
          <button
            class="button_base reset_reset button_button  geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (fontSoluceDisplay.value = !fontSoluceDisplay.value)
            }
          >
            <span class="button_prefix">
              {fontSoluceDisplay.value ? <EyeBarredSvg /> : <EyeSvg />}
            </span>
            <span class="button_content">
              {fontSoluceDisplay.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>
          {fontSoluceDisplay.value && <FontSoluce />}
        </div>
        <p>
          Finally, the <code>{"<LRDQwikLogo />"}</code> component also uses
          Lusitana. It was commented out to prevent errors.
        </p>
        <p>
          You can <span class="font-bold"> download</span> it here:{" "}
        </p>
        <ul>
          <li>
            <a href="/downloads/LRDQwikLogo.tsx" download="LRDQwikLogo.tsx">
              <code>LRDQwikLogo 💾</code>
            </a>
          </li>
        </ul>
        <p>
          Add the <code>LRDQwikLogo.tsx</code> file to your{" "}
          <code>src/assets/svg/</code> folder.
        </p>
        <p>
          In your <code>src/routes/index.tsx</code> file, uncomment the import
          and the
          <code>{"<LRDQwikLogo />"}</code> component.
        </p>
        <CodeBlock
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import styles from "./home.module.css";

import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";

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
            <strong>Welcome to LRD-Qwik.</strong> This is the example for the{" "}
            <Link
              href="https://www.learn-qwik.com/learn/"
              target="_blank"
              class="text-blue-500"
            >
            // ...`}
          language="tsx"
          text="src/routes/index.tsx"
          icon="typescript"
          decorations={[
            {
              start: { line: 5, character: 0 },
              end: { line: 5, character: 55 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 11, character: 0 },
              end: { line: 11, character: 23 },
              properties: { class: "newLine" },
            },
          ]}
        />
        <p>
          Now, if you run your application, you should see the{" "}
          <code>`Lusitana`</code> font applied to your <code>{"<p>"}</code> and
          the icon in your <code>{"<LRDQwikLogo />"}</code> component.🏆
        </p>
        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <AddLusitanaAndLRDQwikLogoImg
            alt="Lusitana font applied to the <p> element and the icon in the <LRDQwikLogo /> component."
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>
        <p>
          <span class="font-bold">Congratulations!</span> You have successfully
          added custom fonts to your Qwik application.🎉
        </p>
        <SubtitleWithAnchor title="Optimizing Images" id="optimizing-images" />
        <p>
          Images are essential for web design, but they can also impact
          performance. To optimize images, you can use the <code>`srcset`</code>{" "}
          attribute to provide different image sizes based on the device's
          resolution.
        </p>
        <p>
          This ensures that the browser only downloads the image size it needs,
          reducing the image's file size and improving performance.
        </p>
        <p>
          In Qwik, you can use the <code>{`<img>`}</code> tag with the{" "}
          <code>`srcset`</code> attribute to optimize images.
        </p>
        <p>
          Let's add a hero image to your dashboard using the{" "}
          <code>{`<img>`}</code> tag with the <code>`srcset`</code> attribute.
        </p>
        <p>
          First, download the image from{" "}
          <BlankLink
            href="https://unsplash.com/photos/6H9H8d4ode4"
            text="Unsplash"
          />
          .
        </p>
        <p>
          Next, add the image to your project in the <code>src/assets/</code>{" "}
          directory.
        </p>
        <p>
          In your <code>src/routes/index.tsx</code> file, add the following code
          to display the image:
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-[640px] flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={3}
          text="
          You've learned how to use fonts and images using Qwik."
        />
        <GoToNextChapterBlock
          goToChapter={4}
          title="Creating Layouts and Pages"
          text="Let's create your dashboard routes using nested layouts and pages!"
        />
      </div>
      <Feedback />
      <div class="mb-[40px] md:mb-[120px]"></div>
    </article>
  );
});

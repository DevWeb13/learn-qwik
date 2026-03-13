// src/components/learn/dashboardApp2026/optimizingFontsContent2026/optimizingFontsContent2026.tsx

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

import AddLusitanaAndLRDQwikLogoImg from "~/assets/img/addLusitanaAndLRDQwikLogo.png?jsx";
import CLSImg from "~/assets/img/CLS.png?jsx";
import { InfoBox2026 } from "~/components/UI/infoBox/infoBox2026";
import { FontSoluce2026 } from "./fontSoluce2026/fontSoluce2026";

export const OptimizingFontsContent2026 = component$(() => {
  const fontSoluceDisplay2026 = useSignal(false);

  return (
    <>
      <div class="prose prose-vercel max-w-none">
        <PageTitle version="2026 Edition" />

        <p>
          In the previous chapter, you connected your dashboard pages with Qwik
          City navigation. Now let&apos;s improve the reading experience by
          working on typography.
        </p>

        <p>
          In this chapter, you&apos;ll see why font loading matters, how to
          self-host a primary font with Fontsource, how to manually add a second
          font to your project, and why automated font optimization tools are
          starting to matter in modern setups.
        </p>

        <TableOfTopicsCovered2026
          topics={[
            {
              title: "Why font loading can affect CLS",
              emoji: "🫨",
              anchor: "why-optimize-fonts",
            },
            {
              title: "Google Fonts vs self-hosting",
              emoji: "⚖️",
              anchor: "google-fonts-vs-self-hosting",
            },
            {
              title: "Using Fontsource for your primary font",
              emoji: "📦",
              anchor: "using-fontsource",
            },
            {
              title: "Adding Inter with Fontsource",
              emoji: "🔤",
              anchor: "add-a-primary-font-with-fontsource",
            },
            {
              title: "Practice: manually host Lusitana",
              emoji: "🛠️",
              anchor: "practice-add-a-second-font-manually",
            },
            {
              title: "Advanced: automatic font optimization with Fontless",
              emoji: "⚙️",
              anchor: "advanced-fontless",
            },
          ]}
        />

        <SubtitleWithAnchor
          title="🫨 Why optimize fonts?"
          id="why-optimize-fonts"
        />

        <p>
          Fonts have a big impact on design, but they also come with a cost. If
          a custom font loads late, the browser may first render text with a
          fallback font and then replace it with the real one once it becomes
          available.
        </p>

        <p>
          That swap can change the size, spacing, or wrapping of the text. When
          that happens, nearby elements can move too. That&apos;s one of the
          ways font loading can contribute to{" "}
          <BlankLink
            href="https://web.dev/articles/cls"
            text="Cumulative Layout Shift (CLS)"
          />
          .
        </p>

        <figure>
          <CLSImg
            alt="Mock UI showing a layout shift caused by a late-loading custom font."
            class="block rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          A good font setup is not just about looks. It also helps text appear
          quickly, keeps layout shifts under control, and reduces unnecessary
          external dependencies.
        </p>

        <p>
          When a custom font loads, browsers usually follow one of two
          strategies: FOIT (Flash Of Invisible Text) or FOUT (Flash Of Unstyled
          Text), as explained in the{" "}
          <BlankLink
            href="https://qwik.dev/docs/cookbook/fonts/"
            text="Qwik font docs"
          />
          .
        </p>

        <InfoBox2026 emoji="💡" colorVar="--qwik-light-purple">
          FOIT hides text until the font is ready, while FOUT shows a fallback
          font first and swaps it later. Both approaches have drawbacks and can
          contribute to layout shifts. You can read more about that in{" "}
          <BlankLink
            href="https://web.dev/articles/optimize-cls"
            text="web.dev's CLS guide"
          />
          .
        </InfoBox2026>
        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="https://web.dev/articles/cls/video/web-dev-assets/layout-instability-api/layout-instability-poster.png?hl=fr"
            width="658"
          >
            <source
              src="https://web.dev/static/articles/cls/video/web-dev-assets/layout-instability-api/layout-instability2.webm?hl=fr"
              type="video/webm; codecs=vp8"
            />
            <source
              src="https://web.dev/static/articles/cls/video/web-dev-assets/layout-instability-api/layout-instability2.mp4?hl=fr"
              type="video/mp4; codecs=h264"
            />
          </video>
          <p class=" text-sm">
            A sudden shift in layout makes the user confirm a large order they
            intended to cancel.
          </p>
        </figure>

        <p>
          The <code>font-display</code> descriptor lets you control how the
          browser behaves while a font is loading. For example,{" "}
          <code>swap</code> shows fallback text immediately, while{" "}
          <code>fallback</code> reduces long swap behavior. There is no single
          perfect value here. It depends on the loading strategy you want.
        </p>

        <Quiz
          question="Why can custom fonts affect CLS?"
          options={[
            {
              text: "Because browsers always block the whole page until fonts are downloaded.",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because switching from a fallback font to a custom font can change text dimensions and move nearby elements.",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Because font files automatically disable responsive layouts.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Because using a serif font always increases layout shift.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think about what happens when the browser first shows one font, then replaces it with another."
          responseText="CLS can increase when the browser first renders text with a fallback font and then swaps in the custom font later. If the two fonts have different metrics, the text can reflow and push surrounding elements around."
        />

        <Quiz
          displayHeader={false}
          question="What does font-display help you control?"
          options={[
            {
              text: "It controls how the browser behaves while a custom font is loading.",
              isCorrect: true,
              letter: "A",
            },
            {
              text: "It automatically converts every font into a variable font.",
              isCorrect: false,
              letter: "B",
            },
            {
              text: "It disables fallback fonts completely.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "It forces all fonts to preload at startup.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="This CSS descriptor is about loading behavior, not wizardry."
          responseText="The font-display descriptor tells the browser how to display text while a custom font is still loading. For example, swap shows fallback text immediately, while fallback keeps the block period very short."
        />

        <SubtitleWithAnchor
          title="⚖️ Google Fonts vs self-hosting"
          id="google-fonts-vs-self-hosting"
        />

        <p>
          Google Fonts is popular for a reason. It&apos;s easy to use, the
          catalog is huge, and you can get something decent working very
          quickly.
        </p>

        <p>
          The downside is that you rely on third-party requests. In practice,
          that means extra network work, less control over delivery, and another
          dependency for something as basic as text.
        </p>

        <p>With a hosted Google Fonts setup, the usual flow looks like this:</p>

        <ol class="ml-1">
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">1.</span>
            The browser sees a{" "}
            <code>{`<link href="https://fonts.googleapis.com/...">`}</code> tag
            and requests a stylesheet.
          </li>
          <li>
            <span class="mr-2 font-bold text-[--qwik-dark-blue]">2.</span>
            That stylesheet then points to one or more font files, often served
            from another domain such as <code>fonts.gstatic.com</code>.
          </li>
        </ol>

        <p>
          That extra indirection is not catastrophic, but it does mean more
          moving parts than serving the files yourself.
        </p>

        <SubtitleWithAnchor
          title="Why self-host fonts?"
          id="why-self-host"
          level="h3"
        />

        <p>
          Self-hosting means the font files are served as part of your own app
          instead of being fetched from a third-party provider.
        </p>

        <p>That gives you a few practical benefits:</p>

        <ul class="text-[--qwik-dark-blue]">
          <li>
            <span class="mr-2 text-[--ds-gray-1000]">
              More control over what gets loaded
            </span>
          </li>
          <li>
            <span class="mr-2 text-[--ds-gray-1000]">
              Fewer third-party dependencies
            </span>
          </li>
          <li>
            <span class="mr-2 text-[--ds-gray-1000]">
              Better privacy and caching control
            </span>
          </li>
          <li>
            <span class="mr-2 text-[--ds-gray-1000]">
              A cleaner setup for offline or PWA scenarios
            </span>
          </li>
        </ul>

        <p>
          Tiny but important nuance: self-hosting is often a very good choice,
          but it is not automatically faster in every setup. Server quality,
          caching, and delivery still matter. The web remains a chaotic little
          beast.
        </p>

        <p>
          And if raw performance is your absolute priority, system fonts remain
          the simplest option because they are already installed on the
          user&apos;s machine, as noted in the{" "}
          <BlankLink
            href="https://qwik.dev/docs/cookbook/fonts/"
            text="Qwik font docs"
          />
          .
        </p>

        <SubtitleWithAnchor title="📦 Using Fontsource" id="using-fontsource" />

        <p>
          One very convenient way to self-host fonts is{" "}
          <BlankLink href="https://fontsource.org/" text="Fontsource" />.
        </p>

        <p>
          Fontsource packages open source fonts as npm dependencies, so you
          don&apos;t have to manually hunt down and organize every font file
          yourself. It still supports the variable Inter package we want to use
          here: <code>@fontsource-variable/inter</code>.
        </p>

        <p>
          For this dashboard, let&apos;s use the variable version of{" "}
          <code>Inter</code> as the primary font.
        </p>

        <SubtitleWithAnchor
          title="🔤 Add a primary font with Fontsource"
          id="add-a-primary-font-with-fontsource"
        />

        <p>
          First, install the package{" "}
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
          Fontsource also offers a simpler import-based setup. In a Qwik City
          project, the official{" "}
          <BlankLink
            href="https://fontsource.org/docs/guides/qwik"
            text="Fontsource Qwik guide"
          />{" "}
          suggests importing the font in <code>src/routes/layout.tsx</code>,
          although importing it in <code>index.tsx</code> or another component
          works too.
        </p>

        <p>
          For learning purposes, we&apos;ll use the more explicit approach here
          with <code>@font-face</code> in <code>src/global.css</code>. That way,
          you can clearly see how the font is declared and applied.
        </p>
        <p>
          In <code>src/global.css</code>, add the following declaration below
          the Tailwind import:
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
          Just below, add the following <code>body</code> rule:
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
          Using a fallback such as <code>sans-serif</code> is important. If the
          custom font is not ready yet, the browser still has something sensible
          to render immediately.
        </p>

        <p>
          Once that&apos;s done, open your browser devtools, inspect the{" "}
          <code>{"<body>"}</code> element, and check that the font family is now
          applied.
        </p>

        <figure class="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3 pt-8">
          <video
            autoplay
            controls
            height="510"
            loop
            muted
            poster="/img/inter-font-applied-to-the-body-element.png"
            width="658"
          >
            <source
              src="/videos/inter-font-applied-to-the-body-element.mp4"
              type="video/mp4"
            />
          </video>
          <p class=" text-sm">Inter font applied to the body element.</p>
        </figure>

        <SubtitleWithAnchor
          title="🛠️ Practice: add a second font manually"
          id="practice-add-a-second-font-manually"
        />

        <p>
          Fontsource is great, but it&apos;s not the only path. Sometimes
          you&apos;ll want to host a font manually, either because it&apos;s not
          available in the package you want, or because you prefer to manage the
          files yourself.
        </p>

        <p>
          For this practice, you&apos;ll add a secondary font called{" "}
          <code>Lusitana</code>.
        </p>

        <p>Your goal is to:</p>

        <ul>
          <li>download the font files,</li>
          <li>place them in your project,</li>
          <li>
            declare them with <code>@font-face</code>,
          </li>
          <li>
            create a <code>.lusitana</code> utility class,
          </li>
          <li>
            apply that class to the main welcome paragraph on the homepage.
          </li>
        </ul>

        <p>
          For this exercise, use{" "}
          <BlankLink
            href="https://gwfh.mranftl.com/fonts"
            text="Google Webfonts Helper"
          />
          . It lets you download optimized font files along with a CSS snippet
          you can adapt.
        </p>

        <p>
          Download the two files you need, <code>regular</code> and{" "}
          <code>700</code>, then place them in a <code>public/fonts/</code>{" "}
          folder. Qwik&apos;s current docs place fonts in <code>public/</code>{" "}
          as static assets served from the app root, so this is the cleanest
          teaching path here.
        </p>

        <SubtitleWithAnchor
          title="Tips before revealing the solution"
          id="tips-before-revealing-the-solution"
          level="h3"
        />

        <blockquote class="p-3 text-sm">
          <p>
            <strong>Hints:</strong>
          </p>
          <ul>
            <li>
              Open{" "}
              <BlankLink
                href="https://gwfh.mranftl.com/fonts/lusitana?subsets=latin"
                text="Google Webfonts Helper / Lusitana"
              />{" "}
              and include the <code>700</code> weight.
            </li>
            <li>
              Keep only the files you actually need. Less dead weight, less
              nonsense.
            </li>
            <li>
              Use <code>woff2</code> files when possible.
            </li>
            <li>
              Add your <code>@font-face</code> rules in{" "}
              <code>src/global.css</code>.
            </li>
            <li>
              Create a reusable <code>.lusitana</code> class instead of styling
              a single element directly.
            </li>
          </ul>
        </blockquote>

        <div class="bg-vercel-200 -mx-5 mb-8 p-5.25 md:-mx-15.5 md:rounded-2xl md:p-4 md:px-15.5 md:py-12">
          <button
            class="button_base reset_reset button_button geist-new-themed geist-new-button geist-new-button-fill button_invert"
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size: 16px;"
            onClick$={() =>
              (fontSoluceDisplay2026.value = !fontSoluceDisplay2026.value)
            }
          >
            <span class="button_prefix">
              {fontSoluceDisplay2026.value ? <EyeBarredSvg /> : <EyeSvg />}
            </span>
            <span class="button_content">
              {fontSoluceDisplay2026.value
                ? "Hide the solution"
                : "Reveal the solution"}
            </span>
          </button>

          {fontSoluceDisplay2026.value && <FontSoluce2026 />}
        </div>

        <p>
          The <code>{"<LRDQwikLogo />"}</code> component also uses Lusitana in
          this chapter setup, so once everything is wired correctly, you should
          see the font appear both in the paragraph and in the logo component.
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
          Add the downloaded <code>LRDQwikLogo.tsx</code> file to your{" "}
          <code>src/assets/svg/</code> folder, then import it in{" "}
          <code>src/routes/index.tsx</code> and uncomment the{" "}
          <code>{"<LRDQwikLogo />"}</code> component.
        </p>

        <CodeBlock
          code={`import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { HiArrowRightOutline } from "~/assets/svg/HiArrowRightOutline";
import { LRDQwikLogo } from "~/assets/svg/LRDQwikLogo";
import styles from "./home.module.css";

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
              start: { line: 3, character: 0 },
              end: { line: 3, character: 55 },
              properties: { class: "newLine" },
            },
            {
              start: { line: 10, character: 0 },
              end: { line: 10, character: 23 },
              properties: { class: "newLine" },
            },
          ]}
        />

        <p>
          Once you run the app, you should see <code>Lusitana</code> applied to
          the paragraph and to the logo component.
        </p>

        <figure class="flex items-center justify-center rounded-md border border-gray-200 bg-gray-100 p-3">
          <AddLusitanaAndLRDQwikLogoImg
            alt="Lusitana font applied to the paragraph and the LRDQwikLogo component."
            class="block w-full rounded-md border border-gray-200 bg-gray-100"
          />
        </figure>

        <p>
          Nice. At this point, your app uses a primary font managed with
          Fontsource and a secondary font hosted manually. That&apos;s a very
          realistic setup.
        </p>

        <SubtitleWithAnchor
          title="⚙️ Advanced: automatic font optimization with Fontless"
          id="advanced-fontless"
        />

        <p>
          The setup you used in this chapter is still a very good way to learn
          how font loading works. You explicitly declared a font with{" "}
          <code>@font-face</code>, applied it yourself, and saw how fallback
          fonts help the browser render text before the custom font is ready.
        </p>

        <p>
          If you want a more automated setup in a real project, Qwik also
          introduced{" "}
          <BlankLink href="https://qwik.dev/blog/fontless/" text="Fontless" />,
          a Vite plugin that detects <code>font-family</code> usage in your CSS,
          resolves fonts from supported providers, and generates optimized{" "}
          <code>@font-face</code> rules with metric-based fallbacks to reduce
          layout shifts.
        </p>

        <InfoBox2026 emoji="🧠" colorVar="--qwik-light-purple">
          Fontless is interesting for production projects because it automates
          part of the font optimization work. For learning purposes, though, the
          manual approach used in this chapter is still better because it shows
          the mechanics clearly instead of hiding them behind tooling.
        </InfoBox2026>

        <p>
          In other words: learn the explicit setup first, then use automation
          when it genuinely saves time. Fancy tooling is nice, but only after
          you understand the plumbing.
        </p>

        <Quiz
          question="Why is Fontsource a useful option in a Qwik project?"
          options={[
            {
              text: "Because it disables fallback fonts and forces perfect CLS.",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because it lets you self-host open source fonts through npm without manually managing every file.",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Because it only works with Google-hosted stylesheets.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Because it replaces CSS font-family declarations automatically.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="Think practical developer workflow, not wizardry."
          responseText="Fontsource makes self-hosting much easier by packaging fonts as npm dependencies. That means you keep control over the assets without manually hunting down and organizing every file yourself."
        />

        <Quiz
          displayHeader={false}
          question="What is a sensible reason to manually host a second font?"
          options={[
            {
              text: "Because manual hosting is always faster in every setup.",
              isCorrect: false,
              letter: "A",
            },
            {
              text: "Because it gives you direct control over the files and the @font-face declarations.",
              isCorrect: true,
              letter: "B",
            },
            {
              text: "Because Qwik does not support npm font packages.",
              isCorrect: false,
              letter: "C",
            },
            {
              text: "Because fonts can only be applied to headings when manually hosted.",
              isCorrect: false,
              letter: "D",
            },
          ]}
          hint="The key idea here is control, not superstition."
          responseText="Manual hosting gives you direct control over which files are shipped, where they live, and how the @font-face rules are written. That can be useful when you want a more explicit or customized setup."
        />

        <SubtitleWithAnchor
          title="Recommended reading"
          id="recommended-reading"
          level="h3"
        />

        <p>
          Here are a few solid references if you want to go a bit deeper without
          drowning in unnecessary theory:
        </p>

        <ul>
          <li>
            <BlankLink
              href="https://qwik.dev/docs/cookbook/fonts/"
              text="Qwik Docs | Font optimization cookbook"
            />
          </li>
          <li>
            <BlankLink
              href="https://qwik.dev/blog/fontless/"
              text="Qwik Blog | Effortlessly optimize web fonts with Fontless"
            />
          </li>
          <li>
            <BlankLink
              href="https://web.dev/articles/font-best-practices"
              text="web.dev | Best practices for fonts"
            />
          </li>
        </ul>

        <SubtitleWithAnchor title="Source code" level="h3" id="source-code" />

        <p>
          You can find the source code for chapter 6 2026 Edition on{" "}
          <BlankLink
            href="https://github.com/DevWeb13/qwik-dashboard-2026/tree/Chapter-6-Optimizing-Fonts"
            text="GitHub"
          />
          .
        </p>
      </div>

      <div class="relative mx-auto mb-8 mt-4 flex w-full max-w-160 flex-col items-center md:my-20 md:mt-12">
        <CompletedChapter
          chapterNumber={6}
          text="You've learned how to optimize and self-host fonts in your Qwik app."
          version="2026 Edition"
        />
        <GoToNextChapterBlock
          version="2026"
          goToChapter={7}
          title="Optimizing Images"
          text="Next, you'll improve image loading and see how Qwik handles image optimization."
        />
      </div>
    </>
  );
});

import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { QwikLogoWithText } from "~/assets/svg/qwikLogo/qwikLogoWithText";
import { ExternalArrowIcon } from "../icons/externalArrowIcon";
import { NavLink } from "../navLink/navLink";
import styles from "./navbar.module.css";

export default component$(() => {
  return (
    <div class={`${styles.navbar_links}`}>
      <div
        class={`${styles.stack_stack} stack`}
        data-version="v1"
        style="--stack-flex:initial;--stack-direction:row;--stack-align:center;--stack-justify:flex-start;--stack-padding:0px;--stack-gap:4px"
      >
        <a
          class={styles.link}
          rel="noopener noreferrer"
          target="_blank"
          data-testid="navbar/vercel-logo"
          href="https://vercel.com/home?utm_source=next-site&amp;utm_medium=banner&amp;utm_campaign=learn"
          aria-label="Go to Vercel homepage"
          title="Go to Vercel homepage"
        >
          <svg
            aria-label="Vercel logomark"
            height="22"
            style="width:auto;overflow:visible"
            viewBox="0 0 74 64"
          >
            <path
              d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
              fill="var(--geist-foreground)"
            ></path>
          </svg>
        </a>
        <svg height="32" viewBox="0 0 32 32" width="32">
          <path
            d="M22 5L9 28"
            stroke="var(--accents-2)"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
        <Link
          aria-label="Go to the homepage"
          class={`${styles.navbar_logo} ${styles.link}`}
          title="Go to the homepage"
          href="/"
        >
          <QwikLogoWithText />
        </Link>
      </div>

      <NavLink
        class={`${styles.link} relative inline-flex items-center`}
        activeClass={
          styles.link + " " + "text-black! relative inline-flex items-center"
        }
        href="/blog/"
      >
        Blog
        {/* <span class="ml-2 animate-bounce rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase text-white">
          New
        </span> */}
      </NavLink>

      <NavLink
        class={styles.link}
        activeClass={styles.link + " " + "text-black!"}
        href="/starter-pack/"
      >
        Starter Pack
      </NavLink>

      <NavLink
        class={styles.link}
        activeClass={styles.link + " " + "text-black!"}
        href="/releases/"
      >
        Releases
      </NavLink>

      <Link
        class={styles.link}
        title="Showcase"
        href="https://qwik.dev/showcase/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Showcase
        <ExternalArrowIcon />
      </Link>

      <Link
        class={styles.link}
        title="Documentation"
        href="https://qwik.dev/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Docs
        <ExternalArrowIcon />
      </Link>
    </div>
  );
});

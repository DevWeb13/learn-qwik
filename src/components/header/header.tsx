import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import styles from "./header.module.css";

import { HiUserCircleOutline } from "@qwikest/icons/heroicons";
import { ArrowRightEndOnRectangle } from "~/assets/svg/arrowRightEndOnRectangle";
import { useProfile } from "~/routes/layout";
import Popover from "../../lib/qwikUI/popover/popover";
import NavbarMobile from "../navbar-mobile/navbar-mobile";
import Navbar from "../navbar/navbar";

export default component$(() => {
  const loc = useLocation();

  const profile = useProfile();

  return (
    <header
      class={
        styles.header_header +
        " " +
        (loc.url.pathname === "/learn/" ? styles.header_sticky : "")
      }
    >
      <a
        class={`${styles.skip_nav_link_skipLink}`}
        href="#geist-skip-nav"
        tabIndex={0}
      >
        Skip to content
      </a>
      <nav class={`${styles.navbar_nav}`}>
        <NavbarMobile />
        <Navbar />
        <div class={`${styles.navbar_headerButtons}`}>
          <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/8">
            {/* When funtionnality is added, put the button back */}
            {/* <button
              class={`${styles.navbar_search}`}
              data-variant="large"
              type="button"
            >
              Search documentation...
              <kbd class={`${styles.navbar_kbd}`}>CtrlK</kbd>
            </button>
            <button
              class={`${styles.navbar_search}`}
              data-variant="medium"
              type="button"
            >
              Search...<kbd>⌘K</kbd>
            </button>
            <button
              aria-label="Search documentation"
              class={`${styles.navbar_search}`}
              data-variant="small"
              type="button"
            >
              <svg
                class={`${styles.with_icon}`}
                data-testid="geist-icon"
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                style="color:currentColor"
              >
                <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                <path d="M16 16l4.5 4.5"></path>
              </svg>
            </button> */}
            <p class={`${styles.navbar_search}`} data-variant="large">
              Search documentation...
              <kbd class={`${styles.navbar_kbd}`}>CtrlK</kbd>
            </p>
            <p class={`${styles.navbar_search}`} data-variant="medium">
              Search...<kbd>⌘K</kbd>
            </p>
            <p
              aria-label="Search documentation"
              class={`${styles.navbar_search}`}
              data-variant="small"
            >
              <svg
                class={`${styles.with_icon}`}
                data-testid="geist-icon"
                fill="none"
                height="24"
                shape-rendering="geometricPrecision"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                style="color:currentColor"
              >
                <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                <path d="M16 16l4.5 4.5"></path>
              </svg>
            </p>
          </Popover>
          <Link
            tabIndex={0}
            href="https://vercel.com/new/clone?demo-description=A%20basic%20Qwik%20app%20with%20Tailwind%2C%20Vercel%20edge%20adapter%2C%20and%20pnpm%20using%20the%20default%20template.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3qUUqmfxL9Pj1RSY64p1Qz%2Ffb2d18358bd4518837d4efb178a26a42%2FCleanShot_2023-01-17_at_10.01.53.png&demo-title=Qwik%20Starter%20Kit&demo-url=https%3A%2F%2Fqwik-tw-vercel-starter-kit.vercel.app%2F&from=templates&project-name=Qwik%20Starter%20Kit&repository-name=qwik-starter-kit&repository-url=https%3A%2F%2Fgithub.com%2FBuilderIO%2Fqwik-tw-vercel-starter-kit&skippable-integrations=1"
            class={`button_base button_button reset_reset navbar_deploy button_secondary button_small button_invert`}
            data-geist-button=""
            data-prefix="true"
            data-suffix="false"
            data-version="v1"
            style="--geist-icon-size:16px"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class={`button_prefix`}>
              <svg
                aria-label="Vercel logomark"
                height="13"
                style="width:auto;overflow:visible"
                viewBox="0 0 74 64"
              >
                <path
                  d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                  fill="var(--geist-foreground)"
                ></path>
              </svg>
            </span>
            <span class={`button_content`}>Deploy</span>
          </Link>
          <Link
            tabIndex={0}
            href={profile.value ? `/account/` : "/auth/login/"}
            class={`flex items-center justify-center gap-1 rounded-md border border-transparent 
    px-4 py-1 text-sm font-medium shadow-sm transition-all duration-300 
    focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500
    ${
      !profile.value
        ? "bg-gray-500 text-white! hover:bg-gray-600 focus:ring-gray-500" // 🏴 Gris pour non connectés
        : profile.value.access_status === "subscribed" ||
            (profile.value.access_status === "canceled" &&
              profile.value.grace_period_end &&
              new Date(profile.value.grace_period_end) > new Date())
          ? "bg-yellow-500 text-black! hover:bg-yellow-600 focus:ring-yellow-500" // 🟡 OR pour abonnés actifs / période de grâce
          : "bg-(--qwik-dark-purple) text-white! hover:bg-(--qwik-light-purple) focus:ring-(--qwik-light-purple)" // 🔵 Bleu normal pour non abonnés
    }`}
          >
            {profile.value ? (
              <>
                Account <HiUserCircleOutline class="h-6 w-6" />
              </>
            ) : (
              <>
                Connect <ArrowRightEndOnRectangle />
              </>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
});

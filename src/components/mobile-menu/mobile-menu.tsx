import { component$, useContext } from "@builder.io/qwik";
import styles from "./mobile-menu.module.css";
import { NavLink } from "../navLink/navLink";
import Popover from "../../lib/qwikUI/popover/popover";

import { MobileMenuVisibleContext, useUser } from "~/routes/layout";
import { Link, useLocation } from "@builder.io/qwik-city";
import { HiUserCircleOutline } from "@qwikest/icons/heroicons";
import { ArrowRightEndOnRectangle } from "~/assets/svg/arrowRightEndOnRectangle";

export default component$(() => {
  const user = useUser();

  const mobileMenuVisible = useContext(MobileMenuVisibleContext);
  const loc = useLocation();
  return (
    <div
      class={
        styles.mobileMenu_mobileMenu__xqbOP +
        " " +
        (mobileMenuVisible.value ? styles.visible : "")
      }
    >
      <div class={styles.jsx4194965384}>
        <ul>
          {!user.value && (
            <li class="mt-2">
              <Link
                tabIndex={0}
                href="/auth/login/"
                class="flex w-full items-center justify-center gap-1 rounded-sm border border-transparent bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-sky-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
                data-geist-button=""
                data-prefix="false"
                data-suffix="false"
                data-version="v1"
                style="--geist-icon-size:16px"
              >
                Connect <ArrowRightEndOnRectangle />
              </Link>
            </li>
          )}
          {user.value && !loc.url.pathname.startsWith("/account") && (
            <li class="mt-2">
              <Link
                tabIndex={0}
                href={`/account/${user.value.id}/`}
                class="flex w-full items-center justify-center gap-1 rounded-sm border border-transparent bg-sky-500 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-sky-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500"
                data-geist-button=""
                data-prefix="false"
                data-suffix="false"
                data-version="v1"
                style="--geist-icon-size:16px"
              >
                Account <HiUserCircleOutline class="h-6 w-6" />
              </Link>
            </li>
          )}
          <li>
            <NavLink
              class={styles.mute}
              activeClass="text-black"
              href="/"
              onClick$={() => (mobileMenuVisible.value = false)}
            >
              Learn
            </NavLink>
          </li>
          <li>
            <Link
              tabIndex={0}
              href="https://vercel.com/new/clone?demo-description=A%20basic%20Qwik%20app%20with%20Tailwind%2C%20Vercel%20edge%20adapter%2C%20and%20pnpm%20using%20the%20default%20template.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3qUUqmfxL9Pj1RSY64p1Qz%2Ffb2d18358bd4518837d4efb178a26a42%2FCleanShot_2023-01-17_at_10.01.53.png&demo-title=Qwik%20Starter%20Kit&demo-url=https%3A%2F%2Fqwik-tw-vercel-starter-kit.vercel.app%2F&from=templates&project-name=Qwik%20Starter%20Kit&repository-name=qwik-starter-kit&repository-url=https%3A%2F%2Fgithub.com%2FBuilderIO%2Fqwik-tw-vercel-starter-kit&skippable-integrations=1"
              type="submit"
              class={styles.mute}
              data-geist-button=""
              data-prefix="true"
              data-suffix="false"
              data-version="v1"
              style="--geist-icon-size:16px"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class={`${styles.button_content}`}>Deploy</span>
              <svg
                aria-hidden="true"
                class={`${styles.navbar_externalArrow}`}
                height="7"
                viewBox="0 0 6 6"
                width="7"
              >
                <path
                  d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                  fill="var(--accents-3)"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              class={styles.mute}
              title="Showcase"
              href="https://qwik.dev/showcase/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Showcase
              <svg
                aria-hidden="true"
                class={`${styles.navbar_externalArrow}`}
                height="7"
                viewBox="0 0 6 6"
                width="7"
              >
                <path
                  d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                  fill="var(--accents-3)"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <Link
              class={styles.mute}
              title="Documentation"
              href="https://qwik.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Docs
              <svg
                aria-hidden="true"
                class={`${styles.navbar_externalArrow}`}
                height="7"
                viewBox="0 0 6 6"
                width="7"
              >
                <path
                  d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
                  fill="var(--accents-3)"
                ></path>
              </svg>
            </Link>
          </li>
          <li>
            <NavLink
              class={styles.mute}
              activeClass="text-black"
              href="/blog/"
              onClick$={() => (mobileMenuVisible.value = false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/6?">
              {/* <Link
              class="mute"
              rel="noopener noreferrer"
              target="_blank"
              href="https://vercel.com/templates/next.js?utm_source=next-site&amp;utm_medium=navbar&amp;utm_campaign=nextjs-templates"
            >
              Templates
            </Link> */}
              <p class={styles.mute}>Templates</p>
            </Popover>
          </li>
          <li>
            <Popover issueLink="https://github.com/DevWeb13/learn-qwik/issues/7">
              {/* <Link
              class="mute"
              href="https://vercel.com/contact/sales?utm_source=next-site&amp;utm_medium=navbar&amp;utm_campaign=learn"
              rel="noopener noreferrer"
              target="_blank"
            >
              Enterprise
            </Link> */}
              <p class={styles.mute}>Enterprise</p>
            </Popover>
          </li>
          <li>
            <Link
              class={styles.mute}
              href="https://github.com/DevWeb13/learn-qwik"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
});

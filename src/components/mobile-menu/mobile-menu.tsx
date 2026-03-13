import { $, component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiUserCircleOutline } from "@qwikest/icons/heroicons";
import { ArrowRightEndOnRectangle } from "~/assets/svg/arrowRightEndOnRectangle";
import { BtAddChapter } from "~/components/UI/btAddChapter/btAddChapter";
import ProgressCircle from "~/components/UI/headerOfMain/progressCircle/progressCircle";
import { MobileMenuVisibleContext, useProfile } from "~/routes/layout";
import { NavLink } from "../navLink/navLink";
import styles from "./mobile-menu.module.css";

const ExternalArrow = () => (
  <svg
    aria-hidden="true"
    class={styles.externalArrow}
    height="7"
    viewBox="0 0 6 6"
    width="7"
  >
    <path
      d="M1.25215 5.54731L0.622742 4.9179L3.78169 1.75597H1.3834L1.38936 0.890915H5.27615V4.78069H4.40513L4.41109 2.38538L1.25215 5.54731Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default component$(() => {
  const profile = useProfile();
  const mobileMenuVisible = useContext(MobileMenuVisibleContext);

  const closeMenu = $(() => {
    mobileMenuVisible.value = false;
  });

  const completed2026 = profile.value?.completedChapters2026 || [];
  const completedLegacy = profile.value?.completedChapters || [];

  const hasStarted2026 = completed2026.length > 0;
  const primaryCtaText = hasStarted2026
    ? "Resume 2026 Edition"
    : "Start 2026 Edition";

  return (
    <div
      class={`${styles.panel} ${mobileMenuVisible.value ? styles.visible : ""}`}
      aria-hidden={!mobileMenuVisible.value}
    >
      <div class={styles.container}>
        <div class={styles.card}>
          <div class={styles.accountSection}>
            <Link
              tabIndex={0}
              href={profile.value ? "/account/" : "/auth/login/"}
              onClick$={closeMenu}
              class={`flex items-center justify-center gap-1 rounded-md border border-transparent px-4 py-2 text-sm font-medium shadow-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-gray-500 disabled:hover:bg-gray-500
              ${
                !profile.value
                  ? "bg-gray-500 text-white! hover:bg-gray-600 focus:ring-gray-500"
                  : profile.value.access_status === "subscribed" ||
                      (profile.value.access_status === "canceled" &&
                        profile.value.grace_period_end &&
                        new Date(profile.value.grace_period_end) > new Date())
                    ? "bg-yellow-500 text-black! hover:bg-yellow-600 focus:ring-yellow-500"
                    : "bg-(--qwik-dark-purple) text-white! hover:bg-(--qwik-light-purple) focus:ring-(--qwik-light-purple)"
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

          <div class={styles.learningSection}>
            <p class={styles.eyebrow}>Learning</p>

            <div class={styles.learningActions}>
              <div class={styles.learningButtonWrap}>
                <BtAddChapter
                  goToChapter={0}
                  title=""
                  text={primaryCtaText}
                  completedChapters={completed2026}
                  version="2026"
                >
                  <ProgressCircle
                    completed={completed2026}
                    onlyCircle
                    colorCircle="var(--ds-gray-200)"
                    responsive="smallOnly"
                    version="2026 Edition"
                  />
                </BtAddChapter>
              </div>

              <div class={styles.learningButtonWrap}>
                <BtAddChapter
                  goToChapter={0}
                  title=""
                  text="Browse Legacy Edition"
                  completedChapters={completedLegacy}
                  version="Legacy"
                >
                  <ProgressCircle
                    completed={completedLegacy}
                    onlyCircle
                    colorCircle="var(--ds-gray-200)"
                    responsive="smallOnly"
                  />
                </BtAddChapter>
              </div>
            </div>
          </div>

          <div class={styles.divider}></div>

          <nav class={styles.navSection} aria-label="Mobile navigation">
            <p class={styles.eyebrow}>Navigation</p>

            <ul class={styles.linkList}>
              <li>
                <NavLink
                  class={styles.navLink}
                  activeClass={`${styles.navLink} ${styles.activeLink}`}
                  href="/blog/"
                  onClick$={closeMenu}
                >
                  <span>Blog</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  class={styles.navLink}
                  activeClass={`${styles.navLink} ${styles.activeLink}`}
                  href="/starter-pack/"
                  onClick$={closeMenu}
                >
                  <span>Starter Pack</span>
                  <span class="ml-2 rounded-full border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-(--qwik-dark-purple)">
                    Early Access
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  class={styles.navLink}
                  activeClass={`${styles.navLink} ${styles.activeLink}`}
                  href="/releases/"
                  onClick$={closeMenu}
                >
                  <span>Releases</span>
                </NavLink>
              </li>
            </ul>
          </nav>

          <div class={styles.divider}></div>

          <div class={styles.secondarySection}>
            <p class={styles.eyebrow}>External links</p>

            <ul class={styles.linkList}>
              <li>
                <Link
                  class={styles.navLink}
                  title="Showcase"
                  href="https://qwik.dev/showcase/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Showcase</span>
                  <ExternalArrow />
                </Link>
              </li>

              <li>
                <Link
                  class={styles.navLink}
                  title="Documentation"
                  href="https://qwik.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Docs</span>
                  <ExternalArrow />
                </Link>
              </li>

              <li>
                <Link
                  tabIndex={0}
                  href="https://vercel.com/new/clone?demo-description=A%20basic%20Qwik%20app%20with%20Tailwind%2C%20Vercel%20edge%20adapter%2C%20and%20pnpm%20using%20the%20default%20template.&demo-image=%2F%2Fimages.ctfassets.net%2Fe5382hct74si%2F3qUUqmfxL9Pj1RSY64p1Qz%2Ffb2d18358bd4518837d4efb178a26a42%2FCleanShot_2023-01-17_at_10.01.53.png&demo-title=Qwik%20Starter%20Kit&demo-url=https%3A%2F%2Fqwik-tw-vercel-starter-kit.vercel.app%2F&from=templates&project-name=Qwik%20Starter%20Kit&repository-name=qwik-starter-kit&repository-url=https%3A%2F%2Fgithub.com%2FBuilderIO%2Fqwik-tw-vercel-starter-kit&skippable-integrations=1"
                  class={styles.navLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Deploy</span>
                  <ExternalArrow />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
});

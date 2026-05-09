import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { HiMoonOutline, HiSunOutline } from "@qwikest/icons/heroicons";

const THEME_STORAGE_KEY = "learn-qwik-theme";
type ThemePreference = "light" | "dark";

const isThemePreference = (value: string | null): value is ThemePreference =>
  value === "light" || value === "dark";

const applyThemePreference = (theme: ThemePreference) => {
  const root = document.documentElement;
  const isDark = theme === "dark";

  root.classList.toggle("dark-theme", isDark);
  root.dataset.theme = theme;
  root.style.colorScheme = theme;

  const themeColorMeta = document.querySelector(
    'meta[name="theme-color"]',
  ) as HTMLMetaElement | null;

  if (themeColorMeta) {
    themeColorMeta.content = isDark ? "#080b18" : "#ffffff";
  }
};

const getInitialThemePreference = (): ThemePreference => {
  let savedTheme: string | null = null;

  try {
    savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    savedTheme = null;
  }

  if (isThemePreference(savedTheme)) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

type ThemeToggleProps = {
  class?: string;
  showLabel?: boolean;
};

export const ThemeToggle = component$<ThemeToggleProps>(
  ({ class: className = "", showLabel = false }) => {
    const isDark = useSignal(false);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ cleanup }) => {
      const preferredTheme = getInitialThemePreference();
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      isDark.value = preferredTheme === "dark";
      applyThemePreference(preferredTheme);

      const handleSystemThemeChange = (event: MediaQueryListEvent) => {
        let savedTheme: string | null = null;

        try {
          savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
        } catch {
          savedTheme = null;
        }

        if (isThemePreference(savedTheme)) {
          return;
        }

        const nextTheme = event.matches ? "dark" : "light";
        isDark.value = nextTheme === "dark";
        applyThemePreference(nextTheme);
      };

      mediaQuery.addEventListener("change", handleSystemThemeChange);

      cleanup(() => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
      });
    });

    const toggleTheme = $(() => {
      const nextTheme: ThemePreference =
        document.documentElement.classList.contains("dark-theme")
          ? "light"
          : "dark";

      isDark.value = nextTheme === "dark";

      try {
        localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
      } catch {
        // The visual preference can still be applied when storage is blocked.
      }

      applyThemePreference(nextTheme);
    });

    const label = isDark.value ? "Switch to light mode" : "Switch to dark mode";

    return (
      <button
        aria-label={label}
        aria-pressed={isDark.value}
        class={`theme-toggle ${showLabel ? "theme-toggle_with-label" : ""} ${className}`}
        onClick$={toggleTheme}
        title={label}
        type="button"
      >
        <span class="theme-toggle_icon" aria-hidden="true">
          {isDark.value ? (
            <HiSunOutline class="size-4" />
          ) : (
            <HiMoonOutline class="size-4" />
          )}
        </span>
        {showLabel && (
          <span class="theme-toggle_label">
            {isDark.value ? "Light mode" : "Dark mode"}
          </span>
        )}
      </button>
    );
  },
);

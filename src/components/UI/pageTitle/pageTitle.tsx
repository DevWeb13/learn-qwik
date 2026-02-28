import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { CHAPTERS } from "~/constants/chapters";
import { CHAPTERS2026 } from "~/constants/chapters2026";

interface PageTitleProps {
  version?: "2026 Edition";
}

export const PageTitle = component$<PageTitleProps>(({ version }) => {
  const location = useLocation();
  const pathname = location.url.pathname;

  const is2026 = version === "2026 Edition";

  const basePath = is2026
    ? "/learn/dashboard-app-2026/"
    : "/learn/dashboard-app/";

  const chapters = is2026 ? CHAPTERS2026 : CHAPTERS;

  let chapter = chapters[0];

  if (pathname !== basePath) {
    const slug = pathname.replace(basePath, "").split("/")[0];
    const found = chapters.find((c) => c.uri === slug);
    if (found) chapter = found;
  }

  const displayTitle = chapter.title.includes(":")
    ? chapter.title.split(":")[1].trim()
    : chapter.title;

  return (
    <div class="not-prose mb-4 flex flex-col items-start gap-2 md:mb-10 md:flex-row md:items-center md:gap-6">
      <div class="min-w-10 flex h-10 items-center justify-center rounded-full bg-gray-100 md:h-18 md:min-w-18">
        <p
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-900); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
        >
          {chapter.id}
        </p>
      </div>

      <hgroup>
        <h1
          class="text_wrapper"
          data-version="v1"
          style="--text-color: var(--ds-gray-1000); --xs-text-size: 1.5rem; --xs-text-line-height: 2rem; --xs-text-weight: 600; --xs-text-letter-spacing: -0.029375rem; --sm-text-size: 1.5rem; --sm-text-line-height: 2rem; --sm-text-weight: 600; --sm-text-letter-spacing: -0.029375rem; --smd-text-size: 2.5rem; --smd-text-line-height: 3.5rem; --smd-text-weight: 600; --smd-text-letter-spacing: -0.058125rem; --md-text-size: 2.5rem; --md-text-line-height: 3.5rem; --md-text-weight: 600; --md-text-letter-spacing: -0.058125rem; --lg-text-size: 2.5rem; --lg-text-line-height: 3.5rem; --lg-text-weight: 600; --lg-text-letter-spacing: -0.058125rem;"
        >
          {displayTitle}
          {is2026 && (
            <>
              <br />
              <span class="text-(--qwik-dark-purple)">{version}</span>
            </>
          )}
        </h1>
      </hgroup>
    </div>
  );
});

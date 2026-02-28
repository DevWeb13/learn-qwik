import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiCheckCircleMini } from "@qwikest/icons/heroicons";
import { Arrow45Svg } from "~/assets/svg/arrow45Svg";
import { CircleWithISvg } from "~/assets/svg/circleWithISvg";

interface ChapterThumbnailProps {
  href: string;
  numberOrIcon: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  version?: "2026 Edition";
}

export const ChapterThumbnail = component$<ChapterThumbnailProps>(
  ({ href, numberOrIcon, title, description, isCompleted, version }) => {
    function getAfterColon(str: string): string {
      const parts = str.split(":", 2);
      return parts.length > 1 ? parts[1].trim() : "";
    }

    const is2026 = version === "2026 Edition";

    const accentColor = is2026
      ? "var(--qwik-dark-purple)"
      : "var(--qwik-dark-blue)";

    return (
      <div
        class={`relative group h-full rounded-xl transition-all duration-300
    shadow-sm hover:shadow-lg hover:bg-gray-100
    ${isCompleted ? "border shadow-md" : ""}
  `}
        style={isCompleted ? { borderColor: accentColor } : undefined}
      >
        {isCompleted && (
          <HiCheckCircleMini
            class="absolute right-3 top-3 h-6 w-6 drop-shadow-sm"
            style={{ color: accentColor }}
          />
        )}

        <Link class="flex flex-col p-6" href={href}>
          <div class="mb-2 flex items-center">
            <div class="mr-2 flex h-8 w-8 flex-none shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-bold text-blue-700 transition-all duration-300 group-hover:bg-white group-hover:text-black relative overflow-hidden">
              <div class="transition-opacity duration-200 group-hover:opacity-0">
                {numberOrIcon === "0" ? (
                  <CircleWithISvg />
                ) : (
                  <div>{numberOrIcon}</div>
                )}
              </div>

              <div class="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                <Arrow45Svg />
              </div>
            </div>

            <p
              class="text_wrapper"
              data-version="v1"
              style="--text-color:var(--ds-gray-1000);--text-size:1.25rem;--text-line-height:1.5rem;--text-letter-spacing:-0.020625rem;--text-weight:600"
            >
              {numberOrIcon === "0" ? "Introduction" : getAfterColon(title)}
            </p>
          </div>

          <div class="line-clamp-2 text-sm text-gray-900">{description}</div>
        </Link>
      </div>
    );
  },
);

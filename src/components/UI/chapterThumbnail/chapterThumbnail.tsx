import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Arrow45Svg } from "~/assets/svg/arrow45Svg";
import { CircleWithISvg } from "~/assets/svg/circleWithISvg";

interface ChapterThumbnailProps {
  href: string;
  numberOrIcon: string;
  title: string;
  description: string;
}

export const ChapterThumbnail = component$<ChapterThumbnailProps>(
  ({ href, numberOrIcon, title, description }) => {
    function getAfterColon(str: string): string {
      // Use the split method to divide the string into two parts at the first ":" encountered
      const parts = str.split(":", 2);
      // Return the second part of the string, trimming any leading or trailing whitespace
      return parts.length > 1 ? parts[1].trim() : "";
    }
    return (
      <div>
        <div class="dark:bg-vercel-100 group h-full rounded-[12px] shadow-sm transition-all duration-300 hover:shadow-lg dark:hover:bg-gray-100">
          <Link class="flex flex-col p-6" href={href}>
            <div class="mb-2 flex items-center">
              <div class="mr-2 flex h-8 w-8 flex-none flex-shrink-0 items-center justify-center rounded-full bg-blue-300 text-sm font-bold text-blue-700 transition-all duration-300 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                <div class="group-hover:hidden">
                  {numberOrIcon === "circleWithISvg" ? (
                    <CircleWithISvg />
                  ) : (
                    <div class="group-hover:hidden">{numberOrIcon}</div>
                  )}
                </div>
                <Arrow45Svg />
              </div>
              <p
                class="text_wrapper"
                data-version="v1"
                style="--text-color:var(--ds-gray-1000);--text-size:1.25rem;--text-line-height:1.5rem;--text-letter-spacing:-0.020625rem;--text-weight:600"
              >
                {numberOrIcon === "circleWithISvg"
                  ? "Introduction"
                  : getAfterColon(title)}
              </p>
            </div>
            <div class="line-clamp-2 text-sm text-gray-900">{description}</div>
          </Link>
        </div>
      </div>
    );
  },
);

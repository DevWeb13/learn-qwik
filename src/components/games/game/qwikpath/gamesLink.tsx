import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { HiArrowLeftSolid, HiArrowRightSolid } from "@qwikest/icons/heroicons";

export const displayIcon = (icon: string | undefined) => {
  switch (icon) {
    case "arrow-right":
      return (
        <HiArrowRightSolid class="strokeWidth-2 h-6 w-6 stroke-[#e0e0e0] transition duration-200 hover:stroke-white" />
      );
    case "arrow-left":
      return (
        <HiArrowLeftSolid class="strokeWidth-2 h-6 w-6 stroke-[#e0e0e0] transition duration-200 hover:stroke-white" />
      );
    default:
      return null;
  }
};

interface GamesLinkProps {
  href: string;
  label: string;
  // isSubscribed?: boolean | undefined;
  icon?: "arrow-right" | "arrow-left" | undefined;
  completed?: boolean | undefined;
  hiddenText?: boolean;
}

export const GamesLink = component$<GamesLinkProps>(
  ({ href, label, icon, completed, hiddenText }) => {
    return (
      <Link
        href={href}
        class={`flex items-center justify-center gap-2     rounded-md  px-4 py-3  font-bold  text-[#e0e0e0] shadow-md transition duration-200 hover:text-white hover:shadow-lg ${
          completed
            ? " bg-gray-500 hover:bg-gray-600"
            : "bg-sky-600 hover:bg-sky-700 "
        }`}
      >
        <span class={`${hiddenText && "hidden"}  md:inline`}>{label}</span>
        {displayIcon(icon)}
      </Link>
    );
  },
);

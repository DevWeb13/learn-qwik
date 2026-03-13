import { component$ } from "@builder.io/qwik";
import { QwikLogo } from "~/assets/svg/qwikLogo/qwikLogo";
import { SupabaseLogoSvg } from "~/assets/svg/supabaseLogoSvg";
import { TailwindLogoSvg } from "~/assets/svg/tailwindLogoSvg";
import type { StackIconKind } from "~/constants/starterPackContent";

export const StackIcon = component$(({ kind }: { kind: StackIconKind }) => {
  const shellClass =
    "flex size-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm";

  switch (kind) {
    case "qwik":
      return (
        <div class={shellClass} aria-hidden="true">
          <QwikLogo id="58" width={25} height={25} />
        </div>
      );

    case "supabase":
      return (
        <div class={shellClass} aria-hidden="true">
          <SupabaseLogoSvg width={25} height={25} />
        </div>
      );

    case "tailwind":
      return (
        <div class={shellClass} aria-hidden="true">
          <TailwindLogoSvg width={35} height={35} />
        </div>
      );

    case "vercel":
      return (
        <div class={shellClass} aria-hidden="true">
          <svg width="22" height="18" viewBox="0 0 74 64" fill="none">
            <path
              d="M37.59 0.25 74.54 64.25H0.64L37.59 0.25Z"
              fill="var(--qwik-dirty-black)"
            />
          </svg>
        </div>
      );

    case "resend":
      return (
        <div class={shellClass} aria-hidden="true">
          <img
            src="https://cdn.resend.com/brand/resend-icon-black.svg"
            alt=""
            width={35}
            height={35}
          />
        </div>
      );

    default:
      return null;
  }
});

// src/components/UI/SocialShareButtons/SocialShareButtons.tsx

import {
  component$,
  Resource,
  useSignal,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import { ButtonHandleShare } from "./ButtonHandleShare";

import { EmailSvg } from "~/assets/svg/emailSvg";
import { FacebookSvg } from "~/assets/svg/facebookSvg";
import { LinkedInSvg } from "~/assets/svg/linkedinSvg";
import { PinterestSvg } from "~/assets/svg/pinterestSvg";
import { TwitterSvg } from "~/assets/svg/twitterSvg";
import { useGetTotalShare, useIncrementTotalShare } from "~/routes/layout";

const shareLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
    bgColor: "#4267B2",
    text: "Share",
    icon: "facebook",
  },
  {
    name: "twitter",
    url: "https://twitter.com/intent/tweet?url=",
    bgColor: "#000000",
    text: "Tweet",
    icon: "twitter",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
    bgColor: "#007AB6",
    text: "Share",
    icon: "linkedin",
  },
  {
    name: "pinterest",
    url: "https://pinterest.com/pin/create/button/?url=",
    bgColor: "#cb2027",
    text: "Pin",
    icon: "pinterest",
  },
  {
    name: "email",
    url: "mailto:?subject=Discover learn-qwik.com&body=Check out this link: ",
    bgColor: "#7d7d7d",
    text: "Email",
    icon: "email",
  },
];

export default component$(() => {
  const loc = useLocation();
  const href = loc.url.href;

  const getTotalShare = useGetTotalShare();

  const incrementTotalShare = useIncrementTotalShare();

  const totalShareSignal = useSignal(getTotalShare.value);

  const buttonHandleShareStore = useStore({
    isOpen: true,
  });

  const displayIcon = (icon: string) => {
    switch (icon) {
      case "facebook":
        return <FacebookSvg width={24} height={24} />;
      case "twitter":
        return <TwitterSvg width={24} height={24} />;
      case "linkedin":
        return <LinkedInSvg width={24} height={24} />;
      case "pinterest":
        return <PinterestSvg width={24} height={24} />;
      case "email":
        return <EmailSvg width={24} height={24} />;
      default:
        return null;
    }
  };

  // const totalShareResource = useResource$(async ({ cleanup }) => {
  //   const controller = new AbortController();
  //   cleanup(() => controller.abort());

  //   try {
  //     if (totalShareSignal.value === 0) {
  //       const totalShare = getTotalShare.value;
  //       totalShareSignal.value = totalShare;
  //     }
  //   } catch (error) {
  //     console.error("Error fetching total shares:", error);
  //   }

  //   return totalShareSignal.value;
  // });

  useStyles$(``);

  return (
    <aside
      class={`group/1 fixed bottom-0 z-[9999] flex h-12 w-full lg:left-0 lg:top-56 lg:h-min lg:w-auto lg:flex-col`}
    >
      <div
        class={`flex w-full  flex-shrink  justify-center  lg:flex-col lg:transition-all lg:duration-300 lg:ease-in-out ${buttonHandleShareStore.isOpen ? "lg:translate-x-0 " : "lg:-translate-x-12 "}`}
      >
        <div class="flex w-full max-w-[80px] flex-shrink flex-col justify-center rounded-tr-md bg-white lg:max-w-[48px]">
          <Resource
            value={getTotalShare}
            onResolved={() => (
              <p class="h-6 text-2xl">{totalShareSignal.value}</p>
            )}
            onPending={() => <p class="h-6 text-2xl">Load</p>}
            onRejected={() => <p class="h-6 text-2xl">Failed</p>}
          />
          <p class="text-xs">Shares</p>
        </div>
        <div class=" flex w-full transition-all duration-300 ease-in-out   lg:flex-col lg:overflow-hidden lg:rounded-br-md lg:rounded-tr-md lg:group-hover/1:rounded-br-none">
          {
            // Share buttons
            shareLinks.map((shareLink) => (
              <Link
                key={shareLink.name}
                class={`group/2 flex  w-full  lg:h-12 lg:w-12 lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:w-32 lg:hover:justify-start lg:hover:rounded-bl-none lg:hover:rounded-br-md lg:hover:rounded-tl-none lg:hover:rounded-tr-md`}
                style={`background-color: ${shareLink.bgColor};`}
                href={shareLink.url + href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${shareLink.name}`}
                onClick$={async () => {
                  console.log("totalShareSignal.value", totalShareSignal.value);
                  totalShareSignal.value++;
                  console.log("totalShareSignal.value", totalShareSignal.value);
                  await incrementTotalShare.submit();
                }}
              >
                <div class="min-w-12 lg:max-w-12 flex w-full items-center justify-center transition-all duration-300 ease-in-out group-hover/2:translate-x-0.5 lg:w-12">
                  {displayIcon(shareLink.icon)}
                </div>
                <p class=" hidden w-0 pl-1 text-lg text-white  transition-all duration-300 ease-in-out lg:items-center group-hover/2:lg:flex">
                  {shareLink.text}
                </p>
              </Link>
            ))
          }
        </div>
      </div>
      <ButtonHandleShare buttonHandleShareStore={buttonHandleShareStore} />
    </aside>
  );
});

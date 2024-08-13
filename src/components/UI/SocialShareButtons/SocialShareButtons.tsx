import {
  component$,
  Resource,
  useResource$,
  useSignal,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

import { getTotalShare, incrementTotalShare } from "~/utils/totalShareData";
import { ButtonHandleShare } from "./ButtonHandleShare";

const shareLinks = [
  {
    name: "facebook",
    url: "https://www.facebook.com/sharer/sharer.php?u=",
    img: "https://platform-cdn.sharethis.com/img/facebook.svg",
    bgColor: "#4267B2",
  },
  {
    name: "twitter",
    url: "https://twitter.com/intent/tweet?url=",
    img: "https://platform-cdn.sharethis.com/img/twitter.svg",
    bgColor: "#000000",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/shareArticle?mini=true&url=",
    img: "https://platform-cdn.sharethis.com/img/linkedin.svg",
    bgColor: "#007AB6",
  },
  {
    name: "pinterest",
    url: "https://pinterest.com/pin/create/button/?url=",
    img: "https://platform-cdn.sharethis.com/img/pinterest.svg",
    bgColor: "#cb2027",
  },
  {
    name: "email",
    url: "mailto:?subject=Discover learn-qwik.com&body=Check out this link: ",
    img: "https://platform-cdn.sharethis.com/img/email.svg",
    bgColor: "#7d7d7d",
  },
];

export default component$(() => {
  const loc = useLocation();
  const href = loc.url.href;

  const totalShareSignal = useSignal(0);

  const buttonHandleShareStore = useStore({
    isOpen: false,
  });

  const totalShareResource = useResource$(async () => {
    console.log("fetching total share");
    const totalShare = await getTotalShare();
    totalShareSignal.value = totalShare;
    return totalShare;
  });

  useStyles$(``);
  return (
    <aside class="group/1 fixed  bottom-0 flex h-12 w-full md:left-0 md:top-48 md:h-auto md:w-auto md:flex-col ">
      <div class="flex w-full max-w-[80px] flex-shrink flex-col justify-center bg-[#ffffff] md:max-w-[48px]">
        <Resource
          value={totalShareResource}
          onResolved={() => (
            <p class="h-6 text-2xl">{totalShareSignal.value}</p>
          )}
          onPending={() => <p class="h-6 text-2xl">Load</p>}
          onRejected={() => <p class="h-6 text-2xl">Failed</p>}
        />
        <p class="text-xs">Shares</p>
      </div>
      <div class=" flex w-full transition-all duration-300 ease-in-out  md:w-12 md:flex-col md:overflow-hidden md:rounded-br-md md:rounded-tr-md md:group-hover/1:rounded-br-none">
        {
          // Share buttons
          shareLinks.map((shareLink) => (
            <>
              <Link
                class={`group/2 flex  w-full justify-center md:h-12`}
                style={`background-color: ${shareLink.bgColor};`}
                href={shareLink.url + href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Share on ${shareLink.name}`}
                onClick$={async () => {
                  totalShareSignal.value++;
                  await incrementTotalShare();
                }}
              >
                <img
                  alt={`${shareLink.name} sharing button`}
                  src={shareLink.img}
                  width={24}
                  height={24}
                  class="transition-all duration-300 ease-in-out group-hover/2:translate-x-0.5 md:group-hover/2:translate-x-0"
                />
              </Link>
            </>
          ))
        }
      </div>
      <ButtonHandleShare buttonHandleShareStore={buttonHandleShareStore} />
    </aside>
  );
});

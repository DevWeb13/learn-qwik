import { component$ } from "@builder.io/qwik";
import { useProfile } from "~/routes/layout";
import { isSubscriptionActive } from "~/utils/subscription";

export const MobileStickyAd = component$(() => {
  const profile = useProfile();
  const isSubscribed = isSubscriptionActive(profile.value);

  if (isSubscribed) return null;

  return (
    <div class="fixed bottom-12 left-0 right-0 z-50 block bg-white shadow-inner md:hidden">
      <div class="mx-auto max-w-[360px]">
        <ins
          class="adsbygoogle"
          style="display:inline-block;width:320px;height:100px"
          data-ad-client="ca-pub-2091224773462896"
          data-ad-slot="8094287448"
        ></ins>
      </div>
    </div>
  );
});

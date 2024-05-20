// src/components/UI/PreFooter/PreFooter.tsx

import { component$ } from "@builder.io/qwik";
import SocialShareButtons from "~/components/UI/SocialShareButtons/SocialShareButtons";

export default component$(() => {
  return (
    <div class="border-b bg-gray-50 py-2 text-center">
      <SocialShareButtons />
    </div>
  );
});

// src/routes/games/game/path/completed/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import { CompletedContent } from "~/components/games/game/qwikpath/completedContent";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";

export const useCompletedLevels = routeLoader$(async (requestEvent) => {
  requestEvent.cacheControl({ noStore: true });

  const supabase = createClient(requestEvent);
  const profile = requestEvent.sharedMap.get("profile");

  if (!profile) {
    requestEvent.fail(401, {
      success: false,
      message: "User not authenticated",
    });
  }

  const { data, error } = await supabase.rpc("get_completed_levels", {
    uid: profile.id,
  });

  if (error) {
    requestEvent.fail(500, { success: false, message: "Supabase error" });
  }

  return {
    success: true,
    message: "Success",
    data: data ?? [],
  };
});

export default component$(() => {
  return <CompletedContent />;
});

export const head = (): DocumentHead =>
  createDocumentHead(
    `Your Completed QwikPath Levels | Track Your Progress`,
    `View all the QwikPath levels you've completed. Track your progress, review your performance, and get ready for the next daily logic challenges.`,
    `https://www.learn-qwik.com/games/game/gamePath/metaQwikPathLevel.png`,
    `https://www.learn-qwik.com/games/game/path/completed/`,
  );

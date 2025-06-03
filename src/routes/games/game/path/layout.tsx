// src/routes/games/game/path/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";

export const useLevels = routeLoader$(async (requestEvent) => {
  const supabase = createClient(requestEvent);

  const { data, error } = await supabase
    .from("levels")
    .select("id, level_number, difficulty, published_at");

  if (error) {
    requestEvent.fail(500, { message: "Supabase error" });
  }

  return data?.sort((a, b) => a.level_number - b.level_number) ?? []; // tri croissant
});

export const useCompletedLevels = routeLoader$(async (requestEvent) => {
  requestEvent.cacheControl({ noStore: true });

  const supabase = createClient(requestEvent);
  const profile = requestEvent.sharedMap.get("profile");

  if (!profile) return [];

  const { data, error } = await supabase
    .from("user_levels")
    .select("level_id,time_taken,completed_path")
    .eq("user_id", profile.id); // ✅ plus direct et plus sûr

  if (error) {
    requestEvent.fail(500, { message: "Supabase error" });
  }

  return data;
});

export const useLeaderboard = routeLoader$(async (requestEvent) => {
  const supabase = createClient(requestEvent);

  const { data, error } = await supabase.rpc("get_leaderboard_with_rank");

  if (error) {
    requestEvent.fail(500, { message: "Leaderboard fetch error" });
  }

  console.log("data: ", data);
  console.log("error: ", error);
  return data;
});

export default component$(() => {
  return <Slot />;
});

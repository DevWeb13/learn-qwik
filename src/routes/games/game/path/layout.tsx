// src/routes/games/game/path/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";

export const useCompletedLevels = routeAction$(async (_, requestEvent) => {
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

export const useLeaderboard = routeLoader$(async (requestEvent) => {
  const supabase = createClient(requestEvent);

  const { data, error } = await supabase.rpc("get_leaderboard_with_rank");

  if (error) {
    requestEvent.fail(500, { message: "Leaderboard fetch error" });
  }

  return data;
});

export const useNextLevels = routeLoader$(async (requestEvent) => {
  const supabase = createClient(requestEvent);
  const profile = requestEvent.sharedMap.get("profile");

  if (!profile) return [];

  const { data, error } = await supabase.rpc("get_next_levels", {
    user_uuid: profile.id,
    limit_count: 8,
    offset_count: 0,
  });

  if (error) {
    requestEvent.fail(500, { message: "Supabase RPC error" });
  }

  return data ?? [];
});

export const useTotalPlayers = routeLoader$(async (requestEvent) => {
  const supabase = createClient(requestEvent);

  const { data, error } = await supabase.rpc("get_total_players");

  if (error) {
    requestEvent.fail(500, { message: "Total players fetch error" });
  }

  return data;
});

export default component$(() => {
  return <Slot />;
});

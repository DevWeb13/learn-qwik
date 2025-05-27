// src/routes/games/game/path/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeAction$, routeLoader$ } from "@builder.io/qwik-city";
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
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return [];

  const { data, error } = await supabase
    .from("user_levels")
    .select("level_id,time_taken,completed_path")
    .eq("user_id", user.id);

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

  return data;
});

export const useSaveProgress = routeAction$(async (data, requestEvent) => {
  const supabase = createClient(requestEvent);
  const { level_id, elapsed_seconds, last_path } = data;

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("Utilisateur non authentifié");
    return { success: false };
  }

  const { error } = await supabase.from("user_progress").upsert({
    user_id: user.id,
    elapsed_seconds: Number(elapsed_seconds),
    level_id: String(level_id),
    last_path,
    last_updated_at: new Date().toISOString(),
  });

  if (error) {
    console.error("Erreur Supabase :", error);
    return { success: false };
  }

  return { success: true };
});

export default component$(() => {
  return <Slot />;
});

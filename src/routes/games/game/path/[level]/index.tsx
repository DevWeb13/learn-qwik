// src/routes/games/game/path/[level]/index.tsx

import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  type DocumentHeadProps,
  routeAction$,
  routeLoader$,
  useLocation,
} from "@builder.io/qwik-city";
import { QwikPathLevel } from "~/components/games/game/qwikpath/qwikPathLevel";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";

export const useLevel = routeLoader$(async (requestEvent) => {
  const supabase = createClient(requestEvent);

  const { data, error } = await supabase
    .from("levels")
    .select("*")
    .eq("level_number", parseInt(requestEvent.params.level, 10))
    .single();

  if (error) {
    return requestEvent.fail(404, {
      errorMessage: "Level not found",
    });
  }

  return data;
});

export const useValidateLevel = routeAction$(async (form, requestEvent) => {
  const supabase = createClient(requestEvent);
  const profile = requestEvent.sharedMap.get("profile");

  if (!profile) {
    return requestEvent.fail(401, { message: "Not authenticated" });
  }

  const { time_taken, level_id, completed_path } = form;

  const parsedPath = completed_path ? JSON.parse(String(completed_path)) : null;

  // 1. Insertion dans user_levels
  const { error: insertError } = await supabase.from("user_levels").insert({
    user_id: String(profile.id),
    level_id: String(level_id),
    time_taken: Number(time_taken),
    completed_at: new Date().toISOString(),
    is_valid: true,
    completed_path: parsedPath,
  });

  if (insertError) {
    console.error("❌ Failed to insert user level", insertError.message);
    return requestEvent.fail(500, { message: "Supabase error" });
  }

  // 2. Suppression de la progression sauvegardée
  const { error: deleteError } = await supabase
    .from("user_progress")
    .delete()
    .match({
      user_id: profile.id,
      level_id: level_id,
    });

  if (deleteError) {
    console.error("⚠️ Failed to delete user progress", deleteError.message);
    // Pas de return fail ici, on ne bloque pas la validation du niveau
  }

  return { success: true };
});

export const useLevelLeaderboard = routeLoader$(async (requestEvent) => {
  const supabase = createClient(requestEvent);

  const levelNumber = parseInt(requestEvent.params.level); // "1" => 1

  const { data, error } = await supabase.rpc(
    "get_leaderboard_by_level_number_with_rank",
    {
      level_number: levelNumber,
    },
  );

  if (error) {
    requestEvent.fail(500, { message: "Level leaderboard fetch error" });
  }

  return data;
});

export const useSavedProgress = routeLoader$(async (requestEvent) => {
  requestEvent.cacheControl({ noStore: true });
  const supabase = createClient(requestEvent);

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) return null;

  // 1. On récupère l’ID réel du niveau depuis son numéro
  const levelNumber = parseInt(requestEvent.params.level, 10);
  const { data: levelData, error: levelError } = await supabase
    .from("levels")
    .select("id")
    .eq("level_number", levelNumber)
    .single();

  console.log("levelData", levelData);

  if (levelError || !levelData.id) return null;

  // 2. On peut alors chercher la progression
  const { data, error } = await supabase
    .from("user_progress")
    .select("elapsed_seconds, last_path, last_history")
    .eq("user_id", user.id)
    .eq("level_id", levelData.id)
    .single();

  console.log("data", data);

  if (error) return null;

  return {
    elapsed_seconds: Number(data.elapsed_seconds),
    last_path: data.last_path ?? [],
    last_history: data.last_history ?? [],
  };
});

export default component$(() => {
  const loc = useLocation();
  const level: string = loc.params.level;

  return <QwikPathLevel level={level} />;
});

export const head = ({ params }: DocumentHeadProps): DocumentHead =>
  createDocumentHead(
    `QwikPath | Level ${params.level}`,
    `Play QwikPath Level ${params.level}, a daily logic challenge made with Qwik. Connect numbers and fill the grid.`,
    `https://www.learn-qwik.com/games/game/gamePath/metaQwikPathLevel${params.level}.png`,
    `https://www.learn-qwik.com/games/game/path/${params.level}/`,
  );

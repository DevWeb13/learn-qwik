// src/routes/games/game/path/layout.tsx

import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import { GamesFixedLink } from "~/components/games/game/qwikpath/gamesFixedLink";
import { createClient } from "~/lib/supabase/server";

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
    limit_count: 325,
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
  const loc = useLocation();
  const pathname = loc.url.pathname;

  console.log("pathname", pathname);
  return (
    <>
      <Slot />
      <GamesFixedLink
        href={
          pathname === "/games/game/path/" ? "/games/" : "/games/game/path/"
        }
        alt="Return to Game"
        type="return"
      />
      {pathname !== "/games/game/path/completed/" && (
        <GamesFixedLink
          href="/games/game/path/completed/"
          alt="Completed Levels"
          type="completedLevels"
        />
      )}
    </>
  );
});

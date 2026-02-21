// src/lib/supabase/middleware.ts

import type { RequestEvent } from "@builder.io/qwik-city";
import { SupabaseClient, User } from "@supabase/supabase-js";
// import { CHAPTERS } from "~/constants/chapters";
import { createClient } from "~/lib/supabase/server";
import { getProfileById } from "~/lib/supabase/supabaseUtils";
import { Database } from "~/types/database.types";
import { isSubscriptionActive } from "~/utils/subscription";

// const CHAPTERS_FREE_LIMIT = 6;

async function getProfile(
  supabase: SupabaseClient<Database>,
  requestEvent: RequestEvent,
  user: User,
): Promise<Database["public"]["Tables"]["profiles"]["Row"] | null> {
  if (!user) return null;

  console.log(
    "📢 Appel à Supabase pour récupérer le profile via getProfileById",
  );

  const profile = await getProfileById(supabase, user.id);

  if (!profile) {
    console.warn("⚠️ Aucun profil trouvé (getProfileById) pour :", user.id);
    return null;
  }

  requestEvent.sharedMap.set("profile", profile);
  return profile;
}

export async function updateSession(requestEvent: RequestEvent) {
  const currentPath = requestEvent.url.pathname;

  // -----------------------------
  // 1. Bypass bots (SEO)
  // -----------------------------
  const userAgent = requestEvent.request.headers.get("user-agent") || "";
  const isBot =
    /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|ia_archiver/i.test(
      userAgent,
    );

  if (isBot) {
    return;
  }

  // const PUBLIC_PATHS = ["/blog"];
  // if (PUBLIC_PATHS.some((p) => path.startsWith(p))) return;

  const supabase = createClient(requestEvent);
  // -----------------------------
  // 2. Récupération utilisateur
  // -----------------------------
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(`[AUTH] path=${currentPath} authenticated=${Boolean(user)}`);

  // -----------------------------
  // 3. Redirections basées sur l'authentification
  // -----------------------------

  const publicRoutes = ["/auth/login", "/auth/callback", "/auth/confirm"];

  const isPublic =
    currentPath === "/" ||
    publicRoutes.some((route) => currentPath.startsWith(route));

  const isAuthRoute = currentPath.startsWith("/auth/login");

  const isNextDashboardRouteComingSoon = currentPath.startsWith(
    "/learn/dashboard-app-2026",
  );

  if (isNextDashboardRouteComingSoon) {
    throw requestEvent.redirect(302, "/");
  }

  if (!user && !isPublic) {
    throw requestEvent.redirect(302, "/auth/login/?next=" + currentPath);
  }

  if (user && isAuthRoute) {
    throw requestEvent.redirect(302, "/");
  }

  if (user) {
    let profile = await getProfile(supabase, requestEvent, user);

    // 🔄 Vérifie l'abonnement si profil dispo
    if (profile && isSubscriptionActive(profile)) return;
  }
}

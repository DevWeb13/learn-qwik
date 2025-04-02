// src/lib/supabase/middleware.ts

import type { RequestEvent } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";

export async function updateSession(requestEvent: RequestEvent) {
  const supabase = createClient(requestEvent);

  // Détection des bots via le User-Agent
  const userAgent = requestEvent.request.headers.get("user-agent") || "";
  const isBot = /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou|Exabot|facebot|ia_archiver/.test(userAgent);

  if (isBot) {
    // Si c'est un bot, autoriser l'accès sans redirection
    console.log("Bot detected, allowing access without redirection");
    return;
  }

  // Authentification utilisateur
  const {
    data: { user },
  } = await supabase.auth.getUser();

  requestEvent.sharedMap.set("user", user);

  if (user && requestEvent.url.pathname.startsWith("/auth/login/")) {
    throw requestEvent.redirect(302, "/");
  }

  if (
    !user &&
    (requestEvent.url.pathname.startsWith("/learn") ||
      requestEvent.url.pathname.startsWith("/auth/logout") ||
      requestEvent.url.pathname.startsWith("/account"))
  ) {
    // Pas d'utilisateur authentifié, redirection vers la page de connexion
    console.log("redirecting to /auth/login");
    throw requestEvent.redirect(302, "/auth/login");
  }
}


// src/lib/supabase/middleware.ts

import type { RequestEvent } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";

export async function updateSession(requestEvent: RequestEvent) {
  const supabase = createClient(requestEvent);

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
    // no user, potentially respond by redirecting the user to the login page
    console.log("redirecting to /auth/login");
    throw requestEvent.redirect(302, "/auth/login");
  }
}

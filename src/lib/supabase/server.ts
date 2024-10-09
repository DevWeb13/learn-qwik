// src/lib/supabase/server.ts

import type { RequestEvent, RequestEventAction } from "@builder.io/qwik-city";
import { createServerClient } from "@supabase/ssr";

export function createClient(requestEvent: RequestEventAction | RequestEvent) {
  return createServerClient(
    requestEvent.env.get("PUBLIC_SUPABASE_URL")!,
    requestEvent.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
    {
      cookies: {
        // Adapter `getAll` to return an array of cookies in the expected format
        getAll() {
          const allCookies = requestEvent.cookie.getAll();
          // console.log('Cookies récupérés dans getAll:', allCookies);
          // Transform the object Record<string, CookieValue> into an array [{ name, value }]
          return Object.entries(allCookies).map(([name, cookieObject]) => ({
            name,
            value: String(cookieObject.value), // Ensure `value` is a string
          }));
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              requestEvent.cookie.set(name, value, options);
            });
          } catch (error) {
            console.error("Failed to set cookies", error);
            throw new Error("Failed to set cookies");
          }
        },
      },
    },
  );
}

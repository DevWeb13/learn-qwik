// src/lib/supabase/server.ts

import type { RequestEvent, RequestEventAction } from "@builder.io/qwik-city";
import { createServerClient } from "@supabase/ssr";
import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "~/types/learn-qwik.database.types";

export function createClient(
  requestEvent: RequestEventAction | RequestEvent,
): SupabaseClient<Database> {
  return createServerClient<Database>(
    requestEvent.env.get("PUBLIC_SUPABASE_URL")!,
    requestEvent.env.get("PUBLIC_SUPABASE_ANON_KEY")!,
    {
      cookies: {
        // Adapter `getAll` to return an array of cookies in the expected format
        getAll() {
          const allCookies = requestEvent.cookie.getAll();
          return Object.entries(allCookies)
            .filter(
              ([name, cookieObject]) =>
                cookieObject && cookieObject.value != null,
            )
            .map(([name, cookieObject]) => ({
              name,
              value: String(cookieObject.value),
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

// ✅ Client administrateur avec SUPABASE_SERVICE_ROLE_KEY
export function createAdminClient(
  requestEvent: RequestEvent | RequestEventAction,
): SupabaseClient<Database> {
  return createServerClient<Database>(
    requestEvent.env.get("PUBLIC_SUPABASE_URL")!,
    requestEvent.env.get("SUPABASE_SERVICE_ROLE_KEY")!, // 🔥 Clé admin pour bypass RLS
    {
      cookies: {
        getAll() {
          return [];
        },
        setAll() {
          return;
        },
      },
    },
  );
}

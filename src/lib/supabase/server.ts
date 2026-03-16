// src/lib/supabase/server.ts

import type {
  RequestEvent,
  RequestEventAction,
  RequestEventLoader,
} from "@builder.io/qwik-city";
import { createServerClient } from "@supabase/ssr";
import {
  createClient as createSupabaseClient,
  type SupabaseClient,
} from "@supabase/supabase-js";
import type { Database } from "~/types/learn-qwik.database.types";

type SupabaseRequestEvent =
  | RequestEvent
  | RequestEventAction
  | RequestEventLoader;

function getEnv(requestEvent: SupabaseRequestEvent, key: string): string {
  const value = requestEvent.env.get(key);

  if (!value) {
    throw new Error(`Missing env var: ${key}`);
  }

  return value;
}

/**
 * Create the request-scoped Supabase SSR client used with the current user session.
 */
export function createClient(
  requestEvent: SupabaseRequestEvent,
): SupabaseClient<Database> {
  return createServerClient<Database>(
    getEnv(requestEvent, "PUBLIC_SUPABASE_URL"),
    getEnv(requestEvent, "PUBLIC_SUPABASE_ANON_KEY"),
    {
      cookies: {
        getAll() {
          const allCookies = requestEvent.cookie.getAll();

          return Object.entries(allCookies)
            .filter(([, cookieObject]) => cookieObject?.value != null)
            .map(([name, cookieObject]) => ({
              name,
              value: String(cookieObject.value),
            }));
        },

        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            requestEvent.cookie.set(name, value, options);
          });
        },
      },
    },
  );
}

/**
 * Create the server-only admin client used for privileged operations.
 * This client must never persist or refresh auth sessions.
 */
export function createAdminClient(
  requestEvent: SupabaseRequestEvent,
): SupabaseClient<Database> {
  return createSupabaseClient<Database>(
    getEnv(requestEvent, "PUBLIC_SUPABASE_URL"),
    getEnv(requestEvent, "SUPABASE_SERVICE_ROLE_KEY"),
    {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
    },
  );
}

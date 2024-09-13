// src/utils/supabaseClient.ts

import { createServerClient } from "supabase-auth-helpers-qwik";
import { server$ } from "@builder.io/qwik-city";

export const getSupabaseClient = server$(function () {
  const supabaseUrl = this.env.get("PUBLIC_SUPABASE_URL");
  const supabaseAnonKey = this.env.get("PUBLIC_SUPABASE_ANON_KEY");

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase URL or Anon Key");
  }

  const supabaseClient = createServerClient(supabaseUrl, supabaseAnonKey, this);

  return supabaseClient;
});

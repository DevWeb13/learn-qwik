// src/utils/totalShareData.ts

import { server$ } from "@builder.io/qwik-city";
import { getSupabaseClient } from "./supabaseClient";

// Function to retrieve the total number of shares
export const getTotalShare = server$(async function () {
  const supabaseClient = await getSupabaseClient();

  try {
    // Query the "shares" table to get total_share
    const { data, error } = await supabaseClient
      .from("shares")
      .select("*")
      .limit(1)
      .single();

    if (error || !data) {
      throw new Error(
        "Failed to fetch total share: " +
          (error?.message || "No data returned"),
      );
    }

    // Return the total_share from the first row
    const totalShare: number = data.total_share;
    return totalShare;
  } catch (e) {
    // Log the detailed error message and rethrow
    throw new Error("Error in getTotalShare: " + (e as Error).message);
  }
});

// Function to increment the total number of shares
export const incrementTotalShare = server$(async function () {
  const supabaseClient = await getSupabaseClient();

  try {
    // Use Supabase's RPC to increment the total share
    const { error } = await supabaseClient.rpc("increment_total_share");

    if (error) {
      throw new Error("Failed to increment total share: " + error.message);
    }
  } catch (e) {
    // Log the error and rethrow with more context
    throw new Error("Error in incrementTotalShare: " + (e as Error).message);
  }
});

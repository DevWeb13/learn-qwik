// src/lib/supabase/supabaseUtils.ts

import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "~/types/database.types";

// ✅ Fonction pour récupérer un utilisateur via son email
export const getUserByEmail = async (supabase: SupabaseClient<Database>, email: string) => {
  const { data: user, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("email", email)
    .single();

  if (error) {
    console.error("❌ Utilisateur non trouvé :", error);
    return null;
  }
  return user;
};

// ✅ Fonction pour obtenir un utilisateur via stripe_customer_id
export const getUserByCustomerId = async (supabase: SupabaseClient<Database>, customerId: string) => {
  const { data: user, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("stripe_customer_id", customerId)
    .single();

  if (error) {
    console.error("❌ Utilisateur non trouvé via stripe_customer_id :", error);
    return null;
  }
  return user;
};

// ✅ Fonction pour mettre à jour un utilisateur
export const updateUser = async (
  supabase: SupabaseClient<Database>, // ✅ On passe maintenant `supabase`
  userId: string, 
  data: Partial<Database["public"]["Tables"]["profiles"]["Row"]>
) => {
  const { error } = await supabase
    .from("profiles")
    .update(data)
    .eq("id", userId)
    .select();

  if (error) {
    console.error("❌ Erreur lors de la mise à jour de l'utilisateur :", error);
    return false;
  }
  return true;
};

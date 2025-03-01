import { SupabaseClient } from "@supabase/supabase-js";
import { Database } from "~/types/database.types";

type ProfilesRow = Database["public"]["Tables"]["profiles"]["Row"];

export const getUserByEmail = async (supabase: SupabaseClient<Database>, email: string): Promise<ProfilesRow | null> => {
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

export const getUserByCustomerId = async (supabase: SupabaseClient<Database>, customerId: string): Promise<ProfilesRow | null> => {
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

export const updateUser = async (
    supabase: SupabaseClient<Database>, 
    userId: string, 
    data: Partial<ProfilesRow>
): Promise<boolean> => {
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

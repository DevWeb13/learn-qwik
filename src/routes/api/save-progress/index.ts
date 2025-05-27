import { type RequestHandler } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";

export const onPost: RequestHandler = async (requestEvent) => {
  const supabase = createClient(requestEvent);

  try {
    const body = await requestEvent.request.json();
    const { level_id, elapsed_seconds, last_path, last_history } = body;

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      requestEvent.json(401, { error: "Non authentifié" });
      return;
    }

    const { error } = await supabase.from("user_progress").upsert({
      user_id: user.id,
      level_id,
      elapsed_seconds: Number(elapsed_seconds),
      last_path,
      last_history, // ✅ nouvelle colonne
      last_updated_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Erreur sauvegarde :", error);
      requestEvent.json(500, { error: "Erreur Supabase" });
      return;
    }

    requestEvent.json(200, { success: true });
  } catch (err) {
    console.error("Erreur serveur :", err);
    requestEvent.json(400, { error: "Requête invalide" });
  }
};


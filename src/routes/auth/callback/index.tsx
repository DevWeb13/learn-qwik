import type { RequestHandler } from "@builder.io/qwik-city";

import { getSupabaseClient } from "~/utils/supabaseClient";

export const onRequest: RequestHandler = async (request) => {
  const supabaseClient = await getSupabaseClient();

  // Récupérer le code d'autorisation dans l'URL
  const url = new URL(request.url);
  console.log("URL", url);
  const code = url.searchParams.get("code");
  console.log("Code", code);
  if (code) {
    // Si le code est trouvé, l'échanger contre une session
    const { error } = await supabaseClient.auth.exchangeCodeForSession(code);
    if (error) {
      console.error("Erreur lors de l'échange du code OAuth", error);
      throw request.redirect(302, "/auth/error");
    }

    // Redirection après le succès
    throw request.redirect(302, "/");
  }

  console.error("Code manquant dans l'URL");
  throw request.redirect(302, "/");
};

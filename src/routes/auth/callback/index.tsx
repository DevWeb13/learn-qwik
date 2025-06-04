// src/routes/auth/callback/index.tsx

import type { RequestHandler } from "@builder.io/qwik-city";
import { createClient } from "~/lib/supabase/server";

export const onGet: RequestHandler = async (request) => {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = createClient(request);
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    console.log("Google OAuth Exchange Result:", data, error);

    if (!error) {
      // Redirigez l'utilisateur vers l'URL souhaitée après une connexion réussie
      throw request.redirect(302, next);
    }
  }

  // Redirigez vers la page de login en cas d'échec
  throw request.redirect(302, "/auth/login");
};

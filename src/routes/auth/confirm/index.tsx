import type { RequestHandler } from "@builder.io/qwik-city";
import { type EmailOtpType } from "@supabase/supabase-js";
import { createClient } from "~/lib/supabase/server";

export const onGet: RequestHandler = async (request) => {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  if (token_hash && type) {
    const supabase = createClient(request);
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    console.log("error", error);
    if (!error) {
      throw request.redirect(302, next);
    }
  }

  throw request.redirect(302, "/auth/login");
};

// src/routes/blog/index.tsx

import { component$ } from "@builder.io/qwik";
import {
  routeAction$,
  routeLoader$,
  z,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { AccountContent } from "~/components/account/accountContent";
import { createClient } from "~/lib/supabase/server";
import { createDocumentHead } from "~/utils/createDocumentHead";

export const useGetProfile = routeLoader$(async (requestEvent) => {
  const id = requestEvent.params.id;

  if (!id) {
    return requestEvent.fail(404, {
      error: "No user ID provided.",
    });
  }

  const supabase = createClient(requestEvent);

  // Récupérer le profil de l'utilisateur avec l'ID spécifié
  const { data: profiles, error } = await supabase
    .from("profiles")
    .select(
      "email, username,  avatar_url, website, phone, completedChapters, access_status, grace_period_end",
    )
    .eq("id", id); // Filtrer par l'ID de l'utilisateur

  if (error) {
    return requestEvent.fail(500, {
      error: "Error fetching user profile.",
    });
  }

  if (profiles.length === 0) {
    return requestEvent.fail(404, {
      error: "User not found.",
    });
  }

  return profiles[0];
});

export const useUpdateProfile = routeAction$(
  async (data, requestEvent) => {
    const id = requestEvent.params.id;

    const { username, avatar_url, website, phone } = data;

    if (!id) {
      return requestEvent.fail(404, {
        error: "No user ID provided.",
      });
    }

    const supabase = createClient(requestEvent);

    const { error } = await supabase
      .from("profiles")
      .update({
        username: username || null,
        avatar_url: avatar_url || null,
        website: website || null,
        phone: phone || null,
      })
      .eq("id", id);

    if (error) {
      console.error("Erreur lors de la mise à jour du profil", error);
      return requestEvent.fail(500, {
        success: false,
        message: "Error updating user profile.",
        status: "error",
      });
    }

    return {
      success: true,
      message: "User profile updated successfully.",
      status: "success",
    };
  },
  zod$({
    username: z
      .string()
      .optional()
      .refine(
        (val) =>
          (val ?? "") === "" ||
          ((val ?? "").length >= 3 && (val ?? "").length <= 20),
        {
          message: "Username must be between 3 and 20 characters long",
        },
      ),

    avatar_url: z
      .string()
      .optional()
      .refine((val) => val === "" || z.string().url().safeParse(val).success, {
        message: "The avatar URL is not valid",
      }),

    website: z
      .string()
      .optional()
      .refine((val) => val === "" || z.string().url().safeParse(val).success, {
        message:
          "The website URL must be valid and start with 'http' or 'https'",
      }),

    phone: z
      .string()
      .optional()
      .refine((val) => val === "" || /^\+?\d{10,15}$/.test(val ?? ""), {
        message:
          "Phone number must be valid (10 to 15 digits, optionally with +)",
      }),
  }),
);

export default component$(() => {
  return <AccountContent />;
});

export const head: DocumentHead = createDocumentHead(
  "Account Page",
  "Manage your account settings.",
  "https://www.learn-qwik.com/metaAccount.png",
  "https://www.learn-qwik.com/account/exemple-id",
);

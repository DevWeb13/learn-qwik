// src/routes/auth/deleteProfile/index.tsx

import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeAction$ } from "@builder.io/qwik-city";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { ModalDeleteProfile } from "~/lib/qwikUI/modalDeleteProfile/modalDeleteProfile";
import { createDocumentHead } from "~/utils/createDocumentHead";

import { createAdminClient, createClient } from "~/lib/supabase/server"; // 🔥 Import des 2 clients
import { useProfile } from "~/routes/layout";

export const useDeleteProfileAction = routeAction$(
  async (data, requestEvent) => {
    const supabase = createClient(requestEvent); // ✅ Client normal pour récupérer l'utilisateur
    const adminSupabase = createAdminClient(requestEvent); // ✅ Client admin pour suppression

    console.log("data", data);

    const userId = String(data.userId);
    console.log(`🔥 Suppression du profil ${userId}`);
    const hasActiveSubscription = data.hasActiveSubscription;
    console.log(`hasActiveSubscription`, hasActiveSubscription);

    if (!hasActiveSubscription) {
      // 🔹 Supprimer le profil dans `public.profiles` (via client normal)
      const { error: profileError } = await supabase
        .from("profiles")
        .delete()
        .eq("id", userId);
      if (profileError) {
        console.error(profileError);
        return requestEvent.fail(500, { message: "Failed to delete profile." });
      }

      // 🔹 Supprimer l'utilisateur dans `auth.users` (via client admin)
      const { error: authError } =
        await adminSupabase.auth.admin.deleteUser(userId);
      if (authError) {
        console.error(authError);
        return requestEvent.fail(500, { message: "Failed to delete user." });
      }

      // 🔹 Redirection après suppression réussie
      throw requestEvent.redirect(302, "/");
    } else {
      // 🔹 Si abonnement actif, on marque le compte pour suppression différée
      console.log(`⏳ Compte marqué pour suppression après.`);

      const { error: updateError } = await supabase
        .from("profiles")
        .update({ access_status: "deleted_pending" })
        .eq("id", userId);

      if (updateError) {
        console.error(updateError);
        return requestEvent.fail(500, {
          message: "Failed to mark for deletion.",
        });
      }

      return { success: true, message: `Account will be deleted after.` };
    }
  },
);

export default component$(() => {
  const profile = useProfile(); // Récupérer le profil de l'utilisateur

  // Vérifier si l'utilisateur a un abonnement actif
  const hasActiveSubscription = profile.value?.access_status === "subscribed";
  const subscriptionEndDate = profile.value?.grace_period_end
    ? new Date(profile.value.grace_period_end).toLocaleDateString()
    : null;

  return (
    <main class="relative flex w-full flex-grow flex-col items-center overflow-hidden py-12">
      <div class="absolute bottom-[100px] left-1/2 z-[-1] -translate-x-1/2 md:bottom-0">
        <div class="block dark:hidden">
          <HomeBackground />
        </div>
        <div class="hidden dark:block">
          <HomeBackground />
        </div>
      </div>
      <h1 class="mb-4 text-center text-4xl font-semibold md:mb-8 md:max-w-[100%] md:text-6xl">
        Delete your <span class="text-red-500">Learn Qwik</span> Account
      </h1>

      {/* 🔥 Message si l'utilisateur est abonné */}
      {hasActiveSubscription && (
        <div class="mb-6 max-w-xl rounded-md bg-blue-100 p-4 text-center text-blue-800">
          <p>
            <strong>You have an active subscription.</strong> If you delete your
            account, your subscription will be canceled, but you will still have
            access until{" "}
            <span class="font-semibold text-blue-500">
              {subscriptionEndDate}
            </span>
            . After this date, your account and all associated data will be
            permanently deleted.
          </p>
        </div>
      )}

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white px-4 py-8 shadow sm:rounded-sm sm:px-10">
          <div class="relative py-5">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">Delete Account</span>
            </div>
          </div>
          <ModalDeleteProfile profile={profile} />
        </div>
      </div>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead(
  "Delete your Learn Qwik Account",
  "Permanently delete your Learn Qwik account.",
  "https://www.learn-qwik.com/metaLanding.png",
  "https://www.learn-qwik.com/auth/deleteProfile/",
);

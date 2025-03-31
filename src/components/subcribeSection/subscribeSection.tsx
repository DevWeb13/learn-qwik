import type { Signal } from "@builder.io/qwik";
import { $, component$, useStore } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import type { Tables } from "~/types/database.types";
import { fetchBillingPortal } from "~/utils/billing";
import { isSubscriptionActive } from "~/utils/subscription";

type SubscribeSectionProps = {
  profile: Signal<Tables<"profiles"> | null>;
};

export const SubscribeSection = component$<SubscribeSectionProps>(
  ({ profile }) => {
    const store = useStore({ loading: false });
    const nav = useNavigate();

    console.log("profile", profile.value);

    const handlePayment = $(async (priceId: string) => {
      if (!profile.value) {
        nav("/auth/login");
        return;
      }

      store.loading = true;
      const res = await fetch("/api/checkout/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      store.loading = false;
      if (data.url) {
        nav(data.url);
      }
    });

    const handleBillingPortal = $(async () => {
      store.loading = true;
      await fetchBillingPortal(nav);
      store.loading = false;
    });

    const isTestMode = import.meta.env.PUBLIC_STRIPE_TEST_MODE === "true";

    const monthlyPriceId = isTestMode
      ? import.meta.env.PUBLIC_STRIPE_PRICE_MONTHLY_TEST
      : import.meta.env.PUBLIC_STRIPE_PRICE_MONTHLY;

    const isSubscribed = profile.value
      ? isSubscriptionActive(profile.value)
      : false;

    console.log("isSubscribed", isSubscribed);

    return (
      <section class="w-full bg-gradient-to-r from-blue-500 to-sky-600 py-16 text-center text-white">
        <div class="mx-auto max-w-3xl px-6">
          {/* No profile connected */}
          {!profile.value && (
            <>
              <h2 class="text-4xl font-extrabold">
                Enjoy an Ad-Free Experience &amp;{" "}
                <span class="text-yellow-300">Support Learn Qwik</span> 🚀
              </h2>
              <p class="mt-4 text-lg">
                Access exclusive features for only{" "}
                <span class="font-bold text-yellow-300">1.99€/month</span>.
              </p>
              <button
                onClick$={() => nav("/auth/login")}
                class="mt-6 rounded-lg bg-white px-6 py-3 text-lg font-semibold text-blue-600 shadow-md transition hover:bg-gray-100"
              >
                Connect to Subscribe 🔐
              </button>
            </>
          )}
          {/* Profile connected without subscription */}
          {profile.value && profile.value.access_status === "free" && (
            <>
              <h2 class="text-4xl font-extrabold">
                Enjoy an Ad-Free Experience &amp;{" "}
                <span class="text-yellow-300">Support Learn Qwik</span> 🚀
              </h2>
              <p class="mt-4 text-lg">
                Access exclusive features for only{" "}
                <span class="font-bold text-yellow-300">1.99€/month</span>.
              </p>
              <div class="mt-6 flex flex-col justify-center gap-6 text-lg md:flex-row">
                <button
                  onClick$={() => handlePayment(monthlyPriceId)}
                  disabled={store.loading}
                  class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:bg-gray-100"
                >
                  {store.loading ? "Loading..." : "Subscribe Monthly - 1.99€"}
                </button>
              </div>
            </>
          )}
          {/* Profile connected with active subscription */}
          {profile.value &&
            isSubscribed &&
            profile.value.access_status === "subscribed" && (
              <>
                <h2 class="text-4xl font-extrabold">
                  You're Premium! 🎉 Thank You for Supporting{" "}
                  <span class="text-yellow-300">Learn Qwik</span> 🚀
                </h2>
                <p class="mt-4 text-lg">
                  Enjoy an ad-free experience and exclusive content.
                </p>
                {profile.value.grace_period_end && (
                  <p class="mt-2 text-sm text-gray-200">
                    Your subscription renews on{" "}
                    <span class="font-bold text-white">
                      {new Date(
                        profile.value.grace_period_end,
                      ).toLocaleDateString()}
                    </span>
                  </p>
                )}
                <button
                  onClick$={handleBillingPortal}
                  disabled={store.loading}
                  class="mt-6 rounded-lg bg-yellow-400 px-8 py-3 text-lg font-semibold text-black shadow-md transition hover:bg-yellow-300"
                >
                  {store.loading ? "Loading..." : "Manage Subscription"}
                </button>
              </>
            )}
          {/* Profile connected with canceled but still active subscription */}
          {profile.value &&
            isSubscribed &&
            profile.value.access_status === "canceled" && (
              <>
                <h2 class="text-4xl font-extrabold text-red-400">
                  Your subscription has been canceled.
                </h2>
                <p class="mt-4 text-lg">
                  Enjoy ad-free browsing until{" "}
                  <span class="font-bold text-red-400">
                    {new Date(
                      profile.value.grace_period_end!,
                    ).toLocaleDateString()}
                  </span>
                </p>

                <button
                  onClick$={handleBillingPortal}
                  disabled={store.loading}
                  class="mt-6 rounded-lg bg-yellow-400 px-8 py-3 text-lg font-semibold text-black shadow-md transition hover:bg-yellow-300"
                >
                  {store.loading ? "Loading..." : "Manage Subscription"}
                </button>
              </>
            )}
          {/* Profile connected with expired subscription */}
          {profile.value &&
            !isSubscribed &&
            profile.value.access_status === "canceled" && (
              <>
                <h2 class="text-4xl font-extrabold text-red-400">
                  Your subscription has expired.
                </h2>
                <p class="mt-4 text-lg">
                  Renew now to enjoy ad-free browsing and exclusive content!
                </p>
                <div class="mt-6 flex flex-col justify-center gap-6 text-lg md:flex-row">
                  <button
                    onClick$={() => handlePayment(monthlyPriceId)}
                    disabled={store.loading}
                    class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 shadow-md transition hover:bg-gray-100"
                  >
                    {store.loading ? "Loading..." : "Subscribe Monthly - 1.99€"}
                  </button>
                </div>
              </>
            )}
          <p class="mt-4 text-sm text-gray-200">
            Cancel anytime. No hidden fees.
          </p>
        </div>
      </section>
    );
  },
);

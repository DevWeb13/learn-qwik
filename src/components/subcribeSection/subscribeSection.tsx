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
      <section class="rounded-lg bg-gray-50 p-6">
        <div class="mx-auto max-w-3xl">
          {/* No profile connected */}
          {!profile.value && (
            <>
              <h2 class="text-xl font-semibold text-gray-800">Subscription</h2>
              <p class="mt-1 text-sm text-gray-600">
                Enjoy an ad-free experience and support Learn Qwik.
              </p>
              <p class="mt-4 text-sm text-gray-600">
                Access exclusive features for only{" "}
                <span class="font-semibold text-indigo-600">1.99€/month</span>.
              </p>
              <button
                onClick$={() => nav("/auth/login")}
                class="mt-4 rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-gray-100"
              >
                Connect to Subscribe
              </button>
            </>
          )}

          {/* Profile connected without subscription */}
          {profile.value && profile.value.access_status === "free" && (
            <>
              <h2 class="text-xl font-semibold text-gray-800">Subscription</h2>
              <p class="mt-1 text-sm text-gray-600">
                Enjoy an ad-free experience and support Learn Qwik.
              </p>
              <p class="mt-4 text-sm text-gray-600">
                Access exclusive features for only{" "}
                <span class="font-semibold text-indigo-600">1.99€/month</span>.
              </p>
              <div class="mt-4 flex flex-col justify-center gap-4 text-sm md:flex-row">
                <button
                  onClick$={() => handlePayment(monthlyPriceId)}
                  disabled={store.loading}
                  class="rounded-md bg-white px-6 py-2.5 font-semibold text-blue-600 shadow-sm transition hover:bg-gray-100"
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
                <h2 class="text-xl font-semibold text-gray-800">
                  Subscription Status
                </h2>
                <p class="mt-1 text-sm text-gray-600">
                  Thank you for supporting Learn Qwik!
                </p>
                <p class="mt-4 text-sm text-gray-600">
                  You're currently enjoying an ad-free experience and exclusive
                  content.
                </p>
                {profile.value.grace_period_end && (
                  <p class="mt-2 text-sm text-gray-600">
                    Your subscription renews on{" "}
                    <span class="font-semibold text-gray-800">
                      {new Date(
                        profile.value.grace_period_end,
                      ).toLocaleDateString()}
                    </span>
                  </p>
                )}
                <button
                  onClick$={handleBillingPortal}
                  disabled={store.loading}
                  class="mt-4 rounded-md bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-yellow-300"
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
                <h2 class="text-xl font-semibold text-red-600">
                  Subscription Canceled
                </h2>
                <p class="mt-4 text-sm text-gray-600">
                  You'll keep benefits until{" "}
                  <span class="font-semibold text-red-600">
                    {new Date(
                      profile.value.grace_period_end!,
                    ).toLocaleDateString()}
                  </span>
                </p>
                <button
                  onClick$={handleBillingPortal}
                  disabled={store.loading}
                  class="mt-4 rounded-md bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-black shadow-sm transition hover:bg-yellow-300"
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
                <h2 class="text-xl font-semibold text-red-600">
                  Subscription Expired
                </h2>
                <p class="mt-4 text-sm text-gray-600">
                  Renew now to continue enjoying premium features.
                </p>
                <div class="mt-4 flex flex-col justify-center gap-4 text-sm md:flex-row">
                  <button
                    onClick$={() => handlePayment(monthlyPriceId)}
                    disabled={store.loading}
                    class="rounded-md bg-white px-6 py-2.5 font-semibold text-blue-600 shadow-sm transition hover:bg-gray-100"
                  >
                    {store.loading ? "Loading..." : "Subscribe Monthly - 1.99€"}
                  </button>
                </div>
              </>
            )}

          <p class="mt-4 text-xs text-gray-500">
            Cancel anytime. No hidden fees.
          </p>
        </div>
      </section>
    );
  },
);

// src/routes/starter-pack/index.tsx

import { component$ } from "@builder.io/qwik";
import {
  Form,
  Link,
  routeAction$,
  routeLoader$,
  z,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { HomeBackground } from "~/assets/svg/homeBackground/homeBackground";
import { HomeBackgroundPurple } from "~/assets/svg/homeBackground/homeBackgroundPurple";
import { StackIcon } from "~/components/starter-pack/StackIcon";
import {
  FAQ_ITEMS,
  GOOD_FIT_ITEMS,
  HERO_CHIPS,
  INCLUDED_CARDS,
  NOT_TARGET_ITEMS,
  OFFER_CARDS,
  PREVIEW_LIST,
  PROMISE_CARDS,
  SHELL_CLASS,
  STACK_CARDS,
  STACK_LINKS,
  WAITLIST_BENEFITS,
} from "~/constants/starterPackContent";
import { createAdminClient } from "~/lib/supabase/server";
import type { Database } from "~/types/database.types";
import { createDocumentHead2026 } from "~/utils/createDocumentHead2026";

type ProfileRow = Database["public"]["Tables"]["profiles"]["Row"];

export const useStarterPackWaitlistStatus = routeLoader$(async (ev) => {
  const adminClient = createAdminClient(ev);
  const profile = ev.sharedMap.get("profile") as ProfileRow | undefined;

  const profileEmail = profile?.email.trim() ?? null;
  const normalizedProfileEmail = profileEmail?.toLowerCase() ?? null;

  if (profile?.id) {
    const { data: profileEntry, error: profileEntryError } = await adminClient
      .from("starter_pack_waitlist")
      .select("id, email, profile_id")
      .eq("profile_id", profile.id)
      .maybeSingle();

    if (profileEntryError) {
      console.error(
        "starter_pack_waitlist loader profile lookup error:",
        profileEntryError,
      );

      return {
        alreadyJoined: false,
        email: null as string | null,
        isAuthenticated: true,
        profileEmail,
      };
    }

    if (profileEntry) {
      ev.cookie.set("starter_pack_waitlist_id", profileEntry.id, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: ev.url.protocol === "https:",
        maxAge: 60 * 60 * 24 * 365,
      });

      return {
        alreadyJoined: true,
        email: profileEntry.email,
        isAuthenticated: true,
        profileEmail,
      };
    }

    if (normalizedProfileEmail) {
      const { data: emailEntry, error: emailEntryError } = await adminClient
        .from("starter_pack_waitlist")
        .select("id, email, profile_id")
        .eq("email_normalized", normalizedProfileEmail)
        .maybeSingle();

      if (emailEntryError) {
        console.error(
          "starter_pack_waitlist loader email lookup error:",
          emailEntryError,
        );

        return {
          alreadyJoined: false,
          email: null as string | null,
          isAuthenticated: true,
          profileEmail,
        };
      }

      if (emailEntry) {
        if (!emailEntry.profile_id) {
          const { error: bindProfileError } = await adminClient
            .from("starter_pack_waitlist")
            .update({
              profile_id: profile.id,
              updated_at: new Date().toISOString(),
            })
            .eq("id", emailEntry.id);

          if (bindProfileError) {
            console.error(
              "starter_pack_waitlist loader bind profile error:",
              bindProfileError,
            );
          }
        }

        ev.cookie.set("starter_pack_waitlist_id", emailEntry.id, {
          path: "/",
          httpOnly: true,
          sameSite: "lax",
          secure: ev.url.protocol === "https:",
          maxAge: 60 * 60 * 24 * 365,
        });

        return {
          alreadyJoined: true,
          email: emailEntry.email,
          isAuthenticated: true,
          profileEmail,
        };
      }
    }

    return {
      alreadyJoined: false,
      email: null as string | null,
      isAuthenticated: true,
      profileEmail,
    };
  }

  const waitlistId = ev.cookie.get("starter_pack_waitlist_id")?.value;

  if (!waitlistId) {
    return {
      alreadyJoined: false,
      email: null as string | null,
      isAuthenticated: false,
      profileEmail: null as string | null,
    };
  }

  const { data, error } = await adminClient
    .from("starter_pack_waitlist")
    .select("id, email")
    .eq("id", waitlistId)
    .maybeSingle();

  if (error) {
    console.error("starter_pack_waitlist loader cookie lookup error:", error);

    return {
      alreadyJoined: false,
      email: null as string | null,
      isAuthenticated: false,
      profileEmail: null as string | null,
    };
  }

  if (!data) {
    return {
      alreadyJoined: false,
      email: null as string | null,
      isAuthenticated: false,
      profileEmail: null as string | null,
    };
  }

  return {
    alreadyJoined: true,
    email: data.email,
    isAuthenticated: false,
    profileEmail: null as string | null,
  };
});

const starterPackWaitlistSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  website: z.string().optional(),
});

export const useStarterPackWaitlistAction = routeAction$(async (data, ev) => {
  const honeypot = data.website?.trim() ?? "";

  if (honeypot) {
    return {
      success: true,
      message: "You’re on the early access list.",
    };
  }

  const profile = ev.sharedMap.get("profile") as ProfileRow | undefined;
  const profileId = profile?.id ?? null;
  const profileEmail = profile?.email.trim() ?? null;

  const rawEmail = profileId ? (profileEmail ?? "") : data.email.trim();

  if (!rawEmail) {
    return ev.fail(400, {
      success: false,
      message: "Unable to resolve your account email.",
    });
  }

  const normalizedEmail = rawEmail.toLowerCase();
  const adminClient = createAdminClient(ev);
  const now = new Date().toISOString();

  let existingEntry: {
    id: string;
    profile_id: string | null;
    email: string;
  } | null = null;

  if (profileId) {
    const { data: profileEntry, error: profileEntryError } = await adminClient
      .from("starter_pack_waitlist")
      .select("id, profile_id, email")
      .eq("profile_id", profileId)
      .maybeSingle();

    if (profileEntryError) {
      console.error(
        "starter_pack_waitlist select profile_id error:",
        profileEntryError,
      );

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    existingEntry = profileEntry;

    if (!existingEntry) {
      const { data: emailEntry, error: emailEntryError } = await adminClient
        .from("starter_pack_waitlist")
        .select("id, profile_id, email")
        .eq("email_normalized", normalizedEmail)
        .maybeSingle();

      if (emailEntryError) {
        console.error(
          "starter_pack_waitlist select email_normalized error:",
          emailEntryError,
        );

        return ev.fail(500, {
          success: false,
          message: "Something went wrong. Please try again.",
        });
      }

      existingEntry = emailEntry;
    }
  } else {
    const { data: emailEntry, error: emailEntryError } = await adminClient
      .from("starter_pack_waitlist")
      .select("id, profile_id, email")
      .eq("email_normalized", normalizedEmail)
      .maybeSingle();

    if (emailEntryError) {
      console.error(
        "starter_pack_waitlist select email_normalized error:",
        emailEntryError,
      );

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    existingEntry = emailEntry;
  }

  let waitlistId: string;
  let successEmail = rawEmail;

  if (existingEntry) {
    const updatePayload: {
      email: string;
      updated_at: string;
      profile_id?: string;
    } = {
      email: rawEmail,
      updated_at: now,
    };

    if (profileId && !existingEntry.profile_id) {
      updatePayload.profile_id = profileId;
    }

    const { error: updateError } = await adminClient
      .from("starter_pack_waitlist")
      .update(updatePayload)
      .eq("id", existingEntry.id);

    if (updateError) {
      console.error("starter_pack_waitlist update error:", updateError);

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    waitlistId = existingEntry.id;
    successEmail = rawEmail;
  } else {
    const { data: insertedEntry, error: insertError } = await adminClient
      .from("starter_pack_waitlist")
      .insert({
        email: rawEmail,
        email_normalized: normalizedEmail,
        profile_id: profileId,
        updated_at: now,
      })
      .select("id, email")
      .single();

    if (insertError) {
      console.error("starter_pack_waitlist insert error:", insertError);

      return ev.fail(500, {
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }

    waitlistId = insertedEntry.id;
    successEmail = insertedEntry.email;
  }

  ev.cookie.set("starter_pack_waitlist_id", waitlistId, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: ev.url.protocol === "https:",
    maxAge: 60 * 60 * 24 * 365,
  });

  return {
    success: true,
    message: "You’re on the early access list.",
    email: successEmail,
  };
}, zod$(starterPackWaitlistSchema));

export default component$(() => {
  const waitlistAction = useStarterPackWaitlistAction();
  const waitlistStatus = useStarterPackWaitlistStatus();

  const submittedEmailEntry = waitlistAction.formData?.get("email");
  const submittedEmail =
    typeof submittedEmailEntry === "string" ? submittedEmailEntry.trim() : "";

  const isAuthenticated = waitlistStatus.value.isAuthenticated === true;
  const connectedProfileEmail = waitlistStatus.value.profileEmail ?? "";
  const persistedWaitlistEmail = waitlistStatus.value.email ?? "";

  const hasSuccess =
    waitlistAction.value?.success === true ||
    waitlistStatus.value.alreadyJoined === true;

  const successEmail =
    (waitlistAction.value?.success === true
      ? (waitlistAction.value.email ?? submittedEmail)
      : "") || persistedWaitlistEmail;

  const hasError = waitlistAction.value?.failed === true;

  const emailErrorMessage =
    hasError && waitlistAction.value.fieldErrors?.email
      ? waitlistAction.value.fieldErrors.email
      : undefined;

  const formErrorMessage =
    hasError && !emailErrorMessage ? waitlistAction.value.message : undefined;

  const emailFieldValue = isAuthenticated
    ? connectedProfileEmail
    : hasError
      ? submittedEmail
      : "";

  return (
    <main class="bg-white">
      <section class="relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 opacity-90">
            <HomeBackgroundPurple />
          </div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.10),transparent_45%)]" />
        </div>

        <div
          class={`${SHELL_CLASS} relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-12`}
        >
          <header class="relative max-w-3xl">
            <div class="inline-flex items-center rounded-full border border-(--qwik-dark-purple)/12 bg-(--qwik-light-purple)/10 px-4 py-2 text-sm font-medium text-(--qwik-dark-purple)">
              Paid product • Early access list
            </div>

            <h1 class="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] text-(--qwik-dirty-black) md:text-6xl">
              Launch a real Qwik full-stack app faster, with the core setup
              already in place.
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-7 text-gray-700 md:text-xl md:leading-8">
              The Learn Qwik Starter Pack is a production-minded starting point
              with the main structure already in place around Qwik SSR,
              Supabase, Tailwind, and deployment, so you can focus on building
              your application.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#included"
                class="inline-flex items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple) hover:text-white!"
              >
                See what you’ll get
              </Link>

              <Link
                href="#waitlist"
                class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-(--qwik-dirty-black)! transition-all duration-200 hover:border-gray-300 hover:bg-white hover:text-(--qwik-dark-background)!"
              >
                Join early access
              </Link>
            </div>

            <p class="mt-4 max-w-2xl text-sm leading-6 text-gray-600">
              Joining the early access list is free and does not commit you to
              buy anything. A limited number of selected early access members
              may receive free access to the Starter Pack before public launch,
              and early access members will hear about the launch offer first.
            </p>

            <div class="mt-8 flex flex-wrap gap-2">
              {HERO_CHIPS.map((chip) => (
                <div
                  key={chip}
                  class="rounded-full border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                >
                  {chip}
                </div>
              ))}
            </div>
          </header>

          <aside class="relative">
            <div class="absolute inset-0 rounded-4xl bg-(--qwik-light-purple)/10 blur-3xl" />

            <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white/90 p-5 shadow-[0_20px_60px_rgba(17,24,39,0.08)] backdrop-blur-sm md:p-6">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                    Starter Pack Preview
                  </p>
                  <h2 class="mt-2 text-2xl font-semibold text-(--qwik-dirty-black)">
                    Built to remove setup friction
                  </h2>
                </div>

                <div class="rounded-2xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                  Selected access
                </div>
              </div>

              <p class="mt-4 text-sm leading-6 text-gray-600">
                Not just a template. A cleaner, faster starting point for
                developers who want the structure in place so they can focus on
                building their app. A limited number of selected early access
                members may also receive free access to the Starter Pack before
                public launch.
              </p>

              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-gray-500">Product</p>
                  <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
                    Paid one-time purchase
                  </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-gray-500">Early access</p>
                  <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
                    Launch updates + possible free access
                  </p>
                </div>
              </div>

              <div class="mt-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="flex flex-wrap gap-2">
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    SSR-first
                  </div>
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    Magic Link ready
                  </div>
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    Repo + guidance
                  </div>
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    Selected free access
                  </div>
                </div>

                <div class="mt-5 space-y-3">
                  {PREVIEW_LIST.map((item, index) => (
                    <div
                      key={item}
                      class="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-3 py-3"
                    >
                      <div class="flex size-7 shrink-0 items-center justify-center rounded-full bg-(--qwik-light-purple)/20 text-xs font-semibold text-(--qwik-dark-purple)">
                        {index + 1}
                      </div>
                      <p class="text-sm text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-4 md:py-8`}>
        <div class="grid gap-4 md:grid-cols-3">
          {OFFER_CARDS.map((card) => (
            <article
              key={card.title}
              class="rounded-[1.75rem] border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 p-6"
            >
              <h2 class="text-lg font-semibold text-(--qwik-dirty-black)">
                {card.title}
              </h2>
              <p class="mt-3 text-sm leading-6 text-gray-700">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-8 md:py-14`}>
        <div class="grid gap-4 md:grid-cols-3">
          {PROMISE_CARDS.map((card) => (
            <article
              key={card.title}
              class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                {card.eyebrow}
              </p>
              <h2 class="mt-3 text-xl font-semibold text-(--qwik-dirty-black)">
                {card.title}
              </h2>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="included" class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              What’s included
            </p>
            <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
              A faster starting point for a serious Qwik project.
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              The goal is not to impress you with a random pile of files. The
              goal is to give you a cleaner base you can understand, extend, and
              ship with less wasted time.
            </p>
          </div>

          <div class="rounded-3xl border border-(--qwik-dark-purple)/10 bg-(--qwik-light-purple)/10 px-5 py-4 text-sm text-gray-700">
            <span class="font-semibold text-(--qwik-dirty-black)">
              Core promise:
            </span>{" "}
            less setup chaos, more actual building.
          </div>
        </div>

        <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {INCLUDED_CARDS.map((card) => (
            <article
              key={card.title}
              class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 class="text-xl font-semibold text-(--qwik-dirty-black)">
                {card.title}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div class="absolute right-0 top-0 pointer-events-none opacity-70">
            <HomeBackground />
          </div>

          <div class="relative">
            <div class="mb-8 max-w-3xl md:mb-10">
              <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Stack
              </p>
              <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
                Familiar tools, cleaner starting point.
              </h2>
              <p class="mt-4 text-base leading-7 text-gray-700">
                Each card links to the official documentation in a new tab. The
                real value is starting from a setup that already makes sense, so
                you can focus on building your app.
              </p>
            </div>

            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {STACK_CARDS.map((item) => (
                <a
                  key={item.title}
                  href={STACK_LINKS[item.kind]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${item.title} official documentation`}
                  class="group block h-full"
                >
                  <article class="flex h-full flex-col rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
                    <StackIcon kind={item.kind} />
                    <h3 class="mt-4 text-lg font-semibold text-(--qwik-dirty-black)">
                      {item.title}
                    </h3>
                    <p class="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </article>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="grid items-stretch gap-4 lg:grid-cols-2">
          <article class="flex h-full flex-col rounded-4xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Good fit
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) lg:min-h-28">
              For developers who want a faster starting point
            </h2>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-gray-700">
              {GOOD_FIT_ITEMS.map((item) => (
                <li
                  key={item}
                  class="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article class="flex h-full flex-col rounded-4xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-blue)">
              Not the target
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) lg:min-h-28">
              Not built for every possible case on day one
            </h2>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-gray-700">
              {NOT_TARGET_ITEMS.map((item) => (
                <li
                  key={item}
                  class="rounded-xl border border-gray-200 bg-white px-4 py-3"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="mb-8 max-w-3xl md:mb-10">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
            FAQ
          </p>
          <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
            A few useful clarifications before launch.
          </h2>
        </div>

        <div class="grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.question}
              class="flex h-full flex-col rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 class="min-h-18 text-xl font-semibold text-(--qwik-dirty-black)">
                {item.question}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" class={`${SHELL_CLASS} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white p-6 shadow-sm md:p-10">
          <div class="absolute inset-0 pointer-events-none bg-(--qwik-light-purple)/10" />
          <div class="absolute right-0 top-0 pointer-events-none opacity-70">
            <HomeBackgroundPurple />
          </div>

          <div class="relative grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div class="max-w-3xl">
              <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Early access
              </p>

              <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
                Join early access and stay first in line for launch
              </h2>

              <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
                Joining the list is free and does not commit you to buy
                anything. A limited number of selected early access members may
                receive free access to the Starter Pack before public launch.
              </p>

              <div class="mt-6 rounded-[1.75rem] border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
                <div class="space-y-3">
                  {WAITLIST_BENEFITS.map((item) => (
                    <div key={item} class="flex items-start gap-3">
                      <div class="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-(--qwik-light-purple)/20 text-(--qwik-dark-purple)">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                        >
                          <path d="m20 6-11 11-5-5" />
                        </svg>
                      </div>
                      <p class="text-sm leading-6 text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div class="rounded-[1.75rem] border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
              {hasSuccess ? (
                <div
                  class="rounded-3xl border border-emerald-200 bg-emerald-50/90 p-5"
                  aria-live="polite"
                >
                  <div class="flex items-start gap-3">
                    <div class="flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m20 6-11 11-5-5" />
                      </svg>
                    </div>

                    <div class="min-w-0">
                      <p class="text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
                        Success
                      </p>
                      <h3 class="mt-2 text-xl font-semibold text-emerald-950">
                        You’re on the early access list.
                      </h3>
                      <p class="mt-3 text-sm leading-6 text-emerald-900/85">
                        You’ll be among the first to hear when the Starter Pack
                        launches. A limited number of selected early access
                        members may also receive free access before public
                        launch.
                      </p>

                      {successEmail && (
                        <div class="mt-4 rounded-xl border border-emerald-200 bg-white/80 px-4 py-3 text-sm font-medium text-emerald-950">
                          {successEmail}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <Form action={waitlistAction} class="space-y-4">
                  {isAuthenticated ? (
                    <div>
                      <label
                        for="starter-pack-email"
                        class="mb-2 block text-sm font-medium text-(--qwik-dirty-black)"
                      >
                        Account email
                      </label>

                      <input
                        id="starter-pack-email"
                        type="email"
                        readOnly
                        value={emailFieldValue}
                        class="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-(--qwik-dirty-black) outline-none"
                      />

                      <input
                        type="hidden"
                        name="email"
                        value={connectedProfileEmail}
                      />

                      <p class="mt-2 text-xs leading-5 text-gray-500">
                        You’re signed in, so we’ll use your account email for
                        early access.
                      </p>
                    </div>
                  ) : (
                    <div>
                      <label
                        for="starter-pack-email"
                        class="mb-2 block text-sm font-medium text-(--qwik-dirty-black)"
                      >
                        Email address
                      </label>

                      <input
                        id="starter-pack-email"
                        name="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        required
                        value={emailFieldValue}
                        aria-invalid={emailErrorMessage ? "true" : "false"}
                        aria-describedby={
                          emailErrorMessage
                            ? "starter-pack-email-error"
                            : undefined
                        }
                        placeholder="you@example.com"
                        class={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-(--qwik-dirty-black) outline-none transition-all duration-200 placeholder:text-gray-400 ${
                          emailErrorMessage
                            ? "border-red-300 focus:border-red-500"
                            : "border-gray-200 focus:border-(--qwik-dark-purple)"
                        }`}
                      />
                    </div>
                  )}

                  <div class="hidden" aria-hidden="true">
                    <label for="starter-pack-website">Website</label>
                    <input
                      id="starter-pack-website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={waitlistAction.isRunning}
                    class="inline-flex w-full items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple) hover:text-white! disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {waitlistAction.isRunning
                      ? "Joining..."
                      : "Join early access"}
                  </button>

                  <p class="text-xs leading-5 text-gray-500">
                    Free to join. No commitment. We’ll only send Starter Pack
                    launch and early access updates.
                  </p>

                  {emailErrorMessage && (
                    <div
                      id="starter-pack-email-error"
                      class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                      aria-live="polite"
                    >
                      {emailErrorMessage}
                    </div>
                  )}

                  {formErrorMessage && (
                    <div
                      class="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm leading-6 text-red-700"
                      aria-live="polite"
                    >
                      {formErrorMessage}
                    </div>
                  )}
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = createDocumentHead2026({
  title: "Starter Pack Early Access",
  description:
    "Join early access for the Learn Qwik Starter Pack, a paid production-minded Qwik SSR starter built with Supabase, Tailwind, and a cleaner deployment path. A limited number of selected early access members may also receive free access before public launch.",
  imageUrl: "https://www.learn-qwik.com/meta-starter-pack.webp",
  url: "https://www.learn-qwik.com/starter-pack/",
  type: "website",
});

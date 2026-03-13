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

    if (insertError || !insertedEntry) {
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

type StackIconKind = "qwik" | "supabase" | "tailwind" | "vercel" | "auth";

const StackIcon = ({ kind }: { kind: StackIconKind }) => {
  const shellClass =
    "flex size-12 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm";

  switch (kind) {
    case "qwik":
      return (
        <div class={shellClass} aria-hidden="true">
          <div class="flex size-8 items-center justify-center rounded-full bg-(--qwik-dark-purple) text-sm font-bold text-white">
            Q
          </div>
        </div>
      );

    case "supabase":
      return (
        <div class={shellClass} aria-hidden="true">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M13.8 3.2a2 2 0 0 1 3.44 1.65l-4.8 14.2a2 2 0 0 1-3.79.02l-1.92-5.35a2 2 0 0 1 .12-1.57L13.8 3.2Z"
              fill="#3ECF8E"
            />
            <path
              d="M10.2 20.2a1.9 1.9 0 0 1-1.8-1.26L6.5 13.7a2 2 0 0 1 .14-1.6l2.12-4.06c.87-1.66 3.33-1.26 3.64.59l.12.73-2.32 10.84Z"
              fill="#249361"
            />
          </svg>
        </div>
      );

    case "tailwind":
      return (
        <div class={shellClass} aria-hidden="true">
          <svg width="28" height="18" viewBox="0 0 54 33" fill="none">
            <path
              d="M13.5 8.25C17 2.5 21.5 0 27 0c8.25 0 12 4.75 13.9 9.4 1.9 4.65 3.65 9.35 10.1 9.35 3.75 0 6.6-1.65 8.5-4.95-3.5 5.75-8 8.25-13.5 8.25-8.25 0-12-4.75-13.9-9.4-1.9-4.65-3.65-9.35-10.1-9.35-3.75 0-6.6 1.65-8.5 4.95Z"
              fill="#38BDF8"
            />
            <path
              d="M0 21.45c3.5-5.75 8-8.25 13.5-8.25 8.25 0 12 4.75 13.9 9.4 1.9 4.65 3.65 9.35 10.1 9.35 3.75 0 6.6-1.65 8.5-4.95-3.5 5.75-8 8.25-13.5 8.25-8.25 0-12-4.75-13.9-9.4-1.9-4.65-3.65-9.35-10.1-9.35-3.75 0-6.6 1.65-8.5 4.95Z"
              fill="#38BDF8"
            />
          </svg>
        </div>
      );

    case "vercel":
      return (
        <div class={shellClass} aria-hidden="true">
          <svg width="22" height="18" viewBox="0 0 74 64" fill="none">
            <path
              d="M37.59 0.25 74.54 64.25H0.64L37.59 0.25Z"
              fill="var(--qwik-dirty-black)"
            />
          </svg>
        </div>
      );

    case "auth":
      return (
        <div class={shellClass} aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--qwik-dark-purple)"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" />
            <path d="m9.5 12 1.7 1.7L14.8 10" />
          </svg>
        </div>
      );

    default:
      return null;
  }
};

export default component$(() => {
  const shellClass = "mx-auto max-w-7xl px-4 md:px-6 lg:px-14 2xl:px-0";
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

  const heroChips = [
    "Qwik SSR",
    "Supabase",
    "Tailwind v4",
    "Google + Magic Link",
    "Vercel",
  ];

  const promiseCards = [
    {
      eyebrow: "Time saved",
      title: "Skip repetitive setup work",
      description:
        "Start from a full-stack SSR base instead of stitching docs, auth flows, and deployment details together alone.",
    },
    {
      eyebrow: "Cleaner architecture",
      title: "Begin with a structure that makes sense",
      description:
        "The point is not to dump files on you. The point is to give you a starting point that is easier to understand and extend.",
    },
    {
      eyebrow: "Production-minded",
      title: "Built for real projects, not toy demos",
      description:
        "Authentication, route protection, env variables, SSR thinking, and deployment flow are part of the package from day one.",
    },
  ];

  const includedCards = [
    {
      title: "Qwik SSR foundation",
      description:
        "A Qwik-first, SSR-oriented setup designed for a real modern application instead of a disconnected demo.",
    },
    {
      title: "Supabase integration",
      description:
        "A practical starting point for auth, data flow, and project wiring without improvising everything from scratch.",
    },
    {
      title: "Authentication flows",
      description:
        "Google auth, Magic Link, protected routes, and a cleaner path to real user access.",
    },
    {
      title: "Tailwind setup",
      description:
        "A clean visual base ready to extend without wasting time rebuilding the same styling foundations again.",
    },
    {
      title: "Vercel deployment path",
      description:
        "Environment variables, deployment thinking, and the boring but important parts needed to get online faster.",
    },
    {
      title: "Room for production email delivery",
      description:
        "Magic Link can start simple, with the option to move to custom SMTP such as Resend when production delivery matters.",
    },
  ];

  const stackCards = [
    {
      kind: "qwik" as const,
      title: "Qwik",
      description:
        "The framework at the core of the starter pack, with SSR as part of the actual starting architecture.",
    },
    {
      kind: "supabase" as const,
      title: "Supabase",
      description:
        "Auth and backend wiring without turning the first week of the project into a ritual of confusion.",
    },
    {
      kind: "tailwind" as const,
      title: "Tailwind",
      description:
        "A practical styling base that keeps the project moving without getting lost in CSS archaeology.",
    },
    {
      kind: "vercel" as const,
      title: "Vercel",
      description:
        "A deployment path that matches the goal: ship faster, break less, and keep the setup understandable.",
    },
    {
      kind: "auth" as const,
      title: "Auth flows",
      description:
        "Google sign-in, Magic Link, route protection, and the pieces needed to handle real user access.",
    },
  ];

  const faqItems = [
    {
      question: "Is this already for sale?",
      answer:
        "No. This page is live early to present the product and collect interest before the first public release.",
    },
    {
      question: "Is this just a template?",
      answer:
        "No. The goal is to provide a practical shortcut to a clean starting point, not a random pile of files with a trendy label.",
    },
    {
      question: "Who is this for?",
      answer:
        "Developers who already know basic web development and want a faster way to start a real Qwik full-stack app.",
    },
  ];

  const previewList = [
    "Qwik SSR-first structure",
    "Supabase already thought through",
    "Google auth + Magic Link",
    "Protected routes",
    "Tailwind base ready to extend",
    "Vercel deployment path",
  ];

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
          class={`${shellClass} relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:gap-12`}
        >
          <header class="relative max-w-3xl">
            <div class="inline-flex items-center rounded-full border border-(--qwik-dark-purple)/12 bg-(--qwik-light-purple)/10 px-4 py-2 text-sm font-medium text-(--qwik-dark-purple)">
              New product • Early access
            </div>

            <h1 class="mt-6 max-w-4xl text-4xl font-semibold leading-[1.02] text-(--qwik-dirty-black) md:text-6xl">
              Start a real Qwik full-stack SSR app faster.
            </h1>

            <p class="mt-6 max-w-2xl text-base leading-7 text-gray-700 md:text-xl md:leading-8">
              The Learn Qwik Starter Pack is a production-minded starting point
              built around Qwik, Supabase, Tailwind, authentication flows, SSR,
              and Vercel deployment, so you can skip repetitive setup and focus
              on building.
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#included"
                class="inline-flex items-center justify-center rounded-lg bg-(--qwik-dark-purple) px-5 py-3 text-sm font-medium text-white! transition-all duration-200 hover:bg-(--qwik-light-purple) hover:text-white!"
              >
                Explore what’s included
              </Link>

              <Link
                href="#waitlist"
                class="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-sm font-medium text-(--qwik-dirty-black)! transition-all duration-200 hover:border-gray-300 hover:bg-white hover:text-(--qwik-dark-background)!"
              >
                Join early access
              </Link>
            </div>

            <p class="mt-4 text-sm text-gray-600">
              No payment yet. The goal right now is to present the product
              clearly and open the path for early access.
            </p>

            <div class="mt-8 flex flex-wrap gap-2">
              {heroChips.map((chip) => (
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

                <div class="rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-600">
                  Early access
                </div>
              </div>

              <p class="mt-4 text-sm leading-6 text-gray-600">
                Not “just a template”. A practical shortcut to a cleaner, faster
                starting point for a real Qwik app.
              </p>

              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-gray-500">Focus</p>
                  <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
                    Qwik full-stack SSR
                  </p>
                </div>

                <div class="rounded-3xl border border-gray-200 bg-gray-50 p-4">
                  <p class="text-sm font-medium text-gray-500">Goal</p>
                  <p class="mt-2 text-lg font-semibold text-(--qwik-dirty-black)">
                    Ship faster, guess less
                  </p>
                </div>
              </div>

              <div class="mt-6 rounded-3xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="flex flex-wrap gap-2">
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    SSR-first
                  </div>
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    Auth ready
                  </div>
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    Protected routes
                  </div>
                  <div class="rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">
                    Deployment path
                  </div>
                </div>

                <div class="mt-5 space-y-3">
                  {previewList.map((item, index) => (
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

      <section class={`${shellClass} py-8 md:py-14`}>
        <div class="grid gap-4 md:grid-cols-3">
          {promiseCards.map((card) => (
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

      <section id="included" class={`${shellClass} py-12 md:py-20`}>
        <div class="mb-8 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div class="max-w-3xl">
            <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              What’s included
            </p>
            <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
              A practical base for a real Qwik project.
            </h2>
            <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
              The idea is simple: remove the most repetitive and annoying part
              of getting started, while keeping the structure clean enough to
              understand and extend.
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
          {includedCards.map((card) => (
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

      <section class={`${shellClass} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-gray-200 bg-gray-50 p-6 md:p-10">
          <div class="absolute right-0 top-0 opacity-70 pointer-events-none">
            <HomeBackground />
          </div>

          <div class="relative">
            <div class="mb-8 max-w-3xl md:mb-10">
              <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Stack
              </p>
              <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
                The stack is familiar. The value is how it is put together.
              </h2>
              <p class="mt-4 text-base leading-7 text-gray-700">
                Tools are not magic. The real value comes from starting with a
                cleaner, more coherent base than the average improvisation
                session.
              </p>
            </div>

            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {stackCards.map((item) => (
                <article
                  key={item.title}
                  class="rounded-[1.75rem] border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <StackIcon kind={item.kind} />
                  <h3 class="mt-4 text-lg font-semibold text-(--qwik-dirty-black)">
                    {item.title}
                  </h3>
                  <p class="mt-3 text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class={`${shellClass} py-12 md:py-20`}>
        <div class="grid gap-4 lg:grid-cols-2">
          <article class="rounded-4xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
              Good fit
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black)">
              For developers who want a faster starting point
            </h2>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-gray-700">
              <li class="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                You already know basic web development and want to use Qwik more
                seriously.
              </li>
              <li class="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                You do not want to rebuild auth, route protection, and setup
                decisions from zero every time.
              </li>
              <li class="rounded-xl border border-gray-100 bg-gray-50 px-4 py-3">
                You want a practical base that is easier to understand and
                extend.
              </li>
            </ul>
          </article>

          <article class="rounded-4xl border border-gray-200 bg-gray-50 p-6 shadow-sm md:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-blue)">
              Not the target
            </p>
            <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black)">
              Not built for every possible case on day one
            </h2>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-gray-700">
              <li class="rounded-xl border border-gray-200 bg-white px-4 py-3">
                Not for complete beginners who still need core HTML, CSS, and
                JavaScript foundations first.
              </li>
              <li class="rounded-xl border border-gray-200 bg-white px-4 py-3">
                Not a giant all-in-one SaaS machine with every feature in the
                observable universe.
              </li>
              <li class="rounded-xl border border-gray-200 bg-white px-4 py-3">
                Not a promise of instant success. It is a shortcut to a better
                starting point, not a magic spell.
              </li>
            </ul>
          </article>
        </div>
      </section>

      <section class={`${shellClass} py-12 md:py-20`}>
        <div class="mb-8 max-w-3xl md:mb-10">
          <p class="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
            FAQ
          </p>
          <h2 class="text-3xl font-semibold text-(--qwik-dirty-black) md:text-4xl">
            A few useful clarifications before launch.
          </h2>
        </div>

        <div class="grid gap-4 md:grid-cols-3">
          {faqItems.map((item) => (
            <article
              key={item.question}
              class="rounded-[1.75rem] border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 class="text-xl font-semibold text-(--qwik-dirty-black)">
                {item.question}
              </h3>
              <p class="mt-3 text-sm leading-6 text-gray-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="waitlist" class={`${shellClass} py-12 md:py-20`}>
        <div class="relative overflow-hidden rounded-4xl border border-(--qwik-dark-purple)/10 bg-white p-6 shadow-sm md:p-10">
          <div class="absolute inset-0 bg-(--qwik-light-purple)/10 pointer-events-none" />
          <div class="absolute right-0 top-0 opacity-70 pointer-events-none">
            <HomeBackgroundPurple />
          </div>

          <div class="relative grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div class="max-w-3xl">
              <p class="text-sm font-semibold uppercase tracking-[0.14em] text-(--qwik-dark-purple)">
                Early access
              </p>

              <h2 class="mt-3 text-3xl font-semibold text-(--qwik-dirty-black) md:text-5xl">
                Join the early access list
              </h2>

              <p class="mt-4 text-base leading-7 text-gray-700 md:text-lg">
                Get notified when the Learn Qwik Starter Pack is ready for its
                first public release.
              </p>

              <div class="mt-6 rounded-[1.75rem] border border-gray-200 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
                <p class="text-sm leading-6 text-gray-700">
                  No payment yet. This is only for early access updates about
                  the Starter Pack and related launch news.
                </p>
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
                        We’ll let you know when the Starter Pack is ready for
                        its first public release.
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
                    <>
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
                    </>
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
                    We’ll only send Starter Pack early access updates.
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
    "Discover the Learn Qwik Starter Pack: a production-minded Qwik SSR starter built with Supabase, Tailwind, authentication flows, and Vercel deployment.",
  imageUrl: "https://www.learn-qwik.com/metaLanding.png",
  url: "https://www.learn-qwik.com/starter-pack/",
  type: "website",
});

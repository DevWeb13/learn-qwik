import { RequestEventLoader } from "@builder.io/qwik-city";
import { createAdminClient } from "./server";

export const starterPackWaitlistStatus = async (
  requestEvent: RequestEventLoader,
) => {
  const adminClient = createAdminClient(requestEvent);
  const profile = requestEvent.sharedMap.get("profile");

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
      requestEvent.cookie.set("starter_pack_waitlist_id", profileEntry.id, {
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secure: requestEvent.url.protocol === "https:",
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

        requestEvent.cookie.set("starter_pack_waitlist_id", emailEntry.id, {
          path: "/",
          httpOnly: true,
          sameSite: "lax",
          secure: requestEvent.url.protocol === "https:",
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

  const waitlistId = requestEvent.cookie.get("starter_pack_waitlist_id")?.value;

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
};

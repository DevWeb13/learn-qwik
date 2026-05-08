import type { RequestHandler } from "@builder.io/qwik-city";
import {
  isParisDailyEmailHour,
  sendDailyChallengeEmails,
} from "~/lib/dailyChallenge/email";

const jsonResponse = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

export const onGet: RequestHandler = async (requestEvent) => {
  const cronSecret = requestEvent.env.get("CRON_SECRET");
  const authorization = requestEvent.request.headers.get("authorization");

  if (!cronSecret || authorization !== `Bearer ${cronSecret}`) {
    requestEvent.send(
      jsonResponse(401, {
        error: "Unauthorized",
        success: false,
      }),
    );
    return;
  }

  const dryRun = requestEvent.url.searchParams.get("dryRun") === "1";
  const force = requestEvent.url.searchParams.get("force") === "1";

  if (!dryRun && !force && !isParisDailyEmailHour()) {
    requestEvent.send(
      jsonResponse(200, {
        reason: "Not 08:00 in Europe/Paris.",
        skipped: true,
        success: true,
      }),
    );
    return;
  }

  try {
    const result = await sendDailyChallengeEmails(requestEvent, {
      dryRun,
      origin: requestEvent.url.origin,
    });

    requestEvent.send(
      jsonResponse(200, {
        ...result,
        success: true,
      }),
    );
  } catch (error) {
    console.error("Daily Qwik Lab email cron failed:", error);

    requestEvent.send(
      jsonResponse(500, {
        error: error instanceof Error ? error.message : "Unknown error",
        success: false,
      }),
    );
  }
};

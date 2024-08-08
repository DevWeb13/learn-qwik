import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ send, url, headers }) => {
  const targetUrl = url.searchParams.get("url");
  if (!targetUrl) {
    headers.set("Content-Type", "application/json");
    send(400, JSON.stringify({ error: "URL is required" }));
    return;
  }

  try {
    const res = await fetch(targetUrl);
    if (!res.ok) {
      headers.set("Content-Type", "application/json");
      send(
        res.status,
        JSON.stringify({ error: "Failed to fetch the resource" }),
      );
      return;
    }

    const data = await res.text();
    headers.set(
      "Content-Type",
      res.headers.get("Content-Type") || "text/plain",
    );
    headers.set("Access-Control-Allow-Origin", "*");
    headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS",
    );
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    send(res.status, data);
  } catch (err: any) {
    headers.set("Content-Type", "application/json");
    send(500, JSON.stringify({ error: "Proxy error", details: err.message }));
  }
};

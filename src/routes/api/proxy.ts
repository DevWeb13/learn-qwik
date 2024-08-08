import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ request, headers, send }) => {
  const url = new URL(request.url);
  const targetUrl = url.searchParams.get("url");

  if (!targetUrl) {
    headers.set("Content-Type", "application/json");
    send(
      new Response(JSON.stringify({ error: "URL is required" }), {
        status: 400,
      }),
    );
    return;
  }

  try {
    const res = await fetch(targetUrl);
    if (!res.ok) {
      headers.set("Content-Type", "application/json");
      send(
        new Response(
          JSON.stringify({ error: "Failed to fetch the resource" }),
          { status: res.status },
        ),
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

    send(new Response(data, { status: res.status }));
  } catch (err: any) {
    headers.set("Content-Type", "application/json");
    send(
      new Response(
        JSON.stringify({ error: "Proxy error", details: err.message }),
        { status: 500 },
      ),
    );
  }
};

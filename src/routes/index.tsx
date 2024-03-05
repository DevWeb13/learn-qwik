// src/routes/index.tsx

import type { RequestEvent } from "@builder.io/qwik-city";

export const onGet = async ({ redirect }: RequestEvent) => {
  throw redirect(302, "/learn");
};

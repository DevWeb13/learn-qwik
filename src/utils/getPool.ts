// src/utils/getPool.ts

import { server$ } from "@builder.io/qwik-city";
import { createPool } from "@vercel/postgres";

export const getPool = server$(function () {
  const connectionString = this.env.get("POSTGRES_URL"); // Get the connection string from the environment variables

  if (!connectionString)
    throw new Error("POSTGRES_URL environment variable is not set");

  // Create a new pool with the connection string
  const pool = createPool({
    connectionString: connectionString,
  });

  return pool;
});

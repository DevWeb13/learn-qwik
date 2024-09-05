// src/utils/totalShareData.ts

import { server$ } from "@builder.io/qwik-city";
import { getPool } from "./getPool";
import type { totalShareType } from "~/types/totalShareType";

export const getTotalShare = server$(async function () {
  const pool = await getPool();
  try {
    const result = await pool.query<totalShareType>(
      "SELECT count FROM total_share",
    );
    return result.rows[0].count;
  } catch (e) {
    throw new Error("Failed to fetch total share: " + e);
  } finally {
    await pool.end();
  }
});

export const incrementTotalShare = server$(async function () {
  const pool = await getPool();
  try {
    await pool.query("UPDATE total_share SET count = count + 1");
  } catch (e) {
    throw new Error("Failed to increment total share: " + e);
  } finally {
    await pool.end();
  }
});

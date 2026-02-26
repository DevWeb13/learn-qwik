import { partytownVite } from "@builder.io/partytown/utils";
import { qwikCity } from "@builder.io/qwik-city/vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import tailwindcss from "@tailwindcss/vite";
import { join } from "path";
import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    qwikCity(),
    qwikVite(),
    tsconfigPaths({ root: "." }),
    tailwindcss(),
    partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
  ],
  esbuild: {
    drop: ["console", "debugger"],
  },
  server: {
    headers: {
      "Cache-Control": "public, max-age=0",
    },
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=600",
    },
  },
} as UserConfig);

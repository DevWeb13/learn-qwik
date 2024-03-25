import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(async () => {

  return {
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      
    ],
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
    build: {
      outDir: ".vercel/output/static",
      manifest: true,
      target: "node20.10",
      ssr: true,
    },
  };
});

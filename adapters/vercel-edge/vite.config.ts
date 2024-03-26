import { vercelEdgeAdapter, VercelEdgeAdapterOptions } from "@builder.io/qwik-city/adapters/vercel-edge/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.vercel-edge.tsx", "@qwik-city-plan"],
      },
      outDir: ".vercel/output/functions/_qwik-city.func",
      lib: {
        entry: "src/entry.vercel-edge.tsx",
        formats: ["cjs"],
      },
    },
    plugins: [vercelEdgeAdapter(
      {
        target: "node",
        staticPaths: [
           "src/routes/learn/dashboard-app",
        ]
      } as VercelEdgeAdapterOptions,
    )],
  };
});

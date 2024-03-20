import { defineConfig, type UserConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import rehypePrettyCode from 'rehype-pretty-code';

export default defineConfig(async () => {

  return {
    plugins: [qwikCity({
      mdxPlugins: {
          rehypeSyntaxHighlight: true,
          remarkGfm: true,
          rehypeAutolinkHeadings: true,
      },
     

    }), qwikVite(), tsconfigPaths()],
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
  };
});

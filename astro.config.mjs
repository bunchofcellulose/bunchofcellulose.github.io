// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [keystatic(), react(), markdoc()],

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["@keystatic/core"],
    },
  },

  output: "server",

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});

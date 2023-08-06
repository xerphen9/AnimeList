import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  vite: {
    ssr: {
      noExternal: ["path-to-regexp"]
    }
  }
});
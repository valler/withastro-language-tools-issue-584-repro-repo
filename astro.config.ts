import { defineConfig } from "astro/config";
import { resolve } from "node:path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "~src": resolve("./src"),
      },
    },
  }
});

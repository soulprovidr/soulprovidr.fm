import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  publicDir: "public",
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});

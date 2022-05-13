import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // change this line on dist/assets/main.js
  // e = `${ncmazFrontendVariables.pluginDir}/wp-content/plugins/ncmaz-frontend/dist/${e}`
  // t7 = `${ncmazFrontendVariables.pluginDir}dist/`
  base: "https://fooooooooooooo.com/",
  build: {
    manifest: true,
    rollupOptions: {
      input: "/src/main.tsx",
    },
  },
  server: {
    host: true,
  },
});

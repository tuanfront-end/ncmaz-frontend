import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  // change this line on dist/assets/main.js
  // e = `${window.frontendObject.homeURL}/wp-content/plugins/ncmaz-frontend/dist/${e}`
  base: "https://foooooooo.com/",
  build: {
    manifest: true,
    rollupOptions: {
      input: "src/main.tsx",
    },
  },
});

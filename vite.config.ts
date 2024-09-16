import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
const overwiteFile = require("./rollupPlugin.cjs");

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const basePublicPath = "https://foooooooooooooooo.com/";
  const basePublicPathWordPressDyamic =
    "`${ncmazFrontendVariables.pluginDir}dist/`";

  return defineConfig({
    plugins: [react(), tsconfigPaths()],
    // change this line on dist/assets/main.js
    // e = `${ncmazFrontendVariables.pluginDir}/wp-content/plugins/ncmaz-frontend/dist/${e}`
    // t7 = `${ncmazFrontendVariables.pluginDir}dist/`
    base: basePublicPath,
    build: {
      cssCodeSplit: process.env.VITE_LRT_OR_RTL === "ltr",
      manifest: true,
      rollupOptions: {
        input: "/src/main.tsx",
        plugins: [
          overwiteFile({
            basePublicPath,
            basePublicPathWordPressDyamic,
            pathToMainAssets: "dist/assets/",
            // THEO NHU BIEN ENV VITE_LRT_OR_RTL
            isBuildingRTL: process.env.VITE_LRT_OR_RTL === "rtl",
          }),
        ],
      },
    },
    server: {
      host: true,
    },
  });
};

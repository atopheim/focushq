import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico"],
      manifest: {
        name: "FocusHQ",
        short_name: "FocusHQ",
        description: "Todo lists, Pomodoro Technique and Project Management tool",
        theme_color: "#000000",
        icons: [
          {
            "src": "favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
        ],
      },
    }),
  ],
});

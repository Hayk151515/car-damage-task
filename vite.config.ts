import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "plugin.js",
        chunkFileNames: "plugin.js",
        assetFileNames: "plugin.css",
      },
    },
  },
  plugins: [react()],
});

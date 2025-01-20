import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  build: {
    sourcemap: false, // Disable source maps
  },
  server: {
    sourcemap: false, // Disable source maps in the development server
  },
});
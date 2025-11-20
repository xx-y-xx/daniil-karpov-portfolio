import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
  ],
    base:'/daniil-karpov-portfolio/',
  resolve: {
    alias: {
      "@": "/src",
    },
  }
});
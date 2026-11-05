import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // O site é servido em https://nicolasmurtha.github.io/portfolio/
  base: "/portfolio/",
  plugins: [react(), tailwindcss()],
});

import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Identificador único de cada build. O site compara o valor embutido no JS com o
// de version.json para saber se há uma versão nova publicada (ver src/updateCheck.ts).
const BUILD_ID = Date.now().toString(36);

const versionFile = (): Plugin => ({
  name: "version-file",
  apply: "build",
  generateBundle() {
    this.emitFile({ type: "asset", fileName: "version.json", source: JSON.stringify({ buildId: BUILD_ID }) });
  },
});

export default defineConfig({
  // O site é servido em https://nicolasmurtha.github.io/portfolio/
  base: "/portfolio/",
  define: { __BUILD_ID__: JSON.stringify(BUILD_ID) },
  plugins: [react(), tailwindcss(), versionFile()],
});

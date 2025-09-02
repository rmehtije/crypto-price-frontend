import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [svelte(), tailwindcss()],
    server: {
      host: "0.0.0.0",
      port: 3000,
      proxy: {
        "/api": env.VITE_API_BASE_URL,
      },
    },
  };
});

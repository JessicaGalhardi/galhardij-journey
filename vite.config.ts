import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  deploymentPreset: "vercel",
  tanstackStart: {
    server: { entry: "server" },
  },
});
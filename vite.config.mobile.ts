// Mobile (Capacitor) build config.
// Same app + same plugins as vite.config.ts, but renders a client-only SPA shell
// so the build emits a real dist/client/index.html that Capacitor can package.
// The web build (vite.config.ts) is untouched and keeps SSR.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { applyPublicEnvFallback } from "./public-env.config";

applyPublicEnvFallback();

export default defineConfig({
  // No nitro/server deploy bundle for the mobile build.
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
      prerender: {
        enabled: true,
        outputPath: "/index.html",
        crawlLinks: false,
      },
    },
  },
});

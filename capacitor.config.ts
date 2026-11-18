import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.lovable.foodbudget",
  appName: "FoodBudget",
  // The mobile build (vite.config.mobile.ts) emits a real index.html here.
  webDir: "dist/client",
  android: {
    allowMixedContent: false,
  },
};

export default config;

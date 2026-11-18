// Public (safe-to-ship) backend connection values used as a fallback when no
// .env file is present — e.g. a fresh GitHub clone or a local APK build.
// These are the publishable URL/key only; no secrets live here.
const PUBLIC_ENV: Record<string, string> = {
  VITE_SUPABASE_URL: "https://evedmrddgrqgranspxoe.supabase.co",
  VITE_SUPABASE_PUBLISHABLE_KEY: "sb_publishable_cjTnmKQxzZAr-flYhLaSFw_1LDE8xVg",
  VITE_SUPABASE_PROJECT_ID: "evedmrddgrqgranspxoe",
  SUPABASE_URL: "https://evedmrddgrqgranspxoe.supabase.co",
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_cjTnmKQxzZAr-flYhLaSFw_1LDE8xVg",
  SUPABASE_PROJECT_ID: "evedmrddgrqgranspxoe",
};

export function applyPublicEnvFallback() {
  for (const [k, v] of Object.entries(PUBLIC_ENV)) {
    if (!process.env[k]) process.env[k] = v;
  }
}

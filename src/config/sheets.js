export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
export const ADMIN_EMAILS = (import.meta.env.VITE_ADMIN_EMAILS || "")
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
export const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || "";

export const SESSION_KEY = "guvi_session";
export const ADMIN_SESSION_KEY = "jawa_admin_session";
export const USERS_KEY = "guvi_users";
export const PENDING_LEAD_KEY = "guvi_pending_expert_lead";
export const POPUP_SEEN_KEY = "guvi_career_popup_seen_v2";

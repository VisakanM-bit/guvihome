export const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";
export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "";
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
export const ADMIN_EMAILS = `${import.meta.env.VITE_ADMIN_EMAIL || ""},${import.meta.env.VITE_ADMIN_EMAILS || ""}`
  .split(",")
  .map((email) => email.trim().toLowerCase())
  .filter(Boolean);
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE || "+919790631286";
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "hr@jawaedtech.com";
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || CONTACT_PHONE).replace(/[^\d]/g, "");
export const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL || "https://in.linkedin.com/company/jawaedtech";
export const YOUTUBE_URL = import.meta.env.VITE_YOUTUBE_URL || "https://www.youtube.com/@jawaedtech";
export const INSTAGRAM_URL = import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/jawaedtech/";
export const FACEBOOK_URL = import.meta.env.VITE_FACEBOOK_URL || "https://www.facebook.com/jawaedtech/";
export const TWITTER_URL = import.meta.env.VITE_TWITTER_URL || "https://twitter.com/jawaedtech";
export const MAPS_URL = import.meta.env.VITE_MAPS_URL || "https://maps.app.goo.gl/dC9dsNhuXivU3TAw7?g_st=aw";
export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "";
export const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID || "";

export const SESSION_KEY = "guvi_session";
export const ADMIN_SESSION_KEY = "jawa_admin_session";
export const USERS_KEY = "guvi_users";
export const PENDING_LEAD_KEY = "guvi_pending_expert_lead";
export const POPUP_SEEN_KEY = "guvi_career_popup_seen_v2";

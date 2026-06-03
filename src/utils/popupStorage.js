import { POPUP_SEEN_KEY } from "../config/sheets";

const LEGACY_POPUP_KEY = "guvi_career_popup_seen";

export function hasSeenCareerPopup() {
  return localStorage.getItem(POPUP_SEEN_KEY) === "1";
}

export function markCareerPopupSeen() {
  localStorage.setItem(POPUP_SEEN_KEY, "1");
}

/**
 * Show auto-popup for guests who have not dismissed it this visit.
 * Flag is cleared on sign-out so the popup appears again on the homepage.
 */
export function shouldShowCareerPopup(isAuthenticated) {
  if (isAuthenticated) return false;
  return !hasSeenCareerPopup();
}

export function clearCareerPopupSeen() {
  localStorage.removeItem(POPUP_SEEN_KEY);
  localStorage.removeItem(LEGACY_POPUP_KEY);
}

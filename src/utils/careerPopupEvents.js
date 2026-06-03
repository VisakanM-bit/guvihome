export const OPEN_CAREER_POPUP_EVENT = "jawa:open-career-popup";

export function openCareerPopup() {
  window.dispatchEvent(new CustomEvent(OPEN_CAREER_POPUP_EVENT));
}

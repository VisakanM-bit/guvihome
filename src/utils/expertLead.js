import { PENDING_LEAD_KEY } from "../config/sheets";
import { saveExpertLead } from "../services/sheetsApi";

export function storePendingLead(lead) {
  sessionStorage.setItem(PENDING_LEAD_KEY, JSON.stringify(lead));
}

export function consumePendingLead() {
  const raw = sessionStorage.getItem(PENDING_LEAD_KEY);
  if (!raw) return null;
  sessionStorage.removeItem(PENDING_LEAD_KEY);
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function submitExpertLeadAndRedirect(lead, navigate) {
  await saveExpertLead(lead);
  storePendingLead(lead);
  navigate("/auth?from=expert");
}

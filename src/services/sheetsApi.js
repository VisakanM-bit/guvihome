import { GOOGLE_SCRIPT_URL } from "../config/sheets";

function hasScriptUrl() {
  return Boolean(GOOGLE_SCRIPT_URL?.trim());
}

/** Fire-and-forget write to sheet (no response needed) */
async function postToSheetSilent(payload) {
  if (!hasScriptUrl()) return;
  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }),
    });
  } catch (err) {
    console.warn("Sheet write failed:", err);
  }
}

/** POST that returns JSON (for login verification) */
async function postToSheetWithResponse(payload) {
  if (!hasScriptUrl()) return null;
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }),
    });
    const text = await response.text();
    if (!text) return null;
    return JSON.parse(text);
  } catch (err) {
    console.warn("Sheet request failed:", err);
    return null;
  }
}

export async function saveExpertLead(lead) {
  await postToSheetSilent({
    action: "expert_lead",
    source: lead.source || "career_popup",
    firstName: lead.firstName || lead.name?.split(" ")[0] || "",
    lastName: lead.lastName || lead.name?.split(" ").slice(1).join(" ") || "",
    name: lead.name || "",
    email: lead.email || "",
    phone: lead.phone || "",
    profile: lead.profile || "",
    careerInterest: lead.careerInterest || "",
    language: lead.language || "",
    education: lead.education || "",
    graduationYear: lead.graduationYear || "",
  });
}

export async function saveAccountSignup(user) {
  const payload = {
    action: "signup",
    name: user.name,
    email: user.email,
    phone: user.phone || "",
    password: user.password,
  };

  const data = await postToSheetWithResponse(payload);
  if (data?.success === false && data?.message) {
    throw new Error(data.message);
  }
  if (data?.success) return;

  await postToSheetSilent(payload);
}

export async function logAccountLogin(user) {
  await postToSheetSilent({
    action: "login",
    email: user.email,
    name: user.name || "",
  });
}

/** Verify credentials against Accounts sheet (POST, then GET fallback) */
export async function verifyLoginWithSheet(email, password) {
  const normalizedEmail = email.trim().toLowerCase();

  const postResult = await postToSheetWithResponse({
    action: "verify_login",
    email: normalizedEmail,
    password,
  });
  if (postResult?.success) {
    return {
      name: postResult.name || normalizedEmail.split("@")[0],
      email: postResult.email || normalizedEmail,
      phone: postResult.phone || "",
    };
  }

  try {
    const params = new URLSearchParams({
      action: "login",
      email: normalizedEmail,
      password,
    });
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params}`);
    if (!response.ok) return null;
    const data = await response.json();
    if (!data?.success) return null;
    return {
      name: data.name || normalizedEmail.split("@")[0],
      email: data.email || normalizedEmail,
      phone: data.phone || "",
    };
  } catch {
    return null;
  }
}

/**
 * Paste this into your Google Sheet: Extensions → Apps Script
 * Deploy as Web app: Execute as "Me", Who has access: "Anyone"
 * Use the deployment URL as VITE_GOOGLE_SCRIPT_URL in .env
 */

const EXPERT_SHEET = "Expert Leads";
const ACCOUNTS_SHEET = "Accounts";
const LOGIN_LOG_SHEET = "Login Log";

function getOrCreateSheet(name, headers) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }
  return sheet;
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  const action = data.action || "expert_lead";

  if (action === "verify_login") {
    const email = (data.email || "").toLowerCase().trim();
    const password = data.password || "";
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ACCOUNTS_SHEET);

    if (!sheet || sheet.getLastRow() < 2) {
      return jsonResponse({ success: false });
    }

    const rows = sheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if ((rows[i][2] || "").toLowerCase() === email && rows[i][4] === password) {
        return jsonResponse({
          success: true,
          name: rows[i][1],
          email: rows[i][2],
          phone: rows[i][3],
        });
      }
    }
    return jsonResponse({ success: false });
  }

  if (action === "signup") {
    const sheet = getOrCreateSheet(ACCOUNTS_SHEET, [
      "Timestamp",
      "Name",
      "Email",
      "Phone",
      "Password",
    ]);
    const email = (data.email || "").toLowerCase().trim();
    const existing = sheet.getDataRange().getValues();
    for (let i = 1; i < existing.length; i++) {
      if ((existing[i][2] || "").toLowerCase() === email) {
        return jsonResponse({ success: false, message: "Email already exists" });
      }
    }
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name || "",
      email,
      data.phone || "",
      data.password || "",
    ]);
    return jsonResponse({ success: true });
  }

  if (action === "login") {
    const sheet = getOrCreateSheet(LOGIN_LOG_SHEET, [
      "Timestamp",
      "Email",
      "Name",
    ]);
    sheet.appendRow([data.timestamp || new Date(), data.email || "", data.name || ""]);
    return jsonResponse({ success: true });
  }

  // expert_lead (default — keeps your original form working)
  const sheet = getOrCreateSheet(EXPERT_SHEET, [
    "Timestamp",
    "First Name",
    "Last Name",
    "Name",
    "Email",
    "Phone",
    "Profile",
    "Language",
    "Education",
    "Graduation Year",
    "Source",
  ]);
  sheet.appendRow([
    data.timestamp || new Date(),
    data.firstName || "",
    data.lastName || "",
    data.name || "",
    data.email || "",
    data.phone || "",
    data.profile || "",
    data.language || "",
    data.education || "",
    data.graduationYear || "",
    data.source || "career_popup",
  ]);
  return jsonResponse({ success: true });
}

function doGet(e) {
  const action = (e.parameter.action || "").toLowerCase();

  if (action === "login") {
    const email = (e.parameter.email || "").toLowerCase().trim();
    const password = e.parameter.password || "";
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(ACCOUNTS_SHEET);

    if (!sheet || sheet.getLastRow() < 2) {
      return jsonResponse({ success: false });
    }

    const rows = sheet.getDataRange().getValues();
    for (let i = 1; i < rows.length; i++) {
      if ((rows[i][2] || "").toLowerCase() === email && rows[i][4] === password) {
        return jsonResponse({
          success: true,
          name: rows[i][1],
          email: rows[i][2],
          phone: rows[i][3],
        });
      }
    }
    return jsonResponse({ success: false });
  }

  return jsonResponse({ ok: true });
}

function jsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}

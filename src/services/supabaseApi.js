import { ADMIN_CREDENTIALS, ADMIN_EMAILS, ADMIN_PASSWORD, ADMIN_PASSWORDS } from "../config/sheets";
import { isSupabaseConfigured, supabase } from "./supabaseClient";

export { isSupabaseConfigured };

const ADMIN_RECORDS_CACHE_KEY = "jawa_admin_records_cache_v1";
const ADMIN_TABLES = [
  "students",
  "course_applications",
  "internship_applications",
  "career_counselling_requests",
  "contact_us",
  "newsletter_subscribers",
  "visitor_events",
];

function requireSupabase() {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
  }
}

function splitName(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" "),
  };
}

function normalizeEmail(email = "") {
  return email.trim().toLowerCase();
}

function readAdminCache() {
  if (typeof localStorage === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(ADMIN_RECORDS_CACHE_KEY) || "{}");
  } catch {
    return {};
  }
}

function writeAdminCache(cache) {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(ADMIN_RECORDS_CACHE_KEY, JSON.stringify(cache));
}

function cacheRow(table, row) {
  if (!table || !row) return row;
  const cache = readAdminCache();
  const rows = Array.isArray(cache[table]) ? cache[table] : [];
  const cachedRow = {
    ...row,
    id: row.id || `local-${table}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    cached_at: row.cached_at || new Date().toISOString(),
  };
  const key = getCacheKey(cachedRow);
  const nextRows = [cachedRow, ...rows.filter((item) => getCacheKey(item) !== key)].slice(0, 500);
  writeAdminCache({ ...cache, [table]: nextRows });
  return cachedRow;
}

function updateCachedRow(table, id, patch) {
  const cache = readAdminCache();
  const rows = Array.isArray(cache[table]) ? cache[table] : [];
  writeAdminCache({
    ...cache,
    [table]: rows.map((row) => String(row.id) === String(id) ? { ...row, ...patch } : row),
  });
}

function deleteCachedRow(table, id) {
  const cache = readAdminCache();
  const rows = Array.isArray(cache[table]) ? cache[table] : [];
  writeAdminCache({ ...cache, [table]: rows.filter((row) => String(row.id) !== String(id)) });
}

function getCacheKey(row) {
  return String(row.id || row.email || row.phone || JSON.stringify(row));
}

function mergeRows(remoteRows = [], cachedRows = []) {
  const map = new Map();
  [...cachedRows, ...remoteRows].forEach((row) => {
    if (!row) return;
    map.set(getCacheKey(row), row);
  });
  return [...map.values()];
}

export async function getCurrentSupabaseUser() {
  if (!isSupabaseConfigured) return null;
  const { data } = await supabase.auth.getUser();
  return data?.user || null;
}

export async function signUpStudent({ name, email, phone, password }) {
  requireSupabase();
  const normalizedEmail = normalizeEmail(email);
  const { data, error } = await supabase.auth.signUp({
    email: normalizedEmail,
    password,
    options: {
      data: {
        full_name: name.trim(),
        phone: phone?.trim() || "",
        role: "student",
      },
    },
  });
  if (error) throw error;

  await upsertStudent({
    id: data.user?.id,
    full_name: name.trim(),
    email: normalizedEmail,
    phone,
  });

  return {
    id: data.user?.id,
    name: name.trim(),
    email: normalizedEmail,
    phone: phone?.trim() || "",
    role: "student",
  };
}

export async function signInStudent({ email, password }) {
  requireSupabase();
  const normalizedEmail = normalizeEmail(email);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });
  if (error) throw error;

  const user = data.user;
  await logLoginActivity(user?.id);
  await upsertStudent({
    id: user?.id,
    full_name: user?.user_metadata?.full_name || normalizedEmail.split("@")[0],
    email: normalizedEmail,
    phone: user?.user_metadata?.phone || "",
    last_login: new Date().toISOString(),
  });

  return {
    id: user?.id,
    name: user?.user_metadata?.full_name || normalizedEmail.split("@")[0],
    email: normalizedEmail,
    phone: user?.user_metadata?.phone || "",
    role: "student",
  };
}

export async function signOutSupabase() {
  if (!isSupabaseConfigured) return;
  await supabase.auth.signOut();
}

export async function signInAdmin({ email, password }) {
  const normalizedEmail = normalizeEmail(email);
  const allowListed = ADMIN_EMAILS.includes(normalizedEmail);
  const envCredential = ADMIN_CREDENTIALS.find((credential) => credential.email === normalizedEmail);
  const envPasswordIndex = ADMIN_EMAILS.indexOf(normalizedEmail);
  const envPasswordMatches =
    Boolean(allowListed && ADMIN_PASSWORD && password === ADMIN_PASSWORD) ||
    Boolean(allowListed && ADMIN_PASSWORDS[envPasswordIndex] && password === ADMIN_PASSWORDS[envPasswordIndex]) ||
    Boolean(envCredential && password === envCredential.password);

  if (envPasswordMatches) {
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: normalizedEmail,
          password,
        });
        if (!error && data.user) {
          return {
            id: data.user.id,
            email: normalizedEmail,
            name: data.user.user_metadata?.full_name || "Organization Admin",
            role: "admin",
            authProvider: "supabase",
          };
        }
      } catch {
        /* fall back to env-authenticated admin */
      }
    }
    return {
      id: `env-admin-${normalizedEmail}`,
      email: normalizedEmail,
      name: "Organization Admin",
      role: "admin",
      authProvider: "env",
    };
  }

  requireSupabase();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });
  if (error) throw error;

  const role = data.user?.user_metadata?.role;
  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("role,is_active")
    .eq("id", data.user.id)
    .maybeSingle();

  if (!allowListed && role !== "admin" && !(profile?.role === "admin" && profile?.is_active)) {
    await supabase.auth.signOut();
    throw new Error("This account is not authorized for the organization dashboard.");
  }

  return {
    id: data.user.id,
    email: normalizedEmail,
    name: data.user.user_metadata?.full_name || "Organization Admin",
    role: "admin",
  };
}

export async function upsertStudent(student) {
  const email = normalizeEmail(student.email);
  if (!email) return null;

  const payload = {
    full_name: student.full_name || student.name || email.split("@")[0],
    email,
    phone: student.phone || "",
    college_name: student.college_name || "",
    degree: student.degree || "",
    year_of_study: student.year_of_study || "",
    city: student.city || "",
    state: student.state || "",
    course_interest: student.course_interest || student.program || "",
    last_login: student.last_login || null,
  };
  if (student.id) payload.id = student.id;

  cacheRow("students", payload);

  if (!isSupabaseConfigured) return payload.id || null;
  const { data, error } = await supabase
    .from("students")
    .upsert(payload, { onConflict: "email" })
    .select("id")
    .single();
  if (error) throw error;
  return data?.id || student.id || null;
}

async function resolveStudentId(lead) {
  const user = await getCurrentSupabaseUser();
  if (user?.id) return user.id;
  if (!lead?.email) return null;
  return upsertStudent({
    full_name: lead.name || `${lead.firstName || ""} ${lead.lastName || ""}`.trim(),
    email: lead.email,
    phone: lead.phone,
    course_interest: lead.program || lead.course_interest || lead.profile || "",
  });
}

export async function saveLeadToSupabase(lead) {
  const source = lead.source || "";
  const fullName = lead.name || `${lead.firstName || ""} ${lead.lastName || ""}`.trim();
  const email = normalizeEmail(lead.email);
  const phone = lead.phone || "";
  const interest = lead.program || lead.course_interest || lead.profile || "";

  const cachedLead = {
    name: fullName,
    email,
    phone,
    course_interest: interest,
    message: lead.message || lead.profile || source,
    status: "new",
    request_date: new Date().toISOString(),
  };
  cacheRow("career_counselling_requests", cachedLead);
  if (source.includes("course_enroll") || source.includes("program")) {
    cacheRow("course_applications", {
      course_name: interest || "Career Program",
      status: "new",
      remarks: lead.message || source,
      application_date: new Date().toISOString(),
    });
  } else if (source.includes("internship")) {
    cacheRow("internship_applications", {
      internship_name: interest || "Internship Program",
      status: "new",
      remarks: lead.message || source,
      application_date: new Date().toISOString(),
    });
  }

  if (!isSupabaseConfigured) return null;
  const studentId = await resolveStudentId(lead);

  if (source.includes("course_enroll") || source.includes("program")) {
    const { error } = await supabase.from("course_applications").insert({
      student_id: studentId,
      course_name: interest || "Career Program",
      status: "new",
      remarks: lead.message || source,
    });
    if (error) throw error;
  } else if (source.includes("internship")) {
    const { error } = await supabase.from("internship_applications").insert({
      student_id: studentId,
      internship_name: interest || "Internship Program",
      status: "new",
      remarks: lead.message || source,
    });
    if (error) throw error;
  }

  const { error } = await supabase.from("career_counselling_requests").insert({
    student_id: studentId,
    name: fullName,
    email,
    phone,
    course_interest: interest,
    message: lead.message || lead.profile || source,
    status: "new",
  });
  if (error) throw error;

  return true;
}

export async function saveContactToSupabase({ name, email, phone, message }) {
  cacheRow("contact_us", {
    name: name || "",
    email: normalizeEmail(email),
    phone: phone || "",
    message: message || "",
    submitted_at: new Date().toISOString(),
  });
  if (!isSupabaseConfigured) return null;
  const { error } = await supabase.from("contact_us").insert({
    name: name || "",
    email: normalizeEmail(email),
    phone: phone || "",
    message: message || "",
  });
  if (error) throw error;
  return true;
}

export async function subscribeNewsletter(email) {
  cacheRow("newsletter_subscribers", {
    email: normalizeEmail(email),
    subscribed_at: new Date().toISOString(),
  });
  if (!isSupabaseConfigured) return null;
  const { error } = await supabase
    .from("newsletter_subscribers")
    .upsert({ email: normalizeEmail(email) }, { onConflict: "email" });
  if (error) throw error;
  return true;
}

export async function logLoginActivity(studentId) {
  if (!isSupabaseConfigured || !studentId) return;
  const device = /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
  const browser = navigator.userAgent.includes("Chrome")
    ? "Chrome"
    : navigator.userAgent.includes("Firefox")
      ? "Firefox"
      : navigator.userAgent.includes("Safari")
        ? "Safari"
        : "Browser";

  await supabase.from("login_activity").insert({
    student_id: studentId,
    login_time: new Date().toISOString(),
    device_type: device,
    browser,
    location: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
  });
}

export async function logPageVisit(pathname) {
  cacheRow("visitor_events", {
    path: pathname,
    visited_at: new Date().toISOString(),
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
    browser: navigator.userAgent.slice(0, 180),
    referrer: document.referrer || "",
  });
  if (!isSupabaseConfigured) return;
  await supabase.from("visitor_events").insert({
    path: pathname,
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
    browser: navigator.userAgent.slice(0, 180),
    referrer: document.referrer || "",
  });
}

export async function fetchAdminDashboardData() {
  const cache = readAdminCache();
  if (!isSupabaseConfigured || !supabase) {
    return Object.fromEntries(ADMIN_TABLES.map((table) => [table, { data: cache[table] || [], count: (cache[table] || []).length }]));
  }

  try {
    const results = await Promise.all(
      ADMIN_TABLES.map(async (table) => {
        const { data, error, count } = await supabase
          .from(table)
          .select("*", { count: "exact" })
          .order(table === "students" ? "created_at" : table === "visitor_events" ? "visited_at" : "id", { ascending: false })
          .limit(500);
        if (error) throw error;
        const merged = mergeRows(data || [], cache[table] || []);
        return [table, { data: merged, count: Math.max(count || 0, merged.length) }];
      })
    );
    const result = Object.fromEntries(results);
    writeAdminCache(Object.fromEntries(ADMIN_TABLES.map((table) => [table, result[table]?.data || []])));
    return result;
  } catch (error) {
    const cachedResult = Object.fromEntries(ADMIN_TABLES.map((table) => [table, { data: cache[table] || [], count: (cache[table] || []).length }]));
    if (Object.values(cachedResult).some((entry) => entry.count > 0)) return cachedResult;
    throw error;
  }
}

export async function updateRecordStatus(table, id, status) {
  updateCachedRow(table, id, { status });
  if (String(id).startsWith("local-")) return;
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.from(table).update({ status }).eq("id", id);
  if (error) console.warn("Supabase status update failed; cached status was updated.", error);
}

export async function deleteAdminRecord(table, id) {
  deleteCachedRow(table, id);
  if (String(id).startsWith("local-")) return;
  if (!isSupabaseConfigured || !supabase) return;
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) console.warn("Supabase delete failed; cached record was removed.", error);
}

export function exportRowsToCsv(filename, rows) {
  if (!rows?.length) return;
  const columns = Object.keys(rows[0]);
  const escapeCell = (value) => `"${String(value ?? "").replaceAll('"', '""')}"`;
  const csv = [columns.join(","), ...rows.map((row) => columns.map((col) => escapeCell(row[col])).join(","))].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

export function getNameParts(name) {
  return splitName(name);
}

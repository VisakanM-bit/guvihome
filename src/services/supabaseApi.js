import { ADMIN_EMAILS } from "../config/sheets";
import { isSupabaseConfigured, supabase } from "./supabaseClient";

export { isSupabaseConfigured };

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
  requireSupabase();
  const normalizedEmail = normalizeEmail(email);
  const { data, error } = await supabase.auth.signInWithPassword({
    email: normalizedEmail,
    password,
  });
  if (error) throw error;

  const role = data.user?.user_metadata?.role;
  const allowListed = ADMIN_EMAILS.includes(normalizedEmail);
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
  if (!isSupabaseConfigured) return null;
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
  if (!isSupabaseConfigured) return null;
  const source = lead.source || "";
  const studentId = await resolveStudentId(lead);
  const fullName = lead.name || `${lead.firstName || ""} ${lead.lastName || ""}`.trim();
  const email = normalizeEmail(lead.email);
  const phone = lead.phone || "";
  const interest = lead.program || lead.course_interest || lead.profile || "";

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
  if (!isSupabaseConfigured) return;
  await supabase.from("visitor_events").insert({
    path: pathname,
    device_type: /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
    browser: navigator.userAgent.slice(0, 180),
    referrer: document.referrer || "",
  });
}

export async function fetchAdminDashboardData() {
  requireSupabase();
  const tables = [
    "students",
    "course_applications",
    "internship_applications",
    "career_counselling_requests",
    "contact_us",
    "newsletter_subscribers",
    "visitor_events",
  ];

  const results = await Promise.all(
    tables.map(async (table) => {
      const { data, error, count } = await supabase
        .from(table)
        .select("*", { count: "exact" })
        .order(table === "students" ? "created_at" : table === "visitor_events" ? "visited_at" : "id", { ascending: false })
        .limit(500);
      if (error) throw error;
      return [table, { data: data || [], count: count || 0 }];
    })
  );

  return Object.fromEntries(results);
}

export async function updateRecordStatus(table, id, status) {
  requireSupabase();
  const { error } = await supabase.from(table).update({ status }).eq("id", id);
  if (error) throw error;
}

export async function deleteAdminRecord(table, id) {
  requireSupabase();
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw error;
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

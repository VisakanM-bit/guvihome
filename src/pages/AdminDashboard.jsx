import { useEffect, useMemo, useState } from "react";
import {
  FaBriefcase,
  FaChartLine,
  FaDownload,
  FaEnvelope,
  FaFileCsv,
  FaGraduationCap,
  FaPhoneAlt,
  FaSearch,
  FaSignOutAlt,
  FaSyncAlt,
  FaTrash,
  FaUserGraduate,
  FaWhatsapp,
} from "react-icons/fa";
import { useAdminAuth } from "../context/AdminAuthContext";
import { WHATSAPP_NUMBER } from "../config/sheets";
import {
  deleteAdminRecord,
  exportRowsToCsv,
  fetchAdminDashboardData,
  isSupabaseConfigured,
  updateRecordStatus,
} from "../services/supabaseApi";

const tableLabels = {
  students: "Students",
  course_applications: "Program Applications",
  internship_applications: "Internship Applications",
  career_counselling_requests: "Career Counseling",
  contact_us: "Contact Forms",
  newsletter_subscribers: "Newsletter",
  visitor_events: "Visitor Events",
};

const statusOptions = ["new", "reviewing", "contacted", "called", "converted", "closed"];

function AdminDashboard() {
  const { admin, logoutAdmin } = useAdminAuth();
  const [data, setData] = useState({});
  const [activeTable, setActiveTable] = useState("students");
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadData = async () => {
    setLoading(true);
    setError("");
    try {
      const result = await fetchAdminDashboardData();
      setData(result);
    } catch (err) {
      setError(err.message || "Unable to load dashboard data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const rows = data[activeTable]?.data || [];
  const filteredRows = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return rows.filter((row) => {
      const matchesQuery =
        !normalized ||
        Object.values(row).some((value) => String(value ?? "").toLowerCase().includes(normalized));
      const matchesStatus =
        statusFilter === "all" || String(row.status || "").toLowerCase() === statusFilter;
      return matchesQuery && matchesStatus;
    });
  }, [query, rows, statusFilter]);

  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(filteredRows.length / pageSize));
  const visibleRows = filteredRows.slice((page - 1) * pageSize, page * pageSize);

  const metrics = [
    { label: "Total Visitors", value: data.visitor_events?.count || 0, icon: FaChartLine },
    { label: "Registered Students", value: data.students?.count || 0, icon: FaUserGraduate },
    { label: "Program Applications", value: data.course_applications?.count || 0, icon: FaGraduationCap },
    { label: "Internship Applications", value: data.internship_applications?.count || 0, icon: FaBriefcase },
    { label: "Career Counseling", value: data.career_counselling_requests?.count || 0, icon: FaEnvelope },
  ];

  const courseAnalytics = aggregateBy(data.course_applications?.data || [], "course_name");
  const internshipAnalytics = aggregateBy(data.internship_applications?.data || [], "internship_name");
  const conversionAnalytics = aggregateBy(
    [...(data.course_applications?.data || []), ...(data.internship_applications?.data || []), ...(data.career_counselling_requests?.data || [])],
    "status"
  );

  const handleStatusChange = async (row, status) => {
    await updateRecordStatus(activeTable, row.id, status);
    await loadData();
  };

  const handleDeleteRecord = async (row) => {
    if (!row.id) {
      alert("This record does not have an id, so it cannot be removed safely.");
      return;
    }
    const label = row.email || row.phone || row.name || row.full_name || row.id;
    if (!window.confirm(`Remove this record permanently?\n\n${label}`)) return;
    await deleteAdminRecord(activeTable, row.id);
    await loadData();
  };

  return (
    <main className="course-detail-bg min-h-screen px-5 py-8 text-white sm:px-8 lg:px-10">
      <div className="relative z-10 mx-auto max-w-[1780px]">
        <header className="flex flex-col gap-5 rounded-[2rem] border border-emerald-200/15 bg-white/[0.06] p-6 shadow-[0_30px_110px_-70px_rgba(34,197,94,0.85)] backdrop-blur-2xl lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-emerald-200">Organization Dashboard</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">Jawa EdTech Admin Portal</h1>
            <p className="mt-3 text-sm font-semibold text-slate-300">Signed in as {admin?.email || "admin"}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button onClick={loadData} className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-emerald-200/20 bg-white/[0.08] px-5 text-sm font-black text-white transition hover:bg-white/[0.13]">
              <FaSyncAlt />
              Refresh
            </button>
            <button onClick={logoutAdmin} className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-emerald-300 px-5 text-sm font-black text-slate-950 transition hover:-translate-y-0.5">
              <FaSignOutAlt />
              Sign Out
            </button>
          </div>
        </header>

        {!isSupabaseConfigured && (
          <div className="mt-5 rounded-2xl border border-amber-200/30 bg-amber-300/10 p-4 text-sm font-bold text-amber-100">
            Supabase env variables are missing. Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to enable live data.
          </div>
        )}

        {error && <div className="mt-5 rounded-2xl border border-red-300/30 bg-red-500/10 p-4 text-sm font-bold text-red-100">{error}</div>}

        <section className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {metrics.map(({ label, value, icon: Icon }, index) => (
            <article key={label} className={`course-stat-card ${["course-tone-emerald", "course-tone-cyan", "course-tone-blue", "course-tone-violet", "course-tone-amber"][index]} p-5`}>
              <Icon className="mb-4 text-2xl text-emerald-200" />
              <p className="text-4xl font-black tracking-[-0.04em] text-emerald-200">{value}</p>
              <h2 className="mt-2 text-sm font-black text-slate-100">{label}</h2>
            </article>
          ))}
        </section>

        <section className="mt-7 grid gap-5 xl:grid-cols-3">
          <ChartCard title="Course-wise Analytics" items={courseAnalytics} />
          <ChartCard title="Internship-wise Analytics" items={internshipAnalytics} />
          <ChartCard title="Lead Conversion Analytics" items={conversionAnalytics} />
        </section>

        <section className="mt-7 rounded-[2rem] border border-emerald-200/12 bg-white/[0.055] p-5 shadow-[0_30px_110px_-78px_rgba(34,197,94,0.75)] backdrop-blur-2xl">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-wrap gap-2">
              {Object.keys(tableLabels).map((table) => (
                <button
                  key={table}
                  onClick={() => {
                    setActiveTable(table);
                    setPage(1);
                    setQuery("");
                    setStatusFilter("all");
                  }}
                  className={`rounded-2xl px-4 py-3 text-xs font-black transition ${
                    activeTable === table
                      ? "bg-emerald-300 text-slate-950"
                      : "border border-emerald-200/14 bg-white/[0.06] text-slate-100 hover:bg-white/[0.1]"
                  }`}
                >
                  {tableLabels[table]}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="relative block">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-200" />
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setPage(1);
                  }}
                  className="min-h-12 rounded-2xl border border-emerald-200/16 bg-white/[0.08] pl-11 pr-4 text-sm font-bold text-white outline-none placeholder:text-slate-400"
                  placeholder="Search name, email, phone, course..."
                />
              </label>
              <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)} className="min-h-12 rounded-2xl border border-emerald-200/16 bg-white/[0.08] px-4 text-sm font-black text-white outline-none">
                <option value="all">All Status</option>
                {statusOptions.map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
              <button onClick={() => exportRowsToCsv(`${activeTable}.csv`, filteredRows)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 text-sm font-black text-slate-950">
                <FaFileCsv />
                Export CSV
              </button>
              <button onClick={() => exportRowsToCsv(`${activeTable}.xls`, filteredRows)} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-5 text-sm font-black text-slate-950">
                <FaDownload />
                Export Excel
              </button>
            </div>
          </div>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-white/10">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm">
              <thead className="bg-white/[0.07] text-xs font-black uppercase tracking-[0.14em] text-emerald-100">
                <tr>
                  {getColumns(visibleRows).map((column) => (
                    <th key={column} className="px-4 py-4">{formatColumn(column)}</th>
                  ))}
                  {hasStatus(activeTable) && <th className="px-4 py-4">Status</th>}
                  <th className="px-4 py-4">Contact</th>
                  <th className="px-4 py-4">Remove</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {loading ? (
                  <tr><td className="px-4 py-6 font-bold text-slate-300">Loading dashboard data...</td></tr>
                ) : visibleRows.length ? (
                  visibleRows.map((row) => (
                    <tr key={row.id || JSON.stringify(row)} className="transition hover:bg-white/[0.04]">
                      {getColumns(visibleRows).map((column) => (
                        <td key={column} className="max-w-[260px] truncate px-4 py-4 font-semibold text-slate-200">{String(row[column] ?? "")}</td>
                      ))}
                      {hasStatus(activeTable) && (
                        <td className="px-4 py-4">
                          <div className="flex min-w-[190px] flex-col gap-2">
                            <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] ${statusBadgeClass(row.status)}`}>
                              {row.status || "new"}
                            </span>
                            <select value={row.status || "new"} onChange={(event) => handleStatusChange(row, event.target.value)} className="rounded-xl border border-emerald-200/18 bg-slate-950 px-3 py-2 text-xs font-black text-white">
                            {statusOptions.map((status) => <option key={status} value={status}>{status}</option>)}
                            </select>
                            <button
                              type="button"
                              onClick={() => handleStatusChange(row, "called")}
                              className="rounded-xl bg-sky-300 px-3 py-2 text-xs font-black text-slate-950 transition hover:bg-sky-200"
                            >
                              Mark Call Confirmed
                            </button>
                          </div>
                        </td>
                      )}
                      <td className="px-4 py-4">
                        <ContactCell row={row} />
                      </td>
                      <td className="px-4 py-4">
                        <button
                          type="button"
                          onClick={() => handleDeleteRecord(row)}
                          className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-red-300/25 bg-red-500/12 px-3 text-xs font-black text-red-100 transition hover:bg-red-500/22"
                        >
                          <FaTrash />
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td className="px-4 py-6 font-bold text-slate-300">No records found.</td></tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 flex items-center justify-between text-sm font-black text-slate-200">
            <span>Showing {visibleRows.length} of {filteredRows.length} records</span>
            <div className="flex gap-2">
              <button disabled={page <= 1} onClick={() => setPage((current) => Math.max(1, current - 1))} className="rounded-xl border border-white/10 px-4 py-2 disabled:opacity-40">Prev</button>
              <span className="rounded-xl bg-white/[0.08] px-4 py-2">{page} / {pageCount}</span>
              <button disabled={page >= pageCount} onClick={() => setPage((current) => Math.min(pageCount, current + 1))} className="rounded-xl border border-white/10 px-4 py-2 disabled:opacity-40">Next</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ChartCard({ title, items }) {
  const max = Math.max(1, ...items.map((item) => item.count));
  return (
    <article className="course-glass-card p-5">
      <h2 className="text-xl font-black tracking-[-0.03em] text-white">{title}</h2>
      <div className="mt-5 grid gap-4">
        {items.length ? items.slice(0, 6).map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex items-center justify-between gap-4 text-xs font-black text-slate-200">
              <span className="truncate">{item.label}</span>
              <span className="text-emerald-200">{item.count}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-white/[0.08]">
              <div className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" style={{ width: `${Math.max(8, (item.count / max) * 100)}%` }} />
            </div>
          </div>
        )) : <p className="text-sm font-semibold text-slate-300">No analytics available yet.</p>}
      </div>
    </article>
  );
}

function aggregateBy(rows, key) {
  const map = new Map();
  rows.forEach((row) => {
    const label = row[key] || "Unknown";
    map.set(label, (map.get(label) || 0) + 1);
  });
  return [...map.entries()]
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count);
}

function getColumns(rows) {
  if (!rows.length) return ["id"];
  return Object.keys(rows[0]).slice(0, 9);
}

function formatColumn(column) {
  return column.replaceAll("_", " ");
}

function hasStatus(table) {
  return ["course_applications", "internship_applications", "career_counselling_requests"].includes(table);
}

function getPhone(row) {
  return String(row.phone || row.mobile || row.mobile_number || "").replace(/[^\d+]/g, "");
}

function getEmail(row) {
  return row.email || row.student_email || "";
}

function ContactCell({ row }) {
  const rawPhone = getPhone(row);
  const phoneDigits = rawPhone.replace(/[^\d]/g, "");
  const whatsappTarget = phoneDigits || WHATSAPP_NUMBER;
  const email = getEmail(row);

  return (
    <div className="flex min-w-[132px] gap-2">
      {whatsappTarget && (
        <a
          href={`https://wa.me/${whatsappTarget}`}
          target="_blank"
          rel="noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500 text-white transition hover:-translate-y-0.5"
          aria-label="Open WhatsApp"
        >
          <FaWhatsapp />
        </a>
      )}
      {rawPhone && (
        <a
          href={`tel:${rawPhone}`}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500 text-white transition hover:-translate-y-0.5"
          aria-label="Call lead"
        >
          <FaPhoneAlt />
        </a>
      )}
      {email && (
        <a
          href={`mailto:${email}`}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500 text-white transition hover:-translate-y-0.5"
          aria-label="Email lead"
        >
          <FaEnvelope />
        </a>
      )}
    </div>
  );
}

function statusBadgeClass(status = "new") {
  const normalized = String(status).toLowerCase();
  if (normalized === "called") return "bg-sky-300 text-slate-950";
  if (normalized === "converted") return "bg-violet-300 text-slate-950";
  if (normalized === "contacted") return "bg-cyan-300 text-slate-950";
  if (normalized === "closed") return "bg-slate-500 text-white";
  if (normalized === "reviewing") return "bg-amber-300 text-slate-950";
  return "bg-white/[0.12] text-slate-100";
}

export default AdminDashboard;

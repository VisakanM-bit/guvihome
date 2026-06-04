import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaRobot,
  FaSignOutAlt,
} from "react-icons/fa";
import { useAuth } from "../context/AuthContext";

const choices = [
  {
    icon: FaBookOpen,
    title: "Choose a Course",
    desc: "Explore HR, Full Stack, Python, AI & ML, DevOps, Testing, and MuleSoft programs.",
    href: "/programs",
    action: "Browse Courses",
  },
  {
    icon: FaBriefcase,
    title: "Choose a Platform",
    desc: "Open your learning, internship, placement, mentor, or AI career platform workspace.",
    href: "/",
    action: "View Platforms",
  },
];

const platforms = [
  { icon: FaGraduationCap, label: "Student Portal" },
  { icon: FaBriefcase, label: "Internship Hub" },
  { icon: FaCode, label: "Project Lab" },
  { icon: FaRobot, label: "AI Career Guide" },
];

function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <main className="cybernet-network-bg min-h-screen px-5 py-8 text-white">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_80%_10%,rgba(34,197,94,0.24),transparent_30%),radial-gradient(circle_at_16%_88%,rgba(16,185,129,0.18),transparent_32%)]" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-300">
              Jawa EdTech Dashboard
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Choose your course or platform
            </h1>
            <p className="mt-3 text-base font-medium text-slate-300">
              Welcome, {user?.name?.split(" ")[0] || "learner"}. Select where you want to continue.
            </p>
          </div>
          <button
            type="button"
            onClick={logout}
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/10"
          >
            <FaSignOutAlt />
            Sign out
          </button>
        </header>

        <section className="mt-10 grid gap-5 lg:grid-cols-2">
          {choices.map(({ icon: Icon, title, desc, href, action }) => (
            <Link
              key={title}
              to={href}
              className="group rounded-[1.6rem] border border-white/10 bg-white/[0.08] p-7 shadow-2xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.12]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-2xl text-white shadow-xl shadow-emerald-500/25">
                <Icon />
              </span>
              <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white">{title}</h2>
              <p className="mt-3 max-w-lg text-sm font-medium leading-7 text-slate-300">{desc}</p>
              <span className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#0F172A]">
                {action}
              </span>
            </Link>
          ))}
        </section>

        <section className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
            Available Platforms
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/[0.07] p-4">
                <Icon className="text-emerald-300" />
                <span className="text-sm font-extrabold text-white">{label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Dashboard;

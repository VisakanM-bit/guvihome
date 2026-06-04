import { Link } from "react-router-dom";
import {
  FaBookOpen,
  FaBriefcase,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  { value: "5000+", label: "Learners" },
  { value: "100+", label: "Industry Mentors" },
  { value: "300+", label: "Hiring Opportunities" },
  { value: "95%", label: "Career Readiness" },
];

const paths = [
  "HR Executive",
  "Recruitment",
  "Full Stack",
  "Python",
  "AI & ML",
  "DevOps",
  "Software Testing",
  "MuleSoft",
];

function AuthLayout({ title, subtitle, children, badge }) {
  return (
    <div className="cybernet-network-bg relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_24%,rgba(34,197,94,0.22),transparent_34%),radial-gradient(circle_at_12%_78%,rgba(16,185,129,0.18),transparent_32%),linear-gradient(120deg,rgba(2,4,3,0.82)_0%,rgba(5,46,22,0.48)_52%,rgba(2,4,3,0.86)_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_42%_22%,rgba(34,197,94,0.1),transparent_18%),radial-gradient(circle_at_66%_70%,rgba(16,185,129,0.12),transparent_20%)]" />

      <div className="relative z-10 grid min-h-screen items-center gap-8 px-6 py-10 lg:grid-cols-[1.18fr_0.82fr] lg:px-11 xl:px-12">
        <section className="max-w-5xl">
          <Link to="/" className="mb-10 inline-flex items-center gap-3 text-sm font-extrabold text-emerald-100 transition hover:text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <FaGraduationCap className="text-emerald-300" />
            </span>
            Jawa EdTech
          </Link>

          {badge && (
            <p className="mb-4 inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
              {badge}
            </p>
          )}

          <h1 className="max-w-5xl text-[2.65rem] font-black leading-[1.1] tracking-[-0.04em] text-white sm:text-6xl xl:text-[4.55rem]">
            Build Skills. Gain Experience. Launch Your Career.{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              With Industry-Focused Programs
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg font-semibold leading-9 text-slate-300">
            Jawa EdTech is India's Career Transformation Platform helping students, graduates, and professionals master in-demand HR and Technology skills through expert-led training, practical projects, internships, mentorship, and placement support.
          </p>

          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black tracking-[-0.04em] text-cyan-300 sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/programs"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue-500 px-8 text-base font-extrabold text-white shadow-2xl shadow-blue-500/25 transition hover:bg-blue-600"
            >
              <FaBookOpen />
              Explore Career Programs
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-white/25 bg-white/5 px-8 text-base font-extrabold text-white transition hover:bg-white/10"
            >
              <FaBriefcase />
              Get Free Career Counseling
            </Link>
          </div>

          <p className="mt-9 text-sm font-semibold text-slate-300">
            Career Tracks:{" "}
            <span className="font-medium text-slate-400">{paths.join("  |  ")}</span>
          </p>
        </section>

        <section className="mx-auto w-full max-w-[526px] rounded-[1.65rem] border border-white/10 bg-[#1d293a]/95 p-6 shadow-2xl shadow-black/35 backdrop-blur-xl sm:p-10">
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white">{title}</h2>
            {subtitle && <p className="mt-2 text-base font-medium text-slate-400">{subtitle}</p>}
          </div>
          {children}
          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-slate-400">
            {["Mentor guidance", "Project learning", "Placement prep"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <FaCheckCircle className="text-blue-400" />
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AuthLayout;

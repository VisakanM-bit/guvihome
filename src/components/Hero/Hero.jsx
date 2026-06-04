import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaBriefcase,
  FaCheckCircle,
  FaEnvelope,
  FaGraduationCap,
  FaLock,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { consumePendingLead } from "../../utils/expertLead";

const stats = [
  { value: "5000+", label: "Learners" },
  { value: "100+", label: "Mentors" },
  { value: "300+", label: "Hiring Opportunities" },
  { value: "95%", label: "Career Readiness" },
];

const paths = ["HR Executive", "Full Stack", "Python", "AI & ML", "DevOps"];

const inputClass =
  "w-full rounded-2xl border border-cyan-200/25 bg-white/[0.13] pl-12 pr-4 py-4 text-sm font-semibold text-white outline-none shadow-inner shadow-cyan-950/20 transition placeholder:text-blue-100/60 focus:border-cyan-300/80 focus:bg-white/[0.18] focus:ring-4 focus:ring-cyan-300/20";

function Hero() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      consumePendingLead();
      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#041f2f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(16,185,129,0.36),transparent_30%),radial-gradient(circle_at_14%_80%,rgba(37,99,235,0.55),transparent_36%),radial-gradient(circle_at_46%_42%,rgba(20,184,166,0.22),transparent_34%),linear-gradient(126deg,#031118_0%,#063b36_34%,#082a5f_66%,#0b5d78_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(255,255,255,0.08),transparent_23%,rgba(16,185,129,0.18)_52%,rgba(59,130,246,0.12)_73%,transparent_90%)]" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-emerald-300/24 blur-3xl" />
      <div className="absolute -right-20 bottom-8 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="absolute inset-0 bg-slate-950/18" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(16,185,129,0.23),transparent_18%),radial-gradient(circle_at_30%_62%,rgba(59,130,246,0.2),transparent_22%)] blur-2xl" />
      <div className="hero-moving-dots absolute inset-0 opacity-24" />
      <div className="relative z-10 grid min-h-[calc(100vh-84px)] items-center gap-10 px-6 py-14 lg:grid-cols-[1.18fr_0.82fr] lg:px-11 xl:px-12">
        <div>
          <div className="mb-10 inline-flex items-center gap-3 text-sm font-extrabold text-blue-100">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
              <FaGraduationCap className="text-cyan-300" />
            </span>
            Jawa EdTech
          </div>

          <h1 className="max-w-5xl text-[2.8rem] font-black leading-[1.1] tracking-[-0.045em] text-white sm:text-6xl xl:text-[4.6rem]">
            Transform Your Career with{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Industry-Focused Programs
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg font-semibold leading-9 text-blue-50">
            Learn, practice, intern, build projects, prepare for interviews, and get placement-ready with Jawa EdTech's complete career transformation platform.
          </p>

          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-black tracking-[-0.04em] text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.38)] sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-blue-50/85">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/programs"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 text-base font-extrabold text-white shadow-2xl shadow-cyan-400/25 transition hover:-translate-y-0.5 hover:shadow-cyan-300/35"
            >
              <FaBookOpen />
              Choose Courses
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-200/25 bg-white/[0.08] px-8 text-base font-extrabold text-white shadow-lg shadow-cyan-950/15 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
            >
              <FaBriefcase />
              Explore Platforms
            </Link>
          </div>

          <p className="mt-9 text-sm font-semibold text-blue-50">
            Supported Paths:{" "}
            <span className="font-medium text-slate-300">{paths.join(" | ")}</span>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[526px] overflow-hidden rounded-[1.65rem] border border-cyan-200/25 bg-slate-950/[0.38] p-6 shadow-[0_0_0_1px_rgba(125,211,252,0.12),0_30px_100px_-28px_rgba(34,211,238,0.82)] ring-1 ring-white/10 backdrop-blur-2xl sm:p-10">
          <div className="pointer-events-none absolute inset-0 rounded-[1.65rem] bg-gradient-to-br from-white/[0.18] via-cyan-300/[0.06] to-blue-500/[0.14]" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-10 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="relative">
          <div className="mb-8">
            <h2 className="text-3xl font-black tracking-[-0.03em] text-white">Sign In</h2>
            <p className="mt-2 text-base font-medium text-blue-100/75">Enter your credentials to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Field icon={FaEnvelope} label="Email">
              <input
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass}
                placeholder="you@email.com"
              />
            </Field>

            <Field icon={FaLock} label="Password">
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className={inputClass}
                placeholder="Password"
              />
            </Field>

            {error && (
              <p className="rounded-xl bg-red-500/10 px-3 py-2.5 text-xs font-bold text-red-200">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 py-4 text-base font-black text-white shadow-xl shadow-cyan-400/25 transition hover:-translate-y-0.5 hover:shadow-cyan-300/35 disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-blue-100/70">
            New here?{" "}
            <Link to="/signup" className="font-bold text-cyan-200 hover:underline">
              Create account
            </Link>
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold text-blue-100/70">
            {["Mentor guidance", "Project learning", "Placement prep"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <FaCheckCircle className="text-cyan-300" />
                {item}
              </span>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon: Icon, label, children }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-blue-100/70">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-200" />
        {children}
      </div>
    </div>
  );
}

export default Hero;

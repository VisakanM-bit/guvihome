import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBookOpen,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaLock,
  FaSignal,
  FaWifi,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { consumePendingLead } from "../../utils/expertLead";

const stats = [
  { start: 4000, value: 5000, suffix: "+", label: "Learners" },
  { start: 50, value: 100, suffix: "+", label: "Industry Mentors" },
  { start: 200, value: 300, suffix: "+", label: "Hiring Opportunities" },
  { start: 70, value: 95, suffix: "%", label: "Career Readiness" },
];

const inputClass =
  "w-full rounded-2xl border border-cyan-200/25 bg-white/[0.13] pl-12 pr-4 py-4 text-sm font-semibold text-white outline-none shadow-inner shadow-cyan-950/20 transition placeholder:text-blue-100/60 focus:border-cyan-300/80 focus:bg-white/[0.18] focus:ring-4 focus:ring-cyan-300/20";

function Hero() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState(() => stats.map((stat) => stat.start));
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    let frameId;
    const duration = 1700;
    const start = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        stats.map((stat) =>
          Math.round(stat.start + (stat.value - stat.start) * eased)
        )
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const timerId = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timerId);
  }, []);

  const liveTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const liveDate = now.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

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
    <section className="cybernet-network-bg relative overflow-hidden text-white">
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(90deg,rgba(0,0,0,0.66)_0%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.7)_100%)]" />
      <div className="absolute -left-24 top-16 z-[2] h-72 w-72 rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="absolute -right-20 bottom-8 z-[2] h-80 w-80 rounded-full bg-green-400/10 blur-3xl" />
      <div className="relative z-10 grid items-start gap-10 px-6 pb-10 pt-12 lg:px-11 lg:pt-12 xl:grid-cols-[1.28fr_0.72fr] xl:px-12">
        <div>
          <div className="hero-platform-stage mb-6">
            <span className="hero-platform-fly inline-flex items-center gap-4 rounded-[1.55rem] border border-cyan-100/45 bg-[linear-gradient(115deg,rgba(255,255,255,0.32),rgba(34,211,238,0.2),rgba(59,130,246,0.26),rgba(217,70,239,0.16))] px-7 py-3.5 text-xl font-black tracking-[-0.02em] text-white shadow-[0_0_18px_rgba(103,232,249,0.34),0_0_54px_rgba(59,130,246,0.32)] backdrop-blur-2xl sm:text-2xl">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/20 shadow-[0_0_28px_rgba(103,232,249,0.42)]">
                <FaGraduationCap className="text-cyan-200" />
              </span>
              India's Career Transformation Platform
            </span>
          </div>

          <h1 className="max-w-none text-[2.65rem] font-black leading-[1.02] tracking-[-0.035em] text-white sm:text-[3.6rem] lg:whitespace-nowrap lg:text-[clamp(3.65rem,5.05vw,4.2rem)] xl:text-[clamp(3.45rem,4.75vw,4.05rem)]">
            Learn. Practice. Intern.{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Get Hired.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-xl font-extrabold text-blue-50">
            For Future HR & Technology Professionals
          </p>

          <p className="mt-6 max-w-3xl text-lg font-semibold leading-9 text-blue-50/90">
            At Jawa EdTech, we don't just teach courses, we build careers.
            Gain practical skills, real-world experience, industry mentorship,
            internships, and placement support through our comprehensive
            learning ecosystem.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/programs"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-8 text-base font-extrabold text-white shadow-2xl shadow-cyan-400/25 transition hover:-translate-y-0.5 hover:shadow-cyan-300/35"
            >
              <FaBookOpen />
              Explore Career Programs
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-200/25 bg-white/[0.08] px-8 text-base font-extrabold text-white shadow-lg shadow-cyan-950/15 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
            >
              <FaBriefcase />
              Get Free Career Counseling
            </Link>
          </div>

          <div className="mt-8 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="rounded-2xl border border-cyan-200/15 bg-slate-950/25 px-4 py-4 backdrop-blur-xl">
                <p className="text-3xl font-black tracking-[-0.04em] text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.38)] sm:text-4xl">
                  {counts[index].toLocaleString("en-IN")}
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm font-semibold text-blue-50/85">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="phone-login-shell relative mx-auto w-full max-w-[430px]">
          <div className="pointer-events-none absolute -inset-8 rounded-[3.5rem] bg-emerald-400/12 blur-3xl" />
          <div className="phone-login-frame relative overflow-hidden rounded-[3.1rem] border border-emerald-200/25 bg-[linear-gradient(145deg,rgba(3,10,7,0.98),rgba(0,0,0,0.96))] p-2.5 shadow-[0_38px_110px_-42px_rgba(34,197,94,0.95)] ring-1 ring-white/10">
            <div className="absolute left-1/2 top-2.5 z-20 h-7 w-28 -translate-x-1/2 rounded-b-[1.4rem] bg-black shadow-[0_8px_22px_rgba(0,0,0,0.65)]">
              <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-950/80" />
            </div>
            <div className="network-glass-panel relative min-h-[560px] overflow-hidden rounded-[2.55rem] px-5 pb-7 pt-10 sm:px-7">
              <div className="relative z-10 mb-7 flex items-center justify-between text-[11px] font-black text-emerald-100/80">
                <span>{liveTime}</span>
                <div className="flex items-center gap-2">
                  <FaSignal />
                  <FaWifi />
                  <span className="h-3 w-6 rounded-sm border border-emerald-100/70 p-[2px]">
                    <span className="block h-full w-4 rounded-[2px] bg-emerald-300" />
                  </span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-5 inline-flex items-center justify-center gap-3 rounded-2xl border border-emerald-300/20 bg-emerald-300/8 px-5 py-3 shadow-[0_0_28px_rgba(34,197,94,0.12)] backdrop-blur-xl">
                    <span className="text-2xl font-black tracking-[-0.04em] text-white">{liveTime}</span>
                    <span className="h-8 w-px bg-emerald-200/25" />
                    <span className="text-sm font-black uppercase tracking-[0.14em] text-emerald-200">{liveDate}</span>
                  </div>
                  <h2 className="text-3xl font-black tracking-[-0.03em] text-white">Sign In</h2>
                  <p className="mt-2 text-sm font-bold text-emerald-50/70">Enter your credentials to continue</p>
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
                    className="mt-2 w-full rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 py-4 text-base font-black text-slate-950 shadow-xl shadow-emerald-400/25 transition hover:-translate-y-0.5 hover:shadow-emerald-300/35 disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </form>

                <p className="mt-6 text-center text-xs text-emerald-50/70">
                  New here?{" "}
                  <Link to="/signup" className="font-bold text-emerald-200 hover:underline">
                    Create account
                  </Link>
                </p>

              </div>
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

/* eslint-disable react-hooks/set-state-in-effect */
import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaBookOpen,
  FaBriefcase,
  FaEnvelope,
  FaGraduationCap,
  FaLock,
  FaPhoneAlt,
  FaSignal,
  FaUser,
  FaUserPlus,
  FaWifi,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { consumePendingLead } from "../../utils/expertLead";
import { saveExpertLead } from "../../services/sheetsApi";
import {
  expertCareerGoals,
  expertLanguages,
  expertProgramOptions,
} from "../../data/expertOptions";

const stats = [
  { start: 4000, value: 5000, suffix: "+", label: "Learners" },
  { start: 50, value: 100, suffix: "+", label: "Industry Mentors" },
  { start: 200, value: 300, suffix: "+", label: "Hiring Opportunities" },
  { start: 70, value: 95, suffix: "%", label: "Career Readiness" },
];

const inputClass =
  "w-full rounded-2xl border border-cyan-200/35 bg-white/[0.15] pl-12 pr-4 py-4 text-sm font-bold text-white outline-none shadow-inner shadow-cyan-950/20 transition placeholder:text-blue-100/70 focus:border-cyan-300/90 focus:bg-white/[0.2] focus:ring-4 focus:ring-cyan-300/24";

function Hero() {
  const { isAuthenticated, user, login, signup } = useAuth();
  const location = useLocation();
  const [authMode, setAuthMode] = useState("login");
  const [returnToExpert, setReturnToExpert] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [expertFirstName, setExpertFirstName] = useState("");
  const [expertLastName, setExpertLastName] = useState("");
  const [expertEmail, setExpertEmail] = useState("");
  const [expertPhone, setExpertPhone] = useState("");
  const [expertProfile, setExpertProfile] = useState("");
  const [expertLanguage, setExpertLanguage] = useState("English");
  const [expertProgram, setExpertProgram] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [counts, setCounts] = useState(() => stats.map((stat) => stat.start));
  const [now, setNow] = useState(() => new Date());

  const triggerPhoneFocus = useCallback((mode = "login") => {
    setAuthMode(
      mode === "expert" && isAuthenticated
        ? "expert"
        : mode === "signup"
          ? "signup"
          : "login"
    );
    setReturnToExpert(mode === "expert" && !isAuthenticated);
    setError("");
    setSuccessMessage("");
    const phoneShell = document.getElementById("hero-login-phone");
    phoneShell?.scrollIntoView({ behavior: "smooth", block: "center" });
    setIsShaking(false);
    window.setTimeout(() => setIsShaking(true), 20);
    window.setTimeout(() => setIsShaking(false), 820);
  }, [isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated) {
      if (authMode === "expert") setAuthMode("login");
      return;
    }

    setAuthMode("expert");
    const [firstName = "", ...rest] = (user?.name || "").split(" ");
    setExpertFirstName((current) => current || firstName);
    setExpertLastName((current) => current || rest.join(" "));
    setExpertEmail((current) => current || user?.email || "");
    setExpertPhone((current) => current || user?.phone || "");
  }, [authMode, isAuthenticated, user]);

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

  useEffect(() => {
    const handleFocusRequest = (event) => {
      if (event.detail?.program) {
        setExpertProgram(event.detail.program);
      }
      triggerPhoneFocus(event.detail?.mode || "login");
    };

    window.addEventListener("jawa:focus-auth-phone", handleFocusRequest);
    return () => window.removeEventListener("jawa:focus-auth-phone", handleFocusRequest);
  }, [triggerPhoneFocus]);

  useEffect(() => {
    const requestedMode =
      location.state?.authPrompt ||
      new URLSearchParams(location.search).get("auth");

    if (requestedMode) {
      if (location.state?.program) {
        setExpertProgram(location.state.program);
      }
      window.setTimeout(
        () =>
          triggerPhoneFocus(
            requestedMode === "expert"
              ? "expert"
              : requestedMode === "signup"
                ? "signup"
                : "login"
          ),
        180
      );
    }
  }, [location.key, location.search, location.state?.authPrompt, location.state?.program, triggerPhoneFocus]);

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

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      consumePendingLead();
      setAuthMode("expert");
      setReturnToExpert(false);
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      await signup({ name, email, phone, password });
      consumePendingLead();
      setAuthMode("expert");
      setReturnToExpert(false);
    } catch (err) {
      setError(err.message || "Unable to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleExpertSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      await saveExpertLead({
        source: "hero_mobile_expert",
        firstName: expertFirstName.trim(),
        lastName: expertLastName.trim(),
        name: `${expertFirstName} ${expertLastName}`.trim(),
        email: expertEmail.trim(),
        phone: expertPhone.trim(),
        profile: expertProfile,
        language: expertLanguage,
        program: expertProgram,
      });
      setSuccessMessage("Your request is saved. Our career expert will contact you soon.");
      setExpertProfile("");
    } catch (err) {
      setError(err.message || "Unable to save your request. Please try again.");
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
            <button
              type="button"
              onClick={() => triggerPhoneFocus("expert")}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-cyan-200/25 bg-white/[0.08] px-8 text-base font-extrabold text-white shadow-lg shadow-cyan-950/15 backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.14]"
            >
              <FaBriefcase />
              Get Free Career Counseling
            </button>
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

        <div
          id="hero-login-phone"
          className={`phone-login-shell relative mx-auto w-full max-w-[430px] scroll-mt-28 ${
            isShaking ? "phone-login-shake" : ""
          }`}
        >
          <div className="pointer-events-none absolute -inset-8 rounded-[3.5rem] bg-emerald-400/12 blur-3xl" />
          <div className="phone-login-frame relative overflow-hidden rounded-[3.1rem] border border-emerald-200/25 bg-[linear-gradient(145deg,rgba(3,10,7,0.98),rgba(0,0,0,0.96))] p-2.5 shadow-[0_38px_110px_-42px_rgba(34,197,94,0.95)] ring-1 ring-white/10">
            <div className="absolute left-1/2 top-2.5 z-20 h-7 w-28 -translate-x-1/2 rounded-b-[1.4rem] bg-black shadow-[0_8px_22px_rgba(0,0,0,0.65)]">
              <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-emerald-950/80" />
            </div>
            <div className={`network-glass-panel relative overflow-hidden rounded-[2.55rem] px-5 pb-7 pt-10 sm:px-7 ${
              authMode === "expert" ? "min-h-[760px]" : "min-h-[560px]"
            }`}>
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
                  <h2 className="text-3xl font-black tracking-[-0.03em] text-white">
                    {authMode === "expert"
                      ? "Talk To Career Expert"
                      : authMode === "login"
                        ? "Sign In"
                        : "Create Account"}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-emerald-50/70">
                    {authMode === "expert"
                      ? "Share your details and get personal guidance"
                      : returnToExpert
                        ? "Login first to talk to a career expert"
                        : authMode === "login"
                          ? "Enter your credentials to continue"
                          : "Start your Jawa EdTech account here"}
                  </p>
                </div>

                {authMode === "expert" ? (
                  <ExpertForm
                    loading={loading}
                    error={error}
                    successMessage={successMessage}
                    firstName={expertFirstName}
                    lastName={expertLastName}
                    email={expertEmail}
                    phone={expertPhone}
                    profile={expertProfile}
                    language={expertLanguage}
                    program={expertProgram}
                    setFirstName={setExpertFirstName}
                    setLastName={setExpertLastName}
                    setEmail={setExpertEmail}
                    setPhone={setExpertPhone}
                    setProfile={setExpertProfile}
                    setLanguage={setExpertLanguage}
                    setProgram={setExpertProgram}
                    onSubmit={handleExpertSubmit}
                  />
                ) : (
                  <>
                    <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl border border-emerald-200/15 bg-white/[0.08] p-1.5">
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode("login");
                          setError("");
                          setSuccessMessage("");
                        }}
                        className={`rounded-xl px-3 py-2.5 text-xs font-black transition ${
                          authMode === "login"
                            ? "bg-emerald-300 text-slate-950"
                            : "text-emerald-50/80 hover:bg-white/[0.08]"
                        }`}
                      >
                        Sign In
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode("signup");
                          setError("");
                          setSuccessMessage("");
                        }}
                        className={`rounded-xl px-3 py-2.5 text-xs font-black transition ${
                          authMode === "signup"
                            ? "bg-emerald-300 text-slate-950"
                            : "text-emerald-50/80 hover:bg-white/[0.08]"
                        }`}
                      >
                        Create
                      </button>
                    </div>

                    <form
                      onSubmit={authMode === "login" ? handleLoginSubmit : handleSignupSubmit}
                      className="space-y-5"
                    >
                      {authMode === "signup" && (
                        <Field icon={FaUser} label="Name">
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className={inputClass}
                            placeholder="Your name"
                          />
                        </Field>
                      )}

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

                      {authMode === "signup" && (
                        <Field icon={FaPhoneAlt} label="Mobile">
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)}
                            className={inputClass}
                            placeholder="+91 mobile number"
                          />
                        </Field>
                      )}

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
                        {loading
                          ? authMode === "login"
                            ? "Signing in..."
                            : "Creating account..."
                          : authMode === "login"
                            ? "Sign In"
                            : "Create account"}
                      </button>
                    </form>

                    <p className="mt-6 text-center text-xs text-emerald-50/70">
                      {authMode === "login" ? "New here?" : "Already have an account?"}{" "}
                      <button
                        type="button"
                        onClick={() => {
                          setAuthMode(authMode === "login" ? "signup" : "login");
                          setError("");
                          setSuccessMessage("");
                        }}
                        className="font-bold text-emerald-200 hover:underline"
                      >
                        {authMode === "login" ? (
                          <>
                            <FaUserPlus className="mr-1 inline text-[10px]" />
                            Create account
                          </>
                        ) : (
                          "Sign in"
                        )}
                      </button>
                    </p>
                  </>
                )}

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

function ExpertForm({
  loading,
  error,
  successMessage,
  firstName,
  lastName,
  email,
  phone,
  profile,
  language,
  program,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setProfile,
  setLanguage,
  setProgram,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <Field icon={FaUser} label="First">
          <input
            type="text"
            required
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className={inputClass}
            placeholder="First name"
          />
        </Field>
        <Field icon={FaUser} label="Last">
          <input
            type="text"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className={inputClass}
            placeholder="Last name"
          />
        </Field>
      </div>

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

      <Field icon={FaPhoneAlt} label="Mobile">
        <input
          type="tel"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={inputClass}
          placeholder="+91 mobile number"
        />
      </Field>

      <Field icon={FaBriefcase} label="Career Goal">
        <select
          required
          value={profile}
          onChange={(event) => setProfile(event.target.value)}
          className={inputClass}
        >
          <option className="text-slate-950" value="">Choose your goal</option>
          {expertCareerGoals.map((goal) => (
            <option key={goal} className="text-slate-950">{goal}</option>
          ))}
        </select>
      </Field>

      <div className="grid grid-cols-2 gap-3">
        <Field icon={FaGraduationCap} label="Program">
          <select
            value={program}
            onChange={(event) => setProgram(event.target.value)}
            className={inputClass}
          >
            <option className="text-slate-950" value="">Preferred program</option>
            {expertProgramOptions.map((option) => (
              <option key={option} className="text-slate-950">{option}</option>
            ))}
          </select>
        </Field>
        <Field icon={FaWifi} label="Language">
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className={inputClass}
          >
            {expertLanguages.map((option) => (
              <option key={option} className="text-slate-950">{option}</option>
            ))}
          </select>
        </Field>
      </div>

      {error && (
        <p className="rounded-xl bg-red-500/10 px-3 py-2.5 text-xs font-bold text-red-200">
          {error}
        </p>
      )}

      {successMessage && (
        <p className="rounded-xl border border-emerald-300/25 bg-emerald-400/10 px-3 py-2.5 text-xs font-bold text-emerald-100">
          {successMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 w-full rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 py-4 text-base font-black text-slate-950 shadow-xl shadow-emerald-400/25 transition hover:-translate-y-0.5 hover:shadow-emerald-300/35 disabled:opacity-60"
      >
        {loading ? "Saving request..." : "Request expert call"}
      </button>
    </form>
  );
}

export default Hero;

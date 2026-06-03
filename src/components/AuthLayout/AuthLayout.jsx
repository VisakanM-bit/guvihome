import { Link } from "react-router-dom";
import {
  FaUsers,
  FaGraduationCap,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";
import { IMAGES } from "../../config/images";
import { BRAND } from "../../data/siteContent";

const STATS = [
  { icon: FaUsers, value: "5000+", label: "Learners empowered" },
  { icon: FaGraduationCap, value: "300+", label: "Hiring opportunities" },
  { icon: FaHeadset, value: "100+", label: "Industry mentors" },
];

const PERKS = [
  "1-on-1 career mentorship",
  "Industry-ready projects",
  "Placement & interview prep",
];

function AuthLayout({ title, subtitle, children, badge }) {
  return (
    <div className="min-h-screen min-h-[100dvh] flex items-center justify-center bg-[#0c1222] p-3 sm:p-5 md:p-8">
      {/* Premium framed shell — fits portrait & landscape */}
      <div
        className="
          w-full max-w-[1080px]
          max-h-[min(94dvh,720px)]
          min-h-[min(88dvh,560px)]
          grid grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[1.05fr_0.95fr]
          rounded-2xl sm:rounded-[1.75rem]
          overflow-hidden
          shadow-[0_25px_80px_-12px_rgba(0,0,0,0.65)]
          border border-white/[0.08]
          bg-[#0f172a]
        "
      >
        {/* Left — professional imagery */}
        <div className="relative min-h-[200px] sm:min-h-[220px] lg:min-h-0 lg:h-full overflow-hidden">
          <img
            src={IMAGES.authHero}
            alt="Professional career mentoring"
            className="absolute inset-0 w-full h-full object-cover object-center scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/88 via-emerald-900/75 to-slate-950/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

          <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-7 lg:p-8">
            <div>
              <Link
                to="/"
                className="inline-flex text-xs sm:text-sm font-semibold text-emerald-200/90 hover:text-white transition"
              >
                ← Back to homepage
              </Link>
              {badge && (
                <p className="mt-4 inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-500/25 text-emerald-100 border border-emerald-400/30">
                  {badge}
                </p>
              )}
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2rem] font-extrabold text-white leading-snug tracking-tight">
                Your career journey
                <span className="text-emerald-400"> starts here</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-200/90 max-w-sm leading-relaxed">
              {BRAND.tagline} — {BRAND.motto}
              </p>
            </div>

            <div className="hidden sm:grid grid-cols-3 gap-2 lg:gap-3 mt-4">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="rounded-xl bg-black/25 backdrop-blur-md border border-white/10 px-3 py-3"
                >
                  <Icon className="text-emerald-400 text-sm mb-1.5" />
                  <p className="text-lg font-bold text-white leading-none">{value}</p>
                  <p className="text-[10px] text-slate-300 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <ul className="hidden md:flex flex-wrap gap-x-4 gap-y-1.5 mt-3">
              {PERKS.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-1.5 text-xs text-slate-200"
                >
                  <FaCheckCircle className="text-emerald-400 shrink-0 text-[10px]" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right — compact sign-in card, centered */}
        <div className="relative flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-[#0a0f1a] min-h-[320px] lg:min-h-0">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(16,185,129,0.12), transparent)",
            }}
          />

          <div className="relative w-full max-w-[380px] mx-auto">
            {/* Compact structured card */}
            <div className="bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.35)] border border-slate-100/80 px-6 py-7 sm:px-7 sm:py-8">
              <div className="text-center sm:text-left mb-6 pb-5 border-b border-slate-100">
                <h1 className="text-xl sm:text-[1.35rem] font-bold text-slate-900 tracking-tight">
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-slate-500 text-xs sm:text-sm mt-1.5 leading-snug">
                    {subtitle}
                  </p>
                )}
              </div>
              {children}
            </div>

            <Link
              to="/"
              className="mt-4 block text-center text-xs text-slate-500 hover:text-emerald-400 transition lg:hidden"
            >
              ← Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;

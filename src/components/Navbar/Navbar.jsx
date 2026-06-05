import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaCheckCircle,
  FaChevronDown,
  FaCode,
  FaEnvelope,
  FaFileAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaLightbulb,
  FaMapMarkedAlt,
  FaMedal,
  FaMobileAlt,
  FaMoon,
  FaPhone,
  FaPhoneAlt,
  FaRobot,
  FaRocket,
  FaShieldAlt,
  FaSignOutAlt,
  FaSun,
  FaTools,
  FaTimes,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useAdminAuth } from "../../context/AdminAuthContext";
import { MAPS_URL } from "../../config/sheets";
import adBannerImage from "../../assets/logos/image5.png";
import jawaEdTechLogo from "../../assets/logos/jawa-edtech-logo-clean.png";
import GoogleMapsIcon from "../GoogleMapsIcon/GoogleMapsIcon";

const navLinks = [
  {
    label: "Career Programs",
    href: "#courses",
    width: "w-[min(860px,calc(100vw-32px))]",
    columns: [
      {
        title: "HR & Recruitment",
        items: [
          {
            icon: FaUserTie,
            title: "Human Resource Executive & Development",
            description: "Become an Industry-Ready HR Professional",
            slug: "human-resource-executive-development",
          },
          {
            icon: FaUsers,
            title: "Recruitment & Talent Acquisition",
            description: "Master Modern Hiring & Talent Intelligence",
            slug: "recruitment-talent-acquisition-development",
          },
        ],
      },
      {
        title: "Technology Programs",
        items: [
          { icon: FaLaptopCode, title: "Full Stack Development", description: "MERN & MEAN Stack Training", slug: "full-stack-development" },
          { icon: FaCode, title: "Python Development", description: "Industry-Oriented Python Learning", slug: "python-development" },
          { icon: FaRobot, title: "Artificial Intelligence & Machine Learning", description: "Build Intelligent Solutions", slug: "artificial-intelligence-machine-learning" },
          { icon: FaTools, title: "DevOps Engineering", description: "Cloud & Deployment Mastery", slug: "devops-engineering" },
          { icon: FaCheckCircle, title: "Software Testing & QA", description: "Manual & Automation Testing", slug: "software-testing-qa" },
          { icon: FaRocket, title: "MuleSoft Development", description: "Enterprise API Integration", slug: "mulesoft-development" },
        ],
      },
    ],
    ctaLabel: "Still Confused?",
    ctaText: "Get Free Career Counselling",
    ctaButton: "Explore All Programs",
    ctaHref: "#courses",
  },
  {
    label: "Internships",
    href: "internships",
    width: "w-[min(760px,calc(100vw-32px))]",
    columns: [
      {
        title: "Internship Tracks",
        items: [
          { icon: FaBuilding, title: "HR Internship", href: "/internships/human-resource-internship" },
          { icon: FaUsers, title: "Recruitment Internship", href: "/internships/recruitment-internship" },
          { icon: FaLaptopCode, title: "Full Stack Internship", href: "/internships/full-stack-internship" },
          { icon: FaCode, title: "Python Internship", href: "/internships/python-internship" },
          { icon: FaRobot, title: "AI & ML Internship", href: "/internships/ai-ml-internship" },
          { icon: FaTools, title: "DevOps Internship", href: "/internships/devops-internship" },
          { icon: FaCheckCircle, title: "Software Testing Internship", href: "/internships/software-testing-internship" },
          { icon: FaRocket, title: "MuleSoft Internship", href: "/internships/mulesoft-internship" },
        ],
      },
      {
        title: "Learning Experience",
        items: [
          { icon: FaBriefcase, title: "Live Projects", href: "/projects/industry-project-lab" },
          { icon: FaUserTie, title: "Mentor Guidance", href: "/mentorship" },
          { icon: FaFileAlt, title: "Weekly Assessments", href: "/internships/human-resource-internship" },
          { icon: FaMedal, title: "Internship Certification", href: "/internships/human-resource-internship" },
        ],
      },
    ],
    ctaLabel: "Gain Real Industry Experience",
    ctaButton: "Apply for Internship",
    ctaHref: "internships",
  },
  {
    label: "Practice Hub",
    href: "practice-hub",
    width: "w-[min(760px,calc(100vw-32px))]",
    columns: [
      {
        title: "Skill Building",
        items: [
          { icon: FaBookOpen, title: "Learning Hub", href: "/projects/industry-project-lab" },
          { icon: FaFileAlt, title: "Assignments", href: "/projects/industry-project-lab" },
          { icon: FaChartLine, title: "Case Studies", href: "/projects/industry-project-lab" },
          { icon: FaLightbulb, title: "Practical Activities", href: "/projects/industry-project-lab" },
          { icon: FaBriefcase, title: "Project Lab", href: "/projects/industry-project-lab" },
        ],
      },
      {
        title: "Career Preparation",
        items: [
          { icon: FaUserTie, title: "Mock Interviews", href: "/placement-assistance" },
          { icon: FaFileAlt, title: "Resume Builder", href: "/career-services" },
          { icon: FaUsers, title: "LinkedIn Profile Builder", href: "/career-services" },
          { icon: FaLightbulb, title: "Aptitude Preparation", href: "/placement-assistance" },
          { icon: FaChartLine, title: "Career Readiness Assessment", href: "/career-services" },
        ],
      },
    ],
    ctaLabel: "Practice. Build. Grow.",
    ctaButton: "Start Learning",
    ctaHref: "practice-hub",
  },
  {
    label: "Career Services",
    href: "career-services",
    width: "w-[min(760px,calc(100vw-32px))]",
    columns: [
      {
        title: "Career Development",
        items: [
          { icon: FaFileAlt, title: "Resume Review", href: "/career-services" },
          { icon: FaUserTie, title: "Interview Preparation", href: "/placement-assistance" },
          { icon: FaGraduationCap, title: "One-to-One Mentorship", href: "/mentorship" },
          { icon: FaMapMarkedAlt, title: "Career Roadmap", href: "/career-services" },
        ],
      },
      {
        title: "Placement Support",
        items: [
          { icon: FaBriefcase, title: "Placement Assistance", href: "/placement-assistance" },
          { icon: FaBuilding, title: "Hiring Opportunities", href: "/placement-assistance" },
          { icon: FaUsers, title: "Industry Connections", href: "/mentorship" },
          { icon: FaChartLine, title: "Career Guidance", href: "/career-services" },
        ],
      },
    ],
    ctaLabel: "Get Job Ready",
    ctaButton: "Book Career Counseling",
    ctaHref: "career-services",
  },
  {
    label: "About Us",
    href: "about-edtech",
    width: "w-[min(820px,calc(100vw-32px))]",
    columns: [
      {
        title: "Company",
        items: [
          { icon: FaBuilding, title: "About Jawa EdTech", href: "/about-edtech" },
          { icon: FaRocket, title: "Our Mission", href: "/about-edtech" },
          { icon: FaCheckCircle, title: "Why Choose Jawa EdTech", href: "/about-edtech" },
          { icon: FaUserTie, title: "Industry Mentors", href: "/mentorship" },
        ],
      },
      {
        title: "Ecosystem",
        items: [
          { icon: FaBookOpen, title: "Learn", href: "/programs" },
          { icon: FaTools, title: "Practice", href: "/practice-hub" },
          { icon: FaBuilding, title: "Intern", href: "/internships" },
          { icon: FaRocket, title: "Build", href: "/projects/industry-project-lab" },
          { icon: FaBriefcase, title: "Get Hired", href: "/placement-assistance" },
        ],
      },
      {
        title: "Contact",
        items: [
          { icon: FaPhone, title: "Contact Us", href: "/about-edtech" },
          { icon: FaMapMarkedAlt, title: "Locations", href: "/about-edtech" },
          { icon: FaEnvelope, title: "Support", href: "/about-edtech" },
          { icon: FaUsers, title: "Partner With Us", href: "/about-edtech" },
        ],
      },
    ],
    ctaLabel: "Build Your Career With Jawa",
    ctaButton: "Talk to Our Team",
    ctaHref: "about-edtech",
  },
];

const navTo = (target = "") => {
  if (target.startsWith("/")) return target;
  if (target.startsWith("#")) return `/${target}`;
  return `/${target}`;
};

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const { loginAdmin, isAdminAuthenticated } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [orgLoginOpen, setOrgLoginOpen] = useState(false);
  const [orgEmail, setOrgEmail] = useState("");
  const [orgPassword, setOrgPassword] = useState("");
  const [orgLoading, setOrgLoading] = useState(false);
  const [orgError, setOrgError] = useState("");
  const [showAdBanner, setShowAdBanner] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("jawa-theme") === "dark";
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("jawa-theme", theme);
  }, [isDarkMode]);

  useEffect(() => {
    if (location.state?.adminLogin) {
      setOrgLoginOpen(true);
    }
  }, [location.state?.adminLogin]);

  const themeClass = isDarkMode
    ? "border-cyan-300/15 bg-[radial-gradient(circle_at_82%_18%,rgba(0,242,254,0.12),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(243,85,136,0.1),transparent_36%),linear-gradient(90deg,rgba(13,17,23,0.9),rgba(15,23,42,0.84),rgba(7,36,55,0.82))] text-white shadow-[0_14px_44px_-24px_rgba(0,242,254,0.42)] backdrop-blur-[15px]"
    : "border-[rgba(59,130,246,0.15)] bg-[radial-gradient(circle_at_86%_18%,rgba(0,242,254,0.13),transparent_34%),radial-gradient(circle_at_16%_76%,rgba(243,85,136,0.09),transparent_36%),linear-gradient(90deg,rgba(255,255,255,0.78),rgba(219,234,254,0.58),rgba(191,219,254,0.48))] text-slate-950 shadow-[0_14px_40px_-28px_rgba(37,99,235,0.75)] backdrop-blur-[15px]";

  const mutedClass = isDarkMode ? "text-slate-200" : "text-slate-700";

  const focusAuthPhone = (mode = "login") => {
    setMobileMenuOpen(false);
    if (location.pathname === "/") {
      window.dispatchEvent(
        new CustomEvent("jawa:focus-auth-phone", { detail: { mode } })
      );
      return;
    }

    navigate("/", { state: { authPrompt: mode } });
  };

  const handleOrgLogin = async (event) => {
    event.preventDefault();
    setOrgError("");
    setOrgLoading(true);
    try {
      await loginAdmin({ email: orgEmail, password: orgPassword });
      setOrgLoginOpen(false);
      setOrgEmail("");
      setOrgPassword("");
      navigate("/admin");
    } catch (err) {
      setOrgError(err.message || "Unable to login as organization admin.");
    } finally {
      setOrgLoading(false);
    }
  };

  return (
    <>
    {showAdBanner && (
      <div className="relative z-[60] min-h-[72px] overflow-hidden border-b border-white/10 bg-slate-950 text-white">
        <img
          src={adBannerImage}
          alt="Jawanexis Technologies and Jawa EdTech career programs"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_50%,rgba(168,85,247,0.42),transparent_28%),radial-gradient(circle_at_56%_50%,rgba(14,165,233,0.16),transparent_24%),linear-gradient(90deg,rgba(10,5,3,0.98)_0%,rgba(16,10,7,0.96)_31%,rgba(24,13,9,0.9)_58%,rgba(44,22,13,0.96)_100%)]" />
        <div className="relative grid min-h-[72px] w-full grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-8 lg:grid-cols-[minmax(300px,390px)_minmax(460px,1fr)_auto] lg:px-10">
          <div className="flex h-full min-w-0 items-center gap-4 lg:border-r lg:border-white/18 lg:pr-6">
            <JawanexisMark />
            <div className="min-w-0 leading-none">
              <p className="text-xl font-black tracking-[-0.04em] text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.42)] sm:text-2xl">
                Jawanexis
              </p>
              <p className="mt-2 text-[11px] font-black tracking-[0.06em] sm:text-xs">
                <span className="text-cyan-200">Bold Innovation.</span>{" "}
                <span className="text-fuchsia-300">Seamless Execution.</span>
              </p>
            </div>
          </div>

          <div className="hidden min-w-0 pl-2 lg:block">
              <p className="text-[11px] font-black uppercase tracking-[0.28em] text-cyan-200 sm:text-xs">
                Jawanexis Technologies | Jawa EdTech
              </p>
              <h2 className="truncate text-xl font-black tracking-[-0.03em] text-white sm:text-2xl lg:text-[1.72rem]">
                Coming Soon: Career Accelerator Programs
              </h2>
          </div>

          <div className="flex shrink-0 items-center gap-10">
            <p className="sparkle-banner-text hidden min-w-[420px] text-right text-2xl font-black tracking-[-0.035em] text-amber-100 drop-shadow-[0_0_22px_rgba(253,230,138,0.82)] xl:block 2xl:text-[1.85rem]">
              Visit today. Register soon.
            </p>
            <Link
              to="/#courses"
              className="hidden min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-6 text-sm font-black text-white shadow-[0_0_28px_rgba(56,189,248,0.34)] transition hover:-translate-y-0.5 hover:from-sky-400 hover:to-violet-500 sm:inline-flex"
            >
              Register Soon
            </Link>
            <button
              type="button"
              onClick={() => setShowAdBanner(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-lg text-white transition hover:bg-white/18"
              aria-label="Close advertisement"
            >
              <FaTimes />
            </button>
          </div>
        </div>
      </div>
    )}
    <nav className={`sticky top-0 z-50 border-b transition-colors duration-300 ${themeClass}`}>
      <div className="mx-auto flex min-h-[84px] w-full max-w-[1780px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Logo isDarkMode={isDarkMode} />

        <ul className="hidden flex-1 items-center justify-center gap-3 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <li key={link.label} className="group">
              <Link
                to={navTo(link.href)}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-3 text-[16px] font-bold tracking-[-0.01em] transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#60A5FA] ${mutedClass}`}
              >
                {link.label}
                <FaChevronDown className="text-xs transition group-hover:rotate-180" />
              </Link>
              <MegaMenu link={link} isDarkMode={isDarkMode} />
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+919790631286"
            className={`flex items-center gap-3 text-[16px] font-bold transition hover:text-[#60A5FA] ${mutedClass}`}
          >
            <FaPhoneAlt className="text-[#60A5FA]" />
            +91 97906 31286
          </a>

          <button
            type="button"
            onClick={() => setIsDarkMode((current) => !current)}
            className={`flex h-12 w-12 items-center justify-center rounded-xl border text-xl transition hover:-translate-y-0.5 ${
              isDarkMode
                ? "border-emerald-200/30 bg-white/10 text-emerald-100 shadow-sm hover:bg-white/15"
                : "border-blue-200/70 bg-white/35 text-slate-700 shadow-sm hover:bg-white/60"
            }`}
            aria-label="Toggle navbar theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="relative">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/dashboard"
                  className={`text-[16px] font-bold transition hover:text-[#60A5FA] ${mutedClass}`}
                >
                  {user?.name?.split(" ")[0] || "Dashboard"}
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="flex h-12 items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 px-7 text-[16px] font-extrabold text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-0.5 hover:shadow-blue-500/35"
                >
                  <FaSignOutAlt className="text-sm" />
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex h-12 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-[16px] font-extrabold text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-500/35">
                <button
                  type="button"
                  onClick={() => focusAuthPhone("login")}
                  className="flex min-w-28 items-center justify-center px-6"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (isAdminAuthenticated) {
                      navigate("/admin");
                      return;
                    }
                    setOrgLoginOpen((current) => !current);
                  }}
                  className={`flex w-12 items-center justify-center border-l border-white/20 bg-white/12 transition ${orgLoginOpen ? "rotate-180 bg-sky-300 text-slate-950" : ""}`}
                  aria-label="Admin login"
                  title="Admin Login"
                >
                  <FaMobileAlt />
                </button>
              </div>
            )}

            {orgLoginOpen && <AdminLoginForm handleOrgLogin={handleOrgLogin} orgEmail={orgEmail} setOrgEmail={setOrgEmail} orgPassword={orgPassword} setOrgPassword={setOrgPassword} orgError={orgError} orgLoading={orgLoading} />}
          </div>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className={`flex h-12 w-12 items-center justify-center rounded-2xl border text-lg transition hover:-translate-y-0.5 ${
              isDarkMode
                ? "border-sky-200/25 bg-white/10 text-sky-100 hover:bg-white/15"
                : "border-blue-200/70 bg-white/35 text-sky-700 hover:bg-white/60"
            }`}
            aria-label="Open Jawa EdTech location on Google Maps"
            title="Live Location"
          >
            <GoogleMapsIcon className="h-6 w-6" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((current) => !current)}
          className={`flex h-11 w-11 items-center justify-center rounded-xl border text-xl lg:hidden ${
            isDarkMode ? "border-emerald-200/30 bg-white/10 text-white" : "border-blue-200/80 bg-white/35 text-slate-900"
          }`}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className={`border-t px-5 pb-5 pt-3 backdrop-blur-[15px] lg:hidden ${
            isDarkMode
              ? "border-cyan-300/15 bg-[radial-gradient(circle_at_82%_18%,rgba(0,242,254,0.14),transparent_34%),radial-gradient(circle_at_18%_80%,rgba(243,85,136,0.11),transparent_36%),linear-gradient(90deg,rgba(13,17,23,0.94),rgba(15,23,42,0.9),rgba(7,36,55,0.88))]"
              : "border-[rgba(59,130,246,0.15)] bg-[radial-gradient(circle_at_86%_18%,rgba(0,242,254,0.13),transparent_34%),radial-gradient(circle_at_16%_76%,rgba(243,85,136,0.09),transparent_36%),linear-gradient(90deg,rgba(255,255,255,0.84),rgba(219,234,254,0.7),rgba(191,219,254,0.58))]"
          }`}
        >
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <MobileMenuGroup
                key={link.label}
                link={link}
                mutedClass={mutedClass}
                onNavigate={() => setMobileMenuOpen(false)}
              />
            ))}
          </div>

          <div className="mt-4 grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-2">
            <a
              href="tel:+919790631286"
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${mutedClass}`}
            >
              <FaPhoneAlt className="text-[#60A5FA]" />
              +91 97906 31286
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${mutedClass}`}
            >
              <GoogleMapsIcon className="h-5 w-5" />
              Live Location
            </a>
            {isAuthenticated ? (
              <button
                type="button"
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-sm font-extrabold text-white"
              >
                Sign out
              </button>
            ) : (
              <div className="relative">
                <div className="flex min-h-12 w-full overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-center text-sm font-extrabold text-white">
                  <button
                    type="button"
                    onClick={() => focusAuthPhone("login")}
                    className="flex flex-1 items-center justify-center px-4"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (isAdminAuthenticated) {
                        navigate("/admin");
                        setMobileMenuOpen(false);
                        return;
                      }
                      setOrgLoginOpen((current) => !current);
                    }}
                    className={`flex w-12 items-center justify-center border-l border-white/20 bg-white/12 transition ${orgLoginOpen ? "rotate-180 bg-sky-300 text-slate-950" : ""}`}
                    aria-label="Admin login"
                    title="Admin Login"
                  >
                    <FaMobileAlt />
                  </button>
                </div>
                {orgLoginOpen && <AdminLoginForm handleOrgLogin={handleOrgLogin} orgEmail={orgEmail} setOrgEmail={setOrgEmail} orgPassword={orgPassword} setOrgPassword={setOrgPassword} orgError={orgError} orgLoading={orgLoading} />}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
    </>
  );
}

function AdminLoginForm({ handleOrgLogin, orgEmail, setOrgEmail, orgPassword, setOrgPassword, orgError, orgLoading }) {
  return (
    <form onSubmit={handleOrgLogin} className="absolute right-0 top-14 z-[70] w-[min(360px,calc(100vw-32px))] rounded-[1.3rem] border border-emerald-200/18 bg-slate-950/96 p-5 text-white shadow-[0_28px_100px_-50px_rgba(34,197,94,0.95)] backdrop-blur-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-300 text-slate-950">
          <FaShieldAlt />
        </span>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Admin Access</p>
          <h3 className="text-xl font-black tracking-[-0.03em]">Organization Login</h3>
        </div>
      </div>
      <input
        type="email"
        required
        value={orgEmail}
        onChange={(event) => setOrgEmail(event.target.value)}
        className="mb-3 w-full rounded-xl border border-emerald-200/18 bg-white/[0.08] px-4 py-3 text-sm font-bold text-white outline-none placeholder:text-slate-400"
        placeholder="Organization email"
      />
      <input
        type="password"
        required
        value={orgPassword}
        onChange={(event) => setOrgPassword(event.target.value)}
        className="w-full rounded-xl border border-emerald-200/18 bg-white/[0.08] px-4 py-3 text-sm font-bold text-white outline-none placeholder:text-slate-400"
        placeholder="Password"
      />
      {orgError && <p className="mt-3 rounded-xl bg-red-500/10 px-3 py-2 text-xs font-bold text-red-200">{orgError}</p>}
      <button disabled={orgLoading} className="mt-4 min-h-12 w-full rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 text-sm font-black text-white transition hover:-translate-y-0.5 disabled:opacity-60">
        {orgLoading ? "Verifying..." : "Open Admin Dashboard"}
      </button>
    </form>
  );
}

function MegaMenu({ link, isDarkMode }) {
  return (
    <div
      className={`pointer-events-none fixed left-1/2 top-[84px] z-50 -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 ${link.width}`}
    >
      <div
        className={`overflow-hidden rounded-b-2xl border shadow-2xl backdrop-blur-2xl ${
          isDarkMode
            ? "border-emerald-200/15 bg-slate-950/92 shadow-emerald-950/30"
            : "border-blue-100 bg-white/96 shadow-blue-950/12"
        }`}
      >
        <div className={`grid gap-x-12 gap-y-7 px-7 py-6 ${link.columns.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {link.columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className={`mb-5 text-[14px] font-black uppercase tracking-[0.22em] ${isDarkMode ? "text-emerald-200" : "text-slate-500"}`}>
                {column.title}
              </p>
              <div className="grid gap-4">
                {column.items.map((item) => (
                  <DropdownItem key={item.title} item={item} isDarkMode={isDarkMode} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col gap-4 border-t px-7 py-5 sm:flex-row sm:items-center sm:justify-between ${
            isDarkMode ? "border-white/10 bg-white/[0.045]" : "border-slate-200 bg-slate-50/95"
          }`}
        >
          <div className="min-w-0">
            <p className={`text-base font-black ${isDarkMode ? "text-white" : "text-slate-950"}`}>{link.ctaLabel}</p>
            {link.ctaText && (
              <Link to="/#career-counseling" className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-400">
                <FaPhoneAlt />
                {link.ctaText}
              </Link>
            )}
          </div>
          <Link
            to={navTo(link.ctaHref)}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-7 text-sm font-black text-white shadow-xl shadow-slate-950/25 transition hover:-translate-y-0.5 hover:bg-sky-600"
          >
            {link.ctaButton} <span className="ml-2">-&gt;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function DropdownItem({ item, isDarkMode }) {
  const Icon = item.icon;

  return (
    <Link
      to={item.href || (item.slug ? `/programs/${item.slug}` : "/#courses")}
      className={`group/item flex min-w-0 items-center gap-4 rounded-xl py-1.5 transition hover:-translate-y-0.5 ${
        isDarkMode ? "hover:bg-white/[0.06]" : "hover:bg-blue-50/80"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-lg ${
          isDarkMode
            ? "border-emerald-200/15 bg-emerald-400/10 text-emerald-200"
            : "border-blue-100 bg-blue-50 text-blue-600 shadow-sm"
        }`}
      >
        <Icon />
      </span>
      <span className="min-w-0">
        <span className={`block text-[15px] font-black leading-5 tracking-[-0.01em] ${isDarkMode ? "text-white" : "text-slate-950"}`}>
          {item.title}
        </span>
        {item.description && (
          <span className={`mt-1 block text-xs font-bold leading-4 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            {item.description}
          </span>
        )}
      </span>
    </Link>
  );
}

function MobileMenuGroup({ link, mutedClass, onNavigate }) {
  return (
    <details className="group rounded-xl">
      <summary className={`flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-base font-bold transition hover:bg-blue-500/10 hover:text-[#60A5FA] ${mutedClass}`}>
        {link.label}
        <FaChevronDown className="text-xs transition group-open:rotate-180" />
      </summary>
      <div className="grid gap-4 px-3 pb-4 pt-1">
        {link.columns.map((column) => (
          <div key={column.title}>
            <p className="mb-2 text-xs font-black uppercase tracking-[0.14em] text-emerald-400">
              {column.title}
            </p>
            <div className="grid gap-1">
              {column.items.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.title}
                    to={item.href || (item.slug ? `/programs/${item.slug}` : navTo(link.href))}
                    onClick={onNavigate}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-bold text-inherit transition hover:bg-blue-500/10"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <Icon />
                    </span>
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
        <Link
          to={navTo(link.ctaHref)}
          onClick={onNavigate}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-4 text-sm font-black text-white"
        >
          {link.ctaButton} <span className="ml-2">-&gt;</span>
        </Link>
      </div>
    </details>
  );
}

function JawanexisMark() {
  return (
    <span className="relative h-14 w-16 shrink-0 drop-shadow-[0_0_18px_rgba(168,85,247,0.58)]">
      <svg viewBox="0 0 96 96" className="h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="jawanexis-left" x1="11" y1="78" x2="46" y2="11" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4338ca" />
            <stop offset="0.52" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#2e1065" />
          </linearGradient>
          <linearGradient id="jawanexis-right" x1="84" y1="78" x2="50" y2="11" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7c3aed" />
            <stop offset="0.48" stopColor="#c026d3" />
            <stop offset="1" stopColor="#581c87" />
          </linearGradient>
          <linearGradient id="jawanexis-base" x1="15" y1="80" x2="79" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#312e81" />
            <stop offset="0.5" stopColor="#7e22ce" />
            <stop offset="1" stopColor="#a21caf" />
          </linearGradient>
        </defs>
        <path d="M11 75.5C7.7 81.6 12.1 89 19 89h19.5c7.5 0 14.2-4.5 17.1-11.4L78.7 23.2C82.4 14.5 75.9 5 66.5 5h-7.8c-5.4 0-10.3 3.2-12.5 8.2L11 75.5Z" fill="url(#jawanexis-left)" />
        <path d="M85 75.5C88.3 81.6 83.9 89 77 89H57.5c-7.5 0-14.2-4.5-17.1-11.4L17.3 23.2C13.6 14.5 20.1 5 29.5 5h7.8c5.4 0 10.3 3.2 12.5 8.2L85 75.5Z" fill="url(#jawanexis-right)" opacity="0.95" />
        <path d="M13 78.5c11.2 5.7 24.7 5.1 35.4-1.9l16.2-10.4c7.3-4.7 17-1.1 19.5 7.2l.7 2.4C87.2 83.1 81.7 89 74 89H20.3C14 89 9.6 82.8 13 78.5Z" fill="url(#jawanexis-base)" opacity="0.98" />
        <path d="M35.8 57.7 48 30.9l12.2 26.8c1.5 3.4-.9 7.3-4.6 7.3H40.4c-3.7 0-6.1-3.9-4.6-7.3Z" fill="#050505" />
        <path d="M35.1 85c3.4-8.2 8.4-12.2 12.9-12.2S57.5 76.8 60.9 85H35.1Z" fill="#050505" />
      </svg>
    </span>
  );
}

function Logo({ isDarkMode }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Jawa EdTech home">
      <span className="relative h-[66px] w-[58px] shrink-0 transition duration-300 group-hover:-translate-y-0.5">
        <span className={`absolute inset-0 rounded-2xl blur-xl ${isDarkMode ? "bg-emerald-300/20" : "bg-emerald-400/18"}`} />
        <img
          src={jawaEdTechLogo}
          alt="Jawa EdTech logo"
          className="relative h-full w-full scale-125 object-contain object-center drop-shadow-[0_14px_22px_rgba(16,185,129,0.42)]"
        />
      </span>

      <span className="min-w-0 whitespace-nowrap leading-[0.9]">
        <span className={`font-heading text-[29px] font-black tracking-[-0.04em] drop-shadow-sm ${isDarkMode ? "text-white" : "text-slate-950"}`}>
          JAWA
        </span>
        <span className="font-heading text-[29px] font-black tracking-[-0.04em] text-[#10b981] drop-shadow-sm">
          {" "}EdTech
        </span>
        <span className={`mt-1 block text-[10px] font-black uppercase tracking-[0.24em] ${isDarkMode ? "text-emerald-100/75" : "text-emerald-700/75"}`}>
          Learn. Lead. Innovate.
        </span>
      </span>
    </Link>
  );
}

export default Navbar;

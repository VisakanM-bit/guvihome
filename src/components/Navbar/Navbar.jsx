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
  FaChevronUp,
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
import { CONTACT_EMAIL, CONTACT_PHONE, MAPS_URL } from "../../config/sheets";
import jawaEdTechLogo from "../../assets/logos/jawa-edtech-logo-clean.png";
import GoogleMapsIcon from "../GoogleMapsIcon/GoogleMapsIcon";

const CONTACT_ADDRESS =
  "Jawa Incubation Centre, Saibaba Colony, Coimbatore";

const contactDetails = [
  {
    label: "Mobile",
    value: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE}`,
    icon: FaPhoneAlt,
  },
  {
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    icon: FaEnvelope,
  },
  {
    label: "Location",
    value: CONTACT_ADDRESS,
    href: MAPS_URL,
    icon: FaMapMarkedAlt,
    external: true,
  },
];

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
          { icon: FaBookOpen, title: "Learn", href: "/#courses" },
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
  const [openDropdown, setOpenDropdown] = useState(null);
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

  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

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
    <nav className={`sticky top-0 z-50 border-b transition-colors duration-300 ${themeClass}`}>
      <div className="mx-auto flex min-h-[72px] w-full max-w-[1780px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-5 xl:px-7">
        <Logo isDarkMode={isDarkMode} />

        <ul className="hidden flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
          <li>
            <Link
              to="/"
              className={`inline-flex whitespace-nowrap items-center rounded-xl px-2.5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#00a86b] xl:text-[15px] ${mutedClass}`}
            >
              Home
            </Link>
          </li>
          {navLinks.map((link) => (
            <li key={link.label} className="relative">
              <button
                type="button"
                onClick={() => setOpenDropdown((current) => current === link.label ? null : link.label)}
                className={`inline-flex whitespace-nowrap items-center gap-1.5 rounded-xl px-2.5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#00a86b] xl:text-[15px] ${mutedClass}`}
                aria-expanded={openDropdown === link.label}
              >
                {link.label}
                {openDropdown === link.label ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
              </button>
              <MegaMenu link={link} isDarkMode={isDarkMode} open={openDropdown === link.label} onClose={() => setOpenDropdown(null)} />
            </li>
          ))}
          <li className="relative">
            <button
              type="button"
              onClick={() => setOpenDropdown((current) => current === "Contact Us" ? null : "Contact Us")}
              className={`inline-flex whitespace-nowrap items-center gap-1.5 rounded-xl px-2.5 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#00a86b] xl:text-[15px] ${mutedClass}`}
              aria-expanded={openDropdown === "Contact Us"}
            >
              Contact Us
              {openDropdown === "Contact Us" ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
            </button>
            <ContactMenu isDarkMode={isDarkMode} open={openDropdown === "Contact Us"} onClose={() => setOpenDropdown(null)} />
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => setIsDarkMode((current) => !current)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border text-lg transition hover:-translate-y-0.5 ${
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
                  className={`text-[16px] font-bold transition hover:text-[#00a86b] ${mutedClass}`}
                >
                  {user?.name?.split(" ")[0] || "Dashboard"}
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="flex h-12 items-center gap-2 rounded-2xl bg-[#00a86b] px-7 text-[16px] font-extrabold text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-[#00965f]"
                >
                  <FaSignOutAlt className="text-sm" />
                  Sign out
                </button>
              </div>
            ) : (
              <div className="flex h-11 overflow-hidden rounded-2xl bg-[#00a86b] text-sm font-extrabold text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-[#00965f]">
                <button
                  type="button"
                  onClick={() => focusAuthPhone("login")}
                  className="flex min-w-24 items-center justify-center px-5"
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
            className={`flex h-11 w-11 items-center justify-center rounded-2xl border text-base transition hover:-translate-y-0.5 ${
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
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold ${mutedClass}`}
            >
              Home
            </Link>
            <details className={`rounded-xl sm:col-span-2 ${mutedClass}`}>
              <summary className="flex cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition hover:bg-emerald-500/10">
                Contact Us
                <FaChevronDown className="text-xs" />
              </summary>
              <div className="grid gap-2 px-2 pb-2">
                {contactDetails.map(({ label, value, href, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-bold transition hover:bg-emerald-500/10"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                      {label === "Location" ? <GoogleMapsIcon className="h-4 w-4" /> : <Icon />}
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.12em] text-emerald-500">{label}</span>
                      <span className="block">{value}</span>
                    </span>
                  </a>
                ))}
              </div>
            </details>
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
                <div className="flex min-h-12 w-full overflow-hidden rounded-xl bg-[#00a86b] text-center text-sm font-extrabold text-white">
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
      <button disabled={orgLoading} className="mt-4 min-h-12 w-full rounded-xl bg-[#00a86b] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#00965f] disabled:opacity-60">
        {orgLoading ? "Verifying..." : "Open Admin Dashboard"}
      </button>
    </form>
  );
}

function MegaMenu({ link, isDarkMode, open, onClose }) {
  return (
    <div
      className={`fixed left-1/2 top-[72px] z-50 -translate-x-1/2 transition duration-200 ${open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"} ${link.width}`}
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
            onClick={onClose}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#00a86b] px-7 text-sm font-black text-white shadow-xl shadow-emerald-500/25 transition hover:-translate-y-0.5 hover:bg-[#00965f]"
          >
            {link.ctaButton} <span className="ml-2">-&gt;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ContactMenu({ isDarkMode, open, onClose }) {
  return (
    <div
      className={`fixed left-1/2 top-[72px] z-50 w-[min(620px,calc(100vw-32px))] -translate-x-1/2 transition duration-200 ${
        open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <div
        className={`overflow-hidden rounded-b-2xl border p-5 shadow-2xl backdrop-blur-2xl ${
          isDarkMode
            ? "border-emerald-200/15 bg-slate-950/94 text-white shadow-emerald-950/30"
            : "border-emerald-100 bg-white/96 text-slate-950 shadow-emerald-950/12"
        }`}
      >
        <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-emerald-500">
          Contact Us
        </p>
        <div className="grid gap-3">
          {contactDetails.map(({ label, value, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer" : undefined}
              onClick={onClose}
              className={`flex items-center gap-4 rounded-xl border p-3 transition hover:-translate-y-0.5 ${
                isDarkMode
                  ? "border-emerald-200/12 bg-white/[0.05] hover:bg-white/[0.08]"
                  : "border-emerald-100 bg-emerald-50/55 hover:bg-emerald-50"
              }`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00a86b] text-lg text-white shadow-lg shadow-emerald-500/20">
                {label === "Location" ? <GoogleMapsIcon className="h-5 w-5" /> : <Icon />}
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-black uppercase tracking-[0.16em] text-emerald-500">
                  {label}
                </span>
                <span className="mt-1 block break-words text-sm font-black">
                  {value}
                </span>
              </span>
            </a>
          ))}
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
        isDarkMode ? "hover:bg-white/[0.06]" : "hover:bg-emerald-50/80"
      }`}
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border text-lg ${
          isDarkMode
            ? "border-emerald-200/15 bg-emerald-400/10 text-emerald-200"
            : "border-emerald-100 bg-emerald-50 text-emerald-600 shadow-sm"
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
      <summary className={`flex cursor-pointer list-none items-center justify-between rounded-xl px-3 py-3 text-base font-bold transition hover:bg-emerald-500/10 hover:text-[#00a86b] ${mutedClass}`}>
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
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-bold text-inherit transition hover:bg-emerald-500/10"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
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
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-[#00a86b] px-4 text-sm font-black text-white"
        >
          {link.ctaButton} <span className="ml-2">-&gt;</span>
        </Link>
      </div>
    </details>
  );
}

function Logo({ isDarkMode }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Jawa EdTech home">
      <span className="relative h-[58px] w-[50px] shrink-0 transition duration-300 group-hover:-translate-y-0.5">
        <span className={`absolute inset-0 rounded-2xl blur-xl ${isDarkMode ? "bg-emerald-300/20" : "bg-emerald-400/18"}`} />
        <img
          src={jawaEdTechLogo}
          alt="Jawa EdTech logo"
          className="relative h-full w-full scale-125 object-contain object-center drop-shadow-[0_14px_22px_rgba(16,185,129,0.42)]"
        />
      </span>

      <span className="min-w-0 whitespace-nowrap leading-[0.9]">
        <span className={`font-heading text-[26px] font-black tracking-[-0.04em] drop-shadow-sm ${isDarkMode ? "text-white" : "text-slate-950"}`}>
          JAWA
        </span>
        <span className="font-heading text-[26px] font-black tracking-[-0.04em] text-[#10b981] drop-shadow-sm">
          {" "}EdTech
        </span>
        <span className={`mt-1 block text-[9px] font-black uppercase tracking-[0.2em] ${isDarkMode ? "text-emerald-100/75" : "text-emerald-700/75"}`}>
          Learn. Lead. Innovate.
        </span>
      </span>
    </Link>
  );
}

export default Navbar;

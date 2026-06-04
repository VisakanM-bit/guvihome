import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  FaMoon,
  FaPhone,
  FaPhoneAlt,
  FaRobot,
  FaRocket,
  FaSignOutAlt,
  FaSun,
  FaTools,
  FaTimes,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import jawaLogo from "../../assets/logos/logo.png";

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
          },
          {
            icon: FaUsers,
            title: "Recruitment & Talent Acquisition",
            description: "Master Modern Hiring & Talent Intelligence",
          },
        ],
      },
      {
        title: "Technology Programs",
        items: [
          { icon: FaLaptopCode, title: "Full Stack Development", description: "MERN & MEAN Stack Training" },
          { icon: FaCode, title: "Python Development", description: "Industry-Oriented Python Learning" },
          { icon: FaRobot, title: "Artificial Intelligence & Machine Learning", description: "Build Intelligent Solutions" },
          { icon: FaTools, title: "DevOps Engineering", description: "Cloud & Deployment Mastery" },
          { icon: FaCheckCircle, title: "Software Testing & QA", description: "Manual & Automation Testing" },
          { icon: FaRocket, title: "MuleSoft Development", description: "Enterprise API Integration" },
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
    href: "#internships",
    width: "w-[min(760px,calc(100vw-32px))]",
    columns: [
      {
        title: "Internship Tracks",
        items: [
          { icon: FaBuilding, title: "HR Internship" },
          { icon: FaUsers, title: "Recruitment Internship" },
          { icon: FaLaptopCode, title: "Full Stack Internship" },
          { icon: FaCode, title: "Python Internship" },
          { icon: FaRobot, title: "AI & ML Internship" },
          { icon: FaTools, title: "DevOps Internship" },
          { icon: FaCheckCircle, title: "Software Testing Internship" },
          { icon: FaRocket, title: "MuleSoft Internship" },
        ],
      },
      {
        title: "Learning Experience",
        items: [
          { icon: FaBriefcase, title: "Live Projects" },
          { icon: FaUserTie, title: "Mentor Guidance" },
          { icon: FaFileAlt, title: "Weekly Assessments" },
          { icon: FaMedal, title: "Internship Certification" },
        ],
      },
    ],
    ctaLabel: "Gain Real Industry Experience",
    ctaButton: "Apply for Internship",
    ctaHref: "#internships",
  },
  {
    label: "Practice Hub",
    href: "#practice",
    width: "w-[min(760px,calc(100vw-32px))]",
    columns: [
      {
        title: "Skill Building",
        items: [
          { icon: FaBookOpen, title: "Learning Hub" },
          { icon: FaFileAlt, title: "Assignments" },
          { icon: FaChartLine, title: "Case Studies" },
          { icon: FaLightbulb, title: "Practical Activities" },
          { icon: FaBriefcase, title: "Project Lab" },
        ],
      },
      {
        title: "Career Preparation",
        items: [
          { icon: FaUserTie, title: "Mock Interviews" },
          { icon: FaFileAlt, title: "Resume Builder" },
          { icon: FaUsers, title: "LinkedIn Profile Builder" },
          { icon: FaLightbulb, title: "Aptitude Preparation" },
          { icon: FaChartLine, title: "Career Readiness Assessment" },
        ],
      },
    ],
    ctaLabel: "Practice. Build. Grow.",
    ctaButton: "Start Learning",
    ctaHref: "#practice",
  },
  {
    label: "Career Services",
    href: "#platform",
    width: "w-[min(760px,calc(100vw-32px))]",
    columns: [
      {
        title: "Career Development",
        items: [
          { icon: FaFileAlt, title: "Resume Review" },
          { icon: FaUserTie, title: "Interview Preparation" },
          { icon: FaGraduationCap, title: "One-to-One Mentorship" },
          { icon: FaMapMarkedAlt, title: "Career Roadmap" },
        ],
      },
      {
        title: "Placement Support",
        items: [
          { icon: FaBriefcase, title: "Placement Assistance" },
          { icon: FaBuilding, title: "Hiring Opportunities" },
          { icon: FaUsers, title: "Industry Connections" },
          { icon: FaChartLine, title: "Career Guidance" },
        ],
      },
    ],
    ctaLabel: "Get Job Ready",
    ctaButton: "Book Career Counseling",
    ctaHref: "#career-counseling",
  },
  {
    label: "Success Stories",
    href: "#success-stories",
    width: "w-[min(760px,calc(100vw-32px))]",
    columns: [
      {
        title: "Student Success",
        items: [
          { icon: FaMedal, title: "Placement Success Stories" },
          { icon: FaGraduationCap, title: "Career Transformation Stories" },
          { icon: FaLaptopCode, title: "Tech Career Success" },
          { icon: FaUserTie, title: "HR Career Success" },
        ],
      },
      {
        title: "Community",
        items: [
          { icon: FaCheckCircle, title: "Student Testimonials" },
          { icon: FaMedal, title: "Learner Achievements" },
          { icon: FaBriefcase, title: "Internship Success Stories" },
          { icon: FaChartLine, title: "Career Growth Journeys" },
        ],
      },
    ],
    ctaLabel: "See Real Transformations",
    ctaButton: "View All Success Stories",
    ctaHref: "#success-stories",
  },
  {
    label: "About Us",
    href: "#about",
    width: "w-[min(820px,calc(100vw-32px))]",
    columns: [
      {
        title: "Company",
        items: [
          { icon: FaBuilding, title: "About Jawa EdTech" },
          { icon: FaRocket, title: "Our Mission" },
          { icon: FaCheckCircle, title: "Why Choose Jawa EdTech" },
          { icon: FaUserTie, title: "Industry Mentors" },
        ],
      },
      {
        title: "Ecosystem",
        items: [
          { icon: FaBookOpen, title: "Learn" },
          { icon: FaTools, title: "Practice" },
          { icon: FaBuilding, title: "Intern" },
          { icon: FaRocket, title: "Build" },
          { icon: FaBriefcase, title: "Get Hired" },
        ],
      },
      {
        title: "Contact",
        items: [
          { icon: FaPhone, title: "Contact Us" },
          { icon: FaMapMarkedAlt, title: "Locations" },
          { icon: FaEnvelope, title: "Support" },
          { icon: FaUsers, title: "Partner With Us" },
        ],
      },
    ],
    ctaLabel: "Build Your Career With Jawa",
    ctaButton: "Talk to Our Team",
    ctaHref: "#contact",
  },
];

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("jawa-theme") === "dark";
  });

  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("jawa-theme", theme);
  }, [isDarkMode]);

  const themeClass = isDarkMode
    ? "border-emerald-300/15 bg-[linear-gradient(90deg,rgba(2,44,34,0.82),rgba(15,23,42,0.82),rgba(14,56,92,0.76))] text-white shadow-[0_14px_44px_-24px_rgba(16,185,129,0.55)] backdrop-blur-[15px]"
    : "border-[rgba(59,130,246,0.15)] bg-[linear-gradient(90deg,rgba(255,255,255,0.75),rgba(219,234,254,0.55),rgba(191,219,254,0.45))] text-slate-950 shadow-[0_14px_40px_-28px_rgba(37,99,235,0.75)] backdrop-blur-[15px]";

  const mutedClass = isDarkMode ? "text-slate-200" : "text-slate-700";

  return (
    <nav className={`sticky top-0 z-50 border-b transition-colors duration-300 ${themeClass}`}>
      <div className="mx-auto flex min-h-[84px] w-full max-w-[1780px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Logo isDarkMode={isDarkMode} />

        <ul className="hidden flex-1 items-center justify-center gap-3 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <li key={link.label} className="group">
              <a
                href={link.href}
                className={`inline-flex items-center gap-2 rounded-xl px-3 py-3 text-[16px] font-bold tracking-[-0.01em] transition hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#60A5FA] ${mutedClass}`}
              >
                {link.label}
                <FaChevronDown className="text-xs transition group-hover:rotate-180" />
              </a>
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

          {isAuthenticated ? (
            <>
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
            </>
          ) : (
            <Link
              to="/login"
              className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 px-8 text-[16px] font-extrabold text-white shadow-xl shadow-blue-500/25 transition hover:-translate-y-0.5 hover:from-blue-600 hover:to-blue-700 hover:shadow-blue-500/35"
            >
              Login
            </Link>
          )}
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
              ? "border-emerald-300/15 bg-[linear-gradient(90deg,rgba(2,44,34,0.9),rgba(15,23,42,0.88),rgba(14,56,92,0.82))]"
              : "border-[rgba(59,130,246,0.15)] bg-[linear-gradient(90deg,rgba(255,255,255,0.82),rgba(219,234,254,0.68),rgba(191,219,254,0.56))]"
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
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-3 text-center text-sm font-extrabold text-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function MegaMenu({ link, isDarkMode }) {
  return (
    <div
      className={`pointer-events-none fixed left-1/2 top-[78px] z-50 -translate-x-1/2 translate-y-2 opacity-0 transition duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 ${link.width}`}
    >
      <div
        className={`overflow-hidden rounded-b-2xl border shadow-2xl backdrop-blur-2xl ${
          isDarkMode
            ? "border-emerald-200/15 bg-slate-950/88 shadow-emerald-950/30"
            : "border-blue-100 bg-white/95 shadow-blue-950/12"
        }`}
      >
        <div className={`grid gap-7 p-7 ${link.columns.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
          {link.columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className={`mb-4 text-sm font-black uppercase tracking-[0.12em] ${isDarkMode ? "text-emerald-200" : "text-slate-500"}`}>
                {column.title}
              </p>
              <div className="grid gap-2">
                {column.items.map((item) => (
                  <DropdownItem key={item.title} item={item} isDarkMode={isDarkMode} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`flex flex-col gap-4 border-t px-7 py-5 sm:flex-row sm:items-center sm:justify-between ${
            isDarkMode ? "border-white/10 bg-white/[0.04]" : "border-slate-200 bg-slate-50/90"
          }`}
        >
          <div className="min-w-0">
            <p className={`text-base font-black ${isDarkMode ? "text-white" : "text-slate-950"}`}>{link.ctaLabel}</p>
            {link.ctaText && (
              <a href="#career-counseling" className="mt-1 inline-flex items-center gap-2 text-sm font-bold text-emerald-500 hover:text-emerald-400">
                <FaPhoneAlt />
                {link.ctaText}
              </a>
            )}
          </div>
          <a
            href={link.ctaHref}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-slate-950 px-6 text-sm font-black text-white shadow-xl shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-emerald-600"
          >
            {link.ctaButton} <span className="ml-2">-&gt;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

function DropdownItem({ item, isDarkMode }) {
  const Icon = item.icon;

  return (
    <a
      href="#"
      className={`group/item flex min-w-0 items-start gap-3 rounded-xl p-3 transition hover:-translate-y-0.5 ${
        isDarkMode ? "hover:bg-white/[0.07]" : "hover:bg-blue-50"
      }`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border text-lg ${
          isDarkMode
            ? "border-emerald-200/15 bg-emerald-400/10 text-emerald-200"
            : "border-blue-100 bg-blue-50 text-blue-600"
        }`}
      >
        <Icon />
      </span>
      <span className="min-w-0">
        <span className={`block text-[15px] font-black leading-5 ${isDarkMode ? "text-white" : "text-slate-950"}`}>
          {item.title}
        </span>
        {item.description && (
          <span className={`mt-1 block text-xs font-bold leading-5 ${isDarkMode ? "text-slate-400" : "text-slate-500"}`}>
            {item.description}
          </span>
        )}
      </span>
    </a>
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
                  <a
                    key={item.title}
                    href="#"
                    onClick={onNavigate}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-bold text-inherit transition hover:bg-blue-500/10"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                      <Icon />
                    </span>
                    <span>{item.title}</span>
                  </a>
                );
              })}
            </div>
          </div>
        ))}
        <a
          href={link.ctaHref}
          onClick={onNavigate}
          className="inline-flex min-h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-emerald-500 px-4 text-sm font-black text-white"
        >
          {link.ctaButton} <span className="ml-2">-&gt;</span>
        </a>
      </div>
    </details>
  );
}

function Logo({ isDarkMode }) {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Jawa EdTech home">
      <span
        className={`relative flex h-[54px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-sm ${
          isDarkMode ? "bg-white/10 ring-1 ring-emerald-200/25" : "bg-white/70 ring-1 ring-blue-200/60"
        }`}
      >
        <img
          src={jawaLogo}
          alt=""
          className="absolute left-[-14px] top-[-188px] w-[374px] max-w-none select-none"
          draggable="false"
        />
      </span>

      <span className="min-w-0 whitespace-nowrap leading-none">
        <span className={`font-heading text-[27px] font-black tracking-[-0.04em] ${isDarkMode ? "text-white" : "text-slate-950"}`}>
          JAWA
        </span>
        <span className="font-heading text-[27px] font-black tracking-[-0.04em] text-[#60A5FA]">
          {" "}EdTech
        </span>
      </span>
    </Link>
  );
}

export default Navbar;

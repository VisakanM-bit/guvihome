import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSearch, FaGraduationCap } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { NAV_LINKS } from "../../data/siteContent";
import { openCareerPopup } from "../../utils/careerPopupEvents";
import GlobalSearch from "../GlobalSearch/GlobalSearch";

function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const openSearch = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", openSearch);
    return () => window.removeEventListener("keydown", openSearch);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-jawa-card/95 backdrop-blur-md border-b border-slate-100 transition-all duration-300 ${
          scrolled ? "shadow-md py-0" : "shadow-sm"
        }`}
        role="banner"
      >
        <nav
          className={`container-jawa flex items-center justify-between transition-all duration-300 ${
            scrolled ? "py-2.5" : "py-4"
          }`}
          aria-label="Main navigation"
        >
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="Jawa EdTech home"
          >
            <FaGraduationCap
              className={`text-jawa-secondary transition-all ${
                scrolled ? "text-xl" : "text-2xl"
              }`}
            />
            <span
              className={`font-heading font-bold text-jawa-primary transition-all ${
                scrolled ? "text-base" : "text-lg"
              }`}
            >
              Jawa<span className="text-jawa-secondary"> EdTech</span>
            </span>
          </Link>

          <ul className="hidden xl:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(href);
                  }}
                  className="px-3 py-2 text-sm font-medium text-jawa-text hover:text-jawa-secondary rounded-lg hover:bg-jawa-bg transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex items-center gap-2 px-3 py-2 text-sm text-slate-500 bg-jawa-bg border border-slate-200 rounded-lg hover:border-jawa-secondary/40 transition"
              aria-label="Open search"
            >
              <FaSearch className="text-xs" />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden lg:inline text-[10px] bg-white px-1.5 py-0.5 rounded border border-slate-200">
                ⌘K
              </kbd>
            </button>

            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="sm:hidden p-2 text-slate-600 hover:text-jawa-secondary"
              aria-label="Open search"
            >
              <FaSearch />
            </button>

            <button
              type="button"
              onClick={openCareerPopup}
              className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-jawa-secondary border border-jawa-secondary rounded-lg hover:bg-green-50 transition"
            >
              Career Counseling
            </button>

            {isAuthenticated ? (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-jawa-text hover:text-jawa-secondary"
                >
                  {user?.name?.split(" ")[0] || "Dashboard"}
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="text-sm text-slate-500 hover:text-jawa-accent"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="inline-flex items-center px-4 py-2 text-sm font-bold text-white bg-jawa-primary rounded-lg hover:bg-slate-800 transition shadow-sm"
              >
                Get Started
              </Link>
            )}

            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden p-2 text-jawa-primary"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="xl:hidden border-t border-slate-100 bg-white max-h-[70vh] overflow-y-auto">
            <ul className="container-jawa py-4 space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className="block px-3 py-3 text-sm font-medium text-jawa-text hover:bg-jawa-bg rounded-lg"
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openCareerPopup();
                  }}
                  className="w-full text-left px-3 py-3 text-sm font-semibold text-jawa-secondary"
                >
                  Career Counseling
                </button>
              </li>
            </ul>
          </div>
        )}

        <div className="h-0.5 bg-gradient-to-r from-jawa-secondary via-green-400 to-jawa-secondary" />
      </header>

      <GlobalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

export default Navbar;

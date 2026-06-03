import { useState } from "react";
import { HERO, STATS, CAREER_ROADMAP } from "../../data/siteContent";
import {
  FaUsers,
  FaSearch,
  FaCode,
  FaPython,
  FaBrain,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import { openCareerPopup } from "../../utils/careerPopupEvents";

const ROADMAP_ICONS = {
  users: FaUsers,
  search: FaSearch,
  code: FaCode,
  python: FaPython,
  brain: FaBrain,
};

function Hero() {
  const [activeRoadmap, setActiveRoadmap] = useState(CAREER_ROADMAP[0].id);

  const scrollToPrograms = () => {
    document.querySelector("#programs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative bg-jawa-bg overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(22,163,74,0.08),_transparent_60%)]" />

      <div className="container-jawa section-padding relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-jawa-secondary text-xs font-semibold border border-green-100 mb-5">
              {HERO.badge}
            </span>

            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-[2.75rem] font-heading font-extrabold text-jawa-primary leading-[1.15] mb-4"
            >
              {HERO.title}
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-jawa-secondary mb-4">
              {HERO.subtitle}
            </p>

            <p className="text-jawa-text text-base sm:text-lg mb-6 max-w-lg leading-relaxed">
              {HERO.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {HERO.pillars.map((pillar) => (
                <span
                  key={pillar}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-jawa-card border border-slate-200 text-sm text-jawa-text shadow-sm"
                >
                  <FaCheckCircle className="text-jawa-secondary text-xs" />
                  {pillar}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openCareerPopup}
                className="inline-flex items-center gap-2 bg-jawa-secondary hover:bg-green-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-green-500/20 transition text-sm sm:text-base"
              >
                {HERO.ctaPrimary}
                <FaArrowRight className="text-xs" />
              </button>
              <button
                type="button"
                onClick={scrollToPrograms}
                className="inline-flex items-center gap-2 border-2 border-jawa-primary text-jawa-primary font-semibold px-6 py-3.5 rounded-xl hover:bg-jawa-primary hover:text-white transition text-sm sm:text-base"
              >
                {HERO.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Interactive career roadmap */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="bg-jawa-card rounded-2xl lg:rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Interactive Career Roadmap
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {CAREER_ROADMAP.map(({ id, label, icon }) => {
                  const Icon = ROADMAP_ICONS[icon];
                  const active = activeRoadmap === id;
                  return (
                    <button
                      key={id}
                      type="button"
                      onClick={() => setActiveRoadmap(id)}
                      className={`flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl border transition-all text-center ${
                        active
                          ? "border-jawa-secondary bg-green-50 text-jawa-secondary animate-roadmap-pulse"
                          : "border-slate-100 bg-jawa-bg text-jawa-text hover:border-green-200"
                      }`}
                      aria-pressed={active}
                    >
                      <Icon className={`text-xl ${active ? "text-jawa-secondary" : "text-slate-400"}`} />
                      <span className="text-xs sm:text-sm font-semibold leading-tight">{label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="rounded-xl bg-jawa-primary p-5 text-white">
                <p className="text-xs text-green-300 font-semibold uppercase tracking-wide mb-2">
                  Your Path
                </p>
                <div className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm font-medium">
                  {["Learn", "Practice", "Project", "Intern", "Interview", "Hired"].map(
                    (step, i, arr) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="px-2 py-1 rounded-md bg-white/10">{step}</span>
                        {i < arr.length - 1 && (
                          <span className="text-green-400" aria-hidden>
                            →
                          </span>
                        )}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <img
              src={HERO.image}
              alt="Jawa EdTech learners collaborating"
              className="hidden lg:block absolute -bottom-8 -right-8 w-48 h-48 rounded-2xl object-cover shadow-2xl border-4 border-white"
              loading="eager"
            />
          </div>
        </div>

        {/* Animated statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 lg:mt-16">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className="text-center bg-jawa-card rounded-2xl py-5 px-3 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all animate-count-pop"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-jawa-secondary">
                {value}
              </p>
              <p className="text-xs sm:text-sm text-jawa-text mt-1 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

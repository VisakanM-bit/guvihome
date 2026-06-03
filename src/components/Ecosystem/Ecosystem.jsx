import { useState, useEffect, useRef } from "react";
import { ECOSYSTEM } from "../../data/siteContent";
import {
  FaBook,
  FaLaptopCode,
  FaBriefcase,
  FaFolderOpen,
  FaUserTie,
  FaRocket,
  FaChevronDown,
} from "react-icons/fa";

const ICON_MAP = {
  book: FaBook,
  laptop: FaLaptopCode,
  briefcase: FaBriefcase,
  folder: FaFolderOpen,
  user: FaUserTie,
  rocket: FaRocket,
};

function Ecosystem() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="ecosystem"
      ref={sectionRef}
      className="section-padding bg-jawa-card"
      aria-labelledby="ecosystem-heading"
    >
      <div className="container-jawa">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2
            id="ecosystem-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-jawa-primary mb-3"
          >
            {ECOSYSTEM.title}
          </h2>
          <p className="text-lg font-semibold text-jawa-secondary mb-3">
            {ECOSYSTEM.subtitle}
          </p>
          <p className="text-jawa-text text-base leading-relaxed">
            {ECOSYSTEM.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {ECOSYSTEM.steps.map(({ step, desc, icon }, i) => {
            const Icon = ICON_MAP[icon];
            const isActive = activeStep === i;
            const isPast = i < activeStep;

            return (
              <div
                key={step}
                className={`relative flex gap-5 sm:gap-6 pb-8 last:pb-0 transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {i < ECOSYSTEM.steps.length - 1 && (
                  <div
                    className={`absolute left-6 top-14 w-0.5 h-[calc(100%-2rem)] transition-colors duration-500 ${
                      isPast ? "bg-jawa-secondary" : "bg-slate-200"
                    }`}
                    aria-hidden
                  />
                )}

                <button
                  type="button"
                  onClick={() => setActiveStep(i)}
                  className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-jawa-secondary text-white scale-110 shadow-lg shadow-green-500/30"
                      : isPast
                        ? "bg-green-100 text-jawa-secondary"
                        : "bg-jawa-bg text-slate-400 border border-slate-200"
                  }`}
                  aria-expanded={isActive}
                  aria-label={`Step ${i + 1}: ${step}`}
                >
                  <Icon className="text-lg" />
                </button>

                <div
                  className={`flex-1 pt-1 pb-2 cursor-pointer`}
                  onClick={() => setActiveStep(i)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setActiveStep(i)}
                >
                  <div className="flex items-center gap-2">
                    <h3
                      className={`text-lg sm:text-xl font-heading font-bold transition-colors ${
                        isActive ? "text-jawa-secondary" : "text-jawa-primary"
                      }`}
                    >
                      {step}
                    </h3>
                    {isActive && (
                      <FaChevronDown className="text-jawa-secondary text-xs animate-bounce" />
                    )}
                  </div>
                  <p
                    className={`text-sm sm:text-base mt-1 leading-relaxed transition-all duration-300 ${
                      isActive
                        ? "text-jawa-text max-h-24 opacity-100"
                        : "text-slate-400 max-h-0 opacity-0 overflow-hidden sm:max-h-none sm:opacity-100 sm:text-slate-500"
                    }`}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;

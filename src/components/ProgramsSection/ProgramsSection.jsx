import { useState } from "react";
import { FEATURED_PROGRAMS } from "../../data/siteContent";
import {
  FaClock,
  FaProjectDiagram,
  FaBriefcase,
  FaUserCheck,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { openCareerPopup } from "../../utils/careerPopupEvents";

function ProgramModal({ program, onClose }) {
  const [openModule, setOpenModule] = useState(0);

  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4"
      role="dialog"
      aria-labelledby="program-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-jawa-card w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl animate-fade-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-jawa-card border-b border-slate-100 px-6 py-4 flex items-start justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-jawa-secondary">
              {program.tag}
            </span>
            <h3
              id="program-modal-title"
              className="text-xl font-heading font-bold text-jawa-primary mt-1"
            >
              {program.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-jawa-bg text-slate-500"
            aria-label="Close"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          <p className="text-jawa-text text-sm mb-6">{program.desc}</p>

          <h4 className="text-sm font-bold text-jawa-primary uppercase tracking-wide mb-3">
            Program Modules
          </h4>
          <div className="space-y-2 mb-6">
            {program.modules.map((mod, i) => (
              <div
                key={mod}
                className="border border-slate-100 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenModule(openModule === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-semibold text-jawa-primary hover:bg-jawa-bg transition"
                  aria-expanded={openModule === i}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-green-50 text-jawa-secondary text-xs flex items-center justify-center font-bold">
                      {i + 1}
                    </span>
                    {mod}
                  </span>
                  <FaChevronDown
                    className={`text-slate-400 transition-transform ${
                      openModule === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openModule === i && (
                  <div className="px-4 pb-3 text-xs text-slate-500 border-t border-slate-50 pt-2">
                    Hands-on learning with assignments, case studies, and mentor feedback.
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              openCareerPopup();
            }}
            className="w-full py-3.5 bg-jawa-secondary text-white font-bold rounded-xl hover:bg-green-600 transition text-sm"
          >
            Get Free Career Counseling
          </button>
        </div>
      </div>
    </div>
  );
}

function ProgramsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="programs"
      className="section-padding bg-jawa-bg"
      aria-labelledby="programs-heading"
    >
      <div className="container-jawa">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="programs-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-jawa-primary mb-3"
          >
            Career Programs
          </h2>
          <p className="text-jawa-text text-base sm:text-lg leading-relaxed">
            Industry-focused HR &amp; technology programs with internships and placement support.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="bg-jawa-card rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-jawa-card/95 text-xs font-bold text-jawa-secondary shadow">
                  {program.tag}
                </span>
              </div>

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg font-heading font-bold text-jawa-primary mb-2 leading-snug">
                  {program.title}
                </h3>
                <p className="text-sm text-jawa-text mb-4 flex-1">{program.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {program.skills.slice(0, 4).map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-jawa-bg text-slate-600 border border-slate-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-jawa-text mb-4">
                  <span className="flex items-center gap-1.5">
                    <FaClock className="text-jawa-secondary" /> {program.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaProjectDiagram className="text-jawa-secondary" /> {program.projects} Projects
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaBriefcase className="text-jawa-secondary" />
                    {program.internship ? "Internship ✓" : "—"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FaUserCheck className="text-jawa-secondary" />
                    {program.placement ? "Placement ✓" : "—"}
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-4">
                  <span className="font-semibold text-jawa-primary">Careers: </span>
                  {program.careers.join(" · ")}
                </p>

                <button
                  type="button"
                  onClick={() => setSelected(program)}
                  className="w-full py-3 border-2 border-jawa-primary text-jawa-primary font-bold rounded-xl hover:bg-jawa-primary hover:text-white transition text-sm"
                >
                  Learn More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProgramModal program={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

export default ProgramsSection;

import { FEATURED_PROGRAMS, CAREER_PATH_STEPS } from "../../data/siteContent";
import { FaArrowRight } from "react-icons/fa";

function CareerPath() {
  return (
    <section
      className="section-padding bg-jawa-card"
      aria-labelledby="career-path-heading"
    >
      <div className="container-jawa">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="career-path-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-jawa-primary mb-3"
          >
            Career Path Visualization
          </h2>
          <p className="text-jawa-text text-base leading-relaxed">
            Every program follows a proven path from learning to placement.
          </p>
        </div>

        <div className="space-y-8">
          {FEATURED_PROGRAMS.map((program) => (
            <div
              key={program.id}
              className="bg-jawa-bg rounded-2xl border border-slate-100 p-5 sm:p-6 hover:shadow-md transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
                <div>
                  <span className="text-xs font-bold text-jawa-secondary uppercase">
                    {program.tag}
                  </span>
                  <h3 className="text-lg font-heading font-bold text-jawa-primary">
                    {program.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 sm:text-right max-w-xs">
                  {program.careers.join(" · ")}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {CAREER_PATH_STEPS.map((step, i) => (
                  <span key={step} className="flex items-center gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-jawa-card border border-slate-200 text-xs sm:text-sm font-semibold text-jawa-primary shadow-sm">
                      {step}
                    </span>
                    {i < CAREER_PATH_STEPS.length - 1 && (
                      <FaArrowRight className="text-jawa-secondary text-xs shrink-0 hidden sm:block" aria-hidden />
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareerPath;

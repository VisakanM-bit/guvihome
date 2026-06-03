import { PLACEMENT_ROADMAP, CTA_FINAL } from "../../data/siteContent";
import { openCareerPopup } from "../../utils/careerPopupEvents";
import { FaCheckCircle } from "react-icons/fa";

function PlacementRoadmap() {
  return (
    <section
      id="placements"
      className="section-padding bg-gradient-to-br from-jawa-primary via-slate-900 to-jawa-primary text-white"
      aria-labelledby="placement-heading"
    >
      <div className="container-jawa">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2
            id="placement-heading"
            className="text-3xl sm:text-4xl font-heading font-bold mb-3"
          >
            {PLACEMENT_ROADMAP.title}
          </h2>
          <p className="text-green-200 text-base sm:text-lg">
            {PLACEMENT_ROADMAP.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PLACEMENT_ROADMAP.stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center bg-white/10 backdrop-blur rounded-2xl py-5 px-3 border border-white/10"
            >
              <p className="text-2xl sm:text-3xl font-heading font-extrabold text-green-300">
                {value}
              </p>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {PLACEMENT_ROADMAP.steps.map(({ step, desc }, i) => (
            <div
              key={step}
              className="relative bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10 hover:bg-white/10 transition"
            >
              <span className="absolute -top-2.5 left-4 w-6 h-6 rounded-full bg-jawa-secondary text-white text-xs font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <h3 className="font-heading font-bold text-sm sm:text-base mt-2 mb-1">
                {step}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-xl mx-auto">
          <h3 className="text-2xl font-heading font-bold mb-3">{CTA_FINAL.title}</h3>
          <p className="text-green-100 text-sm sm:text-base mb-6 leading-relaxed">
            {CTA_FINAL.description}
          </p>
          <button
            type="button"
            onClick={openCareerPopup}
            className="inline-flex items-center gap-2 bg-white text-jawa-primary font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition shadow-xl text-sm sm:text-base"
          >
            <FaCheckCircle className="text-jawa-secondary" />
            {CTA_FINAL.button}
          </button>
          <p className="text-green-200/70 text-xs mt-4">{CTA_FINAL.footer}</p>
        </div>
      </div>
    </section>
  );
}

export default PlacementRoadmap;

import { Link } from "react-router-dom";
import { PLACEMENT, CTA_FINAL } from "../../data/siteContent";

function Proud() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 bg-gradient-to-br from-emerald-700 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
          {PLACEMENT.title}
        </h2>
        <p className="text-emerald-100 text-lg sm:text-xl mb-10">{PLACEMENT.subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
          {PLACEMENT.items.map((item) => (
            <div
              key={item}
              className="bg-white/10 backdrop-blur rounded-xl px-4 py-3 text-sm font-medium border border-white/10"
            >
              {item}
            </div>
          ))}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">{CTA_FINAL.title}</h3>
        <p className="text-emerald-100 max-w-2xl mx-auto mb-8 leading-relaxed">
          {CTA_FINAL.description}
        </p>
        <Link
          to="/auth?from=expert"
          className="inline-block bg-white text-emerald-800 font-bold px-10 py-4 rounded-xl hover:bg-emerald-50 transition text-lg shadow-xl"
        >
          {CTA_FINAL.button}
        </Link>
        <p className="text-emerald-200/80 text-sm mt-6">{CTA_FINAL.footer}</p>
      </div>
    </section>
  );
}

export default Proud;

import { Link } from "react-router-dom";
import { INTERNSHIP } from "../../data/siteContent";

function Assessments() {
  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 px-4 sm:px-8" id="internship">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 rounded-3xl overflow-hidden shadow-lg">
        <div className="grid lg:grid-cols-2 gap-8 p-8 sm:p-12 lg:p-14">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {INTERNSHIP.title}
            </h2>
            <p className="text-lg font-semibold text-emerald-700 mb-3">
              {INTERNSHIP.subtitle}
            </p>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
              {INTERNSHIP.description}
            </p>
            <Link
              to="/auth?from=expert"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl transition"
            >
              Apply for Internship
            </Link>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
              Internship Domains
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {INTERNSHIP.domains.map((d) => (
                <span
                  key={d}
                  className="px-3 py-1.5 rounded-lg bg-white border border-emerald-200 text-sm text-slate-700"
                >
                  {d}
                </span>
              ))}
            </div>
            <p className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">
              Benefits
            </p>
            <ul className="space-y-2">
              {INTERNSHIP.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-slate-600 text-sm">
                  <span className="text-emerald-500">✓</span> {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Assessments;

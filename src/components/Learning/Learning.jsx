import { useState } from "react";
import { PRACTICE_LABS } from "../../data/siteContent";

function Learning() {
  const [active, setActive] = useState(0);
  const section = PRACTICE_LABS[active];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-8" id="practice-labs">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            Jawa Practice Labs
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Practice. Build. Improve. Hands-on environments to strengthen your skills.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
          {PRACTICE_LABS.map((lab, i) => (
            <button
              key={lab.title}
              type="button"
              onClick={() => setActive(i)}
              className={`px-4 py-2.5 rounded-xl text-sm font-bold transition ${
                active === i
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-700 hover:bg-emerald-50"
              }`}
            >
              {lab.title}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-100">
          <img
            src={section.image}
            alt={section.title}
            className="w-full rounded-2xl object-cover aspect-video lg:aspect-[4/3] shadow-lg"
          />
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              {section.title}
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">{section.desc}</p>
            <ul className="space-y-2 text-slate-700">
              <li>✓ Resume Builder — ATS-friendly resumes</li>
              <li>✓ LinkedIn Profile Builder</li>
              <li>✓ Interview &amp; assignment practice</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learning;

import { BRAND, CTA_FINAL } from "../../data/siteContent";
import { openCareerPopup } from "../../utils/careerPopupEvents";

function Resources() {
  return (
    <section
      id="resources"
      className="section-padding bg-jawa-bg"
      aria-labelledby="resources-heading"
    >
      <div className="container-jawa max-w-4xl">
        <div className="text-center bg-jawa-card rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-100">
          <h2
            id="resources-heading"
            className="text-2xl sm:text-3xl font-heading font-bold text-jawa-primary mb-4"
          >
            Start Your Career Journey Today
          </h2>
          <p className="text-jawa-text mb-6 leading-relaxed">
            Free career resources, program guides, and expert counseling — all in one place.
          </p>
          <button
            type="button"
            onClick={openCareerPopup}
            className="inline-block bg-jawa-secondary hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition"
          >
            {CTA_FINAL.button}
          </button>
        </div>

        <div
          id="contact"
          className="mt-8 grid sm:grid-cols-3 gap-4 text-center"
          aria-labelledby="contact-heading"
        >
          <h3 id="contact-heading" className="sr-only">
            Contact Jawa EdTech
          </h3>
          <a
            href={`mailto:${BRAND.email}`}
            className="bg-jawa-card rounded-xl p-5 border border-slate-100 hover:border-jawa-secondary/30 transition"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Email</p>
            <p className="text-sm font-semibold text-jawa-secondary">{BRAND.email}</p>
          </a>
          <a
            href={`tel:${BRAND.phone.replace(/\s/g, "")}`}
            className="bg-jawa-card rounded-xl p-5 border border-slate-100 hover:border-jawa-secondary/30 transition"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Phone</p>
            <p className="text-sm font-semibold text-jawa-secondary">{BRAND.phone}</p>
          </a>
          <div className="bg-jawa-card rounded-xl p-5 border border-slate-100">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Location</p>
            <p className="text-sm text-jawa-text leading-relaxed">Coimbatore, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resources;

import { ABOUT } from "../../data/siteContent";
import { openCareerPopup } from "../../utils/careerPopupEvents";

function About() {
  return (
    <section
      id="about"
      className="section-padding bg-jawa-card"
      aria-labelledby="about-heading"
    >
      <div className="container-jawa grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
            alt="Jawa EdTech learners and mentors"
            className="w-full max-w-md rounded-3xl shadow-2xl object-cover aspect-[4/5] border-4 border-green-100"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-block bg-green-50 text-jawa-secondary px-4 py-2 rounded-full text-sm font-bold mb-6">
            About Us
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-jawa-primary leading-tight mb-6"
          >
            {ABOUT.title}
          </h2>
          <p className="text-jawa-text text-base sm:text-lg leading-relaxed mb-8">
            {ABOUT.description}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {ABOUT.highlights.map((h) => (
              <div
                key={h}
                className="bg-jawa-bg rounded-xl p-4 border border-slate-100 text-center"
              >
                <p className="font-bold text-jawa-secondary text-sm sm:text-base">{h}</p>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={openCareerPopup}
            className="inline-flex items-center px-6 py-3 bg-jawa-primary text-white font-semibold rounded-xl hover:bg-slate-800 transition text-sm"
          >
            Talk to Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;

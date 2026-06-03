import { FaBuilding, FaUsers, FaHandshake, FaGraduationCap } from "react-icons/fa";
import { CORPORATE } from "../../data/siteContent";

const ICONS = [FaBuilding, FaUsers, FaHandshake, FaGraduationCap];

function Corporate() {
  return (
    <section
      className="section-padding bg-jawa-card"
      id="corporate"
      aria-labelledby="corporate-heading"
    >
      <div className="container-jawa">
        <div className="text-center mb-12">
          <h2
            id="corporate-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-jawa-primary mb-3"
          >
            {CORPORATE.title}
          </h2>
          <p className="text-lg text-jawa-text">{CORPORATE.subtitle}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORPORATE.services.map(({ title, desc }, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={title}
                className="bg-jawa-bg rounded-2xl p-6 text-center border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-jawa-secondary text-white flex items-center justify-center text-2xl mb-5">
                  <Icon />
                </div>
                <h3 className="text-lg font-heading font-bold text-jawa-primary mb-2">{title}</h3>
                <p className="text-jawa-text text-sm leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Corporate;

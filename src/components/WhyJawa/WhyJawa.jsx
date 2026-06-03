import { WHY_JAWA } from "../../data/siteContent";
import {
  FaBookOpen,
  FaBriefcase,
  FaProjectDiagram,
  FaHandshake,
  FaChalkboardTeacher,
  FaCertificate,
  FaUserTie,
  FaComments,
} from "react-icons/fa";

const ICONS = {
  curriculum: FaBookOpen,
  internship: FaBriefcase,
  projects: FaProjectDiagram,
  placement: FaHandshake,
  mentors: FaChalkboardTeacher,
  cert: FaCertificate,
  coaching: FaUserTie,
  interview: FaComments,
};

function WhyJawa() {
  return (
    <section
      className="section-padding bg-jawa-bg"
      aria-labelledby="why-jawa-heading"
    >
      <div className="container-jawa">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="why-jawa-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-jawa-primary mb-3"
          >
            Why Jawa EdTech
          </h2>
          <p className="text-jawa-text text-base leading-relaxed">
            Not just courses — a complete career transformation ecosystem.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_JAWA.map(({ title, desc, icon }) => {
            const Icon = ICONS[icon];
            return (
              <div
                key={title}
                className="bg-jawa-card rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-green-50 text-jawa-secondary flex items-center justify-center mb-4">
                  <Icon className="text-lg" />
                </div>
                <h3 className="text-base font-heading font-bold text-jawa-primary mb-2">
                  {title}
                </h3>
                <p className="text-sm text-jawa-text leading-relaxed">{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyJawa;

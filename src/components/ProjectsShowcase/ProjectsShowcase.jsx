import { useState } from "react";
import { PROJECTS } from "../../data/siteContent";

function ProjectsShowcase() {
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  return (
    <section
      id="projects"
      className="section-padding bg-jawa-primary text-white"
      aria-labelledby="projects-heading"
    >
      <div className="container-jawa">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-white mb-3"
          >
            Project Showcase
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Build real-world applications that demonstrate your skills to recruiters.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-800">
            <img
              key={project.title}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover animate-fade-in"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-jawa-primary/80 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-300">
                {project.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-bold mt-1">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mt-1">{project.desc}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
            {PROJECTS.map((p, i) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActive(i)}
                className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                  active === i
                    ? "border-jawa-secondary bg-white/10 shadow-lg"
                    : "border-white/10 bg-white/5 hover:bg-white/10"
                }`}
                aria-pressed={active === i}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-green-300">
                  {p.category}
                </span>
                <p className="text-sm font-semibold mt-1 leading-snug">{p.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;

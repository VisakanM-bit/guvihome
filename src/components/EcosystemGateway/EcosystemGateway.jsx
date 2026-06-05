import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaCertificate,
  FaChartLine,
  FaGraduationCap,
  FaHandshake,
  FaLaptopCode,
  FaRocket,
  FaUserTie,
} from "react-icons/fa";

const pathwayImages = {
  internships: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
  practice: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop",
  placement: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop",
  mentorship: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1400&auto=format&fit=crop",
  career: "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1400&auto=format&fit=crop",
  about: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
};

const pathways = [
  {
    id: "internships",
    title: "Internship Hub",
    eyebrow: "Real Industry Experience",
    description: "Work on live assignments, guided workflows, mentor reviews, and certification-ready deliverables.",
    image: pathwayImages.internships,
    href: "/internships/human-resource-internship",
    icon: FaBriefcase,
    accent: "from-emerald-300 via-cyan-300 to-green-400",
    stats: ["6 Week Flow", "Live Tasks", "Certificate"],
  },
  {
    id: "practice",
    title: "Practice Hub",
    eyebrow: "Practice. Build. Improve.",
    description: "Enter project labs, assignments, case studies, interview preparation, and portfolio-building activities.",
    image: pathwayImages.practice,
    href: "/practice-hub",
    icon: FaLaptopCode,
    accent: "from-cyan-300 via-sky-300 to-emerald-300",
    stats: ["Project Lab", "Case Studies", "Reports"],
  },
  {
    id: "placement",
    title: "Placement Assistance",
    eyebrow: "Get Career Ready",
    description: "Prepare with resumes, LinkedIn optimization, technical rounds, HR rounds, referrals, and job readiness support.",
    image: pathwayImages.placement,
    href: "/placement-assistance",
    icon: FaChartLine,
    accent: "from-lime-300 via-emerald-300 to-cyan-300",
    stats: ["95% Readiness", "300+ Opportunities", "Mock Rounds"],
  },
  {
    id: "mentorship",
    title: "Mentorship",
    eyebrow: "Learn From Experts",
    description: "Book mentor sessions for project support, career planning, interview guidance, and skill gap analysis.",
    image: pathwayImages.mentorship,
    href: "/mentorship",
    icon: FaHandshake,
    accent: "from-blue-300 via-cyan-300 to-emerald-300",
    stats: ["100+ Mentors", "1:1 Support", "Roadmaps"],
  },
  {
    id: "career-services",
    title: "Career Services",
    eyebrow: "Complete Career Support",
    description: "Build resumes, portfolios, personal branding, salary negotiation confidence, and job search strategy.",
    image: pathwayImages.career,
    href: "/career-services",
    icon: FaUserTie,
    accent: "from-amber-200 via-emerald-300 to-cyan-300",
    stats: ["Resume Lab", "Portfolio", "Branding"],
  },
  {
    id: "about-edtech",
    title: "About Jawa EdTech",
    eyebrow: "Career Transformation",
    description: "Explore Jawa EdTech's learning ecosystem for future HR and technology professionals.",
    image: pathwayImages.about,
    href: "/about-edtech",
    icon: FaBuilding,
    accent: "from-violet-300 via-cyan-300 to-emerald-300",
    stats: ["5000+ Learners", "100+ Mentors", "300+ Hiring"],
  },
];

const steps = [
  ["Learn", FaGraduationCap],
  ["Practice", FaLaptopCode],
  ["Intern", FaBriefcase],
  ["Build", FaRocket],
  ["Prepare", FaCertificate],
  ["Get Hired", FaChartLine],
];

function EcosystemGateway() {
  return (
    <section id="career-ecosystem" className="relative overflow-hidden px-4 py-14 text-white sm:px-6 md:px-8 lg:px-10 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,197,94,0.22),transparent_34%),radial-gradient(circle_at_15%_90%,rgba(34,211,238,0.16),transparent_32%),linear-gradient(180deg,rgba(0,0,0,0.1),rgba(2,6,23,0.24),rgba(0,0,0,0.04))]" />
      <div className="absolute left-1/2 top-12 h-80 w-[min(720px,90vw)] -translate-x-1/2 rounded-full bg-emerald-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
            Jawa Career Ecosystem
          </p>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-white sm:text-4xl lg:text-6xl">
            Choose Your Next Career Pathway
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-200 sm:text-lg">
            Move from learning to real experience, projects, mentorship, placement preparation, and career transformation through one connected platform.
          </p>
        </div>

        <div className="mx-auto mt-9 grid max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map(([label, Icon], index) => (
            <div key={label} className="relative overflow-hidden rounded-2xl border border-emerald-200/14 bg-white/[0.065] p-4 text-center shadow-[0_18px_60px_-44px_rgba(34,197,94,0.82)] backdrop-blur-xl">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-300 text-slate-950 shadow-[0_0_30px_rgba(56,189,248,0.35)]">
                <Icon />
              </div>
              <p className="text-xs font-black uppercase tracking-[0.14em] text-emerald-100/80">Step {index + 1}</p>
              <h3 className="mt-1 text-base font-black text-white">{label}</h3>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 2xl:gap-7">
          {pathways.map(({ id, title, eyebrow, description, image, href, icon: Icon, accent, stats }) => (
            <Link
              key={title}
              id={id}
              to={href}
              className="ecosystem-path-card group relative flex min-h-[29rem] overflow-hidden rounded-[1.35rem] border border-emerald-200/14 bg-white/[0.06] shadow-[0_28px_90px_-60px_rgba(34,197,94,0.85)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-emerald-200/28 hover:bg-white/[0.09]"
            >
              <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-42 transition duration-700 group-hover:scale-105 group-hover:opacity-52" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.22),rgba(0,0,0,0.76)_58%,rgba(0,0,0,0.96))]" />
              <div className={`absolute left-5 top-5 h-24 w-24 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-2xl transition group-hover:opacity-35`} />
              <div className="relative z-10 flex w-full flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} text-2xl text-slate-950 shadow-[0_0_38px_rgba(52,211,153,0.38)]`}>
                    <Icon />
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-200">{eyebrow}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-white sm:text-4xl">{title}</h3>
                  <p className="mt-4 max-w-md text-sm font-semibold leading-7 text-slate-200">{description}</p>
                </div>

                <div className="mt-8">
                  <div className="grid gap-2">
                    {stats.map((stat) => (
                      <span key={stat} className="rounded-2xl border border-white/12 bg-white/[0.08] px-4 py-3 text-sm font-black text-slate-100 backdrop-blur-xl">
                        {stat}
                      </span>
                    ))}
                  </div>
                  <span className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-2xl border border-sky-200/20 bg-gradient-to-r from-sky-500 to-violet-600 px-5 text-sm font-black text-white shadow-[0_18px_50px_-32px_rgba(56,189,248,0.9)] transition group-hover:from-sky-400 group-hover:to-violet-500">
                    Open {title}
                    <FaArrowRight className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EcosystemGateway;

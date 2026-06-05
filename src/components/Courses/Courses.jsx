import {
  FaBrain,
  FaBriefcase,
  FaCheck,
  FaCode,
  FaFlask,
  FaNetworkWired,
  FaPython,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const programImages = {
  hr: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1200&auto=format&fit=crop",
  recruitment: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  fullStack: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  python: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  aiml: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  devops: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=1200&auto=format&fit=crop",
  qa: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
  mulesoft: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
};

const programs = [
  {
    icon: FaUserTie,
    image: programImages.hr,
    title: "Human Resource Executive & Development Program",
    slug: "human-resource-executive-development",
    subtitle: "Become the HR Professional Every Company Wants",
    skills: ["HR Operations", "Payroll Processing", "HRMS Tools", "HR Analytics"],
    support: ["Internship Support", "Placement Assistance"],
  },
  {
    icon: FaUsers,
    image: programImages.recruitment,
    title: "Recruitment & Talent Acquisition Program",
    slug: "recruitment-talent-acquisition-development",
    subtitle: "Master Modern Hiring & Talent Intelligence",
    skills: [
      "Talent Sourcing",
      "LinkedIn Recruiting",
      "Boolean Search",
      "Recruitment Analytics",
    ],
    support: ["Internship Support", "Placement Assistance"],
  },
  {
    icon: FaCode,
    image: programImages.fullStack,
    title: "Full Stack Development Program",
    slug: "full-stack-development",
    subtitle: "Build Modern Web Applications from Scratch",
    skills: ["HTML, CSS, JavaScript", "React.js", "Node.js", "MongoDB"],
    support: ["Live Projects", "Placement Assistance"],
  },
  {
    icon: FaPython,
    image: programImages.python,
    title: "Python Development Program",
    slug: "python-development",
    subtitle: "Master Python for Industry Applications",
    skills: ["Core Python", "OOP Concepts", "APIs", "Real Projects"],
    support: ["Mentor Support", "Internship Assistance"],
  },
  {
    icon: FaBrain,
    image: programImages.aiml,
    title: "Artificial Intelligence & Machine Learning",
    slug: "artificial-intelligence-machine-learning",
    subtitle: "Build Intelligent Systems & AI Solutions",
    skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    support: ["Industry Projects", "Career Guidance"],
  },
  {
    icon: FaBriefcase,
    image: programImages.devops,
    title: "DevOps Engineering Program",
    slug: "devops-engineering",
    subtitle: "Master Modern Software Delivery",
    skills: ["Linux", "Docker", "Kubernetes", "AWS"],
    support: ["Live Labs", "Placement Support"],
  },
  {
    icon: FaFlask,
    image: programImages.qa,
    title: "Software Testing & QA Program",
    slug: "software-testing-qa",
    subtitle: "Become a Quality Assurance Professional",
    skills: ["Manual Testing", "Automation Testing", "Agile Testing", "Defect Tracking"],
    support: ["Practical Labs", "Real-Time Testing Projects"],
  },
  {
    icon: FaNetworkWired,
    image: programImages.mulesoft,
    title: "MuleSoft Development Program",
    slug: "mulesoft-development",
    subtitle: "Master Enterprise API Integration",
    skills: ["API Development", "Integration Patterns", "CloudHub", "Anypoint Platform"],
    support: ["Industry Exposure", "Career Support"],
  },
];

function Courses() {
  return (
    <section id="courses" className="career-programs-section px-4 py-12 sm:px-6 md:px-8 lg:px-8 lg:py-16 2xl:px-10">
      <div className="w-full">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-3 text-sm font-extrabold uppercase tracking-[0.18em] text-[#00a86b]">
            Career Accelerator Programs
          </p>
          <h1 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            Explore Career Accelerator Programs
          </h1>
          <p className="mt-4 text-base font-medium leading-7 text-slate-600 sm:text-lg">
            Industry-focused learning paths designed to help you Learn, Practice,
            Intern & Get Hired.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 2xl:gap-7">
          {programs.map(({ icon: Icon, image, title, subtitle, skills, support, slug }) => (
            <Link
              key={title}
              to={`/programs/${slug}`}
              className="career-program-card group flex min-h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1"
            >
              <div className="relative h-52 overflow-hidden bg-slate-900 2xl:h-60">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                <span className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-xl text-[#00a86b] shadow-xl">
                  <Icon />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 2xl:p-6">
                <h2 className="min-h-[64px] text-xl font-black leading-snug text-slate-950 2xl:text-2xl">
                  {title}
                </h2>
                <p className="mt-3 min-h-[48px] text-sm font-bold leading-6 text-slate-600 2xl:text-base">
                  {subtitle}
                </p>

                <div className="mt-5 grid gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="flex items-center gap-2 text-sm font-semibold text-slate-700 2xl:text-base">
                      <FaCheck className="shrink-0 text-[#00a86b]" />
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid gap-2 border-t border-slate-100 pt-4">
                  {support.map((item) => (
                    <span key={item} className="text-sm font-extrabold text-slate-800 2xl:text-base">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3 pt-5">
                  <span className="flex min-h-12 flex-1 items-center justify-center rounded-xl border border-slate-300 px-3 text-sm font-extrabold text-slate-700 transition hover:bg-slate-50 2xl:text-base">
                    View Curriculum
                  </span>
                  <span className="flex min-h-12 flex-1 items-center justify-center rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-3 text-sm font-extrabold text-white shadow-lg shadow-sky-500/20 transition hover:from-sky-400 hover:to-violet-500 2xl:text-base">
                    Explore Program
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

export default Courses;

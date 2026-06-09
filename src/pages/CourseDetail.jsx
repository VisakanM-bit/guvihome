/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaAward,
  FaBriefcase,
  FaCertificate,
  FaChartLine,
  FaCheck,
  FaCloudDownloadAlt,
  FaCode,
  FaCogs,
  FaEnvelope,
  FaGraduationCap,
  FaHandshake,
  FaLayerGroup,
  FaLightbulb,
  FaLock,
  FaNetworkWired,
  FaPhoneAlt,
  FaQuestionCircle,
  FaRocket,
  FaTimes,
  FaTools,
  FaUserTie,
} from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer1 from "../components/Footer1/Footer1";
import { useAuth } from "../context/AuthContext";
import { courseProgramMap } from "../data/coursePrograms";
import jawaEdTechLogo from "../assets/logos/jawa-edtech-logo-clean.png";
import {
  expertCareerGoals,
  expertLanguages,
  expertProgramOptions,
} from "../data/expertOptions";
import { saveExpertLead } from "../services/sheetsApi";

const iconMap = {
  "Human Resources": FaUserTie,
  Recruitment: FaBriefcase,
  Technology: FaCode,
  "Artificial Intelligence": FaLayerGroup,
  "Cloud & DevOps": FaNetworkWired,
  "Quality Assurance": FaCheck,
  "Enterprise Integration": FaCogs,
};

const overviewCards = [
  ["Industry Demand", "Programs are aligned to hiring needs across growing HR, technology, QA, cloud, and enterprise integration teams."],
  ["Real-World Application", "Every program converts theory into workplace tasks, simulations, assignments, and portfolio-ready project work."],
  ["Future Scope", "Learners build practical foundations for roles that continue to expand with automation, AI, cloud, and digital transformation."],
  ["Salary Potential", "The curriculum focuses on job-ready skills, interview preparation, and demonstrable work that supports career growth."],
  ["Industries Hiring", "Skills apply across startups, IT services, product companies, HR teams, consulting firms, and global enterprises."],
];

const practicalSteps = [
  "Real-time Simulations",
  "Industry Assignments",
  "Case Studies",
  "Projects",
  "Internships",
  "Mock Interviews",
  "Portfolio Building",
  "Resume Building",
  "Industry Mentorship",
];

const exposure = [
  "Live Assignments",
  "Case Studies",
  "Business Simulations",
  "Expert Sessions",
  "Practical Workshops",
  "Industry Mentorship",
  "Corporate Workflows",
  "Interview Preparation",
  "Placement Training",
];

const whyChoose = [
  "Industry-Oriented Curriculum",
  "100% Practical Learning",
  "Real-Time Case Studies",
  "Industry Mentors",
  "Internship Support",
  "Placement Assistance",
  "Resume Building",
  "Mock Interviews",
  "Career Coaching",
  "Certification",
];

const journey = ["Learn", "Practice", "Build Projects", "Intern", "Prepare", "Get Hired"];

const stats = [
  ["5000+", "Learners Empowered"],
  ["100+", "Industry Mentors"],
  ["300+", "Hiring Opportunities"],
  ["95%", "Career Readiness"],
  ["100%", "Practical Learning"],
];

const faqs = [
  ["Who can join?", "Freshers, graduates, working professionals, and career switchers can join based on their chosen program track."],
  ["Are there any prerequisites?", "Most programs start from foundations. Technical tracks benefit from basic computer familiarity and a willingness to practice."],
  ["Is internship support available?", "Yes. Internship-oriented practice, project exposure, mentorship, and readiness support are part of the learning path."],
  ["Do I get placement support?", "Yes. Learners receive resume support, mock interviews, career guidance, and placement assistance."],
  ["Will I receive certification?", "Yes. Learners receive an industry-recognized certification after successful completion."],
  ["What is the duration?", "Duration can vary by weekday or weekend batch. The counseling team can share the latest schedule for each program."],
  ["Are live projects included?", "Yes. Each program includes hands-on projects, simulations, assignments, or capstone-style deliverables."],
  ["Is flexible learning available?", "Batch options and schedules are designed for learners and working professionals wherever possible."],
  ["What career support is included?", "Career support includes resume building, LinkedIn optimization, interview preparation, mentorship, and hiring readiness."],
  ["Will I get mentor access?", "Yes. Industry mentor guidance and expert sessions are included in the practical learning experience."],
];

const accentMap = {
  "Human Resources": {
    glow: "from-emerald-300 via-cyan-300 to-lime-300",
    soft: "bg-emerald-300/10 text-emerald-100 border-emerald-200/20",
    icon: "bg-emerald-300 text-slate-950 shadow-[0_0_54px_rgba(52,211,153,0.55)]",
  },
  Recruitment: {
    glow: "from-cyan-300 via-sky-300 to-emerald-300",
    soft: "bg-cyan-300/10 text-cyan-100 border-cyan-200/20",
    icon: "bg-cyan-300 text-slate-950 shadow-[0_0_54px_rgba(103,232,249,0.52)]",
  },
  Technology: {
    glow: "from-blue-300 via-emerald-300 to-violet-300",
    soft: "bg-blue-300/10 text-blue-100 border-blue-200/20",
    icon: "bg-blue-300 text-slate-950 shadow-[0_0_54px_rgba(147,197,253,0.52)]",
  },
  "Artificial Intelligence": {
    glow: "from-fuchsia-300 via-cyan-300 to-emerald-300",
    soft: "bg-fuchsia-300/10 text-fuchsia-100 border-fuchsia-200/20",
    icon: "bg-fuchsia-300 text-slate-950 shadow-[0_0_54px_rgba(240,171,252,0.48)]",
  },
  "Cloud & DevOps": {
    glow: "from-amber-200 via-emerald-300 to-cyan-300",
    soft: "bg-amber-300/10 text-amber-100 border-amber-200/20",
    icon: "bg-amber-200 text-slate-950 shadow-[0_0_54px_rgba(253,230,138,0.46)]",
  },
  "Quality Assurance": {
    glow: "from-rose-300 via-emerald-300 to-cyan-300",
    soft: "bg-rose-300/10 text-rose-100 border-rose-200/20",
    icon: "bg-rose-300 text-slate-950 shadow-[0_0_54px_rgba(253,164,175,0.45)]",
  },
  "Enterprise Integration": {
    glow: "from-violet-300 via-cyan-300 to-emerald-300",
    soft: "bg-violet-300/10 text-violet-100 border-violet-200/20",
    icon: "bg-violet-300 text-slate-950 shadow-[0_0_54px_rgba(196,181,253,0.48)]",
  },
};

const cardTones = [
  "course-tone-emerald",
  "course-tone-cyan",
  "course-tone-blue",
  "course-tone-violet",
  "course-tone-amber",
  "course-tone-rose",
];

function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [tabletOpen, setTabletOpen] = useState(false);
  const program = courseProgramMap[slug];

  if (!program) {
    return <Navigate to="/#courses" replace />;
  }

  const ProgramIcon = iconMap[program.category] || FaGraduationCap;
  const accent = accentMap[program.category] || accentMap.Technology;

  const openEnrollmentTablet = () => {
    navigate("/", {
      state: {
        authPrompt: "expert",
        showEnrollmentPopup: true,
        program: program.title,
      },
    });
  };

  return (
    <>
      <Navbar />
      <main className="course-detail-bg min-h-screen overflow-hidden text-white">
        <section className="relative px-5 pb-5 pt-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 lg:pb-6">
          <div className="relative z-10 mx-auto max-w-[1540px]">
            <Link
              to="/#courses"
              className="mb-4 inline-flex items-center gap-2 text-sm font-black text-emerald-200 transition hover:text-white"
            >
              <FaArrowLeft />
              Back to programs
            </Link>

            <div className="course-hero-panel course-sparkle-field grid gap-4 rounded-2xl border border-emerald-200/15 bg-white/[0.055] p-5 shadow-[0_30px_120px_-70px_rgba(34,197,94,0.8)] backdrop-blur-2xl sm:p-6 lg:grid-cols-[1.08fr_0.92fr] lg:p-6 xl:p-7">
              <div className="relative z-10">
                <div className={`mb-4 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${accent.soft}`}>
                  <ProgramIcon />
                  {program.category}
                </div>
                <h1 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                  {program.title}
                </h1>
                <p className="mt-4 max-w-3xl text-2xl font-black tracking-[-0.02em] text-emerald-200">
                  {program.tagline}
                </p>
                <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-200 sm:text-lg">
                  {program.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={openEnrollmentTablet}
                    className={`inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r ${accent.glow} px-6 text-sm font-black text-slate-950 shadow-xl shadow-emerald-400/25 transition hover:-translate-y-0.5`}
                  >
                    <FaRocket />
                    Enroll Now
                  </button>
                  <a
                    href="#curriculum"
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-emerald-200/20 bg-white/[0.08] px-6 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white/[0.13]"
                  >
                    <FaCloudDownloadAlt />
                    Download Curriculum
                  </a>
                  <button
                    type="button"
                    onClick={openEnrollmentTablet}
                    className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-cyan-200/25 bg-cyan-300/10 px-6 text-sm font-black text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-300/15"
                  >
                    <FaPhoneAlt />
                    Talk To Career Counselor
                  </button>
                </div>
              </div>

              <div className="relative z-10 rounded-2xl border border-emerald-200/15 bg-slate-950/42 p-3 shadow-inner shadow-emerald-950/30">
                <div className="course-device-card flex min-h-[20rem] flex-col justify-between rounded-[1.2rem] border border-emerald-300/18 bg-[radial-gradient(circle_at_72%_20%,rgba(34,197,94,0.22),transparent_34%),linear-gradient(145deg,rgba(15,23,42,0.88),rgba(0,0,0,0.74))] p-5">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl ${accent.icon}`}>
                    <ProgramIcon />
                  </div>
                  <div>
                    <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">Career Paths</p>
                    <div className="grid gap-3">
                      {program.outcomes.map((outcome) => (
                        <span key={outcome} className="flex items-center gap-3 text-sm font-bold text-slate-100">
                          <FaCheck className="text-emerald-300" />
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-2xl font-black text-emerald-200">{program.modules.length}+</p>
                      <p className="mt-1 text-xs font-bold text-slate-300">Skill modules</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-2xl font-black text-cyan-200">{program.projects.length}+</p>
                      <p className="mt-1 text-xs font-bold text-slate-300">Project builds</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContentBand id="overview" eyebrow="Program Overview" title="Built For Real Industry Outcomes" variant="split">
          <p className="course-lead-copy max-w-5xl text-lg font-semibold leading-9 text-slate-200">
            {program.overview}
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {overviewCards.map(([title, text], index) => (
              <InfoCard key={title} icon={FaChartLine} title={title} text={text} tone={cardTones[index % cardTones.length]} />
            ))}
          </div>
        </ContentBand>

        <ContentBand id="curriculum" eyebrow="What You Will Master" title="Premium Curriculum Modules" variant="mesh">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {program.modules.map((module, index) => (
              <article key={module.name} className={`course-glass-card ${cardTones[index % cardTones.length]} group p-4 transition hover:-translate-y-1 xl:p-5`}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="course-number-chip flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-black tracking-[-0.02em] text-white">{module.name}</h3>
                </div>
                <p className="text-sm font-semibold leading-7 text-slate-300">{module.description}</p>
                <div className="mt-4 grid gap-2">
                  {module.outcomes.map((item) => (
                    <span key={item} className="flex items-start gap-2 text-sm font-bold leading-6 text-slate-200">
                      <FaCheck className="mt-1 shrink-0 text-emerald-300" />
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Hands-On Practical Experience" title="Practical Learning Experience" variant="timeline">
          <div className="course-timeline-grid grid gap-4 md:grid-cols-3">
            {practicalSteps.map((step, index) => (
              <TimelineCard key={step} index={index + 1} text={step} tone={cardTones[index % cardTones.length]} />
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Real World Projects" title="Portfolio-Ready Project Showcase" variant="showcase">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {program.projects.map(([name, description, tech, skills], index) => (
              <article key={name} className={`course-project-card ${cardTones[index % cardTones.length]} p-4 transition hover:-translate-y-1 xl:p-5`}>
                <FaTools className="mb-4 text-2xl text-emerald-200" />
                <h3 className="text-xl font-black text-white">{name}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">{description}</p>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Technologies Used</p>
                <p className="mt-2 text-sm font-bold text-slate-100">{tech}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Skills Developed</p>
                <p className="mt-2 text-sm font-bold text-slate-100">{skills}</p>
              </article>
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Tools & Technologies" title="Tools You Will Work With" variant="compact">
          <div className="flex flex-wrap gap-3">
            {program.tools.map((tool, index) => (
              <span key={tool} className={`course-tool-badge ${cardTones[index % cardTones.length]} rounded-full px-5 py-3 text-sm font-black`}>
                {tool}
              </span>
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Industry Exposure" title="Learn Like Industry Professionals" variant="split">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {exposure.map((item, index) => (
              <InfoCard key={item} icon={FaHandshake} title={item} text="Practice with structured professional workflows, mentor feedback, and career-focused execution." tone={cardTones[(index + 2) % cardTones.length]} />
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Career Opportunities" title="Roles You Can Prepare For" variant="showcase">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {program.outcomes.map((role, index) => (
              <article key={role} className={`course-role-card ${cardTones[index % cardTones.length]} p-4 xl:p-5`}>
                <FaBriefcase className="mb-4 text-2xl text-emerald-200" />
                <h3 className="text-xl font-black text-white">{role}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">
                  Work on practical responsibilities connected to {program.shortTitle.toLowerCase()}, business workflows, documentation, tools, and cross-functional collaboration.
                </p>
                <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-emerald-200">Expected Skills</p>
                <p className="mt-2 text-sm font-bold text-slate-100">{program.tools.slice(0, 4).join(", ")}</p>
                <p className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">Industries Hiring</p>
                <p className="mt-2 text-sm font-bold text-slate-100">Startups, IT services, product companies, consulting teams, and enterprise businesses.</p>
              </article>
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Why Choose This Program" title="Designed For Career Conversion" variant="compact">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map((item, index) => (
              <span key={item} className={`course-benefit-pill ${cardTones[index % cardTones.length]} flex items-center gap-3 rounded-2xl p-4 text-sm font-black text-slate-100`}>
                <FaCheck className="shrink-0 text-emerald-300" />
                {item}
              </span>
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Learning Journey" title="From Learning To Getting Hired" variant="timeline">
          <div className="course-timeline-grid grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {journey.map((step, index) => (
              <TimelineCard key={step} index={index + 1} text={step} tone={cardTones[index % cardTones.length]} />
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Program Highlights" title="Career Accelerator Outcomes" variant="stats">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map(([value, label], index) => (
              <div key={label} className={`course-stat-card ${cardTones[index % cardTones.length]} p-5 text-center`}>
                <p className="text-4xl font-black tracking-[-0.04em] text-emerald-200">{value}</p>
                <p className="mt-2 text-sm font-black text-slate-200">{label}</p>
              </div>
            ))}
          </div>
        </ContentBand>

        <ContentBand eyebrow="Certification" title="Industry Recognized Certification" variant="certificate">
          <div className="course-certificate-wrap grid gap-8 rounded-[2rem] border border-sky-200/15 bg-white/[0.055] p-6 backdrop-blur-2xl lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
            <div className="rounded-3xl border border-sky-200 bg-[linear-gradient(145deg,#ffffff,#dff3ff)] p-6 text-black shadow-[0_28px_90px_-48px_rgba(14,165,233,0.8)]">
              <div className="mb-8 flex items-center justify-between gap-4">
                <img src={jawaEdTechLogo} alt="Jawa EdTech logo" className="h-14 w-14 rounded-xl object-contain" />
                <FaCertificate className="text-4xl text-blue-700" />
              </div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-black">Certificate Of Achievement</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.04em] text-black">Jawa EdTech</h3>
              <p className="mt-4 text-sm font-extrabold leading-7 text-black">
                Awarded for excellent performance, consistent participation, and successful completion of {program.title}.
              </p>
              <p className="mt-2 text-sm font-bold leading-7 text-black">
                Recognizing practical skill development, project effort, mentor feedback, and career-ready learning progress.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <FaAward className="mb-5 text-4xl text-sky-200" />
              <p className="text-lg font-semibold leading-9 text-slate-200">
                Upon successful completion, learners receive professional certification validating industry-ready skills, practical project experience, and readiness for career opportunities in {program.shortTitle}.
              </p>
            </div>
          </div>
        </ContentBand>

        <ContentBand eyebrow="FAQ" title="Questions Learners Ask" variant="compact">
          <div className="grid gap-3 lg:grid-cols-2">
            {faqs.map(([question, answer]) => (
              <details key={question} className="course-glass-card group p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-white">
                  <span className="flex items-center gap-3">
                    <FaQuestionCircle className="text-emerald-200" />
                    {question}
                  </span>
                  <span className="text-emerald-200 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">{answer}</p>
              </details>
            ))}
          </div>
        </ContentBand>

        <section className="relative px-5 py-8 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 lg:py-10">
          <div className="course-final-cta course-sparkle-field relative z-10 mx-auto max-w-[1540px] overflow-hidden rounded-2xl border border-emerald-200/15 bg-white/[0.06] p-6 text-center shadow-[0_32px_130px_-72px_rgba(34,197,94,0.85)] backdrop-blur-2xl lg:p-8">
            <FaLightbulb className="mx-auto mb-4 text-5xl text-emerald-200" />
            <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
              Become Industry Ready Today
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl font-black leading-9 text-emerald-100">
              Learn. Practice. Intern. Build. Prepare. Get Hired.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <button type="button" onClick={openEnrollmentTablet} className="min-h-13 rounded-2xl bg-emerald-300 px-7 text-sm font-black text-slate-950 transition hover:-translate-y-0.5">
                Enroll Now
              </button>
              <button type="button" onClick={openEnrollmentTablet} className="min-h-13 rounded-2xl border border-emerald-200/20 bg-white/[0.08] px-7 text-sm font-black text-white transition hover:-translate-y-0.5">
                Talk To Career Counselor
              </button>
              <a href="#curriculum" className="inline-flex min-h-13 items-center rounded-2xl border border-cyan-200/25 bg-cyan-300/10 px-7 text-sm font-black text-cyan-100 transition hover:-translate-y-0.5">
                Download Curriculum
              </a>
            </div>
          </div>
        </section>
      </main>
      <EnrollmentTablet
        open={tabletOpen}
        onClose={() => setTabletOpen(false)}
        programTitle={program.title}
      />
      <Footer1 />
    </>
  );
}

function ContentBand({ id, eyebrow, title, children, variant = "default" }) {
  return (
    <section id={id} className={`course-section-shell course-section-${variant} relative px-5 py-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-24 lg:py-5`}>
      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="course-section-panel rounded-2xl border border-emerald-200/10 bg-slate-950/22 p-4 backdrop-blur-xl sm:p-4 lg:p-5">
          <div className="mb-4 flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-2 text-sm font-black uppercase tracking-[0.22em] text-emerald-200">{eyebrow}</p>
              <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-[2.55rem]">{title}</h2>
            </div>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-emerald-300/40 via-cyan-300/20 to-transparent lg:block" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text, tone = "course-tone-emerald" }) {
  return (
    <article className={`course-glass-card ${tone} p-4 transition hover:-translate-y-1 xl:p-5`}>
      <Icon className="mb-3 text-2xl text-emerald-200" />
      <h3 className="text-lg font-black text-white">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">{text}</p>
    </article>
  );
}

function TimelineCard({ index, text, tone = "course-tone-emerald" }) {
  return (
    <article className={`course-timeline-card ${tone} p-4 transition hover:-translate-y-1 xl:p-5`}>
      <span className="course-step-dot mb-3 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-slate-950">
        {index}
      </span>
      <h3 className="text-lg font-black text-white">{text}</h3>
    </article>
  );
}

function EnrollmentTablet({ open, onClose, programTitle }) {
  const { isAuthenticated, user, login, signup } = useAuth();
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [expertEmail, setExpertEmail] = useState("");
  const [expertPhone, setExpertPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [language, setLanguage] = useState("English");
  const [selectedProgram, setSelectedProgram] = useState(programTitle);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSelectedProgram(programTitle);

    if (isAuthenticated) {
      setMode("expert");
      const [first = "", ...rest] = (user?.name || "").split(" ");
      setFirstName((current) => current || first);
      setLastName((current) => current || rest.join(" "));
      setExpertEmail((current) => current || user?.email || "");
      setExpertPhone((current) => current || user?.phone || "");
      return;
    }

    setMode("login");
  }, [open, isAuthenticated, programTitle, user]);

  if (!open) return null;

  const clearMessages = () => {
    setError("");
    setSuccess("");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    clearMessages();
    setLoading(true);

    try {
      await login({ email, password });
      setMode("expert");
    } catch (err) {
      setError(err.message || "Unable to sign in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();
    clearMessages();
    setLoading(true);

    try {
      await signup({ name, email, phone, password });
      setMode("expert");
    } catch (err) {
      setError(err.message || "Unable to create account. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleExpert = async (event) => {
    event.preventDefault();
    clearMessages();
    setLoading(true);

    try {
      await saveExpertLead({
        source: "course_enroll_tablet",
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        name: `${firstName} ${lastName}`.trim(),
        email: expertEmail.trim(),
        phone: expertPhone.trim(),
        profile,
        language,
        program: selectedProgram,
      });
      setSuccess("Your request is saved. Our career expert will contact you soon.");
      setProfile("");
    } catch (err) {
      setError(err.message || "Unable to save your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/72 px-4 py-6 backdrop-blur-xl">
      <button
        type="button"
        onClick={onClose}
        className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close enrollment tablet"
      >
        <FaTimes />
      </button>

      <div className="enroll-tablet-shell relative w-full max-w-5xl rounded-[2.4rem] border border-emerald-200/20 bg-[linear-gradient(145deg,rgba(3,10,7,0.98),rgba(0,0,0,0.96))] p-3 shadow-[0_42px_160px_-54px_rgba(34,197,94,0.95)] ring-1 ring-white/10">
        <div className="absolute left-1/2 top-3 z-20 h-3 w-28 -translate-x-1/2 rounded-full bg-black shadow-[0_0_18px_rgba(0,0,0,0.75)]" />
        <div className="network-glass-panel enroll-tablet-screen relative min-h-[680px] overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 lg:px-10">
          <div className="relative z-10 mb-8 flex items-center justify-between text-xs font-black text-emerald-100/80">
            <span>Jawa EdTech</span>
            <span className="rounded-full border border-emerald-200/20 bg-emerald-300/10 px-4 py-2 text-emerald-100">
              {programTitle}
            </span>
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="flex flex-col justify-between rounded-[1.65rem] border border-emerald-200/15 bg-slate-950/34 p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-cyan-200">
                  {mode === "expert" ? "Expert Guidance" : "Login Required"}
                </p>
                <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white">
                  {mode === "expert" ? "Talk To Our Career Expert" : "Login To Continue"}
                </h2>
                <p className="mt-5 text-base font-semibold leading-8 text-slate-200">
                  {mode === "expert"
                    ? "Share your details for a personalized roadmap, program guidance, and next-step counseling."
                    : "Enroll and expert counseling are available after login, so your details stay connected to your account."}
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {["Personal roadmap", "Program matching", "Placement readiness"].map((item) => (
                  <span key={item} className="flex items-center gap-3 rounded-2xl border border-emerald-200/12 bg-white/[0.055] px-4 py-3 text-sm font-black text-emerald-50">
                    <FaCheck className="text-emerald-300" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.65rem] border border-emerald-200/15 bg-white/[0.06] p-5 shadow-inner shadow-emerald-950/20 backdrop-blur-xl sm:p-6">
              {mode === "expert" ? (
                <form onSubmit={handleExpert} className="grid gap-4 md:grid-cols-2">
                  <TabletField label="First Name" icon={FaUserTie}>
                    <input required value={firstName} onChange={(event) => setFirstName(event.target.value)} className={tabletInputClass} placeholder="First name" />
                  </TabletField>
                  <TabletField label="Last Name" icon={FaUserTie}>
                    <input value={lastName} onChange={(event) => setLastName(event.target.value)} className={tabletInputClass} placeholder="Last name" />
                  </TabletField>
                  <TabletField label="Email" icon={FaEnvelope}>
                    <input type="email" required value={expertEmail} onChange={(event) => setExpertEmail(event.target.value)} className={tabletInputClass} placeholder="you@email.com" />
                  </TabletField>
                  <TabletField label="Mobile" icon={FaPhoneAlt}>
                    <input type="tel" required value={expertPhone} onChange={(event) => setExpertPhone(event.target.value)} className={tabletInputClass} placeholder="+91 mobile number" />
                  </TabletField>
                  <TabletField label="Career Goal" icon={FaBriefcase}>
                    <select required value={profile} onChange={(event) => setProfile(event.target.value)} className={tabletInputClass}>
                      <option className="text-slate-950" value="">Choose your goal</option>
                      {expertCareerGoals.map((goal) => (
                        <option key={goal} className="text-slate-950">{goal}</option>
                      ))}
                    </select>
                  </TabletField>
                  <TabletField label="Program" icon={FaGraduationCap}>
                    <select value={selectedProgram} onChange={(event) => setSelectedProgram(event.target.value)} className={tabletInputClass}>
                      <option className="text-slate-950" value="">Preferred program</option>
                      {expertProgramOptions.map((option) => (
                        <option key={option} className="text-slate-950">{option}</option>
                      ))}
                    </select>
                  </TabletField>
                  <TabletField label="Language" icon={FaGraduationCap}>
                    <select value={language} onChange={(event) => setLanguage(event.target.value)} className={tabletInputClass}>
                      {expertLanguages.map((option) => (
                        <option key={option} className="text-slate-950">{option}</option>
                      ))}
                    </select>
                  </TabletField>

                  {error && <p className="md:col-span-2 rounded-xl bg-red-500/10 px-3 py-2.5 text-xs font-bold text-red-200">{error}</p>}
                  {success && <p className="md:col-span-2 rounded-xl border border-emerald-300/25 bg-emerald-400/10 px-3 py-2.5 text-xs font-bold text-emerald-100">{success}</p>}

                  <button disabled={loading} className="md:col-span-2 mt-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 py-4 text-base font-black text-slate-950 shadow-xl shadow-emerald-400/25 transition hover:-translate-y-0.5 disabled:opacity-60">
                    {loading ? "Saving request..." : "Request expert call"}
                  </button>
                </form>
              ) : (
                <>
                  <div className="mb-5 grid grid-cols-2 gap-2 rounded-2xl border border-emerald-200/15 bg-white/[0.08] p-1.5">
                    <button type="button" onClick={() => { setMode("login"); clearMessages(); }} className={`rounded-xl px-3 py-2.5 text-xs font-black transition ${mode === "login" ? "bg-emerald-300 text-slate-950" : "text-emerald-50/80 hover:bg-white/[0.08]"}`}>
                      Sign In
                    </button>
                    <button type="button" onClick={() => { setMode("signup"); clearMessages(); }} className={`rounded-xl px-3 py-2.5 text-xs font-black transition ${mode === "signup" ? "bg-emerald-300 text-slate-950" : "text-emerald-50/80 hover:bg-white/[0.08]"}`}>
                      Create
                    </button>
                  </div>

                  <form onSubmit={mode === "login" ? handleLogin : handleSignup} className="grid gap-4">
                    {mode === "signup" && (
                      <TabletField label="Name" icon={FaUserTie}>
                        <input required value={name} onChange={(event) => setName(event.target.value)} className={tabletInputClass} placeholder="Your name" />
                      </TabletField>
                    )}
                    <TabletField label="Email" icon={FaEnvelope}>
                      <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className={tabletInputClass} placeholder="you@email.com" />
                    </TabletField>
                    {mode === "signup" && (
                      <TabletField label="Mobile" icon={FaPhoneAlt}>
                        <input type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} className={tabletInputClass} placeholder="+91 mobile number" />
                      </TabletField>
                    )}
                    <TabletField label="Password" icon={FaLock}>
                      <input type="password" required minLength={6} value={password} onChange={(event) => setPassword(event.target.value)} className={tabletInputClass} placeholder="Password" />
                    </TabletField>

                    {error && <p className="rounded-xl bg-red-500/10 px-3 py-2.5 text-xs font-bold text-red-200">{error}</p>}

                    <button disabled={loading} className="mt-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 py-4 text-base font-black text-slate-950 shadow-xl shadow-emerald-400/25 transition hover:-translate-y-0.5 disabled:opacity-60">
                      {loading ? "Please wait..." : mode === "login" ? "Sign In & Continue" : "Create & Continue"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const tabletInputClass =
  "w-full rounded-2xl border border-cyan-200/35 bg-white/[0.15] pl-12 pr-4 py-4 text-sm font-bold text-white outline-none shadow-inner shadow-cyan-950/20 transition placeholder:text-blue-100/70 focus:border-cyan-300/90 focus:bg-white/[0.2] focus:ring-4 focus:ring-cyan-300/24";

function TabletField({ icon: Icon, label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-blue-100/70">
        {label}
      </span>
      <span className="relative block">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-200" />
        {children}
      </span>
    </label>
  );
}

export default CourseDetail;

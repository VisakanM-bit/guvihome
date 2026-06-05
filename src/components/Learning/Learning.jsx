import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBriefcase,
  FaCertificate,
  FaCode,
  FaComments,
  FaGraduationCap,
  FaHandshake,
  FaLaptopCode,
  FaTrophy,
} from "react-icons/fa";

const learningTabs = [
  {
    title: "Career Programs",
    icon: FaGraduationCap,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Choose guided HR, recruitment, full stack, Python, AI, DevOps, QA, and MuleSoft paths.",
      "Learn with a structured roadmap, weekly progress checks, and mentor-led clarity.",
      "Build strong foundations before moving into projects, internships, and placement prep.",
      "Keep every track focused on real workplace outcomes, not random theory.",
    ],
    button: "Explore Career Programs",
    href: "/programs",
  },
  {
    title: "Internship Hub",
    icon: FaBriefcase,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Work through internship-style tasks with clear responsibilities and review points.",
      "Create practical reports, workflow notes, project documents, and proof of execution.",
      "Get exposure to real HR, tech, testing, cloud, and business delivery scenarios.",
      "Turn internship work into confident interview stories and portfolio evidence.",
    ],
    button: "View Internships",
    href: "/internships/human-resource-internship",
  },
  {
    title: "Practice Lab",
    icon: FaLaptopCode,
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Practice assignments, case studies, coding tasks, tool workflows, and documentation.",
      "Repeat important skills until you can explain, apply, and present them clearly.",
      "Track practical improvement through reviews, checkpoints, and completion outcomes.",
      "Build discipline with focused tasks that connect directly to career goals.",
    ],
    button: "Start Practice",
    href: "/practice-hub",
  },
  {
    title: "Project Studio",
    icon: FaCode,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Create portfolio-ready projects with clean requirements, execution, and demo flow.",
      "Build web apps, automation tools, dashboards, QA plans, and business workflows.",
      "Receive mentor feedback on structure, presentation, and practical quality.",
      "Show employers clear evidence of what you can build and deliver.",
    ],
    button: "Open Project Studio",
    href: "/projects/industry-project-lab",
  },
  {
    title: "Mentor Desk",
    icon: FaHandshake,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Get guidance for career direction, project doubts, interview planning, and next steps.",
      "Discuss your profile, skill gaps, and the most useful path for your target role.",
      "Use mentor support to avoid confusion and stay consistent with your roadmap.",
      "Make every learning week more focused, practical, and measurable.",
    ],
    button: "Talk To Mentor",
    href: "/mentorship",
  },
  {
    title: "Placement Prep",
    icon: FaCertificate,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Prepare resumes, LinkedIn profiles, interview answers, and role-specific talking points.",
      "Practice technical rounds, HR rounds, communication, and project explanation.",
      "Understand hiring expectations and convert your learning into a stronger profile.",
      "Move toward interviews with confidence, clarity, and proof of practical work.",
    ],
    button: "Prepare For Jobs",
    href: "/placement-assistance",
  },
  {
    title: "Rewards",
    icon: FaTrophy,
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Celebrate milestones for completing tasks, projects, internships, and assessments.",
      "Use progress badges to keep your learning visible and motivating.",
      "Build confidence by seeing each practical step turn into a completed achievement.",
      "Stay consistent with small wins that support your bigger career goal.",
    ],
    button: "View Milestones",
    href: "/career-services",
  },
  {
    title: "Community",
    icon: FaComments,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Discuss doubts, projects, workflows, and interview preparation with peers.",
      "Share useful resources, progress updates, project ideas, and practical wins.",
      "Learn from people moving through similar career and internship paths.",
      "Build a supportive circle while you grow your skills and confidence.",
    ],
    button: "Join Community",
    href: "/about-edtech",
  },
];

function Learning() {
  const [active, setActive] = useState(0);
  const selected = learningTabs[active];
  const SelectedIcon = selected.icon;

  return (
    <section className="cybernet-network-bg px-4 py-12 text-white sm:px-6 md:px-8 lg:px-10 lg:py-20">
      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-sky-300">
            Jawa EdTech Career Workspace
          </p>
          <h2 className="text-4xl font-black leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Learn. Practice. Earn. Have Fun!
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-200 sm:text-lg">
            A clean, connected space for learning, internships, projects, mentorship, placement preparation, milestones, and community support.
          </p>
        </div>

        <div className="mt-9 overflow-x-auto rounded-xl border border-sky-200/12 bg-black/38 p-1 shadow-[0_24px_90px_-58px_rgba(56,189,248,0.75)] backdrop-blur-xl">
          <div className="flex min-w-max">
            {learningTabs.map(({ title, icon: Icon }, index) => (
              <button
                key={title}
                type="button"
                onClick={() => setActive(index)}
                className={`flex min-h-16 min-w-[10.5rem] items-center justify-center gap-2 border-b-4 px-5 text-sm font-black transition sm:text-base ${
                  active === index
                    ? "border-sky-400 bg-sky-400/16 text-sky-100 shadow-[inset_0_0_28px_rgba(56,189,248,0.18)]"
                    : "border-transparent text-slate-300 hover:bg-white/[0.07] hover:text-white"
                }`}
              >
                <Icon className="text-base" />
                {title}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[640px]">
              <div className="absolute -inset-4 rounded-[2rem] bg-sky-400/12 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.7rem] border border-sky-200/18 bg-black p-3 shadow-[0_30px_100px_-46px_rgba(56,189,248,0.78)]">
                <div className="overflow-hidden rounded-[1.2rem] bg-slate-950">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="aspect-[16/10] w-full object-cover transition duration-500"
                  />
                </div>
                <div className="mx-auto h-5 w-[88%] rounded-b-2xl bg-slate-800 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]" />
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-2xl lg:mx-0">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400 text-2xl text-slate-950 shadow-[0_0_34px_rgba(56,189,248,0.55)]">
              <SelectedIcon />
            </div>
            <h3 className="text-4xl font-black tracking-[-0.03em] text-white sm:text-5xl">
              {selected.title}
            </h3>
            <ul className="mt-7 grid gap-5">
              {selected.description.map((point) => (
                <li key={point} className="flex gap-4 text-base font-semibold leading-7 text-slate-200 sm:text-lg">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.9)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link
              to={selected.href}
              className="mt-9 inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 px-8 text-base font-black text-white shadow-[0_20px_70px_-36px_rgba(56,189,248,0.95)] transition hover:-translate-y-0.5 hover:from-sky-400 hover:to-violet-500 sm:w-auto"
            >
              {selected.button}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Learning;

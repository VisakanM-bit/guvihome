import { Link } from "react-router-dom";
import { FaArrowRight, FaBriefcase, FaChartLine, FaCode, FaDatabase, FaPenNib, FaStar } from "react-icons/fa";

const categories = [
  {
    icon: FaBriefcase,
    title: "Business & Management",
    intro: "Workplace communication, team coordination, reporting, and business operations for first-job confidence.",
    items: ["Email Etiquette", "HR Operations Basics", "Business Reports"],
    href: "/programs/recruitment-talent-acquisition-development",
  },
  {
    icon: FaDatabase,
    title: "Data Science & AI",
    intro: "Short practice tracks for analytics thinking, AI workflows, dashboards, and data-backed decisions.",
    items: ["Python for Data", "AI Use Cases", "Dashboard Practice"],
    href: "/programs/artificial-intelligence-machine-learning",
  },
  {
    icon: FaPenNib,
    title: "Engineering & Design",
    intro: "Design thinking, product workflow, UI foundations, and practical documentation for portfolio-ready output.",
    items: ["UI/UX Foundations", "Product Design", "Design Reviews"],
    href: "/projects/industry-project-lab",
  },
  {
    icon: FaChartLine,
    title: "IT & Software",
    intro: "Hands-on basics for tools, testing, cloud workflows, support processes, and software delivery habits.",
    items: ["Software Testing", "DevOps Basics", "Tool Workflows"],
    href: "/programs/software-testing-qa",
  },
  {
    icon: FaCode,
    title: "Programming",
    intro: "Build coding confidence with guided exercises, mini projects, debugging habits, and interview preparation.",
    items: ["JavaScript Practice", "Python Projects", "API Basics"],
    href: "/programs/full-stack-development",
  },
];

const learnerReviews = [
  ["4.9/5", "Mentor clarity made every short task feel useful."],
  ["96%", "Learners said the tracks helped them explain projects better."],
  ["1:1", "Review support for resumes, portfolios, and interview stories."],
];

function Explore() {
  return (
    <section className="bg-[#f5f7f6] px-4 py-7 sm:px-6 md:px-8 lg:px-10 lg:py-8">
      <div className="mx-auto max-w-[1540px]">
        <div className="mb-5 grid gap-4 lg:grid-cols-[1fr_0.64fr] lg:items-end">
          <div className="max-w-4xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-[#00a86b]">
              Skill Practice Library
            </p>
            <h1 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
              Explore Short Learning Tracks
            </h1>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-600 sm:text-lg">
              Pick a focused track, learn the essentials, complete guided tasks, and connect the work to your internship or career plan.
            </p>
          </div>

          <aside className="rounded-xl border border-emerald-100 bg-white p-4 shadow-[0_18px_62px_-48px_rgba(16,185,129,0.65)]">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#00a86b]">User Reviews</p>
                <h2 className="mt-1 text-xl font-black tracking-[-0.03em] text-slate-950">Learners love the practice flow</h2>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <FaStar />
              </div>
            </div>
            <div className="grid gap-2">
              {learnerReviews.map(([score, text]) => (
                <div key={score} className="grid grid-cols-[4.5rem_1fr] items-center gap-3 rounded-lg bg-slate-50 p-2.5">
                  <p className="text-lg font-black text-slate-950">{score}</p>
                  <p className="text-sm font-bold leading-5 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          {categories.map(({ icon: Icon, title, intro, items, href }, index) => (
            <article
              key={title}
              className={`flex min-h-full flex-col rounded-xl border bg-white p-4 shadow-[0_18px_58px_-46px_rgba(15,23,42,0.56)] transition hover:-translate-y-1 hover:shadow-[0_22px_70px_-48px_rgba(16,185,129,0.62)] ${
                index === 0 ? "border-emerald-200 ring-1 ring-emerald-100" : "border-slate-200"
              }`}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                <Icon />
              </div>
              <h2 className="text-xl font-black leading-snug text-slate-950">{title}</h2>
              <p className="mt-2 min-h-[72px] text-sm font-semibold leading-6 text-slate-600">{intro}</p>

              <div className="mt-3 grid gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>

              <Link
                to={href}
                className="mt-auto flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#00a86b] px-4 text-sm font-black text-white transition hover:bg-[#00965f]"
              >
                View Tracks
                <FaArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;

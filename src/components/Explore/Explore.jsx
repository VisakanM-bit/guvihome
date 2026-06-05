import { FaArrowRight, FaBriefcase, FaChartLine, FaCode, FaDatabase, FaPenNib } from "react-icons/fa";

const categories = [
  {
    icon: FaBriefcase,
    title: "Business & Management",
    intro: "Workplace communication, team coordination, reporting, and business operations for first-job confidence.",
    items: ["Email Etiquette", "HR Operations Basics", "Business Reports"],
  },
  {
    icon: FaDatabase,
    title: "Data Science & AI",
    intro: "Short practice tracks for analytics thinking, AI workflows, dashboards, and data-backed decisions.",
    items: ["Python for Data", "AI Use Cases", "Dashboard Practice"],
  },
  {
    icon: FaPenNib,
    title: "Engineering & Design",
    intro: "Design thinking, product workflow, UI foundations, and practical documentation for portfolio-ready output.",
    items: ["UI/UX Foundations", "Product Design", "Design Reviews"],
  },
  {
    icon: FaChartLine,
    title: "IT & Software",
    intro: "Hands-on basics for tools, testing, cloud workflows, support processes, and software delivery habits.",
    items: ["Software Testing", "DevOps Basics", "Tool Workflows"],
  },
  {
    icon: FaCode,
    title: "Programming",
    intro: "Build coding confidence with guided exercises, mini projects, debugging habits, and interview preparation.",
    items: ["JavaScript Practice", "Python Projects", "API Basics"],
  },
];

function Explore() {
  return (
    <section className="bg-[#f5f7f6] px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1540px]">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-emerald-600">
            Skill Practice Library
          </p>
          <h1 className="text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            Explore Short Learning Tracks
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-7 text-slate-600 sm:text-lg">
            Pick a focused track, learn the essentials, complete guided tasks, and connect the work to your internship or career plan.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {categories.map(({ icon: Icon, title, intro, items }, index) => (
            <article
              key={title}
              className={`flex min-h-full flex-col rounded-2xl border bg-white p-5 shadow-[0_20px_70px_-54px_rgba(15,23,42,0.65)] transition hover:-translate-y-1 hover:shadow-[0_26px_80px_-52px_rgba(16,185,129,0.7)] ${
                index === 0 ? "border-emerald-200 ring-1 ring-emerald-100" : "border-slate-200"
              }`}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                <Icon />
              </div>
              <h2 className="text-xl font-black leading-snug text-slate-950">{title}</h2>
              <p className="mt-3 min-h-[96px] text-sm font-semibold leading-6 text-slate-600">{intro}</p>

              <div className="mt-5 grid gap-2">
                {items.map((item) => (
                  <span key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-auto flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-black text-white transition hover:bg-sky-600"
              >
                View Tracks
                <FaArrowRight />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;

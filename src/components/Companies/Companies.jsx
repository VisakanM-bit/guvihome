import { STATS } from "../../data/siteContent";

function Companies() {
  const hiringPartners = [
    "IT Services",
    "Manufacturing",
    "Healthcare",
    "BFSI",
    "Retail",
    "EdTech",
    "Startups",
    "GCC",
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-3">
        Hiring &amp; Industry Network
      </h2>
      <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
        {STATS[2].value} hiring opportunities across leading sectors
      </p>
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
        {hiringPartners.map((name) => (
          <span
            key={name}
            className="px-5 py-3 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Companies;

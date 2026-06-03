import { WHY_JAWA } from "../../data/siteContent";

function Awards() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-[#f5f5f5]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-10">
        Why Choose Jawa EdTech?
      </h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {WHY_JAWA.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-emerald-50"
          >
            <span className="text-2xl">🏆</span>
            <p className="font-semibold text-slate-800 text-sm sm:text-base">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;

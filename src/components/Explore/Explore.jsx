import { PROGRAMS } from "../../data/siteContent";
import image1 from "../../assets/logos/image1.png";
import image2 from "../../assets/logos/image2.png";
import image3 from "../../assets/logos/image3.png";
import image4 from "../../assets/logos/image4.png";

const IMAGES = [image1, image2, image3, image4];

function Explore() {
  const featured = PROGRAMS.slice(0, 4);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-10">
        Explore Career Paths
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((p, i) => (
          <div
            key={p.title}
            className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={IMAGES[i]}
              alt={p.title}
              className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="p-4 bg-slate-50">
              <span className="text-xs font-bold text-emerald-600">{p.tag}</span>
              <h3 className="font-bold text-slate-900 text-sm mt-1 leading-snug">{p.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Explore;

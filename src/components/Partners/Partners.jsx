import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { HIRING_PARTNERS } from "../../data/siteContent";

function Partners() {
  return (
    <section
      className="py-10 sm:py-12 bg-jawa-card border-y border-slate-100"
      aria-labelledby="partners-heading"
    >
      <div className="container-jawa">
        <p
          id="partners-heading"
          className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8"
        >
          Our Hiring Partners
        </p>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={32}
          autoplay={{ delay: 1800, disableOnInteraction: false }}
          loop
          speed={800}
          breakpoints={{
            480: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {HIRING_PARTNERS.map((name) => (
            <SwiperSlide key={name}>
              <div className="flex items-center justify-center h-14 px-4 rounded-xl bg-jawa-bg border border-slate-100 hover:border-jawa-secondary/30 hover:shadow-sm transition">
                <span className="text-sm sm:text-base font-heading font-bold text-jawa-primary/70 whitespace-nowrap">
                  {name}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Partners;

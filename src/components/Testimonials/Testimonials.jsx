import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaPlay, FaStar } from "react-icons/fa";
import { TESTIMONIALS } from "../../data/siteContent";

function Testimonials() {
  return (
    <section
      className="section-padding bg-jawa-bg"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-jawa">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-heading font-bold text-jawa-primary mb-3"
          >
            Student Success Stories
          </h2>
          <p className="text-jawa-text text-base leading-relaxed">
            Real people. Real transformations. Hear from learners who launched their careers.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <article className="bg-jawa-card rounded-2xl overflow-hidden shadow-md border border-slate-100 h-full flex flex-col hover:shadow-xl transition">
                <div className="relative h-40 bg-jawa-primary">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                  {t.video && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <span className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                        <FaPlay className="text-jawa-secondary ml-1" />
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex gap-0.5 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>
                  <p className="text-jawa-text text-sm leading-relaxed flex-1 mb-4">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-heading font-bold text-jawa-primary">{t.name}</p>
                    <p className="text-jawa-secondary text-sm font-semibold">{t.role}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{t.company}</p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

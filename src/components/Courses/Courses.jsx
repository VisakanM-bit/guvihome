import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PROGRAMS } from "../../data/siteContent";
import aimlImage from "../../assets/logos/aiml.png";
import pythonImage from "../../assets/logos/python.png";
import reactImage from "../../assets/logos/react.png";
import devopsImage from "../../assets/logos/devops.png";
import businessImage from "../../assets/logos/businessandmarketing.png";
import masterDataImage from "../../assets/logos/masterdatascience.png";

const IMAGES = [businessImage, masterDataImage, reactImage, pythonImage, aimlImage, businessImage, devopsImage, reactImage];

function Courses() {
  const courses = PROGRAMS.map((p, i) => ({
    ...p,
    image: IMAGES[i % IMAGES.length],
  }));

  return (
    <section className="bg-[#f5f5f5] py-12 sm:py-16 lg:py-20 px-4 sm:px-8" id="programs">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-3 text-slate-900">
        Career Accelerator Programs
      </h2>
      <p className="text-center text-slate-600 text-base sm:text-lg max-w-3xl mx-auto mb-10 sm:mb-14 leading-relaxed">
        Industry-focused HR &amp; Technology programs with practical training,
        internships, and placement support.
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        loop
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 24 },
          1280: { slidesPerView: 4, spaceBetween: 28 },
        }}
        className="pb-14 px-2"
      >
        {courses.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition h-full flex flex-col">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <span className="inline-block w-fit px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold mb-3">
                  {course.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 leading-snug min-h-[3.5rem]">
                  {course.title}
                </h3>
                <p className="text-slate-600 text-sm mb-3 flex-1">{course.desc}</p>
                <p className="text-xs text-emerald-700 font-semibold mb-4">{course.roles}</p>
                <Link
                  to="/auth?from=expert"
                  className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition text-sm"
                >
                  Know More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8">
        <Link
          to="/programs"
          className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-bold px-10 py-4 rounded-xl transition text-lg"
        >
          Explore All Programs
        </Link>
      </div>
    </section>
  );
}

export default Courses;

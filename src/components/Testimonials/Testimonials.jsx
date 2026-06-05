import feedbackImage from "../../assets/logos/feedback.png"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function Testimonials() {

  const testimonials = [

    {
      name: "SRI HARI K",
      role: "Full Stack Developer",
      review:
        "I've been a non-IT professional for six years and switched to IT through Jawa EdTech's Full Stack Development program. The flexible schedule, expert instructors, and mock interviews helped me secure my first IT role in Chennai.",
    },

    {
      name: "Vinitha G",
      role: "Node Js developer",
      video: true,
    },

    {
      name: "Vinitha G",
      role: "Node Js developer",
      review:
        "I completed Jawa EdTech's Full Stack Development program, and the teaching with query resolution was excellent. Placement support, mock interviews, and job-specific prep sessions were very useful.",
    },

  ]

  return (

    <section className="bg-[#f5f5f5] py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* TITLE */}
      <h1 className="text-center text-6xl font-bold text-[#222] mb-16">

        What Our Learners Are Saying!

      </h1>

      {/* GOOGLE RATING */}
      <div className="flex items-center justify-center gap-8 mb-20">

        {/* GOOGLE LOGO */}
        <div className="w-24 h-24 rounded-full bg-white border border-[#ececec] shadow-sm flex items-center justify-center">

          <span className="text-[58px] font-bold text-[#4285F4]">

            G

          </span>

        </div>

        {/* RATING TEXT */}
        <div>

          <h2 className="text-[42px] font-bold text-[#222]">

            Rated 4.3/5.0

          </h2>

          <p className="text-[22px] text-gray-500 mt-1">

            More than 2500 Google Reviews

          </p>

        </div>

      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={35}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >

        {testimonials.map((item, index) => (

          <SwiperSlide key={index}>

            <div className="bg-[#f7fcf7] border border-[#e7eee7] rounded-[28px] p-10 min-h-[500px] shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">

              {/* TOP */}
              <div>

                {/* NAME */}
                <h2 className="text-[34px] font-bold text-[#2d2d2d] mb-3">

                  {item.name}

                </h2>

                {/* ROLE */}
                <p className="text-[22px] text-gray-600 mb-8">

                  {item.role}

                </p>

                {/* VIDEO */}
                {item.video ? (

                  <div className="relative overflow-hidden rounded-2xl">

                    <img
                      src={feedbackImage}
                      alt="Feedback"
                      className="w-full h-[260px] object-cover rounded-2xl"
                    />

                    {/* PLAY BUTTON */}
                    <div className="absolute inset-0 flex items-center justify-center">

                      <div className="w-24 h-24 rounded-full bg-[#00c853] flex items-center justify-center text-white text-4xl shadow-xl hover:scale-110 transition cursor-pointer">

                        ▶

                      </div>

                    </div>

                  </div>

                ) : (

                  <p className="text-[21px] text-gray-600 leading-[42px]">

                    {item.review}

                  </p>

                )}

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {/* BUTTON */}
      <div className="flex justify-center mt-20">

        <button className="border border-gray-400 bg-white hover:bg-gray-100 transition px-14 py-5 rounded-xl text-2xl text-[#333]">

          View All

        </button>

      </div>

    </section>

  )
}

export default Testimonials

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import award1 from "../../assets/logos/award1.png"
import award2 from "../../assets/logos/award2.png"

function Awards() {

  const awards = [

    {
      title: "Best Online Personalised Learning Programs",
      description:
        "Awarded by ENTREPRENEUR INDIA for having the best online personalized learning programs.",
      image: award1,
    },

    {
      title: "Outstanding EdTech Innovation Award",
      description:
        "Recognized for delivering exceptional digital learning experiences across India.",
      image: award2,
    },

  ]

  return (

    <section className="bg-[#f5f5f5] py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">

      <Swiper

        modules={[Navigation, Pagination, Autoplay]}

        navigation

        pagination={{ clickable: true }}

        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}

        loop={true}

        className="rounded-3xl overflow-hidden"

      >

        {awards.map((award, index) => (

          <SwiperSlide key={index}>

            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl p-6 sm:p-7 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10 items-center shadow-md">

              {/* LEFT SIDE */}
              <div className="text-center px-4 sm:px-6 md:px-8">

                <h3 className="text-gray-500 tracking-widest text-xs sm:text-sm md:text-base lg:text-xl mb-4 sm:mb-5 md:mb-6">

                  OUR AWARDS & ACHIEVEMENTS

                </h3>

                <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6">

                  <div className="text-[120px] text-yellow-500">

                    ❦

                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2b2b2b] leading-tight">

                    {award.title}

                  </h1>

                  <div className="text-[120px] text-yellow-500">

                    ❦

                  </div>

                </div>

                <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mt-6 sm:mt-8 md:mt-10">

                  {award.description}

                </p>

              </div>

              {/* RIGHT SIDE IMAGE */}
              <div>

                <img
                  src={award.image}
                  alt="Award"
                  className="w-full h-auto max-h-80 sm:max-h-96 md:max-h-[500px] lg:max-h-[600px] object-cover rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl"
                />

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  )
}

export default Awards
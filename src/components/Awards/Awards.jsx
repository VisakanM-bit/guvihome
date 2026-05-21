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

    <section className="bg-[#f5f5f5] py-24 px-10">

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

            <div className="bg-white rounded-3xl p-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-md">

              {/* LEFT SIDE */}
              <div className="text-center px-8">

                <h3 className="text-gray-500 tracking-widest text-xl mb-6">

                  OUR AWARDS & ACHIEVEMENTS

                </h3>

                <div className="flex items-center justify-center gap-6">

                  <div className="text-[120px] text-yellow-500">

                    ❦

                  </div>

                  <h1 className="text-6xl font-bold text-[#2b2b2b] leading-tight">

                    {award.title}

                  </h1>

                  <div className="text-[120px] text-yellow-500">

                    ❦

                  </div>

                </div>

                <p className="text-gray-500 text-2xl leading-relaxed mt-10">

                  {award.description}

                </p>

              </div>

              {/* RIGHT SIDE IMAGE */}
              <div>

                <img
                  src={award.image}
                  alt="Award"
                  className="w-full h-[600px] object-cover rounded-3xl"
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
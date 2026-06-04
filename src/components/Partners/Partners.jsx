import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

import auLogo from "../../assets/logos/au.png"
import delhiLogo from "../../assets/logos/delhi.png"
import intelLogo from "../../assets/logos/intel.png"

function Partners() {

  const partners = [

    {
      name: "Anna University",
      logo: auLogo,
    },

    {
      name: "IIT Delhi",
      logo: delhiLogo,
    },

    {
      name: "Intel",
      logo: intelLogo,
    },

    {
      name: "Google",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },

    {
      name: "MongoDB",
      logo:
        "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },

  ]

  return (

    <section className="bg-[#f5f5f5] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">

      {/* HEADING */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">

        Our Accreditations & Partnerships

      </h1>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 12 },
          640: { slidesPerView: 3, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5, spaceBetween: 24 },
        }}
        className="px-2 sm:px-4"
      >

        {partners.map((partner, index) => (

          <SwiperSlide key={index}>

            <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-sm hover:shadow-xl transition duration-300 h-24 sm:h-32 md:h-40 flex items-center justify-center p-4 sm:p-6 md:p-8">

              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-12 sm:max-h-16 md:max-h-20 object-contain"
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  )
}

export default Partners
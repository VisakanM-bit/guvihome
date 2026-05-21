import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"

import "swiper/css"

import auLogo from "../../assets/logos/au.png"
import delhiLogo from "../../assets/logos/delhi.png"
import hclLogo from "../../assets/logos/hcl.png"
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
      name: "HCL",
      logo: hclLogo,
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

    <section className="bg-[#f5f5f5] py-20 overflow-hidden">

      {/* HEADING */}
      <h1 className="text-5xl font-semibold text-center mb-16">

        Our Accreditations & Partnerships

      </h1>

      {/* SWIPER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="px-10"
      >

        {partners.map((partner, index) => (

          <SwiperSlide key={index}>

            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 h-40 flex items-center justify-center p-8">

              <img
                src={partner.logo}
                alt={partner.name}
                className="max-h-20 object-contain"
              />

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  )
}

export default Partners
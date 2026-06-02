import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function Hero() {

  const banners = [

    {
      title: "10 AI Courses in One Bundle!",
      subtitle: "Learn Python, Machine Learning & AI Projects",
      price: "₹1,499",
      image:
        "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1600&auto=format&fit=crop",
      tags: ["Self-Paced", "Lifetime Access", "100% Online"],
      button: "Enroll Now!",
      bg: "bg-[#eef5f7]",
    },

    {
      title: "Turn Data Into Your Biggest Career Move!",
      subtitle: "Learn Power BI, Tableau, SQL & Finance",
      price: "₹1,499/-",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
      tags: ["8 Courses", "Lifetime Access", "Certificates"],
      button: "Start Now!",
      bg: "bg-[#eef9ee]",
    },

  ]

  return (

    <div className="w-full overflow-hidden">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[550px]"
      >

        {banners.map((banner, index) => (

          <SwiperSlide key={index}>

            <section className={`${banner.bg} h-full`}>

              <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 gap-4 sm:gap-8 lg:gap-12 xl:gap-16 py-6 sm:py-8 lg:py-0">

                {/* LEFT SIDE */}
                <div>

                  {/* SALE BADGE */}
                  <div className="inline-block border border-orange-300 bg-white rounded-full px-3 sm:px-5 lg:px-6 py-2 mb-4 sm:mb-6 lg:mb-8">

                    <p className="text-xs sm:text-base lg:text-lg xl:text-xl text-gray-700">
                      ☀️ Summer Sale
                    </p>

                  </div>

                  {/* TITLE */}
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 lg:mb-6">

                    {banner.title}

                  </h1>

                  {/* SUBTITLE */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 mb-4 sm:mb-6 lg:mb-8">

                    {banner.subtitle}

                  </p>

                  {/* TAGS */}
                  <div className="flex gap-2 sm:gap-3 flex-wrap mb-6 sm:mb-8 lg:mb-10">

                    {banner.tags.map((tag, i) => (

                      <div
                        key={i}
                        className="border border-orange-300 bg-white rounded-full px-3 sm:px-4 lg:px-5 py-2 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base xl:text-lg"
                      >

                        ✅ {tag}

                      </div>

                    ))}

                  </div>

                  {/* BUTTON + PRICE */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-10">

                    <button className="bg-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-lg text-sm sm:text-base lg:text-lg xl:text-xl hover:bg-gray-800 transition">

                      {banner.button}

                    </button>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">

                      Only - {banner.price}

                    </h2>

                  </div>

                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex justify-center items-center h-full hidden lg:flex">

                  <img
                    src={banner.image}
                    alt="AI Banner"
                    className="w-full h-auto max-h-80 lg:max-h-[420px] object-cover rounded-lg lg:rounded-2xl shadow-lg lg:shadow-xl"
                  />

                </div>

              </div>

            </section>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>

  )
}

export default Hero
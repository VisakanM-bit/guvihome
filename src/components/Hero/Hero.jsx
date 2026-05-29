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
        className="w-full h-[550px]"
      >

        {banners.map((banner, index) => (

          <SwiperSlide key={index}>

            <section className={`${banner.bg} h-[550px]`}>

              <div className="grid grid-cols-2 items-center h-full px-16 gap-16">

                {/* LEFT SIDE */}
                <div>

                  {/* SALE BADGE */}
                  <div className="inline-block border border-orange-300 bg-white rounded-full px-6 py-2 mb-8">

                    <p className="text-xl text-gray-700">
                      ☀️ Summer Sale
                    </p>

                  </div>

                  {/* TITLE */}
                  <h1 className="text-6xl font-bold leading-tight mb-6">

                    {banner.title}

                  </h1>

                  {/* SUBTITLE */}
                  <p className="text-2xl text-gray-700 mb-8">

                    {banner.subtitle}

                  </p>

                  {/* TAGS */}
                  <div className="flex gap-4 flex-wrap mb-10">

                    {banner.tags.map((tag, i) => (

                      <div
                        key={i}
                        className="border border-orange-300 bg-white rounded-full px-5 py-3 text-lg"
                      >

                        ✅ {tag}

                      </div>

                    ))}

                  </div>

                  {/* BUTTON + PRICE */}
                  <div className="flex items-center gap-10">

                    <button className="bg-black text-white px-8 py-4 rounded-lg text-xl hover:bg-gray-800 transition">

                      {banner.button}

                    </button>

                    <h2 className="text-5xl font-bold">

                      Only - {banner.price}

                    </h2>

                  </div>

                </div>

                {/* RIGHT SIDE IMAGE */}
                <div className="flex justify-center items-center h-full">

                  <img
                    src={banner.image}
                    alt="AI Banner"
                    className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
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
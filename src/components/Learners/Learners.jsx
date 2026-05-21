import learner1 from "../../assets/logos/learner1.png"
import learner2 from "../../assets/logos/learner2.png"
import learner3 from "../../assets/logos/learner3.png"
import learner4 from "../../assets/logos/learner4.png"
import learner5 from "../../assets/logos/learner5.png"
import learner6 from "../../assets/logos/learner6.png"

import { Swiper, SwiperSlide } from "swiper/react"

import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function Learners() {

  const learners = [

    {
      image: learner1,
      name: "Penumaka Gopi Kishore",
      company: "Pixis",
      before: "Intern, 2 Years",
      after: "Full Stack Developer",
    },

    {
      image: learner2,
      name: "Kesavan",
      company: "Fipsar",
      before: "Career gap of 7 months",
      after: "Data Scientist",
    },

    {
      image: learner3,
      name: "Prakash T N",
      company: "Fipsar",
      before: "Fresher, civil background, 6 months of career gap",
      after: "Data Scientist",
    },

    {
      image: learner4,
      name: "Vinoth M",
      company: "Urbanris",
      before: "Mechanical Engineer",
      after: "ML - Engineer",
    },

    {
      image: learner5,
      name: "Dharshini",
      company: "Zoho",
      before: "Fresher",
      after: "React Developer",
    },

    {
      image: learner6,
      name: "Kavin Raj",
      company: "Infosys",
      before: "Mechanical Engineer",
      after: "Frontend Developer",
    },

  ]

  return (

    <section className="bg-[#f5f5f5] py-24 px-6">

      {/* TITLE */}
      <h1 className="text-center text-5xl font-bold mb-20 text-[#222]">

        Journey Of Our Learners

      </h1>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={28}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
      >

        {learners.map((learner, index) => (

          <SwiperSlide key={index}>

            <div className="bg-white rounded-[28px] border border-[#ececec] overflow-hidden shadow-sm hover:shadow-lg transition duration-300 min-h-[690px]">

              {/* TOP SECTION */}
              <div className="bg-[#fcfcfc] py-12 px-8 flex flex-col items-center border-b border-[#f1f1f1] relative">

                {/* IMAGE */}
                <img
                  src={learner.image}
                  alt={learner.name}
                  className="w-40 h-40 rounded-full object-cover border-[5px] border-[#edf8ef] mb-8 shadow-sm"
                />

                {/* NAME */}
                <h2 className="text-[22px] font-semibold text-center text-[#2c2c2c] mb-5 leading-tight">

                  {learner.name}

                </h2>

                {/* COMPANY */}
                <p className="text-[#00b14f] text-[20px] font-semibold">

                  {learner.company}

                </p>

              </div>

              {/* BOTTOM SECTION */}
              <div className="p-8">

                {/* BEFORE */}
                <div className="border border-[#e5e5e5] rounded-2xl px-5 py-5 text-[17px] text-gray-700 leading-relaxed mb-8 min-h-[90px] flex items-center bg-white">

                  ⚪ {learner.before}

                </div>

                {/* TIMELINE */}
                <div className="flex items-center gap-4 mb-8">

                  <div className="flex flex-col items-center">

                    {/* GREEN CIRCLE */}
                    <div className="w-8 h-8 rounded-full bg-[#00c853] text-white flex items-center justify-center text-sm font-bold">

                      ⌄

                    </div>

                    {/* THIN LINE */}
                    <div className="w-[1.5px] h-12 bg-[#d8d8d8]"></div>

                  </div>

                  {/* TEXT */}
                  <p className="text-[17px] text-gray-600 mt-[-18px]">

                    After HCL GUVI

                  </p>

                </div>

                {/* AFTER */}
                <div className="bg-[#edf8ef] border border-[#d7efdd] rounded-2xl px-5 py-5 text-[18px] font-semibold text-[#1d1d1d]">

                  🟢 {learner.after}

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  )
}

export default Learners
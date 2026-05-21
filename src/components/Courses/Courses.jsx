import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import aimlImage from "../../assets/logos/aiml.png"
import businessImage from "../../assets/logos/businessandmarketing.png"
import devopsImage from "../../assets/logos/devops.png"
import masterDataImage from "../../assets/logos/masterdatascience.png"
import pythonImage from "../../assets/logos/python.png"
import reactImage from "../../assets/logos/react.png"
import uiuxImage from "../../assets/logos/uiuxdesign.png"

function Courses() {

  const courses = [

    {
      image: masterDataImage,
      title: "Master Data Science Program",
      language: "Tamil, English & Hindi",
    },

    {
      image: aimlImage,
      title: "Artificial Intelligence & Machine Learning",
      language: "Tamil, English & Hindi",
    },

    {
      image: reactImage,
      title: "Full Stack React Development",
      language: "Tamil, English & Hindi",
    },

    {
      image: pythonImage,
      title: "Python Full Stack Development",
      language: "Tamil, English & Hindi",
    },

    {
      image: uiuxImage,
      title: "UI/UX Design Program",
      language: "Tamil, English, Hindi & Telugu",
    },

    {
      image: devopsImage,
      title: "DevOps & Cloud Engineering",
      language: "Tamil, English & Hindi",
    },

    {
      image: businessImage,
      title: "Business & Marketing Analytics",
      language: "Tamil, English & Hindi",
    },

  ]

  return (

    <section className="bg-[#f5f5f5] py-20 px-10 overflow-hidden">

      {/* HEADING */}
      <h1 className="text-5xl font-bold text-center mb-6">

        🔴 Live Classes + Placement Guidance

      </h1>

      {/* SUBTEXT */}
      <p className="text-center text-gray-600 text-2xl max-w-5xl mx-auto mb-16 leading-relaxed">

        HCL GUVI offers industry-leading Project Based Career Programs with live classes, certifications and placement guidance.

      </p>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="pb-20"
      >

        {courses.map((course, index) => (

          <SwiperSlide key={index}>

            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300">

              {/* IMAGE */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-60 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                {/* TITLE */}
                <h2 className="text-2xl font-semibold leading-snug mb-8 min-h-[100px]">

                  {course.title}

                </h2>

                {/* LANGUAGE */}
                <p className="text-gray-500 text-lg mb-10">

                  🌐 {course.language}

                </p>

                {/* BUTTONS */}
                <div className="flex gap-4">

                  <button className="border border-gray-400 px-4 py-3 rounded-lg text-lg w-1/2 hover:bg-gray-100 transition">

                    Syllabus

                  </button>

                  <button className="bg-[#00c853] text-white px-4 py-3 rounded-lg text-lg w-1/2 hover:bg-green-600 transition">

                    Know More

                  </button>

                </div>

              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

      {/* EXPLORE BUTTON */}
      <div className="flex justify-center mt-10">

        <button className="border border-gray-400 px-12 py-5 rounded-xl text-2xl hover:bg-white transition duration-300">

          Explore All Programs

        </button>

      </div>

    </section>

  )
}

export default Courses
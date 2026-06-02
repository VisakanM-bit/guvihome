import { useState } from "react"

import {
  FaSearch,
  FaClock,
  FaGlobe,
  FaCertificate,
  FaChevronDown
} from "react-icons/fa"

function FeaturedPrograms() {
const [openFilter, setOpenFilter] = useState(null)
  const courses = [

    {
      title: "Data Science Program",
      duration: "3 Month - weekday, 5 Month - weekend",
      language: "Tamil, English, Hindi, Telugu",
      certification: "IITM Pravartak, HCL GUVI",
    },

    {
      title: "Intel AIML Program",
      duration: "6 Month - weekend",
      language: "English",
      certification: "Intel, IITM Pravartak, HCL GUVI",
    },

    {
      title: "Gen AI Software Development",
      duration: "9 Month - weekend",
      language: "Tamil, English, Hindi, Telugu",
      certification: "IITM Pravartak, HCL GUVI",
    },

    {
      title: "MERN Full Stack Program",
      duration: "3 Month - weekday, 5 Month - weekend",
      language: "Tamil, English, Hindi, Telugu",
      certification: "IITM Pravartak, HCL GUVI",
    },

    {
      title: "UI/UX Design Program",
      duration: "3 Month - weekday, 5 Month - weekend",
      language: "Tamil, English, Hindi, Telugu",
      certification: "HCL GUVI",
    },

    {
      title: "Business & Marketing Analytics",
      duration: "3 Month - weekday, 6 Month - weekend",
      language: "Tamil, English, Hindi",
      certification: "HCL GUVI",
    },

    {
      title: "AIML Program",
      duration: "5 Month - weekend",
      language: "English",
      certification: "HCL GUVI",
    },

    {
      title: "DevOps & Cloud Program",
      duration: "3 Month - weekday, 5 Month - weekend",
      language: "English",
      certification: "HCL GUVI",
    },

    {
      title: "Automotive and Product Design Program",
      language: "Tamil, English, Hindi",
      certification: "Autodesk, HCL GUVI",
      duration: "4.5 Month - weekend",
    },

    {
      title: "Entrepreneurship Programme by IIT Delhi",
      language: "English",
      certification: "IIT Delhi",
      duration: "9 Month - weekend",
    },

    {
      title: "VLSI Design Programme",
      language: "English",
      certification: "IIT Delhi",
      duration: "6 Month - weekend",
    },

    {
      title: "Electric Vehicle Technology Programme",
      language: "English",
      certification: "IIT Delhi",
      duration: "6 Month - weekend",
    },

  ]

  return (

    <section className="max-w-full lg:max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-0">

      {/* HEADER */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-14">

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
          Featured Programs
        </h2>

        <div className="relative w-full sm:w-auto">

          <input
            type="text"
            placeholder="Search"
            className="
            w-full sm:w-80
            border
            border-slate-300
            rounded-lg sm:rounded-xl lg:rounded-2xl
            px-4 sm:px-5 md:px-6
            py-2 sm:py-3 md:py-4
            outline-none
            text-sm sm:text-base
            "
          />

          <FaSearch className="absolute right-3 sm:right-4 top-2.5 sm:top-3 md:top-4 text-gray-500 text-xs sm:text-sm" />

        </div>

      </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12 lg:mb-16">

  {/* CATEGORY */}

  <div className="relative">

    <button
      onClick={() =>
        setOpenFilter(
          openFilter === "category"
            ? null
            : "category"
        )
      }
      className="
      w-full
      bg-white
      border
      border-gray-300
      rounded-full
      px-6
      py-4
      flex
      justify-between
      items-center
      font-semibold
      "
    >
      Category
      <FaChevronDown />
    </button>

    {openFilter === "category" && (

      <div
        className="
        absolute
        top-12 sm:top-14 md:top-16
        left-0
        w-full
        bg-white
        rounded-lg sm:rounded-xl lg:rounded-2xl
        shadow-xl
        border
        z-50
        p-3 sm:p-4 md:p-5
        space-y-2 sm:space-y-3
        "
      >

        {[
          "Data Science",
          "AI",
          "Web Development",
          "Design",
          "Analytics",
          "Deployment",
          "Mechanical CAD - Design & Simulation",
          "Entrepreneurship",
          "Electrical - Semiconductor",
          "Automobile"
        ].map(item => (

          <label
            key={item}
            className="flex items-center gap-3"
          >
            <input type="checkbox" />
            {item}
          </label>

        ))}

      </div>

    )}

  </div>

  {/* CERTIFICATION */}

  <div className="relative">

    <button
      onClick={() =>
        setOpenFilter(
          openFilter === "certification"
            ? null
            : "certification"
        )
      }
      className="
      w-full
      bg-white
      border
      border-gray-300
      rounded-full
      px-6
      py-4
      flex
      justify-between
      items-center
      font-semibold
      "
    >
      Certification
      <FaChevronDown />
    </button>

    {openFilter === "certification" && (

      <div className="absolute top-16 left-0 w-full bg-white rounded-2xl shadow-xl border z-50 p-4 space-y-3">

        {[
          "IITM Pravartak",
          "HCL GUVI",
          "Intel",
          "MongoDB",
          "Autodesk",
          "IIT Delhi"
        ].map(item => (

          <label
            key={item}
            className="flex items-center gap-3"
          >
            <input type="checkbox" />
            {item}
          </label>

        ))}

      </div>

    )}

  </div>

  {/* LANGUAGE */}

  <div className="relative">

    <button
      onClick={() =>
        setOpenFilter(
          openFilter === "language"
            ? null
            : "language"
        )
      }
      className="
      w-full
      bg-white
      border
      border-gray-300
      rounded-full
      px-6
      py-4
      flex
      justify-between
      items-center
      font-semibold
      "
    >
      Language
      <FaChevronDown />
    </button>

    {openFilter === "language" && (

      <div className="absolute top-16 left-0 w-full bg-white rounded-2xl shadow-xl border z-50 p-4 space-y-3">

        {[
          "Tamil",
          "English",
          "Hindi",
          "Telugu"
        ].map(item => (

          <label
            key={item}
            className="flex items-center gap-3"
          >
            <input type="checkbox" />
            {item}
          </label>

        ))}

      </div>

    )}

  </div>

  {/* DURATION */}

  <div className="relative">

    <button
      onClick={() =>
        setOpenFilter(
          openFilter === "duration"
            ? null
            : "duration"
        )
      }
      className="
      w-full
      bg-white
      border
      border-gray-300
      rounded-full
      px-6
      py-4
      flex
      justify-between
      items-center
      font-semibold
      "
    >
      Duration
      <FaChevronDown />
    </button>

    {openFilter === "duration" && (

      <div className="absolute top-16 left-0 w-full bg-white rounded-2xl shadow-xl border z-50 p-4 space-y-3">

        {[
          "3 Month - weekday, 5 Month - weekend",
          "6 Month - weekend",
          "9 Month - weekend",
          "3 Month - weekday, 6 Month - weekend",
          "5 Month - weekend",
          "4.5 Month - weekend",
          "6 Months - Weekend"
        ].map(item => (

          <label
            key={item}
            className="flex items-center gap-3"
          >
            <input type="checkbox" />
            {item}
          </label>

        ))}

      </div>

    )}

  </div>

</div>
      {/* CARDS */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

        {courses.map((course, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl
            border
            border-purple-100
            shadow-md
            overflow-hidden
            min-h-80 sm:min-h-96 md:min-h-[420px]
            flex
            flex-col
            "
          >

            {/* TAG */}

            <div
              className="
              bg-gradient-to-r
              from-purple-900
              to-purple-700
              text-white
              text-xs
              font-bold
              px-3 sm:px-4 md:px-5
              py-2 sm:py-2.5 md:py-3
              inline-block
              w-fit
              "
            >
              Best Seller
            </div>

            {/* BODY */}

            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">

              {/* TITLE */}

              <h3
                className="
                text-base sm:text-lg md:text-xl lg:text-2xl
                font-bold
                text-slate-800
                leading-snug
                min-h-16 sm:min-h-20 md:min-h-24
                mb-3 sm:mb-4 md:mb-5
                "
              >
                {course.title}
              </h3>

              {/* DETAILS */}

              <div className="space-y-2 sm:space-y-2.5 md:space-y-3 text-gray-600 text-xs sm:text-sm flex-grow">

                <div className="flex items-start gap-3">
                  <FaGlobe className="mt-1" />
                  <span>{course.language}</span>
                </div>

                <div className="flex items-start gap-3">
                  <FaCertificate className="mt-1" />
                  <span>{course.certification}</span>
                </div>

                <div className="flex items-start gap-3">
                  <FaClock className="mt-1" />
                  <span>{course.duration}</span>
                </div>

              </div>

              {/* BUTTONS */}

              <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:gap-3 mt-4 sm:mt-5 md:mt-6">

                <button
                  className="
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  font-semibold
                  py-2 sm:py-2.5 md:py-3 lg:py-4
                  rounded-lg
                  text-xs sm:text-sm md:text-base
                  transition
                  "
                >
                  Know More »
                </button>

                <button
                  className="
                  border
                  border-gray-300
                  py-2 sm:py-2.5 md:py-3 lg:py-4
                  rounded-lg
                  font-semibold
                  text-xs sm:text-sm md:text-base
                  hover:bg-gray-50
                  transition
                  "
                >
                  Brochure
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  )

}

export default FeaturedPrograms
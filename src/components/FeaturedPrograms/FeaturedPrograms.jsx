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

    <section className="max-w-7xl mx-auto py-20">

      {/* HEADER */}

      <div className="flex justify-between items-center mb-14">

        <h2 className="text-5xl font-bold text-slate-900">
          Featured Programs
        </h2>

        <div className="relative">

          <input
            type="text"
            placeholder="Search"
            className="
            w-[320px]
            border
            border-slate-300
            rounded-xl
            px-5
            py-4
            outline-none
            "
          />

          <FaSearch className="absolute right-5 top-5 text-gray-500" />

        </div>

      </div>
    <div className="grid grid-cols-4 gap-6 mb-12">

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
        top-16
        left-0
        w-full
        bg-white
        rounded-2xl
        shadow-xl
        border
        z-50
        p-4
        space-y-3
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

      <div className="grid grid-cols-4 gap-8">

        {courses.map((course, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-2xl
            border
            border-purple-100
            shadow-md
            overflow-hidden
            h-[360px]
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
              px-4
              py-2
              inline-block
              w-fit
              "
            >
              Best Seller
            </div>

            {/* BODY */}

            <div className="p-5 flex flex-col flex-1">

              {/* TITLE */}

              <h3
                className="
                text-xl
                font-bold
                text-slate-800
                leading-7
                min-h-[70px]
                mb-4
                "
              >
                {course.title}
              </h3>

              {/* DETAILS */}

              <div className="space-y-3 text-gray-600 flex-grow">

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

              <div className="grid grid-cols-2 gap-3 mt-5">

                <button
                  className="
                  bg-green-500
                  hover:bg-green-600
                  text-white
                  font-semibold
                  py-3
                  rounded-lg
                  text-sm
                  transition
                  "
                >
                  Know More »
                </button>

                <button
                  className="
                  border
                  border-gray-300
                  py-3
                  rounded-lg
                  font-semibold
                  text-sm
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
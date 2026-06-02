import image1 from "../../assets/logos/image1.png"
import image2 from "../../assets/logos/image2.png"
import image3 from "../../assets/logos/image3.png"
import image4 from "../../assets/logos/image4.png"

function Explore() {

  const courses = [

    {
      image: image1,
      title: "SAP S/4 HANA",
      hours: "3 Hrs",
      language: "English",
    },

    {
      image: image2,
      title: "Email Etiquette",
      hours: "4 Hrs",
      language: "English",
    },

    {
      image: image3,
      title: "Resume Building",
      hours: "2 Hrs",
      language: "English",
    },

    {
      image: image4,
      title: "Confluence",
      hours: "10 Hrs",
      language: "English",
    },

  ]

  return (

    <section className="bg-[#f5f5f5] py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* TITLE */}
      <div className="text-center mb-16">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#172b4d] mb-2 sm:mb-3 md:mb-4">

          Your Learning, Your Pace: Explore, Master, Succeed

        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500">

          Choose from 1250+ exclusive courses with new courses being published every month.

        </p>

      </div>

      {/* CATEGORY TABS */}
      <div className="flex flex-col sm:flex-row justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 lg:mb-16 max-w-full">

        <button className="bg-[#e9f8ec] text-[#16c247] px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-t-lg border-b-4 border-[#16c247] text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:bg-[#d4f0dd] transition">

          Business & Management

        </button>

        <button className="bg-white px-8 py-4 text-xl text-gray-600">

          Data Science & AI

        </button>

        <button className="bg-white px-8 py-4 text-xl text-gray-600">

          Engineering & Design

        </button>

        <button className="bg-white px-8 py-4 text-xl text-gray-600">

          IT & Software

        </button>

        <button className="bg-white px-8 py-4 text-xl text-gray-600">

          Programming

        </button>

      </div>

      {/* COURSE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

        {courses.map((course, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >

            {/* IMAGE */}
            <div className="relative">

              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[250px] object-cover"
              />

              {/* PAID TAG */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-[#ff4d4f] text-white px-3 sm:px-4 md:px-5 py-1 sm:py-2 rounded text-xs sm:text-sm md:text-base lg:text-lg font-semibold">

                Paid

              </div>

            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-5 md:p-6">

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#2b2b2b] mb-6 sm:mb-8 md:mb-10">

                {course.title}

              </h2>

              <div className="flex items-center gap-3 sm:gap-4 text-gray-500 text-xs sm:text-sm md:text-base lg:text-xl">

                <span>⏱ {course.hours}</span>

                <span>🌐 {course.language}</span>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Explore
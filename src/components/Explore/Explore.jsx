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

    <section className="bg-[#f5f5f5] py-24 px-10">

      {/* TITLE */}
      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold text-[#172b4d] mb-4">

          Your Learning, Your Pace: Explore, Master, Succeed

        </h1>

        <p className="text-2xl text-gray-500">

          Choose from 1250+ exclusive courses with new courses being published every month.

        </p>

      </div>

      {/* CATEGORY TABS */}
      <div className="flex justify-center flex-wrap gap-2 mb-16">

        <button className="bg-[#e9f8ec] text-[#16c247] px-8 py-4 rounded-t-lg border-b-4 border-[#16c247] text-xl font-semibold">

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

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
              <div className="absolute bottom-4 left-4 bg-[#ff4d4f] text-white px-5 py-2 rounded-md text-lg font-semibold">

                Paid

              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-4xl font-bold text-[#2b2b2b] mb-10">

                {course.title}

              </h2>

              <div className="flex items-center gap-4 text-gray-500 text-xl">

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
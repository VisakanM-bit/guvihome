import {
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaChartBar,
  FaExchangeAlt,
} from "react-icons/fa"

function Corporate() {

  const corporateData = [

    {
      icon: <FaBuilding />,
      title: "Specialized\nCorporate Training",
    },

    {
      icon: <FaUsers />,
      title: "Streamlined\nCorporate Hiring",
    },

    {
      icon: <FaHandshake />,
      title: "Corporate\nSocial Responsibility",
    },

    {
      icon: <FaChartBar />,
      title: "HYRE\nassessment",
    },

    {
      icon: <FaExchangeAlt />,
      title: "End-to-End\nCampus Hiring",
    },

  ]

  return (

    <section className="bg-[#f7f7f7] py-8 sm:py-12 md:py-16 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* HEADING */}
      <div className="text-center mb-24">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-5">

          HCL GUVI for Corporates

        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">

          Explore our customized corporate solutions for your company!

        </p>

      </div>

      {/* CORPORATE ITEMS */}
      <div className="flex justify-between items-start max-w-7xl mx-auto relative">

        {corporateData.map((item, index) => (

          <div
            key={index}
            className="flex flex-col items-center relative w-full sm:w-1/3 md:w-1/5"
          >

            {/* TOP LINE */}
            <div className="absolute top-6 left-1/2 w-[120px] border-t border-dashed border-gray-400"></div>

            {/* ICON BOX */}
            <div className="relative z-10 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-lg sm:rounded-xl shadow-lg flex items-center justify-center text-white text-xl sm:text-2xl md:text-3xl">

              {item.icon}

            </div>

            {/* VERTICAL LINE */}
            <div className="h-12 sm:h-14 md:h-16 border-l border-dashed border-gray-400"></div>

            {/* TEXT */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-3xl font-semibold text-center text-gray-900 leading-snug whitespace-pre-line mt-3 sm:mt-4 md:mt-5">

              {item.title}

            </h2>

          </div>

        ))}

      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-12 sm:mt-16 md:mt-20 lg:mt-24">

        <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white text-sm sm:text-base md:text-lg lg:text-xl lg:text-2xl font-semibold px-6 sm:px-8 md:px-10 lg:px-14 py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-lg shadow-lg">

          Learn More

        </button>

      </div>

    </section>

  )
}

export default Corporate
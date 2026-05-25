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

    <section className="bg-[#f7f7f7] py-28 px-10">

      {/* HEADING */}
      <div className="text-center mb-24">

        <h1 className="text-5xl font-bold text-gray-900 mb-5">

          HCL GUVI for Corporates

        </h1>

        <p className="text-2xl text-gray-600">

          Explore our customized corporate solutions for your company!

        </p>

      </div>

      {/* CORPORATE ITEMS */}
      <div className="flex justify-between items-start max-w-7xl mx-auto relative">

        {corporateData.map((item, index) => (

          <div
            key={index}
            className="flex flex-col items-center relative w-[220px]"
          >

            {/* TOP LINE */}
            <div className="absolute top-6 left-1/2 w-[120px] border-t border-dashed border-gray-400"></div>

            {/* ICON BOX */}
            <div className="relative z-10 w-16 h-16 rounded-xl bg-green-500 flex items-center justify-center text-white text-3xl shadow-lg">

              {item.icon}

            </div>

            {/* VERTICAL LINE */}
            <div className="h-16 border-l border-dashed border-gray-400"></div>

            {/* TEXT */}
            <h2 className="text-3xl font-semibold text-center text-gray-900 leading-snug whitespace-pre-line">

              {item.title}

            </h2>

          </div>

        ))}

      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-24">

        <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white text-2xl font-semibold px-14 py-5 rounded-lg shadow-lg">

          Learn More

        </button>

      </div>

    </section>

  )
}

export default Corporate
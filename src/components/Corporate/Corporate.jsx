import {
  FaBuilding,
  FaUsers,
  FaHandshake,
  FaChartBar,
  FaExchangeAlt,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa"
import { Link } from "react-router-dom"

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

  const corporateReviews = [
    {
      company: "NEOTOUCH",
      role: "Client at NEOTOUCH",
      initial: "N",
      review:
        "NEOTOUCH delivered a clean and reliable implementation, and the final product experience was smooth for both internal teams and end users.",
    },
    {
      company: "Talent Development Team",
      role: "Corporate training partner",
      initial: "T",
      review:
        "The customized workforce development flow helped our team upskill with practical learning, mentor guidance, and job-ready execution.",
    },
    {
      company: "Campus Hiring Partner",
      role: "Recruitment solutions partner",
      initial: "C",
      review:
        "Jawa EdTech's trained talent pool, internship partnerships, and placement-readiness support made graduate hiring faster and more focused.",
    },
  ]

  return (

    <section className="bg-[#f7f7f7] py-8 sm:py-12 md:py-16 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* HEADING */}
      <div className="text-center mb-24">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 lg:mb-5">

          Jawa EdTech for Corporates

        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600">

          Explore our customized corporate solutions for your company!

        </p>

      </div>

      {/* CORPORATE ITEMS */}
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-5">

        {corporateData.map((item, index) => (

          <div
            key={index}
            className="relative flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-sky-100 bg-white px-5 py-7 text-center shadow-[0_24px_80px_-58px_rgba(37,99,235,0.65)] transition hover:-translate-y-1 hover:shadow-[0_30px_90px_-58px_rgba(37,99,235,0.85)]"
          >

            {/* TOP LINE */}
            <div className="absolute left-1/2 top-8 hidden w-[70%] -translate-x-1/2 border-t border-dashed border-sky-200 lg:block"></div>

            {/* ICON BOX */}
            <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-2xl text-white shadow-lg shadow-sky-500/25 md:h-16 md:w-16 md:text-3xl">

              {item.icon}

            </div>

            {/* VERTICAL LINE */}
            <div className="h-10 border-l border-dashed border-sky-200"></div>

            {/* TEXT */}
            <h2 className="mt-3 whitespace-pre-line text-lg font-black leading-snug tracking-[-0.02em] text-gray-900 md:text-xl xl:text-2xl">

              {item.title}

            </h2>

          </div>

        ))}

      </div>

      <div className="mx-auto mt-10 grid max-w-7xl gap-5 lg:grid-cols-3">
        {corporateReviews.map((item) => (
          <article
            key={item.company}
            className="flex min-h-[320px] flex-col justify-between rounded-2xl border border-white/10 bg-[#151515] p-7 text-white shadow-[0_28px_90px_-58px_rgba(15,23,42,0.9)]"
          >
            <div>
              <FaQuoteLeft className="text-5xl text-white" />
              <div className="mt-7 flex gap-1 text-lg text-white">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} />
                ))}
              </div>
              <p className="mt-7 text-xl font-semibold italic leading-8 text-white">
                "{item.review}"
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-xl font-black text-slate-950">
                {item.initial}
              </span>
              <span>
                <span className="block text-base font-black text-white">{item.company}</span>
                <span className="mt-1 block text-sm font-medium text-slate-300">{item.role}</span>
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center mt-12 sm:mt-16">

        <Link to="/about-edtech" className="bg-gradient-to-r from-sky-500 to-blue-600 transition-all duration-300 hover:from-sky-400 hover:to-blue-500 text-white text-sm sm:text-base md:text-lg lg:text-xl lg:text-2xl font-semibold px-6 sm:px-8 md:px-10 lg:px-14 py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-lg shadow-lg shadow-sky-500/20">

          Learn More

        </Link>

      </div>

    </section>

  )
}

export default Corporate

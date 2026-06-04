function Proud() {

  const stats = [

    {
      number: "4464724",
      label: "Learners",
    },

    {
      number: "194",
      label: "Mentors",
    },

    {
      number: "58892935",
      label: "Lines of Code Submission",
    },

    {
      number: "1673",
      label: "Videos",
    },

  ]

  const circles = [

    {
      percent: "72%",
      text: "of Learners complete their courses within 3 months",
    },

    {
      percent: "78%",
      text: "of Learners could recollect the concepts faster",
    },

    {
      percent: "84%",
      text: "of Learners have better understanding over complex topics",
    },

  ]

  return (

    <section className="bg-[#f5f5f5] py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">

      {/* TITLE */}
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#172b4d] mb-8 sm:mb-12 lg:mb-16">

        We are proud of...

      </h1>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 lg:mb-10">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-[#f1f1f1] rounded-lg sm:rounded-xl md:rounded-2xl py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-8 text-center border border-[#ececec]"
          >

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00695c] mb-2 sm:mb-3 md:mb-4">

              {item.number}

            </h2>

            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-gray-600 font-semibold">

              {item.label}

            </p>

          </div>

        ))}

      </div>

      {/* BOTTOM CIRCLES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">

        {circles.map((item, index) => (

          <div
            key={index}
            className="bg-[#f1f1f1] rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-[#ececec] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8"
          >

            {/* CIRCLE */}
            <div className="relative w-24 sm:w-28 md:w-32 lg:w-[120px] h-24 sm:h-28 md:h-32 lg:h-[120px] flex items-center justify-center flex-shrink-0">

              <div className="w-24 sm:w-28 md:w-32 lg:w-[120px] h-24 sm:h-28 md:h-32 lg:h-[120px] rounded-full border-2 sm:border-4 lg:border-[14px] border-[#b9f6ca]"></div>

              <div className="absolute top-0 left-0 w-24 sm:w-28 md:w-32 lg:w-[120px] h-24 sm:h-28 md:h-32 lg:h-[120px] rounded-full border-2 sm:border-4 lg:border-[14px] border-transparent border-t-[#16c247] border-r-[#16c247] rotate-[40deg]"></div>

              <h2 className="absolute text-2xl sm:text-3xl md:text-4xl font-bold text-[#172b4d]">

                {item.percent}

              </h2>

            </div>

            {/* TEXT */}
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl leading-relaxed text-gray-600 font-medium">

              {item.text}

            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Proud
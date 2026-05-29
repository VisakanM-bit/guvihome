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

    <section className="bg-[#f5f5f5] py-24 px-10">

      {/* TITLE */}
      <h1 className="text-center text-6xl font-bold text-[#172b4d] mb-16">

        We are proud of...

      </h1>

      {/* TOP STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

        {stats.map((item, index) => (

          <div
            key={index}
            className="bg-[#f1f1f1] rounded-xl py-12 text-center border border-[#ececec]"
          >

            <h2 className="text-[52px] font-bold text-[#00695c] mb-4">

              {item.number}

            </h2>

            <p className="text-[28px] text-gray-600 font-semibold">

              {item.label}

            </p>

          </div>

        ))}

      </div>

      {/* BOTTOM CIRCLES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {circles.map((item, index) => (

          <div
            key={index}
            className="bg-[#f1f1f1] rounded-xl p-8 border border-[#ececec] flex items-center gap-8"
          >

            {/* CIRCLE */}
            <div className="relative w-[120px] h-[120px] flex items-center justify-center">

              <div className="w-[120px] h-[120px] rounded-full border-[14px] border-[#b9f6ca]"></div>

              <div className="absolute top-0 left-0 w-[120px] h-[120px] rounded-full border-[14px] border-transparent border-t-[#16c247] border-r-[#16c247] rotate-[40deg]"></div>

              <h2 className="absolute text-3xl font-bold text-[#172b4d]">

                {item.percent}

              </h2>

            </div>

            {/* TEXT */}
            <p className="text-[28px] leading-relaxed text-gray-600 font-medium">

              {item.text}

            </p>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Proud
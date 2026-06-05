import {
  FaCircle,
} from "react-icons/fa"

import learner1 from "../../assets/logos/learner1.png"
import learner2 from "../../assets/logos/learner2.png"
import learner3 from "../../assets/logos/learner3.png"
import learner4 from "../../assets/logos/learner4.png"

function Learners() {

  const learners = [

    {
      image: learner1,
      name: "Padmini P ",
      company: "TachoMind",
      before: "Online Support Associate",
      after: "Automation Testing Engineer",
    },

    {
      image: learner2,
      name: "Kathirvel S ",
      company: "SmartHealth",
      before: "Associate",
      after: "UI/UX Designer",
    },

    {
      image: learner3,
      name: "Ramapriya S ",
      company: "GNIKUL",
      before: "Fresher, Msc (Arts & Science)",
      after: "Junior Developer",
    },

    {
      image: learner4,
      name: "Vignesh G ",
      company: "RemitBee",
      before: "9 years gap after graduation",
      after: "Automation Testing Engineer",
    },

  ]

  return (

    <section className="bg-[#f7f7f7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">

      {/* TITLE */}
      <div className="text-center mb-12">

        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">

          Journey Of Our Learners

        </h1>

      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-full mx-auto">

        {learners.map((learner, index) => (

          <div
            key={index}
            className="bg-white rounded-[22px] overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >

            {/* TOP SECTION */}
            <div className="bg-[#fcfcfc] border-b border-gray-200 relative overflow-hidden">

              {/* GRID BACKGROUND */}
              <div className="absolute inset-0 opacity-20">

                <div className="w-full h-full bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)] bg-[size:30px_30px]"></div>

              </div>

              {/* CONTENT */}
              <div className="relative z-10 px-6 pt-6 pb-7 flex flex-col items-center">

                {/* IMAGE BOX */}
                <div className="w-full rounded-[16px] overflow-hidden border border-gray-200 shadow-sm mb-5 bg-white">

                  <div className="bg-white flex items-center justify-center h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden p-2 sm:p-3">

                    <img
                      src={learner.image}
                      alt={learner.name}
                      className="max-h-full max-w-full object-contain mix-blend-multiply"
                    />

                  </div>

                </div>

                {/* NAME */}
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-800 text-center mb-3 sm:mb-4 leading-tight">

                  {learner.name}

                </h2>

                {/* COMPANY */}
                <div className="bg-white border border-gray-200 rounded-lg px-5 py-2 shadow-sm">

                  <p className="text-sm sm:text-base md:text-lg font-semibold">

                    {learner.company}

                  </p>

                </div>

              </div>

            </div>

            {/* BOTTOM CONTENT */}
            <div className="px-4 py-5">

              {/* BEFORE BOX */}
              <div className="border border-gray-300 rounded-lg sm:rounded-xl md:rounded-2xl px-3 sm:px-4 md:px-5 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 bg-white min-h-auto sm:min-h-[72px]">

                <FaCircle className="text-gray-300 text-[8px] sm:text-[10px] min-w-fit" />

                <p className="text-xs sm:text-sm md:text-base text-gray-800 font-medium leading-relaxed">

                  {learner.before}

                </p>

              </div>

              {/* TIMELINE */}
              <div className="relative pl-2 mb-4 sm:mb-5">

                {/* VERTICAL LINE */}
                <div className="absolute left-[12px] top-8 h-10 border-l-2 border-dashed border-gray-300"></div>

                {/* TOP ROW */}
                <div className="flex items-center gap-3">

                  {/* GREEN CIRCLE */}
                  <div className="w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm z-10">

                    g

                  </div>

                  {/* TEXT */}
                  <p className="text-[16px] text-gray-700 font-medium">

                    After Jawa EdTech

                  </p>

                </div>

                {/* ARROW */}
                <div className="ml-[7px] mt-5 text-green-500 text-base">

                  ↓

                </div>

              </div>

              {/* AFTER BOX */}
              <div className="bg-[#eef9f0] border border-green-100 rounded-[16px] px-4 py-4 flex items-center gap-3 min-h-[72px]">

                <FaCircle className="text-green-500 text-[12px] min-w-fit" />

                <p className="text-[16px] font-semibold text-gray-900 leading-relaxed">

                  {learner.after}

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  )
}

export default Learners

import {
  FaLinkedin,
  FaCircle
} from "react-icons/fa"

import learner1 from "../../assets/logos/learner1.png"
import learner2 from "../../assets/logos/learner2.png"
import learner3 from "../../assets/logos/learner3.png"
import learner4 from "../../assets/logos/learner4.png"

function SuccessStories() {

  const stories = [

    {
      image: learner1,
      name: "Vignesh G",
      company: "GNIKUL",
      role: "Junior Developer",
      joined: "Joined Jawa EdTech",
      before: "Fresher, Msc (Arts & Science)",
      bg: "bg-[#f3ebff]",
      border: "border-purple-300",
    },

    {
      image: learner2,
      name: "Penumaka Gopi Kishore",
      company: "Pixis",
      role: "Full Stack Developer",
      joined: "Joined Jawa EdTech",
      before: "Intern (2 Years)",
      bg: "bg-[#eafaf0]",
      border: "border-green-300",
    },

    {
      image: learner3,
      name: "Ramapriya Prasathe",
      company: "RemitBee",
      role: "Automation Testing Engineer",
      joined: "Joined Jawa EdTech",
      before: "9 years gap after graduation",
      bg: "bg-[#f3ebff]",
      border: "border-purple-300",
    },

    {
      image: learner4,
      name: "Vinoth M",
      company: "Urbanris",
      role: "ML - Engineer",
      joined: "Joined Jawa EdTech",
      before: "Mechanical Engineer",
      bg: "bg-[#eafaf0]",
      border: "border-green-300",
    },

  ]

  return (

    <section className="max-w-full lg:max-w-[1700px] mx-auto py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-6">

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Transformed Lives
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">

        {stories.map((item, index) => (

          <div
            key={index}
            className={`
              ${item.bg}
              ${item.border}
              rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-[30px]
              overflow-hidden
              border
              shadow-md
              hover:shadow-xl
              transition-all
            `}
          >

            {/* IMAGE */}

            <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">

              <img
                src={item.image}
                alt={item.name}
                className="
                  w-full
                  h-full
                  object-cover
                "
              />

              <div className="
                absolute
                bottom-0
                left-0
                right-0
                bg-black/40
                backdrop-blur-md
                px-3 sm:px-4 md:px-5 lg:px-6
                py-3 sm:py-4 md:py-5 lg:py-5
                flex
                justify-between
                items-center
              ">

                <div>

                  <h3 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    {item.name}
                  </h3>

                </div>

                <div className="text-right">

                  <p className="text-white text-xs sm:text-sm">
                    Working at
                  </p>

                  <p className="text-white font-semibold text-xs sm:text-sm md:text-base">
                    {item.company}
                  </p>

                </div>

              </div>

              <FaLinkedin
                className="
                  absolute
                  top-3 sm:top-4 md:top-5 lg:top-5
                  right-3 sm:right-4 md:right-5 lg:right-5
                  text-[#0a66c2]
                  text-3xl sm:text-4xl md:text-4xl lg:text-5xl
                "
              />

            </div>

            {/* DETAILS */}

            <div className="p-4 sm:p-5 md:p-6 lg:p-8">

              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-5">

                <FaCircle className="text-gray-400 text-xs" />

                <p className="font-semibold text-sm sm:text-base md:text-lg">
                  {item.role}
                </p>

              </div>

              <div className="border-l-2 border-dashed border-gray-300 ml-2 pl-4 sm:pl-5 md:pl-6 space-y-4 sm:space-y-5 md:space-y-6">

                <div>

                  <div className="
                    w-8 sm:w-9 h-8 sm:h-9
                    rounded-full
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    -ml-[38px] sm:-ml-[42px]
                    absolute
                    text-xs sm:text-sm
                  ">
                    g
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-gray-700">
                    {item.joined}
                  </p>

                </div>

                <div>

                  <p className="font-semibold text-xs sm:text-sm md:text-base text-gray-800">
                    {item.before}
                  </p>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      <div className="flex justify-center mt-14">

        <button
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-bold
            px-10
            py-4
            rounded-xl
            shadow-md
          "
        >
          View Success Stories
        </button>

      </div>

    </section>

  )
}

export default SuccessStories

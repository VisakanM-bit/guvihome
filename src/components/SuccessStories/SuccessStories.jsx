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
      joined: "Joined HCL GUVI",
      before: "Fresher, Msc (Arts & Science)",
      bg: "bg-[#f3ebff]",
      border: "border-purple-300",
    },

    {
      image: learner2,
      name: "Penumaka Gopi Kishore",
      company: "Pixis",
      role: "Full Stack Developer",
      joined: "Joined HCL GUVI",
      before: "Intern (2 Years)",
      bg: "bg-[#eafaf0]",
      border: "border-green-300",
    },

    {
      image: learner3,
      name: "Ramapriya Prasathe",
      company: "RemitBee",
      role: "Automation Testing Engineer",
      joined: "Joined HCL GUVI",
      before: "9 years gap after graduation",
      bg: "bg-[#f3ebff]",
      border: "border-purple-300",
    },

    {
      image: learner4,
      name: "Vinoth M",
      company: "Urbanris",
      role: "ML - Engineer",
      joined: "Joined HCL GUVI",
      before: "Mechanical Engineer",
      bg: "bg-[#eafaf0]",
      border: "border-green-300",
    },

  ]

  return (

    <section className="max-w-[1700px] mx-auto py-24 px-6">

      <h2 className="text-center text-5xl font-bold text-slate-900 mb-16">
        Transformed Lives
      </h2>

      <div className="grid grid-cols-4 gap-8">

        {stories.map((item, index) => (

          <div
            key={index}
            className={`
              ${item.bg}
              ${item.border}
              rounded-[30px]
              overflow-hidden
              border
              shadow-md
              hover:shadow-xl
              transition-all
            `}
          >

            {/* IMAGE */}

            <div className="relative h-[320px]">

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
                px-6
                py-5
                flex
                justify-between
                items-center
              ">

                <div>

                  <h3 className="text-white text-2xl font-bold">
                    {item.name}
                  </h3>

                </div>

                <div className="text-right">

                  <p className="text-white text-sm">
                    Working at
                  </p>

                  <p className="text-white font-semibold">
                    {item.company}
                  </p>

                </div>

              </div>

              <FaLinkedin
                className="
                  absolute
                  top-5
                  right-5
                  text-[#0a66c2]
                  text-5xl
                "
              />

            </div>

            {/* DETAILS */}

            <div className="p-8">

              <div className="flex items-center gap-4 mb-5">

                <FaCircle className="text-gray-400 text-xs" />

                <p className="font-semibold text-lg">
                  {item.role}
                </p>

              </div>

              <div className="border-l-2 border-dashed border-gray-300 ml-2 pl-6 space-y-6">

                <div>

                  <div className="
                    w-9 h-9
                    rounded-full
                    bg-green-500
                    text-white
                    flex
                    items-center
                    justify-center
                    -ml-[42px]
                    absolute
                  ">
                    g
                  </div>

                  <p className="text-lg text-gray-700">
                    {item.joined}
                  </p>

                </div>

                <div>

                  <p className="font-semibold text-gray-800">
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
            bg-green-500
            hover:bg-green-600
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
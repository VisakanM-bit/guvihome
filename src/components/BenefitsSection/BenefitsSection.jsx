import { useState } from "react"
import benefit from "../../assets/logos/benefit.png" // your image

function BenefitsSection() {

  const [open, setOpen] = useState(0)

  const items = [
    {
      title: "Personalised LMS Portal",
      content:
        "LearnSpace - A full LMS product from start to placement will be given to you for your guidance throughout the program. It will be accessed by you for a lifetime.",
    },

    {
      title: "ZEN GPT",
      content:
        "AI-powered learning assistant that helps you solve doubts, understand concepts, and accelerate your learning.",
    },

    {
      title: "Expert Mentorship",
      content:
        "Learn directly from industry experts through one-on-one guidance and mentorship sessions.",
    },

    {
      title: "Placement Assistance",
      content:
        "Resume reviews, mock interviews, hiring drives and career guidance support.",
    },
  ]

  return (
    <section className="max-w-full lg:max-w-6xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-6">

      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        What's in it for You
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-10 items-start">

        {/* Left Side */}

        <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6">

          {items.map((item, index) => (

            <div
              key={index}
              className="
              border
              border-purple-100
              rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl
              overflow-hidden
              shadow-sm
              "
            >

              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="
                w-full
                flex
                justify-between
                items-center
                px-4 sm:px-5 md:px-6 lg:px-6
                py-3 sm:py-4 md:py-5 lg:py-5
                text-left
                font-semibold
                text-sm sm:text-base md:text-lg lg:text-lg
                text-slate-800
                "
              >
                {item.title}

                <span className="text-lg sm:text-xl md:text-2xl">
                  {open === index ? "⌃" : "⌄"}
                </span>
              </button>

              {open === index && (
                <div className="px-4 sm:px-5 md:px-6 lg:px-6 pb-3 sm:pb-4 md:pb-5 lg:pb-5 text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base lg:text-base">
                  {item.content}
                </div>
              )}

            </div>

          ))}

        </div>

        {/* Right Side */}

        <div>

          <img
            src={benefit}
            alt="Benefits"
            className="
            w-full
            rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl
            border
            border-purple-100
            shadow-sm
            "
          />

        </div>

      </div>

    </section>
  )
}

export default BenefitsSection
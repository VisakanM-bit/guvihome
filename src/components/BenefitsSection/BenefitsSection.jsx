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
    <section className="max-w-6xl mx-auto py-16 px-6">

      <h2 className="text-[42px] font-bold text-slate-900 mb-10">
        What’s in it for You
      </h2>

      <div className="grid grid-cols-2 gap-10 items-center">

        {/* Left Side */}

        <div className="space-y-4">

          {items.map((item, index) => (

            <div
              key={index}
              className="
              border
              border-purple-100
              rounded-2xl
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
                px-6
                py-5
                text-left
                font-semibold
                text-[20px]
                text-slate-800
                "
              >
                {item.title}

                <span className="text-2xl">
                  {open === index ? "⌃" : "⌄"}
                </span>
              </button>

              {open === index && (
                <div className="px-6 pb-5 text-gray-600 leading-8">
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
            rounded-3xl
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
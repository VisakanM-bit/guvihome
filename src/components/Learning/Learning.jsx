import { useState } from "react"

function Learning() {

  const sections = [

    {
      title: "CodeKata",

      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",

      description: [
        "CodeKata helps improve problem-solving skills.",
        "Practice coding with real interview questions.",
        "Track your progress with AI evaluation.",
        "Improve logical thinking and coding speed.",
      ],

      button: "Explore CodeKata",
    },

    {
      title: "WebKata",

      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop",

      description: [
        "Master frontend and backend development.",
        "Practice real-world web projects.",
        "Build responsive applications.",
        "Enhance web development skills.",
      ],

      button: "Explore WebKata",
    },

    {
      title: "SQLKata",

      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1600&auto=format&fit=crop",

      description: [
        "SQLKata is a powerful tool for mastering SQL and relational databases.",
        "Focuses on concept-driven exercises for skill enhancement.",
        "Helps improve query formulation and optimization.",
        "Provides a structured learning approach.",
      ],

      button: "Explore SQLKata",
    },

    {
      title: "FixTheCode",

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",

      description: [
        "FixTheCode is curated by industry experts.",
        "Helps you become familiar with programming.",
        "Improves debugging and logical thinking.",
        "Enhances interview preparation skills.",
      ],

      button: "Explore FixTheCode",
    },

    {
      title: "IDE",

      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1600&auto=format&fit=crop",

      description: [
        "Code directly inside the browser.",
        "Supports multiple programming languages.",
        "Fast and responsive coding environment.",
        "Perfect for practice and assessments.",
      ],

      button: "Explore IDE",
    },

    {
      title: "Rewards",

      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",

      description: [
        "Redeem exciting rewards using Geekoins.",
        "Earn points from CodeKata and referrals.",
        "Unlock vouchers and special gifts.",
        "Compete with learners worldwide.",
      ],

      button: "Explore Rewards",
    },

    {
      title: "Referral",

      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",

      description: [
        "Invite friends and earn rewards.",
        "Track your referral performance.",
        "Unlock bonus learning benefits.",
        "Grow with the learning community.",
      ],

      button: "Explore Referral",
    },

    {
      title: "Forum",

      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",

      description: [
        "Discuss coding and projects with learners.",
        "Get help from mentors and peers.",
        "Share knowledge and ideas.",
        "Build your developer community.",
      ],

      button: "Explore Forum",
    },

  ]

  const [active, setActive] = useState(0)

  return (

    <section className="bg-[#f7f7f7] py-24 px-12">

      {/* TITLE */}
      <div className="text-center mb-14">

        <h1 className="text-5xl font-bold text-gray-900 mb-5">

          Learn. Practice. Earn. Have Fun!

        </h1>

      </div>

      {/* TABS */}
      <div className="flex justify-center mb-20">

        <div className="flex bg-[#f1f1f1] rounded-md overflow-hidden">

          {sections.map((item, index) => (

            <button
              key={index}
              onClick={() => setActive(index)}
              className={`px-10 py-5 text-xl font-medium transition-all duration-300 border-b-4

              ${
                active === index
                  ? "bg-[#e7f7eb] border-green-500 text-gray-900"
                  : "border-transparent text-gray-600 hover:bg-white"
              }`}
            >

              {item.title}

            </button>

          ))}

        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 gap-24 items-center">

          {/* LEFT SIDE */}
          <div className="flex justify-center">

            {/* LAPTOP */}
            <div className="relative">

              {/* SCREEN */}
              <div className="bg-black rounded-[28px] p-4 shadow-2xl">

                <div className="bg-white rounded-[18px] overflow-hidden w-[650px] h-[360px]">

                  <img
                    src={sections[active].image}
                    alt={sections[active].title}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* CAMERA */}
                <div className="w-3 h-3 bg-gray-700 rounded-full absolute top-3 left-1/2 -translate-x-1/2"></div>

              </div>

              {/* BOTTOM */}
              <div className="h-5 bg-gray-800 rounded-b-[25px] mx-8"></div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* TITLE */}
            <h2 className="text-6xl font-bold text-gray-900 mb-10">

              {sections[active].title}

            </h2>

            {/* DESCRIPTION */}
            <ul className="space-y-6 mb-14">

              {sections[active].description.map((item, index) => (

                <li
                  key={index}
                  className="flex gap-5 text-2xl text-gray-600 leading-relaxed"
                >

                  <span className="mt-2 text-gray-500">
                    •
                  </span>

                  {item}

                </li>

              ))}

            </ul>

            {/* BUTTON */}
            <button className="bg-green-500 hover:bg-green-600 transition-all duration-300 text-white text-2xl font-semibold px-12 py-5 rounded-lg shadow-lg">

              {sections[active].button}

            </button>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Learning
import Navbar from "../components/Navbar/Navbar"
import FeaturedPrograms from "../components/FeaturedPrograms/FeaturedPrograms"
import SuccessStories from "../components/SuccessStories/SuccessStories"
import Footer1 from "../components/Footer1/Footer1"
import InvestmentCalculator from "../components/InvestmentCalculator/InvestmentCalculator"
import LearnerVideos from "../components/LearnerVideos/LearnerVideos"
import BenefitsSection from "../components/BenefitsSection/BenefitsSection"
import AboutGuvi from "../components/AboutGuvi/AboutGuvi"

import {
  FaBrain,
  FaDatabase,
  FaCode,
  FaLayerGroup,
} from "react-icons/fa"

import hiring from "../assets/logos/hiring.png"

function Programs() {

  const programs = [

    {
      title: "Data Science Program",
      icon: <FaDatabase />,
    },

    {
      title: "Intel AIML Program",
      icon: <FaBrain />,
    },

    {
      title: "Gen AI Software Development",
      icon: <FaLayerGroup />,
    },

    {
      title: "MERN Full Stack Program",
      icon: <FaCode />,
    },

  ]

  return (

    <>

      {/* NAVBAR */}
      <Navbar />

      <section className="bg-white">

        {/* HERO SECTION */}
        <div
          className="
          bg-[linear-gradient(#f8fafc_1px,transparent_1px),
          linear-gradient(90deg,#f8fafc_1px,transparent_1px)]
          bg-[size:70px_70px]
          "
        >

          <div className="max-w-7xl mx-auto px-6 pt-10">

            {/* HEADING */}
            <h1
              className="
              text-center
              text-[52px]
              font-bold
              text-slate-800
              leading-tight
              max-w-5xl
              mx-auto
              "
            >
              Master the skills that drive industry innovation
            </h1>

            {/* SUBTITLE */}
            <p
              className="
              text-center
              text-[22px]
              text-gray-500
              mt-5
              "
            >
              Check out our top four best-selling courses,
              trusted by learners
            </p>

            {/* PROGRAM PILLS */}
            <div className="max-w-4xl mx-auto mt-12">

              <div className="grid grid-cols-2 gap-5">

                {programs.map((item, index) => (

                  <div
                    key={index}
                    className="
                    bg-white
                    rounded-full
                    px-6
                    py-4
                    flex
                    items-center
                    gap-4
                    shadow-md
                    hover:shadow-lg
                    transition-all
                    duration-300
                    cursor-pointer
                    "
                  >

                    {/* ICON */}
                    <div
                      className="
                      w-12
                      h-12
                      rounded-full
                      bg-purple-700
                      text-white
                      flex
                      items-center
                      justify-center
                      text-lg
                      "
                    >
                      {item.icon}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="
                      text-xl
                      font-semibold
                      text-slate-800
                      "
                    >
                      {item.title}
                    </h3>

                  </div>

                ))}

              </div>

            </div>

            {/* HIRING IMAGE */}
            <div className="flex justify-center mt-10 overflow-hidden">

              <img
                src={hiring}
                alt="Hiring Programs"
                className="
                w-full
                max-w-[1500px]
                object-contain
                mix-blend-multiply
                "
              />

            </div>

          </div>

        </div>

        {/* FEATURED PROGRAMS */}
        <FeaturedPrograms />

        {/* SUCCESS STORIES */}
        <SuccessStories />  

        <InvestmentCalculator />

        <LearnerVideos />

        <BenefitsSection />

        <AboutGuvi />
        
        {/* FOOTER */}
        <Footer1 />

      </section>

    </>

  )

}

export default Programs
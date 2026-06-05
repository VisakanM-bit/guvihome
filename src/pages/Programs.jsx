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

      <section className="cybernet-network-bg text-white">

        {/* HERO SECTION */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(0,0,0,0.62),rgba(0,0,0,0.15),rgba(0,0,0,0.65))]" />
          <div className="absolute left-10 top-10 z-[1] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="absolute bottom-0 right-10 z-[1] h-80 w-80 rounded-full bg-emerald-300/10 blur-3xl" />

          <div className="relative z-10 mx-auto w-full max-w-[1780px] px-5 pt-12 sm:px-8 lg:px-10 xl:px-12">

            {/* HEADING */}
            <h1
              className="
              text-center
              text-[52px]
              font-bold
              text-white
              leading-tight
              max-w-6xl
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
              text-blue-50/85
              mt-5
              "
            >
              Check out our top four best-selling courses,
              trusted by learners
            </p>

            {/* PROGRAM PILLS */}
            <div className="mx-auto mt-12 max-w-6xl">

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                {programs.map((item, index) => (

                  <div
                    key={index}
                    className="
                    border border-emerald-200/15
                    bg-white/[0.08]
                    backdrop-blur-xl
                    rounded-2xl
                    px-6
                    py-5
                    flex
                    items-center
                    gap-4
                    shadow-[0_18px_60px_-36px_rgba(34,197,94,0.7)]
                    hover:shadow-[0_24px_76px_-42px_rgba(34,197,94,0.95)]
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
                      rounded-2xl
                      bg-gradient-to-br from-emerald-300 to-cyan-300
                      text-slate-950
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
                      text-white
                      "
                    >
                      {item.title}
                    </h3>

                  </div>

                ))}

              </div>

            </div>

            {/* HIRING IMAGE */}
            <div className="mt-10 flex justify-center overflow-hidden">

              <img
                src={hiring}
                alt="Hiring Programs"
                className="
                w-full
                max-w-[1680px]
                object-contain
                rounded-[2rem]
                border
                border-emerald-200/12
                bg-white/[0.04]
                p-2
                shadow-[0_28px_100px_-60px_rgba(34,197,94,0.7)]
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

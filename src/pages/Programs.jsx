import Navbar from "../components/Navbar/Navbar"
import FeaturedPrograms from "../components/FeaturedPrograms/FeaturedPrograms"
import SuccessStories from "../components/SuccessStories/SuccessStories"
import Footer1 from "../components/Footer1/Footer1"
import InvestmentCalculator from "../components/InvestmentCalculator/InvestmentCalculator"
import LearnerVideos from "../components/LearnerVideos/LearnerVideos"
import BenefitsSection from "../components/BenefitsSection/BenefitsSection"
import AboutGuvi from "../components/AboutGuvi/AboutGuvi"

function Programs() {
  return (

    <>

      {/* NAVBAR */}
      <Navbar />

      <section className="cybernet-network-bg pt-2 text-white">

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

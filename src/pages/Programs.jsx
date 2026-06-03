import Navbar from "../components/Navbar/Navbar";
import ProgramsSection from "../components/ProgramsSection/ProgramsSection";
import CareerPath from "../components/CareerPath/CareerPath";
import PlacementRoadmap from "../components/PlacementRoadmap/PlacementRoadmap";
import Footer1 from "../components/Footer1/Footer1";
import CareerPopup from "../components/CareerPopup/CareerPopup";
import SeoHead from "../components/SeoHead/SeoHead";
import { BRAND, HERO } from "../data/siteContent";
import { openCareerPopup } from "../utils/careerPopupEvents";

function Programs() {
  return (
    <>
      <SeoHead
        title="Career Programs | Jawa EdTech — HR & Technology Training"
        description="Explore HR Executive, Talent Acquisition, Full Stack, Python, and AI/ML programs with internships and placement support."
        path="/programs"
      />
      <Navbar />
      <CareerPopup />

      <section className="section-padding bg-jawa-bg">
        <div className="container-jawa text-center max-w-3xl mx-auto mb-4">
          <p className="text-jawa-secondary font-semibold text-sm uppercase tracking-wide mb-3">
            {BRAND.name}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-jawa-primary leading-tight mb-4">
            Industry-Focused Career Programs
          </h1>
          <p className="text-jawa-text text-base sm:text-lg leading-relaxed mb-8">
            {HERO.description}
          </p>
          <button
            type="button"
            onClick={openCareerPopup}
            className="inline-flex items-center px-6 py-3.5 bg-jawa-secondary text-white font-bold rounded-xl hover:bg-green-600 transition"
          >
            Get Free Career Counseling
          </button>
        </div>
      </section>

      <ProgramsSection />
      <CareerPath />
      <PlacementRoadmap />
      <Footer1 />
    </>
  );
}

export default Programs;

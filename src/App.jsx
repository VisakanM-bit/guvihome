import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Ecosystem from "./components/Ecosystem/Ecosystem";
import ProgramsSection from "./components/ProgramsSection/ProgramsSection";
import CareerPath from "./components/CareerPath/CareerPath";
import ProjectsShowcase from "./components/ProjectsShowcase/ProjectsShowcase";
import WhyJawa from "./components/WhyJawa/WhyJawa";
import PlacementRoadmap from "./components/PlacementRoadmap/PlacementRoadmap";
import Testimonials from "./components/Testimonials/Testimonials";
import Partners from "./components/Partners/Partners";
import About from "./components/About/About";
import Resources from "./components/Resources/Resources";
import Corporate from "./components/Corporate/Corporate";
import Footer1 from "./components/Footer1/Footer1";
import CareerPopup from "./components/CareerPopup/CareerPopup";
import SeoHead from "./components/SeoHead/SeoHead";

function App() {
  return (
    <>
      <SeoHead />
      <Navbar />
      <CareerPopup />

      <main>
        <Hero />
        <Ecosystem />
        <ProgramsSection />
        <CareerPath />
        <ProjectsShowcase />
        <WhyJawa />
        <PlacementRoadmap />
        <Testimonials />
        <Partners />
        <About />
        <Corporate />
        <Resources />
      </main>

      <Footer1 />
    </>
  );
}

export default App;

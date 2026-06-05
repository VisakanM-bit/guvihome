import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Partners from "./components/Partners/Partners"
import Courses from "./components/Courses/Courses"
import EcosystemGateway from "./components/EcosystemGateway/EcosystemGateway"
import Learning from "./components/Learning/Learning"
import Explore from "./components/Explore/Explore"
import Corporate from "./components/Corporate/Corporate"
import About from "./components/About/About"
import ContactActions from "./components/ContactActions/ContactActions"
import Footer1 from "./components/Footer1/Footer1"

function App() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* COURSES */}
      <Courses />

      {/* CAREER ECOSYSTEM ENTRY POINTS */}
      <EcosystemGateway />

      {/* PARTNERS */}
      <Partners />

      {/* CAREER WORKSPACE */}
      <Learning />

      <section className="bg-[#050706] px-4 pb-10 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-[1540px] rounded-2xl border border-sky-200/12 bg-white/[0.045] p-5 backdrop-blur-xl">
          <ContactActions />
        </div>
      </section>

      {/* EXPLORE COURSES */}
      <Explore />

      {/* CORPORATE SECTION */}
      <Corporate />

      {/* ABOUT SECTION */}
      <About />

      {/* FOOTER */}
      <Footer1 />
    </>
  )
}

export default App

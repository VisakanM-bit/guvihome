import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Partners from "./components/Partners/Partners"
import Courses from "./components/Courses/Courses"
import Assessments from "./components/Assessments/Assessments"
import Learners from "./components/Learners/Learners"
import Testimonials from "./components/Testimonials/Testimonials"
import Companies from "./components/Companies/Companies"
import Proud from "./components/Proud/Proud"
import Explore from "./components/Explore/Explore"
import Awards from "./components/Awards/Awards"

function App() {

  return (

    <>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* PARTNERS */}
      <Partners />

      {/* COURSES */}
      <Courses />

      {/* SKILL ASSESSMENT */}
      <Assessments />

      {/* LEARNERS JOURNEY */}
      <Learners />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* COMPANIES */}
      <Companies />

      {/* PROUD SECTION */}
      <Proud />

      {/* EXPLORE COURSES */}
      <Explore />

      {/* AWARDS SECTION */}
      <Awards />

    </>

  )

}

export default App
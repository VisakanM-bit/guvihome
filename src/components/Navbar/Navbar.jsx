import { FaChevronDown } from "react-icons/fa"
import { Link } from "react-router-dom"
import {
  FaLaptopCode,
  FaRobot,
  FaChartBar,
  FaPalette,
  FaBookOpen,
  FaTrophy,
  FaUsers,
  FaDownload,
} from "react-icons/fa"

function Navbar() {

  return (

    <nav className="bg-white shadow-sm sticky top-0 z-50">

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-16 py-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-12">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">

            <h1 className="text-4xl font-bold text-green-500">
              GUVI
            </h1>

            <span className="text-4xl font-bold text-blue-700">
              HCL
            </span>

          </div>

          {/* NAV LINKS */}
          <ul className="flex items-center gap-10 text-lg font-semibold text-gray-800">

            {/* LIVE CLASSES */}
            <li className="relative group cursor-pointer">

              <div className="flex items-center gap-2 hover:text-green-500 transition">

                LIVE Classes

                <FaChevronDown className="text-xs group-hover:rotate-180 transition duration-300" />

              </div>

              {/* DROPDOWN */}
              <div className="absolute top-12 left-0 w-[700px] bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-8">

                <div className="grid grid-cols-2 gap-8">

                  <div className="space-y-6">

                    <div className="flex items-start gap-4 hover:bg-gray-50 p-3 rounded-xl transition">

                      <FaLaptopCode className="text-3xl text-purple-600 mt-1" />

                      <div>

                        <h2 className="font-bold text-xl">
                          Full Stack Development
                        </h2>

                        <p className="text-gray-500">
                          IIT-M Pravartak certified
                        </p>

                      </div>

                    </div>

                    <div className="flex items-start gap-4 hover:bg-gray-50 p-3 rounded-xl transition">

                      <FaRobot className="text-3xl text-purple-600 mt-1" />

                      <div>

                        <h2 className="font-bold text-xl">
                          AI & Machine Learning
                        </h2>

                        <p className="text-gray-500">
                          Intel & IIT-M Pravartak
                        </p>

                      </div>

                    </div>

                    <div className="flex items-start gap-4 hover:bg-gray-50 p-3 rounded-xl transition">

                      <FaChartBar className="text-3xl text-purple-600 mt-1" />

                      <div>

                        <h2 className="font-bold text-xl">
                          Data Science
                        </h2>

                        <p className="text-gray-500">
                          Industry-ready programs
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="space-y-6">

                    <div className="flex items-start gap-4 hover:bg-gray-50 p-3 rounded-xl transition">

                      <FaPalette className="text-3xl text-purple-600 mt-1" />

                      <div>

                        <h2 className="font-bold text-xl">
                          UI/UX Design
                        </h2>

                        <p className="text-gray-500">
                          Design thinking + Figma
                        </p>

                      </div>

                    </div>

                    <div className="flex items-start gap-4 hover:bg-gray-50 p-3 rounded-xl transition">

                      <FaBookOpen className="text-3xl text-purple-600 mt-1" />

                      <div>

                        <h2 className="font-bold text-xl">
                          Mechanical CAD
                        </h2>

                        <p className="text-gray-500">
                          Autodesk certified
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t mt-6 pt-5 flex items-center justify-between">

                  <div className="flex items-center gap-3 text-lg font-semibold">

                    <FaUsers className="text-green-500" />

                    Request a Callback

                  </div>

                  <Link
  to="/programs"
  className="
  bg-black
  text-white
  px-8
  py-4
  rounded-xl
  font-semibold
  "
>
  Explore all Programs →
</Link>

                </div>

              </div>

            </li>

            {/* COURSES */}
            <li className="relative group cursor-pointer">

              <div className="flex items-center gap-2 hover:text-green-500 transition">

                Courses

                <FaChevronDown className="text-xs group-hover:rotate-180 transition duration-300" />

              </div>

              <div className="absolute top-12 left-0 w-[320px] bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6">

                <div className="space-y-5">

                  <p className="hover:text-green-500 transition">
                    Python Programming
                  </p>

                  <p className="hover:text-green-500 transition">
                    React Development
                  </p>

                  <p className="hover:text-green-500 transition">
                    DevOps Engineering
                  </p>

                  <p className="hover:text-green-500 transition">
                    Business Analytics
                  </p>

                </div>

              </div>

            </li>

            {/* PRACTICE */}
            <li className="relative group cursor-pointer">

              <div className="flex items-center gap-2 hover:text-green-500 transition">

                Practice

                <FaChevronDown className="text-xs group-hover:rotate-180 transition duration-300" />

              </div>

              <div className="absolute top-12 left-0 w-[300px] bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6">

                <div className="space-y-5">

                  <p>Coding Challenges</p>

                  <p>Mock Interviews</p>

                  <p>Hackathons</p>

                  <p>Daily Practice</p>

                </div>

              </div>

            </li>

            {/* RESOURCES */}
            <li className="relative group cursor-pointer">

              <div className="flex items-center gap-2 hover:text-green-500 transition">

                Resources

                <FaChevronDown className="text-xs group-hover:rotate-180 transition duration-300" />

              </div>

              <div className="absolute top-12 left-0 w-[420px] bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6">

                <div className="grid grid-cols-2 gap-6">

                  <div className="flex items-center gap-3">

                    <FaBookOpen className="text-purple-600" />

                    Free Resources

                  </div>

                  <div className="flex items-center gap-3">

                    <FaTrophy className="text-purple-600" />

                    Success Stories

                  </div>

                  <div className="flex items-center gap-3">

                    <FaDownload className="text-purple-600" />

                    Get The App

                  </div>

                  <div className="flex items-center gap-3">

                    <FaUsers className="text-purple-600" />

                    Referral Program

                  </div>

                </div>

              </div>

            </li>

            {/* PRODUCTS */}
            <li className="relative group cursor-pointer">

              <div className="flex items-center gap-2 hover:text-green-500 transition">

                Our Products

                <FaChevronDown className="text-xs group-hover:rotate-180 transition duration-300" />

              </div>

              <div className="absolute top-12 left-0 w-[340px] bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6">

                <div className="space-y-6">

                  <div>

                    <h2 className="font-bold text-xl">
                      HackerKID
                    </h2>

                    <p className="text-gray-500">
                      Coding classes for kids
                    </p>

                  </div>

                  <div>

                    <h2 className="font-bold text-xl">
                      GUVI For Corporates
                    </h2>

                    <p className="text-gray-500">
                      Meet your hiring needs
                    </p>

                  </div>

                  <div>

                    <h2 className="font-bold text-xl">
                      Placement Preparation
                    </h2>

                    <p className="text-gray-500">
                      Ace your aptitude
                    </p>

                  </div>

                </div>

              </div>

            </li>

          </ul>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-5">

          <button className="border border-green-500 text-green-600 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-50 transition">

            Login

          </button>

          <button className="bg-green-500 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-green-600 transition shadow-lg">

            Sign up

          </button>

        </div>

      </div>

      {/* BOTTOM GREEN LINE */}
      <div className="h-[3px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500"></div>

    </nav>

  )
}

export default Navbar
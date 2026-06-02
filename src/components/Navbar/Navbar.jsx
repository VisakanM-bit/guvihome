import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useState } from "react"
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  return (

    <nav className="bg-white shadow-sm sticky top-0 z-50">

      {/* MAIN NAVBAR */}
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 py-3 sm:py-4">

        {/* LEFT SIDE */}
        <div className="flex items-center gap-6 md:gap-12">

          {/* LOGO */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500">
              GUVI
            </h1>

            <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              HCL
            </span>

          </div>

          {/* NAV LINKS - Hidden on mobile, shown on lg */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm xl:text-lg font-semibold text-gray-800">

            {/* LIVE CLASSES */}
            <li className="relative group cursor-pointer">

              <div className="flex items-center gap-2 hover:text-green-500 transition">

                LIVE Classes

                <FaChevronDown className="text-xs group-hover:rotate-180 transition duration-300" />

              </div>

              {/* DROPDOWN */}
              <div className="absolute top-12 left-0 w-[500px] md:w-[700px] bg-white rounded-2xl shadow-2xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 md:p-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">

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
                    className="bg-black text-white px-8 py-4 rounded-xl font-semibold"
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
        <div className="flex items-center gap-2 sm:gap-3 md:gap-5">

          {/* Hamburger Menu - Mobile Only */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-2xl text-gray-800 hover:text-green-500 transition"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Login/Signup Buttons - Hidden on mobile, shown on md+ */}
          <button className="hidden md:block border border-green-500 text-green-600 px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-lg font-semibold hover:bg-green-50 transition">

            Login

          </button>

          <button className="hidden md:block bg-green-500 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 rounded-lg md:rounded-xl text-xs md:text-lg font-semibold hover:bg-green-600 transition shadow-lg">

            Sign up

          </button>

        </div>

      </div>

      {/* MOBILE MENU - Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 max-h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">

            {/* LIVE CLASSES MOBILE */}
            <div className="border-t pt-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "live" ? null : "live")}
                className="w-full flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-500 py-3"
              >
                <span>LIVE Classes</span>
                <FaChevronDown className={`text-xs transition-transform ${mobileDropdown === "live" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "live" && (
                <div className="pl-4 space-y-4 bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <FaLaptopCode className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Full Stack Development</h3>
                      <p className="text-gray-500 text-sm">IIT-M Pravartak certified</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaRobot className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">AI & Machine Learning</h3>
                      <p className="text-gray-500 text-sm">Intel & IIT-M Pravartak</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaChartBar className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Data Science</h3>
                      <p className="text-gray-500 text-sm">Industry-ready programs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaPalette className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">UI/UX Design</h3>
                      <p className="text-gray-500 text-sm">Design thinking + Figma</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaBookOpen className="text-2xl text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Mechanical CAD</h3>
                      <p className="text-gray-500 text-sm">Autodesk certified</p>
                    </div>
                  </div>
                  <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center gap-2 text-base font-semibold">
                      <FaUsers className="text-green-500" />
                      Request a Callback
                    </div>
                    <Link
                      to="/programs"
                      className="block bg-black text-white px-4 py-2 rounded-lg font-semibold text-center text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Explore all Programs →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* COURSES MOBILE */}
            <div className="border-t pt-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "courses" ? null : "courses")}
                className="w-full flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-500 py-3"
              >
                <span>Courses</span>
                <FaChevronDown className={`text-xs transition-transform ${mobileDropdown === "courses" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "courses" && (
                <div className="pl-4 space-y-3 bg-gray-50 rounded-lg p-4 text-base">
                  <p className="hover:text-green-500 transition cursor-pointer">Python Programming</p>
                  <p className="hover:text-green-500 transition cursor-pointer">React Development</p>
                  <p className="hover:text-green-500 transition cursor-pointer">DevOps Engineering</p>
                  <p className="hover:text-green-500 transition cursor-pointer">Business Analytics</p>
                </div>
              )}
            </div>

            {/* PRACTICE MOBILE */}
            <div className="border-t pt-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "practice" ? null : "practice")}
                className="w-full flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-500 py-3"
              >
                <span>Practice</span>
                <FaChevronDown className={`text-xs transition-transform ${mobileDropdown === "practice" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "practice" && (
                <div className="pl-4 space-y-3 bg-gray-50 rounded-lg p-4 text-base">
                  <p>Coding Challenges</p>
                  <p>Mock Interviews</p>
                  <p>Hackathons</p>
                  <p>Daily Practice</p>
                </div>
              )}
            </div>

            {/* RESOURCES MOBILE */}
            <div className="border-t pt-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "resources" ? null : "resources")}
                className="w-full flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-500 py-3"
              >
                <span>Resources</span>
                <FaChevronDown className={`text-xs transition-transform ${mobileDropdown === "resources" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "resources" && (
                <div className="pl-4 space-y-3 bg-gray-50 rounded-lg p-4 grid grid-cols-1 gap-3 text-base">
                  <div className="flex items-center gap-2">
                    <FaBookOpen className="text-purple-600" />
                    Free Resources
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-purple-600" />
                    Success Stories
                  </div>
                  <div className="flex items-center gap-2">
                    <FaDownload className="text-purple-600" />
                    Get The App
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUsers className="text-purple-600" />
                    Referral Program
                  </div>
                </div>
              )}
            </div>

            {/* PRODUCTS MOBILE */}
            <div className="border-t pt-4">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")}
                className="w-full flex items-center justify-between text-lg font-semibold text-gray-800 hover:text-green-500 py-3"
              >
                <span>Our Products</span>
                <FaChevronDown className={`text-xs transition-transform ${mobileDropdown === "products" ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdown === "products" && (
                <div className="pl-4 space-y-4 bg-gray-50 rounded-lg p-4">
                  <div>
                    <h3 className="font-bold text-base">HackerKID</h3>
                    <p className="text-gray-500 text-sm">Coding classes for kids</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">GUVI For Corporates</h3>
                    <p className="text-gray-500 text-sm">Meet your hiring needs</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Placement Preparation</h3>
                    <p className="text-gray-500 text-sm">Ace your aptitude</p>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="border-t pt-4 flex gap-3">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 border border-green-500 text-green-600 px-4 py-3 rounded-lg font-semibold hover:bg-green-50 transition text-sm"
              >
                Login
              </button>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition text-sm"
              >
                Sign up
              </button>
            </div>

          </div>
        </div>
      )}

      {/* RIGHT SIDE - Desktop only */}
      <div className="hidden md:flex items-center gap-5">
      </div>

      {/* BOTTOM GREEN LINE */}
      <div className="h-[3px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-500"></div>

    </nav>

  )
}

export default Navbar
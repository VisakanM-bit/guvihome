import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegramPlane,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa"

function Footer1() {

  return (

    <footer className="bg-[#111111] text-white pt-20 pb-8 px-10 mt-20">

      <div className="max-w-[1500px] mx-auto">

        {/* TOP LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12 pb-16 border-b border-gray-700">

          {/* COLUMN 1 */}
          <div>

            <h2 className="font-bold text-white mb-6 uppercase tracking-wide">

              Zen Class

            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>Full Stack Development</li>
              <li>Data Science</li>
              <li>Software Development</li>
              <li>Intel AIML</li>
              <li>Automation & Testing</li>
              <li>UI/UX</li>
              <li>DevOps</li>
              <li>Business Analytics</li>
              <li>All Programs</li>

            </ul>

          </div>

          {/* COLUMN 2 */}
          <div>

            <h2 className="font-bold text-white mb-6">

              Popular Courses

            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>Python</li>
              <li>Java</li>
              <li>Mobile Hacking</li>
              <li>C Programming</li>
              <li>AWS</li>
              <li>Angular</li>
              <li>Dark Web</li>
              <li>All Courses</li>

            </ul>

          </div>

          {/* COLUMN 3 */}
          <div>

            <h2 className="font-bold text-white mb-6">

              Self-Paced Courses

            </h2>

            <ul className="space-y-4 text-gray-300 mb-10">

              <li>Premium Pass</li>
              <li>Paid Courses</li>
              <li>Free Courses</li>
              <li>Combos</li>

            </ul>

            <h2 className="font-bold text-white mb-6">

              Practice Platforms

            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>CodeKata</li>
              <li>WebKata</li>
              <li>SQLKata</li>
              <li>FixTheCode</li>
              <li>IDE</li>

            </ul>

          </div>

          {/* COLUMN 4 */}
          <div>

            <h2 className="font-bold text-white mb-6">

              Products

            </h2>

            <ul className="space-y-4 text-gray-300 mb-10">

              <li>HackerKID</li>
              <li>Placement Preparation</li>
              <li>HCL GUVI for Corporates</li>

            </ul>

            <h2 className="font-bold text-white mb-6">

              Community

            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>Campus Ambassador</li>
              <li>Industrial Visit</li>

            </ul>

          </div>

          {/* COLUMN 5 */}
          <div>

            <h2 className="font-bold text-white mb-6">

              Resources

            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>Success Stories</li>
              <li>Learn Hub</li>
              <li>Free Resources</li>
              <li>Blog</li>
              <li>Web Stories</li>
              <li>Rewards</li>
              <li>Refer a friend</li>
              <li>Become an Affiliate</li>
              <li>Resume Builder</li>

            </ul>

          </div>

          {/* COLUMN 6 */}
          <div>

            <h2 className="font-bold text-white mb-6">

              Company

            </h2>

            <ul className="space-y-4 text-gray-300">

              <li>Refund Policy</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>About Us</li>

            </ul>

          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="grid lg:grid-cols-3 gap-12 pt-14">

          {/* LEFT */}
          <div className="lg:col-span-2">

            {/* LOGO */}
            <div className="flex items-center gap-4 mb-8">

              <h1 className="text-5xl font-bold text-green-500">

                GUVI

              </h1>

              <span className="text-5xl font-bold text-white">

                HCL

              </span>

            </div>

            {/* DESCRIPTION */}
            <p className="text-gray-300 text-lg leading-9 mb-8">

              HCL GUVI (Grab Your Vernacular Imprint) Geek Network Private Limited is a leading online learning and skills development company, incubated by IIT Madras and IIM Ahmedabad.

            </p>

            <p className="text-gray-300 text-lg leading-9">

              Established in 2014 and acquired by the HCL Group in 2022, HCL GUVI provides effective and high-quality learning and skilling programs that transcend language barriers in technology education.

            </p>

          </div>

          {/* RIGHT */}
          <div>

            <h2 className="text-2xl font-bold mb-8">

              Follow us on

            </h2>

            {/* SOCIAL ICONS */}
            <div className="flex flex-wrap gap-5 mb-12">

              <div className="w-14 h-14 rounded-full bg-[#1877f2] flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition">

                <FaFacebookF />

              </div>

              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-yellow-400 flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition">

                <FaInstagram />

              </div>

              <div className="w-14 h-14 rounded-full bg-[#0077b5] flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition">

                <FaLinkedinIn />

              </div>

              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition">

                <FaTwitter />

              </div>

              <div className="w-14 h-14 rounded-full bg-[#229ED9] flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition">

                <FaTelegramPlane />

              </div>

              <div className="w-14 h-14 rounded-full bg-[#ff0000] flex items-center justify-center text-2xl cursor-pointer hover:scale-110 transition">

                <FaYoutube />

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col gap-5">

              <button className="border border-gray-500 py-4 rounded-xl hover:bg-white hover:text-black transition font-semibold">

                Download on App Store

              </button>

              <button className="border border-gray-500 py-4 rounded-xl hover:bg-white hover:text-black transition font-semibold">

                Get it on Google Play

              </button>

              <button className="bg-white text-black py-4 rounded-xl font-bold hover:bg-green-500 hover:text-white transition">

                Refer & Earn

              </button>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">

          <div className="flex gap-8 mb-4 md:mb-0">

            <p className="cursor-pointer hover:text-white transition">

              Terms and Conditions

            </p>

            <p className="cursor-pointer hover:text-white transition">

              Privacy Policy

            </p>

          </div>

          <p>

            © HCL GUVI Geek Network Pvt. Ltd.

          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer1
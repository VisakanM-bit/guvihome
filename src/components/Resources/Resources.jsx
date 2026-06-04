import {
  FaReact,
  FaPython,
  FaCode,
  FaFolderOpen,
} from "react-icons/fa"

function Resources() {

  return (

    <section className="bg-[#f7f7f7] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-10">

      <div className="max-w-7xl mx-auto">

        {/* MAIN BOX */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[30px] bg-gradient-to-r from-[#f4f0ff] to-[#ece7ff] py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16 shadow-xl border border-purple-100">

          {/* LEFT ICONS */}
          <FaReact className="absolute top-4 sm:top-8 lg:top-10 left-6 sm:left-14 md:left-20 lg:left-28 text-purple-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-70 rotate-12" />

          <FaCode className="absolute top-12 sm:top-16 md:top-20 lg:top-28 left-2 sm:left-4 md:left-8 text-purple-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-60 -rotate-12" />

          <FaFolderOpen className="absolute bottom-8 sm:bottom-10 md:bottom-12 lg:bottom-14 left-4 sm:left-8 md:left-12 lg:left-20 text-purple-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-60 rotate-12" />

          {/* RIGHT ICONS */}
          <FaPython className="absolute top-6 sm:top-8 lg:top-16 right-6 sm:right-12 md:right-16 lg:right-24 text-purple-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-70 rotate-12" />

          <FaReact className="absolute top-12 sm:top-16 md:top-20 lg:top-28 right-1 sm:right-3 md:right-6 text-purple-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl opacity-60 rotate-12" />

          <FaFolderOpen className="absolute bottom-6 sm:bottom-8 md:bottom-10 lg:bottom-10 right-4 sm:right-8 md:right-12 lg:right-20 text-purple-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl opacity-60 -rotate-12" />

          {/* CENTER CONTENT */}
          <div className="relative z-10 text-center">

            {/* TITLE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10">

              Find Our Perfect Free Resources to
              <br />

              Enhance Your Skills Now!

            </h1>

            {/* BUTTON */}
            <button className="bg-green-400 hover:bg-green-500 transition-all duration-300 text-black text-sm sm:text-base md:text-lg lg:text-xl lg:text-2xl font-semibold px-6 sm:px-8 md:px-10 lg:px-14 py-2 sm:py-3 md:py-4 lg:py-5 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg w-full sm:w-auto">

              Explore Now

            </button>

          </div>

          {/* BOTTOM CURVE EFFECT */}
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 lg:w-[300px] h-16 sm:h-20 md:h-24 lg:h-[120px] bg-purple-200 opacity-40 rounded-tr-lg sm:rounded-tr-2xl md:rounded-tr-4xl lg:rounded-tr-[100px]"></div>

          <div className="absolute bottom-0 right-0 w-32 sm:w-48 md:w-64 lg:w-[300px] h-16 sm:h-20 md:h-24 lg:h-[120px] bg-purple-200 opacity-40 rounded-tl-lg sm:rounded-tl-2xl md:rounded-tl-4xl lg:rounded-tl-[100px]"></div>

        </div>

      </div>

    </section>

  )
}

export default Resources
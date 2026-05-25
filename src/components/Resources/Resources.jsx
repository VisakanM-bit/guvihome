import {
  FaReact,
  FaPython,
  FaCode,
  FaFolderOpen,
} from "react-icons/fa"

function Resources() {

  return (

    <section className="bg-[#f7f7f7] py-20 px-10">

      <div className="max-w-7xl mx-auto">

        {/* MAIN BOX */}
        <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#f4f0ff] to-[#ece7ff] py-24 px-16 shadow-xl border border-purple-100">

          {/* LEFT ICONS */}
          <FaReact className="absolute top-10 left-28 text-purple-400 text-7xl opacity-70 rotate-12" />

          <FaCode className="absolute top-28 left-8 text-purple-400 text-5xl opacity-60 -rotate-12" />

          <FaFolderOpen className="absolute bottom-14 left-20 text-purple-400 text-6xl opacity-60 rotate-12" />

          {/* RIGHT ICONS */}
          <FaPython className="absolute top-16 right-24 text-purple-400 text-7xl opacity-70 rotate-12" />

          <FaReact className="absolute top-28 right-6 text-purple-400 text-5xl opacity-60 rotate-12" />

          <FaFolderOpen className="absolute bottom-10 right-20 text-purple-400 text-6xl opacity-60 -rotate-12" />

          {/* CENTER CONTENT */}
          <div className="relative z-10 text-center">

            {/* TITLE */}
            <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-10">

              Find Our Perfect Free Resources to
              <br />

              Enhance Your Skills Now!

            </h1>

            {/* BUTTON */}
            <button className="bg-green-400 hover:bg-green-500 transition-all duration-300 text-black text-2xl font-semibold px-14 py-5 rounded-2xl shadow-lg">

              Explore Now

            </button>

          </div>

          {/* BOTTOM CURVE EFFECT */}
          <div className="absolute bottom-0 left-0 w-[300px] h-[120px] bg-purple-200 opacity-40 rounded-tr-[100px]"></div>

          <div className="absolute bottom-0 right-0 w-[300px] h-[120px] bg-purple-200 opacity-40 rounded-tl-[100px]"></div>

        </div>

      </div>

    </section>

  )
}

export default Resources
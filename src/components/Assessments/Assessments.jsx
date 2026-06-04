import heroImage from "../../assets/hero.png"

function Assessments() {

  return (

    <section className="bg-[#f5f5f5] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-10">

      <div className="max-w-full lg:max-w-[1850px] mx-auto bg-[#f5f1ff] border border-[#e4dcff] rounded-xl sm:rounded-2xl lg:rounded-[40px] overflow-hidden">

        <div className="flex flex-col lg:flex-row items-center justify-between min-h-auto lg:min-h-[560px]">

          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 px-4 sm:px-8 md:px-12 lg:pl-20 py-8 sm:py-12 lg:py-0">

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[72px] leading-tight sm:leading-tight md:leading-tight lg:leading-[86px] font-bold text-black mb-4 sm:mb-6 md:mb-8 max-w-full lg:max-w-[760px]">

              Not sure which path to choose?

            </h1>

            {/* DESCRIPTION */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[30px] leading-relaxed lg:leading-[46px] text-gray-700 max-w-full lg:max-w-[760px] mb-6 sm:mb-8 md:mb-10 lg:mb-12">

              Take our free Skill Assessment and discover the right
              program tailored for you.

            </p>

            {/* BUTTON */}
            <button className="bg-[#00d95f] hover:bg-[#00c853] transition-all duration-300 text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-[26px] font-medium px-6 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-4 md:py-5 lg:py-6 rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md mb-4 sm:mb-6 md:mb-8 w-full sm:w-auto">

              Free Skill Assessment

            </button>

            {/* OFFER */}
            <p className="text-[#5e35ff] italic text-xs sm:text-sm md:text-base lg:text-lg xl:text-[22px] font-medium">

              Hurry up! Don’t miss the exclusive discount ₹7500 on the courses

            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center h-auto lg:h-full relative px-4 sm:px-0">

            <img
              src={heroImage}
              alt="Assessment Banner"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[980px] lg:scale-110 object-cover"
            />

          </div>

        </div>

      </div>

    </section>

  )
}

export default Assessments
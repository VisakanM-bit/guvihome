import heroImage from "../../assets/hero.png"

function Assessments() {

  return (

    <section className="bg-[#f5f5f5] py-20 px-4">

      <div className="max-w-[1850px] mx-auto bg-[#f5f1ff] border border-[#e4dcff] rounded-[40px] overflow-hidden">

        <div className="flex items-center justify-between min-h-[560px]">

          {/* LEFT SIDE */}
          <div className="w-1/2 pl-20">

            {/* TITLE */}
            <h1 className="text-[72px] leading-[86px] font-bold text-black mb-8 max-w-[760px]">

              Not sure which path to choose?

            </h1>

            {/* DESCRIPTION */}
            <p className="text-[30px] leading-[46px] text-gray-700 max-w-[760px] mb-12">

              Take our free Skill Assessment and discover the right
              program tailored for you.

            </p>

            {/* BUTTON */}
            <button className="bg-[#00d95f] hover:bg-[#00c853] transition-all duration-300 text-black text-[26px] font-medium px-14 py-6 rounded-2xl shadow-md mb-8">

              Free Skill Assessment

            </button>

            {/* OFFER */}
            <p className="text-[#5e35ff] italic text-[22px] font-medium">

              Hurry up! Don’t miss the exclusive discount ₹7500 on the courses

            </p>

          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/2 flex justify-end items-end h-full relative">

            <img
              src={heroImage}
              alt="Assessment Banner"
              className="w-full max-w-[980px] scale-110 object-cover"
            />

          </div>

        </div>

      </div>

    </section>

  )
}

export default Assessments
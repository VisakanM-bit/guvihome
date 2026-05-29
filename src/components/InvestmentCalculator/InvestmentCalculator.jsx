function InvestmentCalculator() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      {/* Heading */}

      <h2 className="text-center text-[52px] font-bold text-slate-900">
        What You Get When You Invest in Us
      </h2>

      <p className="text-center text-[22px] text-gray-500 mt-4">
        Your Career Investment Calculator
      </p>

      {/* Program Dropdown */}

      <div className="flex justify-center mt-8 mb-12">
        <select
          className="
          w-[420px]
          h-[56px]
          px-5
          rounded-xl
          border
          border-purple-200
          shadow-sm
          font-semibold
          "
        >
          <option>Data Science Program</option>
          <option>Intel AIML Program</option>
          <option>Gen AI Software Development</option>
          <option>MERN Full Stack Program</option>
        </select>
      </div>

      {/* Main Grid */}

      <div className="grid grid-cols-2 gap-5">

        {/* Left Column */}

        <div className="space-y-5">

          {/* Investment */}

          <div className="bg-white border rounded-xl p-8 shadow-sm">

            <div className="grid grid-cols-2">

              <div className="border-r pr-8">
                <h3 className="text-4xl font-bold">
                  Your Investment
                </h3>

                <p className="text-red-500 font-semibold mt-4">
                  ● LIVE CLASS
                </p>
              </div>

              <div className="pl-8">

                <div className="mb-6">
                  <h2 className="text-4xl font-bold text-slate-700">
                    ₹4,909/-
                  </h2>

                  <p className="text-gray-500">
                    Per month for 24 months
                  </p>
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-slate-700">
                    ₹94,999/-
                  </h2>

                  <p className="text-gray-500">
                    Full payment
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Career Growth */}

          <div
            className="
            border
            rounded-xl
            p-6
            bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)]
            bg-[size:24px_24px]
            "
          >

            <h2 className="text-5xl font-bold text-purple-600 mb-10">
              Career Growth Analysis
            </h2>

            <div className="h-[340px] flex items-end justify-around">

              <div className="text-center">
                <p className="font-bold text-purple-700">INTERNSHIP</p>
                <p className="font-bold">12-40K</p>

                <div className="w-14 h-20 bg-purple-500 rounded-t-lg mt-2"></div>
              </div>

              <div className="text-center">
                <p className="font-bold text-purple-700">FRESHER</p>
                <p className="font-bold">50-120K</p>

                <div className="w-14 h-36 bg-purple-500 rounded-t-lg mt-2"></div>
              </div>

              <div className="text-center">
                <p className="font-bold text-purple-700">1ST YEAR</p>
                <p className="font-bold">65-150K</p>

                <div className="w-14 h-52 bg-purple-500 rounded-t-lg mt-2"></div>
              </div>

              <div className="text-center">
                <p className="font-bold text-purple-700">2ND YEAR</p>
                <p className="font-bold">85-175K</p>

                <div className="w-14 h-64 bg-purple-500 rounded-t-lg mt-2"></div>
              </div>

            </div>

          </div>

        </div>

        {/* Right Column */}

        <div className="space-y-5">

          {/* Tools & Projects */}

          <div
            className="
            border
            rounded-xl
            p-8
            bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)]
            bg-[size:24px_24px]
            "
          >

            <div className="grid grid-cols-2">

              <div>

                <h3 className="text-3xl font-bold">
                  Master In-Demand
                </h3>

                <h2 className="text-6xl font-bold text-purple-500 mt-3">
                  10+ Tools
                </h2>

                <p className="text-xl mt-3">
                  To boost your <b>Skills</b>
                </p>

              </div>

              <div className="border-l pl-8">

                <h3 className="text-3xl font-bold">
                  Learn Impactful
                </h3>

                <h2 className="text-6xl font-bold text-purple-500 mt-3">
                  7+ Projects
                </h2>

                <p className="text-xl mt-3">
                  To <b>Secure</b> your career
                </p>

              </div>

            </div>

          </div>

          {/* Certificate */}

          <div
            className="
            border
            rounded-xl
            p-8
            h-[140px]
            bg-[linear-gradient(#f1f5f9_1px,transparent_1px),linear-gradient(90deg,#f1f5f9_1px,transparent_1px)]
            bg-[size:24px_24px]
            "
          >

            <div className="flex items-center justify-between h-full">

              <div>
                <h3 className="text-3xl leading-relaxed">
                  A globally recognised
                  <span className="text-purple-600 font-bold">
                    {" "}Certificate
                  </span>
                  {" "}that works as hard as you do.
                </h3>
              </div>

              <div className="text-center">
                <p className="font-semibold text-gray-500">
                  Certificate Provided By
                </p>

                <p className="font-bold text-xl mt-2">
                  IITM PRAVARTAK | GUVI | HCL
                </p>
              </div>

            </div>

          </div>

          {/* Banner */}

          <div
            className="
            rounded-xl
            p-10
            text-white
            h-[180px]
            bg-gradient-to-r
            from-purple-900
            via-purple-800
            to-purple-700
            "
          >

            <h2 className="text-4xl font-bold mb-5">
              Small Sacrifice, Big Returns
            </h2>

            <p className="text-xl">
              What if 7 weeks could make you a Data Scientist?
              HCL GUVI can.
            </p>

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-center gap-5 mt-8">

        <button
          className="
          border-2
          border-black
          px-10
          py-4
          rounded-xl
          font-semibold
          "
        >
          Talk to our Counselor
        </button>

        <button
          className="
          bg-green-500
          hover:bg-green-600
          text-white
          px-10
          py-4
          rounded-xl
          font-semibold
          "
        >
          View Full Details
        </button>

      </div>

    </section>
  )
}

export default InvestmentCalculator
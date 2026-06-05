import { useNavigate } from "react-router-dom";
import { submitExpertLeadAndRedirect } from "../../utils/expertLead";
import jawaEdTechLogo from "../../assets/logos/jawa-edtech-logo-clean.png";

function InvestmentCalculator() {
  const navigate = useNavigate();

  const handleTalkToCounselor = async () => {
    try {
      await submitExpertLeadAndRedirect(
        { source: "investment_calculator", name: "Counselor inquiry" },
        navigate
      );
    } catch (error) {
      console.error(error);
      navigate("/?auth=login", { state: { authPrompt: "login", from: "expert" } });
    }
  };

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

          <div className="border rounded-xl bg-white p-6 shadow-sm">

            <div className="grid gap-5 md:grid-cols-[1fr_0.9fr] md:items-center">

              <div>
                <h3 className="text-3xl font-bold leading-tight text-slate-950">
                  A career-ready
                  <span className="text-blue-600">
                    {" "}professional certificate
                  </span>
                  {" "}that looks professional and clear.
                </h3>
              </div>

              <div className="rounded-xl border border-slate-200 bg-[linear-gradient(135deg,#f8fbff,#dff2ff)] p-4 text-black shadow-inner">
                <div className="mb-5 flex items-center justify-between">
                  <img src={jawaEdTechLogo} alt="Jawa EdTech logo" className="h-12 w-12 rounded-lg object-contain" />
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Sample</p>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-black">Certificate Of Achievement</p>
                <h4 className="mt-2 text-2xl font-black tracking-[-0.03em] text-black">Jawa EdTech</h4>
                <p className="mt-2 text-sm font-extrabold leading-6 text-black">
                  Awarded for excellent performance, consistent effort, and successful completion of guided career practice.
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
              Jawa EdTech can.
            </p>

          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-center gap-5 mt-8">

        <button
          type="button"
          onClick={handleTalkToCounselor}
          className="
          border-2
          border-black
          px-10
          py-4
          rounded-xl
          font-semibold
          hover:bg-slate-50
          transition
          "
        >
          Talk to our Counselor
        </button>

        <button
          type="button"
          onClick={() => navigate("/programs/artificial-intelligence-machine-learning")}
          className="
          bg-blue-600
          hover:bg-blue-700
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

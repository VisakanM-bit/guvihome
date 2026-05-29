function Companies() {

  const companies = [

    { name: "SIEMENS", color: "text-cyan-600" },
    { name: "aspire", color: "text-violet-500" },
    { name: "ideas2IT", color: "text-blue-700" },
    { name: "CARTOON", color: "text-black" },
    { name: "L&T", color: "text-blue-600" },
    { name: "Lenovo", color: "text-red-600" },
    { name: "Justdial", color: "text-blue-500" },
    { name: "thoughtworks", color: "text-gray-700" },
    { name: "amazon", color: "text-yellow-700" },

    { name: "TCS", color: "text-pink-500" },
    { name: "wipro", color: "text-purple-500" },
    { name: "accenture", color: "text-black" },
    { name: "CARAT", color: "text-pink-400" },
    { name: "COMCAST", color: "text-gray-600" },
    { name: "klenty", color: "text-sky-500" },
    { name: "ZOHO", color: "text-green-600" },
    { name: "virtusa", color: "text-indigo-500" },
    { name: "Infosys", color: "text-blue-500" },

    { name: "IBM", color: "text-blue-700" },
    { name: "JLL", color: "text-red-600" },
    { name: "fiserv", color: "text-orange-500" },
    { name: "Mahindra", color: "text-red-500" },
    { name: "grappus", color: "text-black" },
    { name: "Cognizant", color: "text-blue-700" },
    { name: "PayPal", color: "text-blue-600" },
    { name: "Capgemini", color: "text-sky-600" },
    { name: "HCL", color: "text-blue-600" },

  ]

  return (

    <section className="bg-[#f5f5f5] py-24 overflow-hidden">

      {/* TITLE */}
      <h1 className="text-center text-5xl font-bold text-[#222] mb-16">

        Where Do Our Students Work?

      </h1>

      {/* SCROLL AREA */}
      <div className="overflow-hidden w-full">

        <div
          className="flex gap-6 w-max animate-scroll"
        >

          {[...companies, ...companies].map((company, index) => (

            <div
              key={index}
              className="w-[220px] h-[90px] bg-white rounded-2xl border border-[#ececec]
              shadow-sm flex items-center justify-center
              hover:shadow-xl transition duration-300
              animate-bounce-slow"
            >

              <h2 className={`text-[28px] font-bold ${company.color}`}>

                {company.name}

              </h2>

            </div>

          ))}

        </div>

      </div>

      {/* STYLE INSIDE REACT */}
      <style>

        {`

          .animate-scroll {

            animation: scroll 30s linear infinite;

          }

          @keyframes scroll {

            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }

          }

          .animate-bounce-slow {

            animation: bounceSlow 2.5s ease-in-out infinite;

          }

          @keyframes bounceSlow {

            0% {
              transform: translateY(0px);
            }

            25% {
              transform: translateY(-3px);
            }

            50% {
              transform: translateY(0px);
            }

            75% {
              transform: translateY(3px);
            }

            100% {
              transform: translateY(0px);
            }

          }

        `}

      </style>

    </section>

  )
}

export default Companies
function AboutGuvi() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">

      <div className="grid grid-cols-2 gap-8">

        {/* LEFT SIDE */}

        <div>

          <h2 className="text-[44px] font-bold text-slate-900 mb-8">
            Get to know about HCL GUVI
          </h2>

          <p className="text-[22px] leading-10 text-slate-600">
            HCL GUVI (Grab Your Vernacular Imprint) Geek Network
            Private Limited is a leading online learning and skills
            development company, incubated by IIT Madras and IIM Ahmedabad.
          </p>

          <p className="text-[22px] leading-10 text-slate-600 mt-8">
            Established in 2014 and acquired by the HCL Group in 2022,
            HCL GUVI is dedicated to providing effective and high-quality
            learning and skilling programs that transcend language barriers
            in technology education. HCL GUVI today is trusted by over
            4.8 million users, 20 languages and 2500+ corporate partners.
          </p>

          {/* AWARDS BOX */}

          <div
            className="
            mt-12
            rounded-3xl
            border
            border-purple-100
            bg-slate-50
            p-10
            "
          >

            <div className="flex justify-center gap-5 mb-12">

              <button
                className="
                px-8
                py-3
                rounded-xl
                bg-purple-100
                text-purple-700
                font-semibold
                "
              >
                Awards
              </button>

              <button
                className="
                px-8
                py-3
                rounded-xl
                bg-white
                border
                "
              >
                Press Highlights
              </button>

            </div>

            <div className="grid grid-cols-2 gap-8 text-center">

              <div>

                <div className="text-5xl mb-4">
                  🏆
                </div>

                <h3 className="font-bold text-xl">
                  “Most Trusted Vernacular Edutech Brand”
                </h3>

              </div>

              <div>

                <div className="text-5xl mb-4">
                  🏆
                </div>

                <h3 className="font-bold text-xl">
                  “Guinness World Record Holder - AI for India 2.0”
                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}

        <div
          className="
          border
          border-slate-200
          rounded-3xl
          p-8
          shadow-sm
          "
        >

          <h2 className="text-4xl font-bold text-center mb-8">
            Talk To Your Career Expert
          </h2>

          <div className="space-y-5">

            <input
              type="text"
              placeholder="Name"
              className="w-full border rounded-xl px-5 py-4"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-xl px-5 py-4"
            />

            <div className="flex gap-3">

              <select className="border rounded-xl px-4 py-4 w-28">
                <option>IN +91</option>
              </select>

              <input
                type="text"
                placeholder="Mobile Number"
                className="flex-1 border rounded-xl px-5 py-4"
              />

            </div>

            <select className="w-full border rounded-xl px-5 py-4">
              <option>Education Qualification</option>
            </select>

            <select className="w-full border rounded-xl px-5 py-4">
              <option>Current Profile</option>
            </select>

            <select className="w-full border rounded-xl px-5 py-4">
              <option>Year of Graduation</option>
            </select>

            <select className="w-full border rounded-xl px-5 py-4">
              <option>Speaking Language</option>
            </select>

            <button
              className="
              w-full
              bg-green-500
              hover:bg-green-600
              text-white
              font-bold
              py-4
              rounded-xl
              "
            >
              Book a Session
            </button>

            <p className="text-xs text-center text-gray-500">
              By registering, I agree to be contacted via phone, SMS,
              or email for offers & products.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default AboutGuvi
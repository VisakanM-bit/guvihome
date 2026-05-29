function About() {

  return (

    <section className="bg-[#f7f7f7] py-24 px-10">

      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* GREEN SHAPE */}
            <div className="absolute -top-10 -left-10 w-[420px] h-[420px] bg-green-200 rotate-12 rounded-3xl opacity-60"></div>

            {/* IMAGE BOX */}
            <div className="relative z-10 overflow-hidden rounded-[40px] border-[6px] border-green-400 shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop"
                alt="Student"
                className="w-[520px] h-[620px] object-cover"
              />

            </div>

            {/* FLOATING LANGUAGE ICONS */}
            <div className="absolute top-10 -left-8 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl font-bold text-green-500">

              அ

            </div>

            <div className="absolute top-5 right-0 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl font-bold text-green-500">

              ఆ

            </div>

            <div className="absolute bottom-6 right-0 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl font-bold text-green-500">

              ம

            </div>

            <div className="absolute bottom-5 -left-5 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl font-bold text-green-500">

              క

            </div>

            <div className="absolute top-1/2 -right-14 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-4xl font-bold text-green-500">

              A

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <div className="inline-block bg-green-100 text-green-700 px-6 py-3 rounded-full text-xl font-semibold mb-8">

            🌍 India's Leading EdTech

          </div>

          {/* TITLE */}
          <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-8">

            Leading EdTech Platform for
            <span className="text-green-500">
              {" "}Learning in Native Languages.
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-2xl text-gray-600 leading-relaxed mb-12">

            HCL GUVI, backed by IIT-M, IIM-A, and HCL,
            is India’s top tech-driven EdTech platform
            for learning in regional and global languages.

            With millions of learners worldwide,
            it provides personalized online learning,
            upskilling, and job opportunities.

          </p>

          {/* HIGHLIGHT */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-[8px] border-green-500">

            <h2 className="text-4xl font-bold text-gray-900">

              <span className="text-green-500">
                HCL GUVI
              </span>

              {" "}– Grab Ur Vernacular Imprint

            </h2>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About
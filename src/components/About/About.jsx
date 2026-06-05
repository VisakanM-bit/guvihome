function About() {

  return (

    <section className="bg-[#f7f7f7] py-8 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10">

      <div className="max-w-full lg:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          <div className="relative">

            {/* GREEN SHAPE */}
            <div className="absolute -top-10 -left-10 w-[420px] h-[420px] bg-green-200 rotate-12 rounded-3xl opacity-60"></div>

            {/* IMAGE BOX */}
            <div className="relative z-10 overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-4xl lg:rounded-[40px] border-4 sm:border-6 lg:border-[6px] border-green-400 shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">

              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop"
                alt="Student"
                className="w-full h-auto aspect-square sm:aspect-[9/11] object-cover"
              />

            </div>

            {/* FLOATING LANGUAGE ICONS - Hidden on mobile */}
            <div className="hidden sm:flex absolute top-6 sm:top-8 lg:top-10 -left-4 sm:-left-6 lg:-left-8 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl sm:text-4xl font-bold text-green-500">

              அ

            </div>

            <div className="hidden sm:flex absolute top-4 sm:top-6 lg:top-8 right-2 sm:right-4 lg:right-0 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white shadow-xl items-center justify-center text-3xl sm:text-4xl font-bold text-green-500">

              ఆ

            </div>

            <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 lg:bottom-10 right-2 sm:right-4 lg:right-0 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white shadow-xl items-center justify-center text-3xl sm:text-4xl font-bold text-green-500">

              ம

            </div>

            <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 lg:bottom-10 -left-4 sm:-left-6 lg:-left-5 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white shadow-xl items-center justify-center text-3xl sm:text-4xl font-bold text-green-500">

              క

            </div>

            <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-14 lg:-right-20 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-white shadow-xl items-center justify-center text-3xl sm:text-4xl font-bold text-green-500">

              A

            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">

          <div className="inline-block bg-green-100 text-green-700 px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-6 sm:mb-8 md:mb-10 lg:mb-12">

            Career-Focused EdTech

          </div>

          {/* TITLE */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8 md:mb-10 lg:mb-12">

            Practical Learning Platform for
            <span className="text-green-500">
              {" "}Career Growth.
            </span>

          </h1>

          {/* DESCRIPTION */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8 sm:mb-10 md:mb-12 lg:mb-16">

            Jawa EdTech helps students, freshers, and working professionals
            build practical skills through structured programs, internships,
            mentor guidance, project practice, and placement readiness.

          </p>

          {/* HIGHLIGHT */}
          <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl shadow-lg p-6 sm:p-7 md:p-8 lg:p-10 border-l-4 sm:border-l-6 lg:border-l-8 border-green-500">

            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">

              <span className="text-green-500">
                Jawa EdTech
              </span>

              {" "}for skills, internships, mentorship, and career support

            </h2>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About

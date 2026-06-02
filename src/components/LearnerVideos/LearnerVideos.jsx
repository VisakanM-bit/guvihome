import video from "../../assets/logos/video.png"

function LearnerVideos() {
  const videos = [
    {
      title: "How I Cracked an ₹18 LPA Package",
      author: "Nandhalal S",
    },
    {
      title: "9 LPA as a Fresher in TCS",
      author: "A M Santina",
    },
    {
      title: "How Sathwika Started Her Career",
      author: "Sai Vishnu Priya",
    },
    {
      title: "4 Job Offers Before Graduation",
      author: "Praveen Kumar",
    },
  ]

  return (
    <section className="max-w-full lg:max-w-6xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-6">

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
        Hear it from Our Learners
      </h2>

      {/* Main Video Image */}
      <div className="max-w-full lg:max-w-5xl mx-auto">

        <img
          src={video}
          alt="Success Story"
          className="
          w-full
          rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl
          shadow-lg
          object-cover
          "
        />

        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-slate-900">
          Earning 45K as an Intern! Here's the proof
        </h3>

        <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-3 md:mt-4">
          Mohammed Esa Khan J | Software Developer
        </p>

      </div>

      {/* Small Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mt-8 sm:mt-10 md:mt-12 lg:mt-16">

        {videos.map((item, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl
            overflow-hidden
            shadow-sm
            border
            hover:shadow-md
            transition
            "
          >

            <img
              src={video}
              alt="Video Thumbnail"
              className="
              w-full
              h-20 sm:h-24 md:h-28 lg:h-32
              object-cover
              "
            />

            <div className="p-2 sm:p-3 md:p-4">

              <h4
                className="
                text-xs sm:text-sm md:text-base lg:text-sm
                font-bold
                text-slate-800
                line-clamp-2
                "
              >
                {item.title}
              </h4>

              <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
                {item.author}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">

        <button
          className="
          bg-green-500
          hover:bg-green-600
          text-white
          font-semibold
          px-6 sm:px-8 md:px-10 lg:px-14
          py-2 sm:py-3 md:py-4 lg:py-5
          rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl
          text-sm sm:text-base md:text-lg lg:text-lg
          transition
          "
        >
          View Success Stories
        </button>

      </div>

    </section>
  )
}

export default LearnerVideos
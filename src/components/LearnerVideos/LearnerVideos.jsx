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
    <section className="max-w-6xl mx-auto py-16 px-6">

      {/* Heading */}
      <h2 className="text-center text-[42px] font-bold text-slate-900 mb-10">
        Hear it from Our Learners
      </h2>

      {/* Main Video Image */}
      <div className="max-w-5xl mx-auto">

        <img
          src={video}
          alt="Success Story"
          className="
          w-full
          rounded-3xl
          shadow-lg
          object-cover
          "
        />

        <h3 className="text-[24px] font-bold mt-4 text-slate-900">
          Earning 45K as an Intern! Here's the proof
        </h3>

        <p className="text-gray-500 text-lg mt-2">
          Mohammed Esa Khan J | Software Developer
        </p>

      </div>

      {/* Small Cards */}
      <div className="grid grid-cols-4 gap-5 mt-10">

        {videos.map((item, index) => (

          <div
            key={index}
            className="
            bg-white
            rounded-2xl
            overflow-hidden
            shadow-sm
            border
            "
          >

            <img
              src={video}
              alt="Video Thumbnail"
              className="
              w-full
              h-24
              object-cover
              "
            />

            <div className="p-3">

              <h4
                className="
                text-sm
                font-bold
                text-slate-800
                line-clamp-2
                "
              >
                {item.title}
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                {item.author}
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Button */}
      <div className="flex justify-center mt-8">

        <button
          className="
          bg-green-500
          hover:bg-green-600
          text-white
          font-semibold
          px-10
          py-4
          rounded-xl
          "
        >
          View Success Stories
        </button>

      </div>

    </section>
  )
}

export default LearnerVideos
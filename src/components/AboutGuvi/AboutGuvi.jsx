import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitExpertLeadAndRedirect } from "../../utils/expertLead";

function AboutGuvi() {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [profile, setProfile] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [language, setLanguage] = useState("English");

  const handleBookSession = async () => {
    if (!name.trim() || !email.trim() || !phone.trim()) {
      alert("Please enter your name, email, and mobile number.");
      return;
    }

    setSubmitting(true);
    try {
      await submitExpertLeadAndRedirect(
        {
          source: "about_guvi_form",
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          profile,
          language,
          education,
          graduationYear,
        },
        navigate
      );
    } catch (error) {
      console.error(error);
      alert("Could not save your request. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12">

        {/* LEFT SIDE */}

        <div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Get to know about HCL GUVI
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 sm:leading-8 md:leading-9 lg:leading-10 text-slate-600">
            HCL GUVI (Grab Your Vernacular Imprint) Geek Network
            Private Limited is a leading online learning and skills
            development company, incubated by IIT Madras and IIM Ahmedabad.
          </p>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-7 sm:leading-8 md:leading-9 lg:leading-10 text-slate-600 mt-4 sm:mt-5 md:mt-6 lg:mt-8">
            Established in 2014 and acquired by the HCL Group in 2022,
            HCL GUVI is dedicated to providing effective and high-quality
            learning and skilling programs that transcend language barriers
            in technology education. HCL GUVI today is trusted by over
            4.8 million users, 20 languages and 2500+ corporate partners.
          </p>

          {/* AWARDS BOX */}

          <div
            className="
            mt-6 sm:mt-8 md:mt-10 lg:mt-12
            rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-3xl
            border
            border-purple-100
            bg-slate-50
            p-5 sm:p-6 md:p-8 lg:p-10
            "
          >

            <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mb-6 sm:mb-8 md:mb-12">

              <button
                type="button"
                className="
                px-4 sm:px-6 md:px-8 lg:px-8
                py-2 sm:py-2.5 md:py-3 lg:py-3
                rounded-lg sm:rounded-xl lg:rounded-xl
                bg-purple-100
                text-purple-700
                font-semibold
                text-xs sm:text-sm md:text-base
                "
              >
                Awards
              </button>

              <button
                type="button"
                className="
                px-4 sm:px-6 md:px-8 lg:px-8
                py-2 sm:py-2.5 md:py-3 lg:py-3
                rounded-lg sm:rounded-xl lg:rounded-xl
                bg-white
                border
                border-gray-300
                font-semibold
                text-xs sm:text-sm md:text-base
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
          rounded-lg sm:rounded-2xl md:rounded-3xl lg:rounded-3xl
          p-4 sm:p-5 md:p-7 lg:p-8
          shadow-sm
          "
        >

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Talk To Your Career Expert
          </h2>

          <div className="space-y-3 sm:space-y-4 md:space-y-5">

            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            />

            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            />

            <div className="flex gap-2 sm:gap-3">

              <select className="border border-gray-300 rounded-lg sm:rounded-xl px-2 sm:px-3 md:px-4 py-2 sm:py-3 md:py-4 w-20 sm:w-24 md:w-28 text-xs sm:text-sm md:text-base">
                <option>IN +91</option>
              </select>

              <input
                type="text"
                placeholder="Mobile Number *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
              />

            </div>

            <select
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            >
              <option value="">Education Qualification</option>
              <option>High School</option>
              <option>Diploma</option>
              <option>Bachelor&apos;s</option>
              <option>Master&apos;s</option>
              <option>PhD</option>
            </select>

            <select
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            >
              <option value="">Current Profile</option>
              <option>Student</option>
              <option>Graduate</option>
              <option>Working Professional</option>
              <option>Career Switcher</option>
            </select>

            <select
              value={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            >
              <option value="">Year of Graduation</option>
              {Array.from({ length: 15 }, (_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={year} value={String(year)}>
                    {year}
                  </option>
                );
              })}
            </select>

            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border border-gray-300 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base"
            >
              <option>English</option>
              <option>Tamil</option>
              <option>Hindi</option>
              <option>Telugu</option>
            </select>

            <button
              type="button"
              onClick={handleBookSession}
              disabled={submitting}
              className="
              w-full
              bg-green-500
              hover:bg-green-600
              disabled:opacity-60
              text-white
              font-bold
              py-2 sm:py-3 md:py-4 lg:py-4
              rounded-lg sm:rounded-xl
              text-xs sm:text-sm md:text-base lg:text-base
              "
            >
              {submitting ? "Saving..." : "Talk To Our Career Expert"}
            </button>

            <p className="text-xs sm:text-xs md:text-sm text-center text-gray-500 leading-snug">
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

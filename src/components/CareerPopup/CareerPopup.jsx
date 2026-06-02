import { useState, useEffect } from "react";

function CareerPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [profile, setProfile] = useState("");
const [language, setLanguage] = useState("English");

  
   const handleSubmit = async () => {
  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzpex66xoFirKsp-yZ148_sPTvW9rjLR4TRUjyLQiHJxKCqaktvpT8Fr7SiH0qoIeRe/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          profile,
          language,
          timestamp: new Date().toLocaleString(),
        }),
      }
    );

    alert("Submitted Successfully!");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setProfile("");
    setLanguage("English");

    setShowPopup(false);

  } catch (error) {
    console.error(error);
    alert("Error submitting form");
  }
};
useEffect(() => {
  const timer = setTimeout(() => {
    setShowPopup(true);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

if (!showPopup) return null;
    

  return (
    <>
      {/* MAIN POPUP */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10 p-4">

        <div
          className="
          relative
          bg-white
          w-full
          sm:w-[95%]
          md:w-[600px]
          lg:w-[750px]
          xl:w-[850px]
          max-h-[95vh]
          sm:max-h-[90vh]
          rounded-2xl
          sm:rounded-3xl
          shadow-2xl
          overflow-y-auto
          "
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowPopup(false)}
            className="
            absolute
            top-4
            sm:top-6
            right-4
            sm:right-8
            text-2xl
            sm:text-3xl
            text-gray-400
            hover:text-black
            transition
            z-10
            "
          >
            ×
          </button>

          <div className="px-4 sm:px-8 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:py-12">

            {/* HEADING */}
            <h2
              className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              font-black
              leading-tight
              tracking-tight
              text-slate-900
              mb-3
              sm:mb-5
              "
            >
              Find the Right HR Career
              <br />
              Path
            </h2>

            {/* SUBTITLE */}
            <div className="mb-6 sm:mb-8 md:mb-10">

              <p
                className="
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                xl:text-2xl
                font-semibold
                text-slate-600
                leading-relaxed
                "
              >
                Talk to our career experts and discover the
                best HR opportunities for you.
              </p>

              <button
                onClick={() => setShowInfo(true)}
                className="
                mt-3
                sm:mt-4
                text-red-600
                font-bold
                text-sm
                sm:text-base
                md:text-lg
                hover:text-red-700
                transition
                "
              >
                Learn More →
              </button>

            </div>

            {/* NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-5 sm:mb-7">

              <div>
                <label className="block mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold text-slate-800">
                  First Name *
                </label>

                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="
                  w-full
                  h-10
                  sm:h-12
                  md:h-14
                  lg:h-16
                  px-3
                  sm:px-4
                  md:px-5
                  border
                  border-gray-300
                  rounded-lg
                  sm:rounded-xl
                  outline-none
                  focus:border-slate-500
                  text-sm
                  sm:text-base
                  "
                />
              </div>

              <div>
                <label className="block mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold text-slate-800">
                  Last Name *
                </label>

                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="
                  w-full
                  h-10
                  sm:h-12
                  md:h-14
                  lg:h-16
                  px-3
                  sm:px-4
                  md:px-5
                  border
                  border-gray-300
                  rounded-lg
                  sm:rounded-xl
                  outline-none
                  focus:border-slate-500
                  text-sm
                  sm:text-base
                  "
                />
              </div>

            </div>

            {/* EMAIL */}
            <div className="mb-5 sm:mb-7">

              <label className="block mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold text-slate-800">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                w-full
                h-10
                sm:h-12
                md:h-14
                lg:h-16
                px-3
                sm:px-4
                md:px-5
                border
                border-gray-300
                rounded-lg
                sm:rounded-xl
                outline-none
                focus:border-slate-500
                text-sm
                sm:text-base
                "
              />

            </div>

            {/* CONTACT */}
            <div className="mb-5 sm:mb-7">

              <label className="block mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold text-slate-800">
                Contact Number *
              </label>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">

                <select
                  className="
                  w-full
                  sm:w-32
                  md:w-36
                  lg:w-40
                  h-10
                  sm:h-12
                  md:h-14
                  lg:h-16
                  border
                  border-gray-300
                  rounded-lg
                  sm:rounded-xl
                  px-2
                  sm:px-3
                  text-xs
                  sm:text-sm
                  md:text-base
                  "
                >
                  <option>🇮🇳 +91</option>
                  <option>🇺🇸 +1</option>
                  <option>🇬🇧 +44</option>
                  <option>🇦🇪 +971</option>
                  <option>🇨🇦 +1</option>
                  <option>🇦🇺 +61</option>
                  <option>🇸🇬 +65</option>
                  <option>🇩🇪 +49</option>
                  <option>🇫🇷 +33</option>
                  <option>🇯🇵 +81</option>
                </select>

                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Mobile Number"
                  className="
                  flex-1
                  h-10
                  sm:h-12
                  md:h-14
                  lg:h-16
                  px-3
                  sm:px-4
                  md:px-5
                  border
                  border-gray-300
                  rounded-lg
                  sm:rounded-xl
                  outline-none
                  focus:border-slate-500
                  text-sm
                  sm:text-base
                  "
                />

              </div>

            </div>

            {/* ROLE */}
            <div className="mb-5 sm:mb-7">

              <label className="block mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold text-slate-800">
                What Represents You Best?
              </label>

              <select
                value={profile}
                onChange={(e) => setProfile(e.target.value)}
                className="
                w-full
                h-10
                sm:h-12
                md:h-14
                lg:h-16
                px-3
                sm:px-4
                md:px-5
                border
                border-gray-300
                rounded-lg
                sm:rounded-xl
                text-sm
                sm:text-base
                "
              >
                <option>Select</option>
                <option>Student</option>
                <option>Graduate</option>
                <option>Working Professional</option>
                <option>HR Executive</option>
                <option>HR Manager</option>
                <option>Career Switcher</option>
              </select>

            </div>

            {/* LANGUAGE */}
            <div className="mb-6 sm:mb-8 md:mb-10">

              <label className="block mb-2 sm:mb-3 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-extrabold text-slate-800">
                Preferred Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="
                w-full
                h-10
                sm:h-12
                md:h-14
                lg:h-16
                px-3
                sm:px-4
                md:px-5
                border
                border-gray-300
                rounded-lg
                sm:rounded-xl
                text-sm
                sm:text-base
                "
              >
                <option>English</option>
                <option>Tamil</option>
                <option>Hindi</option>
                <option>Telugu</option>
                <option>Malayalam</option>
                <option>Kannada</option>
              </select>

            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="
              w-full
              h-10
              sm:h-12
              md:h-14
              lg:h-16
              rounded-lg
              sm:rounded-xl
              bg-red-600
              hover:bg-red-700
              text-white
              text-xs
              sm:text-sm
              md:text-base
              lg:text-lg
              xl:text-xl
              font-extrabold
              shadow-lg
              transition
              "
            >
              TALK TO OUR CAREER EXPERT
            </button>

          </div>

        </div>

      </div>

      {/* LEARN MORE MODAL */}
      {showInfo && (

        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/20">

          <div className="bg-white w-[720px] rounded-3xl p-10 shadow-2xl">

            <h3 className="text-4xl font-extrabold text-slate-900 mb-5">
              About Our HR Career Program
            </h3>

            <p className="text-lg text-gray-600 leading-9">
              Our HR Career Program helps students,
              graduates and working professionals build
              successful careers in Human Resources.
              <br /><br />
              • Recruitment & Talent Acquisition
              <br />
              • HR Operations
              <br />
              • Payroll Management
              <br />
              • Performance Management
              <br />
              • Employee Engagement
              <br />
              • HR Analytics
              <br />
              • AI-Powered HR Tools
              <br /><br />
              Includes mentorship, projects,
              interview preparation and placement support.
            </p>

            <button
              onClick={() => setShowInfo(false)}
              className="
              mt-8
              bg-red-600
              hover:bg-red-700
              text-white
              px-8
              py-4
              rounded-xl
              font-bold
              "
            >
              Close
            </button>

          </div>

        </div>

      )}

    </>
  );
}

export default CareerPopup;
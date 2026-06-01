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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/10">

        <div
          className="
          relative
          bg-white
          w-[850px]
          max-h-[88vh]
          rounded-3xl
          shadow-2xl
          overflow-y-auto
          "
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setShowPopup(false)}
            className="
            absolute
            top-6
            right-8
            text-3xl
            text-gray-400
            hover:text-black
            transition
            "
          >
            ×
          </button>

          <div className="px-14 py-12">

            {/* HEADING */}
            <h2
              className="
              text-[54px]
              font-black
              leading-[1.05]
              tracking-tight
              text-slate-900
              mb-5
              "
            >
              Find the Right HR Career
              <br />
              Path
            </h2>

            {/* SUBTITLE */}
            <div className="mb-10">

              <p
                className="
                text-[22px]
                font-semibold
                text-slate-600
                leading-9
                "
              >
                Talk to our career experts and discover the
                best HR opportunities for you.
              </p>

              <button
                onClick={() => setShowInfo(true)}
                className="
                mt-4
                text-red-600
                font-bold
                text-lg
                hover:text-red-700
                transition
                "
              >
                Learn More →
              </button>

            </div>

            {/* NAME */}
            <div className="grid grid-cols-2 gap-6 mb-7">

              <div>
                <label className="block mb-3 text-xl font-extrabold text-slate-800">
                  First Name *
                </label>

                <input
  type="text"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
  className="
  w-full
  h-[64px]
  px-5
  border
  border-gray-300
  rounded-xl
  outline-none
  focus:border-slate-500
  "
/>
              </div>

              <div>
                <label className="block mb-3 text-xl font-extrabold text-slate-800">
                  Last Name *
                </label>

                <input
  type="text"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
  className="
  w-full
  h-[64px]
  px-5
  border
  border-gray-300
  rounded-xl
  outline-none
  focus:border-slate-500
  "
/>
              </div>

            </div>

            {/* EMAIL */}
            <div className="mb-7">

              <label className="block mb-3 text-xl font-extrabold text-slate-800">
                Email Address
              </label>

              <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="
  w-full
  h-[64px]
  px-5
  border
  border-gray-300
  rounded-xl
  outline-none
  focus:border-slate-500
  "
/>

            </div>

            {/* CONTACT */}
            <div className="mb-7">

              <label className="block mb-3 text-xl font-extrabold text-slate-800">
                Contact Number *
              </label>

              <div className="flex gap-4">

                <select
                  className="
                  w-40
                  h-[64px]
                  border
                  border-gray-300
                  rounded-xl
                  px-3
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
  h-[64px]
  px-5
  border
  border-gray-300
  rounded-xl
  outline-none
  focus:border-slate-500
  "
/>

              </div>

            </div>

            {/* ROLE */}
            <div className="mb-7">

              <label className="block mb-3 text-xl font-extrabold text-slate-800">
                What Represents You Best?
              </label>

             <select
  value={profile}
  onChange={(e) => setProfile(e.target.value)}
  className="
  w-full
  h-[64px]
  px-5
  border
  border-gray-300
  rounded-xl
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
            <div className="mb-10">

              <label className="block mb-3 text-xl font-extrabold text-slate-800">
                Preferred Language
              </label>

              <select
  value={language}
  onChange={(e) => setLanguage(e.target.value)}
  className="
  w-full
  h-[64px]
  px-5
  border
  border-gray-300
  rounded-xl
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
  h-[68px]
  rounded-xl
  bg-red-600
  hover:bg-red-700
  text-white
  text-xl
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
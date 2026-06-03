import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitExpertLeadAndRedirect } from "../../utils/expertLead";
import { BRAND } from "../../data/siteContent";

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
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-5 md:mb-6">
            Get to know {BRAND.name}
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
            {BRAND.name} is India&apos;s career transformation platform for future HR and
            TECH professionals. We combine training, internships, mentorship, and placement
            support under one ecosystem.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 mt-4">
            Located at {BRAND.address}. Contact us at {BRAND.email} or {BRAND.phone}.
          </p>
        </div>

        <div className="border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Talk To Your Career Expert
          </h2>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
            />
            <input
              type="text"
              placeholder="Mobile Number *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm"
            />
            <button
              type="button"
              onClick={handleBookSession}
              disabled={submitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl text-sm"
            >
              {submitting ? "Saving..." : "Get Free Career Counseling"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutGuvi;

import { useState, useEffect } from "react";
/* eslint-disable react-hooks/set-state-in-effect */
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHeadset,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { submitExpertLeadAndRedirect } from "../../utils/expertLead";
import {
  shouldShowCareerPopup,
  markCareerPopupSeen,
  hasSeenCareerPopup,
} from "../../utils/popupStorage";
import { IMAGES } from "../../config/images";

const HIGHLIGHTS = [
  { icon: FaHeadset, text: "Free 1-on-1 career call" },
  { icon: FaAward, text: "IIT-M incubated programs" },
  { icon: FaUsers, text: "4.8M+ learners community" },
];

const MARKETING_PATHS = ["/", "/programs"];

function CareerPopup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState("");
  const [language, setLanguage] = useState("English");

  const isMarketingPage = MARKETING_PATHS.includes(location.pathname);

  const dismissPopup = () => {
    markCareerPopupSeen();
    setShowPopup(false);
    setManualOpen(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      setShowPopup(false);
      setManualOpen(false);
      return;
    }

    if (!isMarketingPage) {
      setShowPopup(false);
      return;
    }

    if (!shouldShowCareerPopup(isAuthenticated)) {
      setShowPopup(false);
      return;
    }

    setManualOpen(false);
    const timer = setTimeout(() => setShowPopup(true), 1000);
    return () => clearTimeout(timer);
  }, [isAuthenticated, isMarketingPage, location.pathname]);

  const isOpen =
    !isAuthenticated && isMarketingPage && (showPopup || manualOpen);

  const handleSubmit = async () => {
    if (!firstName.trim() || !lastName.trim() || !phone.trim()) {
      alert("Please fill in required fields (first name, last name, phone).");
      return;
    }

    setSubmitting(true);
    markCareerPopupSeen();
    try {
      await submitExpertLeadAndRedirect(
        {
          source: "career_popup",
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
          profile,
          language,
        },
        navigate
      );
      setShowPopup(false);
      setManualOpen(false);
    } catch (error) {
      console.error(error);
      alert("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Re-open expert popup if auto popup was already dismissed */}
      {!isAuthenticated &&
        isMarketingPage &&
        !isOpen &&
        hasSeenCareerPopup() && (
          <button
            type="button"
            onClick={() => setManualOpen(true)}
            className="fixed bottom-5 right-5 z-[9990] flex items-center gap-2 bg-gradient-to-r from-red-600 to-rose-600 text-white text-sm font-bold px-5 py-3 rounded-full shadow-lg shadow-red-500/30 hover:brightness-110 transition"
          >
            <FaHeadset />
            Talk to Career Expert
          </button>
        )}

      {!isOpen ? null : (
      <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-2 sm:p-4 md:p-6">
        {/* Larger premium modal — portrait & landscape */}
        <div
          className="
            relative w-full
            max-w-[min(96vw,1040px)]
            max-h-[min(94dvh,780px)]
            min-h-[min(88dvh,520px)]
            sm:min-h-[min(85dvh,600px)]
            flex flex-col md:flex-row
            rounded-2xl sm:rounded-[1.75rem]
            overflow-hidden
            shadow-[0_30px_90px_-15px_rgba(0,0,0,0.55)]
            border border-white/10
            bg-white
          "
        >
          <button
            type="button"
            onClick={dismissPopup}
            className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white text-slate-500 hover:text-slate-900 shadow-lg text-xl font-light flex items-center justify-center md:top-4 md:right-4"
            aria-label="Close"
          >
            ×
          </button>

          {/* Left panel — image + copy */}
          <div className="relative md:w-[44%] lg:w-[42%] shrink-0 min-h-[240px] sm:min-h-[280px] md:min-h-0 md:h-auto flex flex-col justify-between overflow-hidden text-white">
            <img
              src={IMAGES.authHero}
              alt="Career expert consultation"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/92 via-emerald-800/85 to-slate-950/90" />

            <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[11px] sm:text-xs font-bold border border-white/20">
                  <FaStar className="text-amber-300" /> Limited slots today
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-[2rem] font-extrabold leading-tight">
                  Talk to our
                  <span className="text-emerald-300"> Career Expert</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-emerald-50/95 max-w-sm leading-relaxed">
                  Personalized roadmap for HR & tech careers — free consultation.
                </p>
              </div>

              <ul className="space-y-2.5 my-5">
                {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm">
                    <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <Icon className="text-emerald-300" />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-black/20 backdrop-blur border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black">98%</p>
                  <p className="text-[11px] text-emerald-100/90">Satisfaction</p>
                </div>
                <div className="rounded-xl bg-black/20 backdrop-blur border border-white/10 p-4 text-center">
                  <p className="text-2xl font-black">48h</p>
                  <p className="text-[11px] text-emerald-100/90">Expert callback</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel — form (scrollable on short screens) */}
          <div className="flex-1 flex flex-col min-h-0 md:min-h-[480px] overflow-y-auto">
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center flex-1">
              <p className="text-[11px] font-bold text-red-600 uppercase tracking-widest">
                First visit offer
              </p>
              <h3 className="text-2xl sm:text-[1.65rem] font-bold text-slate-900 mt-1">
                Book your free session
              </h3>
              <p className="text-sm text-slate-500 mt-1 mb-6">
                Fill in your details — we&apos;ll connect you with an expert.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputLabel label="First name *">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={fieldClass}
                  />
                </InputLabel>
                <InputLabel label="Last name *">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={fieldClass}
                  />
                </InputLabel>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <InputLabel label="Email">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={fieldClass}
                  />
                </InputLabel>
                <InputLabel label="Phone *">
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 mobile number"
                    className={fieldClass}
                  />
                </InputLabel>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <InputLabel label="Profile">
                  <select
                    value={profile}
                    onChange={(e) => setProfile(e.target.value)}
                    className={fieldClass}
                  >
                    <option value="">Select</option>
                    <option>Student</option>
                    <option>Graduate</option>
                    <option>Working Professional</option>
                    <option>Career Switcher</option>
                  </select>
                </InputLabel>
                <InputLabel label="Language">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className={fieldClass}
                  >
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Hindi</option>
                    <option>Telugu</option>
                  </select>
                </InputLabel>
              </div>

              <button
                type="button"
                onClick={() => setShowInfo(true)}
                className="text-sm text-red-600 font-semibold hover:underline mb-4 text-left"
              >
                What&apos;s included? →
              </button>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:brightness-110 disabled:opacity-60 text-white font-bold text-sm sm:text-base shadow-lg shadow-red-500/25 transition flex items-center justify-center gap-2"
              >
                <FaCheckCircle />
                {submitting ? "Saving..." : "TALK TO OUR CAREER EXPERT"}
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-4">
                By continuing you agree to be contacted about programs & offers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {showInfo && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
          <div className="bg-white max-w-md w-full rounded-2xl p-7 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-slate-900 mb-4">What you get</h3>
            <ul className="space-y-2.5 text-slate-600 text-sm">
              {[
                "Recruitment & talent acquisition",
                "HR operations & payroll",
                "Performance management",
                "Mentorship & mock interviews",
                "Placement support",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <FaCheckCircle className="text-emerald-500 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => setShowInfo(false)}
              className="mt-6 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm"
            >
              Got it
            </button>
          </div>
        </div>
      )}
      </>
      )}
    </>
  );
}

const fieldClass =
  "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 bg-slate-50/50";

function InputLabel({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">
        {label}
      </label>
      {children}
    </div>
  );
}

export default CareerPopup;

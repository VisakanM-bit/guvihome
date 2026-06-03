import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaHeadset,
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaAward,
  FaRocket,
} from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { storePendingLead } from "../../utils/expertLead";
import { saveExpertLead } from "../../services/sheetsApi";
import {
  shouldShowCareerPopup,
  markCareerPopupSeen,
  hasSeenCareerPopup,
} from "../../utils/popupStorage";
import { OPEN_CAREER_POPUP_EVENT } from "../../utils/careerPopupEvents";
import { IMAGES } from "../../config/images";

const HIGHLIGHTS = [
  { icon: FaHeadset, text: "Free 1-on-1 career counseling" },
  { icon: FaAward, text: "Industry-focused HR & Tech programs" },
  { icon: FaUsers, text: "5000+ learners transformed" },
];

const CAREER_INTERESTS = [
  "Human Resource Executive Program",
  "Recruitment & Talent Acquisition",
  "Full Stack Development",
  "Python Development",
  "Artificial Intelligence & Machine Learning",
  "Not sure yet",
];

const CURRENT_STATUS = [
  "Student",
  "Graduate",
  "Working Professional",
  "Career Switcher",
  "Unemployed / Job Seeker",
];

const MARKETING_PATHS = ["/", "/programs"];

function CareerPopup() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [manualOpen, setManualOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [careerInterest, setCareerInterest] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [language, setLanguage] = useState("English");

  const isMarketingPage = MARKETING_PATHS.includes(location.pathname);

  const dismissPopup = () => {
    markCareerPopupSeen();
    setShowPopup(false);
    setManualOpen(false);
    setSuccess(false);
  };

  useEffect(() => {
    const handleOpen = () => {
      if (!isAuthenticated && isMarketingPage) {
        setManualOpen(true);
        setSuccess(false);
      }
    };
    window.addEventListener(OPEN_CAREER_POPUP_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_CAREER_POPUP_EVENT, handleOpen);
  }, [isAuthenticated, isMarketingPage]);

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
    const timer = setTimeout(() => setShowPopup(true), 1500);
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
      const lead = {
        source: "career_popup",
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        profile: currentStatus,
        careerInterest,
        language,
      };
      await saveExpertLead(lead);
      storePendingLead(lead);
      setSuccess(true);
      setTimeout(() => {
        setShowPopup(false);
        setManualOpen(false);
        navigate("/auth?from=expert");
      }, 2200);
    } catch (error) {
      console.error(error);
      alert("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {!isAuthenticated &&
        isMarketingPage &&
        !isOpen &&
        hasSeenCareerPopup() && (
          <button
            type="button"
            onClick={() => setManualOpen(true)}
            className="fixed bottom-5 right-5 z-[9990] flex items-center gap-2 bg-jawa-secondary text-white text-sm font-bold px-5 py-3 rounded-full shadow-lg shadow-green-500/30 hover:bg-green-600 transition"
          >
            <FaHeadset />
            Free Career Counseling
          </button>
        )}

      {!isOpen ? null : (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-2 sm:p-4"
          role="dialog"
          aria-labelledby="career-popup-title"
        >
          <div className="relative w-full max-w-[min(96vw,1040px)] max-h-[min(94dvh,780px)] flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-jawa-card animate-fade-up">
            <button
              type="button"
              onClick={dismissPopup}
              className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-white text-slate-500 hover:text-slate-900 shadow-lg text-xl flex items-center justify-center"
              aria-label="Close"
            >
              ×
            </button>

            <div className="relative md:w-[42%] shrink-0 min-h-[220px] md:min-h-0 flex flex-col justify-between overflow-hidden text-white">
              <img
                src={IMAGES.authHero}
                alt="Career counseling session"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-jawa-primary/95 via-slate-900/90 to-jawa-primary/95" />

              <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-xs font-bold border border-white/20">
                    <FaStar className="text-amber-300" /> Free consultation
                  </span>
                  <h2
                    id="career-popup-title"
                    className="mt-4 text-2xl sm:text-3xl font-heading font-extrabold leading-tight"
                  >
                    Free Career
                    <span className="text-green-300"> Counseling</span>
                  </h2>
                  <p className="mt-3 text-sm text-slate-200 max-w-sm leading-relaxed">
                    Get personalized guidance on HR &amp; tech programs, internships, and placement support.
                  </p>
                </div>

                <ul className="space-y-2.5 my-5">
                  {HIGHLIGHTS.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 text-sm">
                      <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                        <Icon className="text-green-300" />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-black/20 backdrop-blur border border-white/10 p-4 text-center">
                    <p className="text-2xl font-black">98%</p>
                    <p className="text-[11px] text-green-100/90">Satisfaction</p>
                  </div>
                  <div className="rounded-xl bg-black/20 backdrop-blur border border-white/10 p-4 text-center">
                    <p className="text-2xl font-black">48h</p>
                    <p className="text-[11px] text-green-100/90">Expert callback</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col min-h-0 overflow-y-auto">
              {success ? (
                <div className="flex flex-col items-center justify-center flex-1 p-10 text-center animate-fade-up">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6 animate-count-pop">
                    <FaRocket className="text-3xl text-jawa-secondary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-jawa-primary mb-2">
                    You&apos;re all set!
                  </h3>
                  <p className="text-jawa-text text-sm max-w-xs">
                    Our career expert will reach out within 48 hours. Redirecting you now...
                  </p>
                </div>
              ) : (
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center flex-1">
                  <p className="text-[11px] font-bold text-jawa-accent uppercase tracking-widest">
                    Limited slots available
                  </p>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-jawa-primary mt-1">
                    Book your free session
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 mb-6">
                    Fill in your details — we&apos;ll connect you with an expert.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <InputLabel label="First Name *">
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={fieldClass}
                        required
                      />
                    </InputLabel>
                    <InputLabel label="Last Name *">
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={fieldClass}
                        required
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
                    <InputLabel label="Phone Number *">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 mobile number"
                        className={fieldClass}
                        required
                      />
                    </InputLabel>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <InputLabel label="Career Interest">
                      <select
                        value={careerInterest}
                        onChange={(e) => setCareerInterest(e.target.value)}
                        className={fieldClass}
                      >
                        <option value="">Select program</option>
                        {CAREER_INTERESTS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </InputLabel>
                    <InputLabel label="Current Status">
                      <select
                        value={currentStatus}
                        onChange={(e) => setCurrentStatus(e.target.value)}
                        className={fieldClass}
                      >
                        <option value="">Select status</option>
                        {CURRENT_STATUS.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </InputLabel>
                  </div>

                  <InputLabel label="Preferred Language">
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

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full mt-5 py-4 rounded-xl bg-jawa-secondary hover:bg-green-600 disabled:opacity-60 text-white font-bold text-sm sm:text-base shadow-lg shadow-green-500/25 transition flex items-center justify-center gap-2"
                  >
                    <FaCheckCircle />
                    {submitting ? "Submitting..." : "Get Free Career Consultation"}
                  </button>

                  <p className="text-[11px] text-center text-slate-400 mt-4">
                    By continuing you agree to be contacted about programs &amp; offers.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const fieldClass =
  "w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-jawa-secondary focus:ring-2 focus:ring-green-500/20 bg-jawa-bg/50 mt-1.5";

function InputLabel({ label, children }) {
  return (
    <div>
      <label className="block text-xs font-bold text-jawa-primary">{label}</label>
      {children}
    </div>
  );
}

export default CareerPopup;

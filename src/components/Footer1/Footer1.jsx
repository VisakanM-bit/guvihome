import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import jawaEdTechLogo from "../../assets/logos/jawa-edtech-logo-clean.png";
import GoogleMapsIcon from "../GoogleMapsIcon/GoogleMapsIcon";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  INSTAGRAM_URL,
  MAPS_URL,
  WHATSAPP_NUMBER,
} from "../../config/sheets";
import GoogleMapsPreview from "../GoogleMapsPreview/GoogleMapsPreview";

const exploreLinks = [
  ["Home", "/"],
  ["Career Programs", "/programs"],
  ["Internship Hub", "/internships/human-resource-internship"],
  ["Practice Hub", "/practice-hub"],
  ["Placement Assistance", "/placement-assistance"],
  ["Mentorship", "/mentorship"],
  ["Career Services", "/career-services"],
  ["About Jawa EdTech", "/about-edtech"],
];

const courseLinks = [
  ["HR Executive & Development", "/programs/human-resource-executive-development"],
  ["Recruitment & Talent Acquisition", "/programs/recruitment-talent-acquisition-development"],
  ["Full Stack Web Development", "/programs/full-stack-development"],
  ["Python Development", "/programs/python-development"],
  ["Artificial Intelligence & ML", "/programs/artificial-intelligence-machine-learning"],
  ["DevOps & Cloud Computing", "/programs/devops-engineering"],
  ["Software Testing & QA", "/programs/software-testing-qa"],
  ["MuleSoft Development", "/programs/mulesoft-development"],
];

const socialLinks = [
  ["Mobile", FaPhoneAlt, `tel:${CONTACT_PHONE}`],
  ["Instagram", FaInstagram, INSTAGRAM_URL],
  ["Mail", FaEnvelope, `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`],
  ["Google Maps", GoogleMapsIcon, MAPS_URL],
];

function Footer1() {
  return (
    <footer className="relative overflow-hidden border-t border-emerald-300/10 bg-[linear-gradient(135deg,rgba(2,6,23,0.98),rgba(5,18,12,0.96),rgba(0,0,0,0.98))] px-5 py-10 text-white shadow-[0_-30px_100px_-70px_rgba(34,197,94,0.8)] sm:px-8 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(34,197,94,0.18),transparent_26%),radial-gradient(circle_at_88%_18%,rgba(34,211,238,0.12),transparent_28%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/80 to-transparent shadow-[0_0_22px_rgba(52,211,153,0.9)]" />

      <div className="relative z-10 mx-auto grid max-w-[1780px] gap-10 lg:grid-cols-[1.22fr_1fr_1.25fr_1.2fr_0.55fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-3" aria-label="Jawa EdTech home">
            <span className="relative flex h-16 w-14 items-center justify-center">
              <span className="absolute inset-0 rounded-2xl bg-emerald-300/18 blur-xl" />
              <img src={jawaEdTechLogo} alt="Jawa EdTech logo" className="relative h-full w-full scale-125 object-contain drop-shadow-[0_12px_28px_rgba(16,185,129,0.55)]" />
            </span>
            <span>
              <span className="block text-2xl font-black tracking-[-0.04em] text-emerald-400 sm:text-3xl">JAWA EDTECH</span>
              <span className="mt-1 block text-[11px] font-black uppercase tracking-[0.2em] text-emerald-100/70">Learn. Lead. Innovate.</span>
            </span>
          </Link>

          <p className="mt-6 max-w-sm text-base font-semibold leading-7 text-slate-300">
            Explore learning, practical projects, internships, mentorship, placement support, and limitless career opportunities.
          </p>

          <div className="mt-7 h-px max-w-sm bg-gradient-to-r from-emerald-300/40 via-white/10 to-transparent" />

          <div className="mt-7 space-y-3 text-sm font-black text-slate-200">
            <p>© 2026 Jawa EdTech. All rights reserved.</p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link to="/about-edtech" className="transition hover:text-emerald-300">Privacy Policy</Link>
              <Link to="/about-edtech" className="transition hover:text-emerald-300">Terms of Service</Link>
            </div>
          </div>
        </div>

        <FooterColumn title="Explore Jawa EdTech" links={exploreLinks} />
        <FooterColumn title="Our Courses" links={courseLinks} />

        <div>
          <h2 className="mb-5 text-xl font-black tracking-[-0.02em] text-white">Contact Us</h2>
          <div className="space-y-5 text-base font-semibold leading-7 text-slate-200">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:text-sky-300">
              <FaWhatsapp className="shrink-0 text-sky-300" />
              WhatsApp Us
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="flex items-center gap-4 transition hover:text-sky-300">
              <FaPhoneAlt className="shrink-0 text-emerald-300" />
              {CONTACT_PHONE}
            </a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition hover:text-sky-300">
              <FaEnvelope className="shrink-0 text-emerald-300" />
              {CONTACT_EMAIL}
            </a>
            <p className="flex items-start gap-4">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-emerald-300" />
              <span>
                Jawa Incubation Centre<br />
                No: 54 Bharathi Park 7th Cross, Near ICICI Bank,<br />
                Saibaba Colony, Coimbatore, Tamil Nadu 641043, India
              </span>
            </p>
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-gradient-to-r from-sky-500 to-violet-600 px-4 text-sm font-black text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5">
              <GoogleMapsIcon className="h-6 w-6" />
              Google Maps Live Location
            </a>
          </div>
        </div>

        <div className="lg:text-right">
          <h2 className="mb-5 text-xl font-black tracking-[-0.02em] text-white">Follow Us</h2>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {socialLinks.map(([label, Icon, href]) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("tel:") ? undefined : "_blank"}
                rel={href.startsWith("tel:") ? undefined : "noreferrer"}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-sky-200/14 bg-white/[0.08] text-lg text-white shadow-[0_12px_40px_-28px_rgba(56,189,248,0.75)] transition hover:-translate-y-0.5 hover:border-sky-200/35 hover:bg-white/15"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
          <div className="mt-6 flex justify-start lg:justify-end">
            <GoogleMapsPreview href={MAPS_URL} />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h2 className="mb-5 text-xl font-black tracking-[-0.02em] text-white">{title}</h2>
      <ul className="space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link to={href} className="text-base font-semibold leading-6 text-slate-200 transition hover:translate-x-1 hover:text-emerald-300">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer1;

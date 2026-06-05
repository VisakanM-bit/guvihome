import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CONTACT_EMAIL, CONTACT_PHONE, MAPS_URL, WHATSAPP_NUMBER } from "../../config/sheets";
import GoogleMapsIcon from "../GoogleMapsIcon/GoogleMapsIcon";

const contactItems = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: FaWhatsapp,
    tone: "from-sky-500 to-violet-600",
  },
  {
    label: "Call",
    href: `tel:${CONTACT_PHONE}`,
    icon: FaPhoneAlt,
    tone: "from-cyan-500 to-sky-600",
  },
  {
    label: "Mail",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`,
    icon: FaEnvelope,
    tone: "from-violet-500 to-fuchsia-600",
  },
  {
    label: "Location",
    href: MAPS_URL,
    icon: GoogleMapsIcon,
    tone: "from-blue-500 to-cyan-600",
  },
];

function ContactActions({ compact = false }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "" : "justify-center"}`}>
      {contactItems.map(({ label, href, icon: Icon, tone }) => (
        <a
          key={label}
          href={href}
          target={label === "WhatsApp" || label === "Mail" || label === "Location" ? "_blank" : undefined}
          rel={label === "WhatsApp" || label === "Mail" || label === "Location" ? "noreferrer" : undefined}
          className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${tone} px-4 text-sm font-black text-white shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5`}
          aria-label={label}
        >
          <Icon />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}

export default ContactActions;

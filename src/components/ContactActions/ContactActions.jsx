import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { CONTACT_EMAIL, CONTACT_PHONE, MAPS_URL, WHATSAPP_NUMBER } from "../../config/sheets";
import GoogleMapsIcon from "../GoogleMapsIcon/GoogleMapsIcon";

const ADDRESS =
  "Jawa Incubation Centre, 54, Bharathi Park 7th Cross Rd, Saibaba Colony, Coimbatore, Tamil Nadu 641043";

const contactItems = [
  {
    label: "WhatsApp",
    detail: CONTACT_PHONE,
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    icon: FaWhatsapp,
  },
  {
    label: "Mobile",
    detail: CONTACT_PHONE,
    href: `tel:${CONTACT_PHONE}`,
    icon: FaPhoneAlt,
  },
  {
    label: "Email",
    detail: CONTACT_EMAIL,
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}`,
    icon: FaEnvelope,
  },
  {
    label: "Location",
    detail: ADDRESS,
    href: MAPS_URL,
    icon: FaMapMarkerAlt,
  },
];

function ContactActions({ compact = false }) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-3">
        {contactItems.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={label === "WhatsApp" || label === "Email" || label === "Location" ? "_blank" : undefined}
            rel={label === "WhatsApp" || label === "Email" || label === "Location" ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-black text-emerald-200 shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-300/25 transition hover:-translate-y-0.5 hover:bg-slate-900"
            aria-label={label}
          >
            <Icon />
            <span>{label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
      {contactItems.map(({ label, detail, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={label === "WhatsApp" || label === "Email" || label === "Location" ? "_blank" : undefined}
          rel={label === "WhatsApp" || label === "Email" || label === "Location" ? "noreferrer" : undefined}
          className="group flex min-h-[92px] items-center gap-4 rounded-xl border border-emerald-300/24 bg-slate-950 px-4 py-3 text-left text-white shadow-[0_18px_58px_-34px_rgba(0,108,69,0.55)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:border-emerald-300/45 hover:bg-slate-900"
          aria-label={label}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#00a86b] text-lg text-white shadow-lg shadow-emerald-500/20">
            {label === "Location" ? <GoogleMapsIcon className="h-5 w-5" /> : <Icon />}
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-black text-emerald-200">{label}</span>
            <span className="mt-1 block break-words text-sm font-semibold leading-5 text-white">{detail}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export default ContactActions;

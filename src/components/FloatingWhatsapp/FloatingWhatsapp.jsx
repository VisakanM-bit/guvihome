import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_NUMBER } from "../../config/sheets";

function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[80] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-4xl text-white shadow-[0_18px_45px_-18px_rgba(37,211,102,0.9)] ring-4 ring-white/15 transition hover:-translate-y-1 hover:scale-105"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWhatsapp;

import GoogleMapsIcon from "../GoogleMapsIcon/GoogleMapsIcon";

function GoogleMapsPreview({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block h-28 w-44 overflow-hidden rounded-2xl border border-white/10 bg-[#17251f] shadow-[0_20px_70px_-38px_rgba(56,189,248,0.85)] transition hover:-translate-y-1 hover:border-sky-200/40 sm:h-32 sm:w-52"
      aria-label="Open Jawa EdTech live location on Google Maps"
    >
      <span className="absolute inset-0 bg-[radial-gradient(circle_at_22%_28%,rgba(125,211,252,0.25),transparent_18%),radial-gradient(circle_at_78%_72%,rgba(34,197,94,0.22),transparent_20%),linear-gradient(35deg,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(115deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:100%_100%,100%_100%,28px_28px,42px_42px]" />
      <span className="absolute inset-0 bg-[linear-gradient(20deg,transparent_0_28%,rgba(255,255,255,0.12)_29%_31%,transparent_32%_62%,rgba(255,255,255,0.1)_63%_65%,transparent_66%),linear-gradient(105deg,transparent_0_36%,rgba(255,255,255,0.12)_37%_39%,transparent_40%)] opacity-80" />
      <span className="absolute inset-0 bg-black/18 transition group-hover:bg-black/8" />

      <span className="absolute left-1/2 top-[44%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
        <GoogleMapsIcon className="h-20 w-20 drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] sm:h-24 sm:w-24" />
      </span>
      <span className="absolute inset-x-0 bottom-3 text-center text-2xl font-black tracking-[-0.04em] text-white/88 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)] sm:text-3xl">
        Google Maps
      </span>
    </a>
  );
}

export default GoogleMapsPreview;

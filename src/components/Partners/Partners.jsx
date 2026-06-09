import { FaHandshake, FaRocket, FaShieldAlt } from "react-icons/fa";

import jawaMark from "../../assets/trusted-transparent/jawa-mark.png";
import cloudpLogo from "../../assets/trusted-transparent/cloudp.png";
import orionshiftLogo from "../../assets/trusted-transparent/orionshift.png";
import aesLogo from "../../assets/trusted-transparent/aes.png";
import queueLessLogo from "../../assets/trusted-transparent/queue-less.png";
import axolentLogo from "../../assets/trusted-transparent/axolent.png";
import opsmonstersLogo from "../../assets/trusted-transparent/opsmonsters.png";
import alphaspectsLogo from "../../assets/trusted-transparent/alphaspects.png";
import revampLogo from "../../assets/trusted-transparent/revamp.png";

const trustedCompanies = [
  { name: "Alphaspects", logo: alphaspectsLogo, size: "max-h-13" },
  { name: "Axolent", logo: axolentLogo, size: "max-h-13" },
  { name: "OpsMonsters", logo: opsmonstersLogo, size: "max-h-12" },
  { name: "Queue Less", logo: queueLessLogo, size: "max-h-14" },
  { name: "CloudP", logo: cloudpLogo, size: "max-h-13" },
  { name: "Revamp", logo: revampLogo, size: "max-h-13" },
  { name: "AES", logo: aesLogo, size: "max-h-14" },
  { name: "Orionshift", logo: orionshiftLogo, size: "max-h-16" },
];

function Partners() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbf7] px-4 py-14 text-slate-950 sm:px-6 md:px-8 lg:px-10 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(34,197,94,0.16),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(0,168,107,0.1),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.94),rgba(242,251,245,0.96),rgba(255,255,255,0.94))]" />
      <div className="absolute left-1/2 top-0 h-80 w-[min(820px,94vw)] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent shadow-[0_0_22px_rgba(52,211,153,0.8)]" />

      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-700/18 bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-emerald-800 shadow-[0_18px_60px_-46px_rgba(0,108,69,0.45)] backdrop-blur-xl">
            <FaHandshake className="text-emerald-600" />
            Industry Network
          </div>
          <h2 className="text-3xl font-black leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-6xl">
            Trusted by Leading Companies
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-8 text-emerald-950 sm:text-lg">
            A growing ecosystem of companies, technology teams, and career partners supporting practical learning, internships, projects, and hiring readiness.
          </p>
        </div>

        <div className="mt-11 grid gap-6 xl:grid-cols-[0.72fr_1.28fr] xl:items-stretch">
          <article className="relative overflow-hidden rounded-[1.4rem] border border-emerald-700/14 bg-white p-6 shadow-[0_30px_110px_-70px_rgba(0,108,69,0.48)] backdrop-blur-2xl">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-emerald-300/20 blur-3xl" />
            <div className="relative z-10 flex min-h-full flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                  Jawa EdTech Ecosystem
                </p>
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  Learn. Lead. Innovate.
                </h3>
                <p className="mt-4 max-w-lg text-sm font-semibold leading-7 text-emerald-950">
                  Jawa EdTech connects students with practical programs, internships, mentorship, project labs, and placement readiness pathways.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-center rounded-2xl border border-emerald-700/12 bg-emerald-50 p-6 shadow-inner shadow-emerald-950/10">
                <div className="relative flex aspect-square w-full max-w-[190px] items-center justify-center">
                  <span className="absolute inset-7 rounded-full bg-emerald-300/18 blur-3xl" />
                  <img
                    src={jawaMark}
                    alt="Jawa EdTech logo mark"
                    className="relative h-full w-full object-contain drop-shadow-[0_18px_32px_rgba(16,185,129,0.42)]"
                  />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {trustedCompanies.map((company) => (
              <div
                key={company.name}
                className="logo-twinkle-card group relative flex min-h-[6.8rem] items-center justify-center overflow-visible px-3 py-4 transition duration-300 hover:-translate-y-1"
              >
                <span className="absolute h-24 w-[95%] rounded-full bg-emerald-300/18 blur-2xl transition group-hover:bg-emerald-300/28" />
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className={`relative max-w-[100%] scale-[1.48] object-contain drop-shadow-[0_14px_24px_rgba(0,108,69,0.22)] transition duration-300 group-hover:scale-[1.62] group-hover:drop-shadow-[0_18px_30px_rgba(0,108,69,0.34)] ${company.size}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-5xl gap-3 text-center sm:grid-cols-3">
          {[
            ["Internship Network", "Guided exposure across real workplace tasks", FaRocket],
            ["Project Collaboration", "Portfolio-ready work with mentor review", FaHandshake],
            ["Career Readiness", "Support for resumes, interviews, and confidence", FaShieldAlt],
          ].map(([title, text, Icon]) => (
            <div key={title} className="rounded-2xl border border-emerald-700/12 bg-white p-4 shadow-[0_18px_52px_-40px_rgba(0,108,69,0.4)] backdrop-blur-xl">
              <Icon className="mx-auto mb-3 text-xl text-emerald-600" />
              <p className="text-base font-black text-emerald-800">{title}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-950">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;

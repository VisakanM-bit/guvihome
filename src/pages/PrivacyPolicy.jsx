import Navbar from "../components/Navbar/Navbar";
import Footer1 from "../components/Footer1/Footer1";

const sections = [
  {
    title: "Information We Collect",
    text: "Jawa EdTech may collect details such as name, email address, phone number, education profile, program interest, lead source, application details, and communication preferences when learners register, request counseling, submit forms, or contact our team.",
  },
  {
    title: "How We Use Information",
    text: "We use learner and visitor information to respond to enquiries, provide career counseling, manage program applications, deliver learning support, improve our platform, share relevant updates, and support placement-readiness workflows.",
  },
  {
    title: "Data Protection",
    text: "We treat learner data as confidential and use reasonable technical and operational measures to protect records from unauthorized access, misuse, or loss. Access to operational records is limited to authorized Jawa EdTech team members.",
  },
  {
    title: "Communication",
    text: "By submitting a form, learners agree that Jawa EdTech may contact them by phone, WhatsApp, SMS, or email for counseling, program updates, application follow-up, and career-support information.",
  },
  {
    title: "Third-Party Services",
    text: "We may use trusted services for analytics, database storage, email, forms, or communication. These services are used only to operate, secure, and improve the Jawa EdTech learning and career-support experience.",
  },
  {
    title: "Contact",
    text: "For privacy questions, corrections, or removal requests, contact Jawa EdTech at hr@jawaedtech.com or call +91 9790631286.",
  },
];

function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="course-detail-bg min-h-screen px-5 py-14 text-white sm:px-8 lg:px-10">
        <section className="mx-auto max-w-5xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-200">Jawa EdTech</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">Privacy Policy</h1>
          <p className="mt-5 max-w-3xl text-base font-semibold leading-8 text-slate-200 sm:text-lg">
            This policy explains how Jawa EdTech collects, uses, and protects learner, visitor, and enquiry information across our career-focused learning ecosystem.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-sky-200/15 bg-white/[0.07] p-6 shadow-[0_24px_80px_-58px_rgba(56,189,248,0.72)] backdrop-blur-xl">
                <h2 className="text-xl font-black tracking-[-0.02em] text-white">{section.title}</h2>
                <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">{section.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}

export default PrivacyPolicy;

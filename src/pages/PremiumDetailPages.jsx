import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaAward,
  FaBriefcase,
  FaBuilding,
  FaCertificate,
  FaChartLine,
  FaCheck,
  FaClipboardCheck,
  FaCloudDownloadAlt,
  FaCode,
  FaComments,
  FaFileAlt,
  FaGithub,
  FaGraduationCap,
  FaHandshake,
  FaJira,
  FaLaptopCode,
  FaLayerGroup,
  FaLinkedin,
  FaPhoneAlt,
  FaQuestionCircle,
  FaRocket,
  FaSlack,
  FaTools,
  FaUserCheck,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import Footer1 from "../components/Footer1/Footer1";
import {
  aboutEdtechPage,
  careerPages,
  commonFaqs,
  defaultInternship,
  industryProjects,
  internshipPrograms,
} from "../data/premiumPages";
import { saveExpertLead } from "../services/sheetsApi";

const tones = ["course-tone-emerald", "course-tone-cyan", "course-tone-blue", "course-tone-violet", "course-tone-amber", "course-tone-rose"];
const workflow = ["Learning", "Practice", "Execution", "Project Delivery", "Review", "Certification"];
const projectPhases = ["Analysis", "Design", "Development", "Testing", "Deployment"];
const skillGroups = [
  ["Technical Skills", "Tool workflows", "Reporting", "Documentation", "Data handling"],
  ["Soft Skills", "Communication", "Teamwork", "Problem Solving", "Leadership"],
];
const companyCards = ["Startup Hiring Teams", "IT Services", "Product Companies", "HR Teams", "Consulting Firms", "Enterprise Businesses"];
const stories = [
  ["Sanjay R.", "Internship to Employment Journey", "Live projects helped me understand industry workflows and speak confidently in interviews."],
  ["Divya M.", "HR Internship Program", "Recruitment, sourcing, and employee documentation practice improved my professional confidence."],
  ["Karthik V.", "AI Internship Program", "Project exposure and mentor reviews made the internship one of my most valuable career experiences."],
];

function PremiumInternshipPage() {
  const { slug } = useParams();
  const internship = internshipPrograms.find((item) => item.slug === slug) || defaultInternship;

  return (
    <PremiumShell backTo="/" backLabel="Back to home" actionContext={{
      source: "internship_apply_phone",
      title: "Apply For Internship",
      subtitle: internship.name,
      program: internship.name,
      button: "Submit Internship Application",
      points: ["Domain-specific internship guidance", "Live project workflow", "Certificate and placement readiness"],
    }}>
      <HeroPanel
        eyebrow="Internship Hub"
        title={internship.name}
        headline={internship.headline}
        description={internship.description}
        chips={[internship.domain, "6 Week Workflow", "Mentor Guided"]}
        highlights={internship.highlights}
        actions={["Apply Internship", "Download Brochure", "Talk To Mentor"]}
        visualTitle="Professional Internship"
        visualStats={[
          ["6", "Workflow weeks"],
          ["Live", "Assignments"],
          ["1:1", "Mentor review"],
          ["100%", "Portfolio focus"],
        ]}
      />

      <Band eyebrow="Internship Overview" title="Why This Internship Matters" variant="split">
        <p className="course-lead-copy max-w-5xl text-lg font-semibold leading-9 text-slate-200">{internship.overview}</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {["Industry relevance", "Hands-on experience", "Corporate exposure", "Skills gained", "Career benefits"].map((item, index) => (
            <InfoCard key={item} icon={FaChartLine} title={item} text="Build workplace readiness through structured tasks, feedback, documentation, and real deliverables." tone={tones[index]} />
          ))}
        </div>
      </Band>

      <Band eyebrow="What You Will Work On" title="Real Workplace Responsibilities" variant="mesh">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {internship.workCards.map((card, index) => (
            <article key={card.title} className={`course-project-card ${tones[index % tones.length]} p-5 transition hover:-translate-y-1 xl:p-6`}>
              <FaBriefcase className="mb-5 text-2xl text-emerald-200" />
              <h3 className="text-xl font-black text-white">{card.title}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">{card.description}</p>
              <LabelList label="Tasks" items={card.tasks} />
              <LabelList label="Deliverables" items={card.deliverables} />
              <LabelList label="Skills Developed" items={card.skills} />
            </article>
          ))}
        </div>
      </Band>

      <Band eyebrow="Live Project Experience" title={internship.liveProject.title} variant="showcase">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="course-glass-card p-6">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">Business Problem</p>
            <p className="mt-3 text-base font-semibold leading-8 text-slate-200">{internship.liveProject.problem}</p>
            <p className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-cyan-200">Your Role</p>
            <p className="mt-3 text-base font-semibold leading-8 text-slate-200">{internship.liveProject.role}</p>
          </article>
          <article className="course-glass-card p-6">
            <LabelList label="Tools Used" items={internship.liveProject.tools} />
            <LabelList label="Expected Outcomes" items={internship.liveProject.outcomes} />
          </article>
        </div>
      </Band>

      <TimelineBand />
      <ToolsBand tools={internship.tools} />
      <SkillsBand />
      <CertificateBand title="Professional Internship Certificate" text="Receive an industry-recognized, verification-enabled certificate that is portfolio ready and suitable for resume and LinkedIn profile building." />
      <CareerImpactBand />
      <FaqBand />
      <FinalCta title="Start Your Professional Journey Today" primary="Apply Now" />
    </PremiumShell>
  );
}

function PremiumProjectPage() {
  const { slug } = useParams();
  const project = industryProjects.find((item) => item.slug === slug);

  if (!project) return <Navigate to="/projects/industry-project-lab" replace />;

  return (
    <PremiumShell backTo="/" backLabel="Back to home" actionContext={{
      source: "practice_hub_project_phone",
      title: "Start Practice Hub",
      subtitle: project.name,
      program: project.name,
      button: "Start Project Practice",
      points: ["Project lab access", "Mentor-guided deliverables", "Portfolio-ready assets"],
    }}>
      <HeroPanel
        eyebrow="Premium Industry Project"
        title={project.name}
        headline={project.problem}
        description={`${project.domain} project experience with structured mentor review, business documentation, implementation, and portfolio assets.`}
        chips={[project.domain, project.duration, project.difficulty]}
        highlights={["Business Problem", "Industry Domain", "Duration", "Difficulty Level"]}
        actions={["Start Working On Industry Projects", "Talk To Mentor", "View Deliverables"]}
        visualTitle="Project Control Room"
        visualStats={[
          ["5", "Delivery phases"],
          ["Source", "Code"],
          ["Docs", "Reports"],
          ["Portfolio", "Assets"],
        ]}
      />
      <Band eyebrow="Project Overview" title="Business Objective & Real World Impact" variant="split">
        <div className="grid gap-4 lg:grid-cols-3">
          <InfoCard icon={FaBuilding} title="Business Objective" text={project.objective} tone={tones[0]} />
          <InfoCard icon={FaLayerGroup} title="Industry Use Case" text={project.overview} tone={tones[1]} />
          <InfoCard icon={FaChartLine} title="Real World Impact" text={project.impact} tone={tones[2]} />
        </div>
      </Band>
      <Band eyebrow="Project Modules" title="From Problem Analysis To Deployment" variant="timeline">
        <div className="course-timeline-grid grid gap-4 md:grid-cols-3 xl:grid-cols-5">
          {projectPhases.map((phase, index) => <StepCard key={phase} index={index + 1} title={`Phase ${index + 1}`} text={phase} tone={tones[index]} />)}
        </div>
      </Band>
      <ToolsBand title="Technologies Used" tools={project.technologies} />
      <Band eyebrow="Deliverables" title="Everything You Need For Your Portfolio" variant="mesh">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {["Source Code", "Documentation", "Reports", "Presentation", "Portfolio Assets"].map((item, index) => (
            <InfoCard key={item} icon={FaClipboardCheck} title={item} text="Create a polished, reviewable asset that proves your implementation and business understanding." tone={tones[index]} />
          ))}
        </div>
      </Band>
      <Band eyebrow="Learning Outcomes" title="Skills, Exposure & Business Understanding" variant="showcase">
        <div className="grid gap-4 md:grid-cols-3">
          {["Skills Gained", "Industry Exposure", "Business Understanding"].map((item, index) => (
            <InfoCard key={item} icon={FaGraduationCap} title={item} text="Turn practical work into confident interview stories, better decision-making, and career-ready execution." tone={tones[index + 1]} />
          ))}
        </div>
      </Band>
      <Band eyebrow="Project Gallery" title="Screenshots, Wireframes, Architecture & Dashboards" variant="stats">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {["Product Screenshots", "Wireframes", "Architecture", "Dashboards"].map((item, index) => (
            <div key={item} className={`course-stat-card ${tones[index]} min-h-44 p-5`}>
              <FaLaptopCode className="mb-8 text-3xl text-emerald-200" />
              <h3 className="text-xl font-black text-white">{item}</h3>
              <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">Prepared as visual proof of project planning, execution, and delivery.</p>
            </div>
          ))}
        </div>
      </Band>
      <CertificateBand title="Project Completion Certificate" text="Validate your project completion with certification, source-code proof, documentation, and mentor-reviewed portfolio assets." />
      <FinalCta title="Start Working On Industry Projects" primary="Start Project Lab" />
    </PremiumShell>
  );
}

function PremiumCareerPage({ pageKey }) {
  const page = careerPages[pageKey];

  if (!page) return <Navigate to="/" replace />;

  return (
    <PremiumShell backTo="/" backLabel="Back to home" actionContext={{
      source: `${pageKey}_phone_request`,
      title: page.finalCta,
      subtitle: page.title,
      program: page.title,
      button: page.finalCta,
      points: pageKey === "mentorship"
        ? ["1:1 mentor guidance", "Skill gap analysis", "Career roadmap support"]
        : ["Career readiness review", "Resume and interview support", "Hiring opportunity guidance"],
    }}>
      <HeroPanel
        eyebrow={page.eyebrow}
        title={page.title}
        headline={page.headline}
        description={page.description}
        chips={page.stats.map(([value, label]) => `${value} ${label}`)}
        highlights={(page.receives || page.benefits || page.services || []).slice(0, 5)}
        actions={[page.finalCta, "Talk To Mentor", "Book Career Counseling"]}
        visualTitle={page.eyebrow}
        visualStats={page.stats}
      />

      {page.journey && <JourneyBand title="Placement Journey" steps={page.journey} />}
      {page.receives && <CardsBand eyebrow="What You Receive" title="Career Support Built Around Hiring Readiness" items={page.receives} icon={FaUserCheck} />}
      {page.rounds && <CardsBand eyebrow="Interview Preparation" title="Prepare For Every Interview Round" items={page.rounds} icon={FaComments} />}
      {page.resumeLab && <CardsBand eyebrow="Resume Lab" title="ATS Friendly Resume & Personal Branding" items={page.resumeLab} icon={FaFileAlt} />}

      {page.benefits && <CardsBand eyebrow="Mentorship Benefits" title="Guidance That Moves With Your Career Goal" items={page.benefits} icon={FaHandshake} />}
      {page.mentors && (
        <Band eyebrow="Meet Your Mentors" title="Industry Experts Across HR & Technology" variant="showcase">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {page.mentors.map(([name, designation, experience, expertise], index) => (
              <article key={name} className={`course-role-card ${tones[index]} p-5`}>
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-300 text-2xl text-slate-950 shadow-[0_0_38px_rgba(52,211,153,0.36)]">
                  <FaUserTie />
                </div>
                <h3 className="text-xl font-black text-white">{name}</h3>
                <p className="mt-2 text-sm font-black text-emerald-200">{designation}</p>
                <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">{experience} experience in {expertise}.</p>
              </article>
            ))}
          </div>
        </Band>
      )}
      {page.process && <JourneyBand title="Mentorship Process" steps={page.process} />}
      {page.process && (
        <>
          <CardsBand eyebrow="1:1 Mentorship" title="Personalized Guidance For Your Career Path" items={["Personalized Guidance", "Career Planning", "Skill Gap Analysis"]} icon={FaUserTie} />
          <CardsBand eyebrow="Group Mentorship" title="Workshops, Masterclasses & Industry Sessions" items={["Workshops", "Masterclasses", "Industry Sessions"]} icon={FaUsers} />
        </>
      )}

      {page.services && <CardsBand eyebrow="Services" title="Career Development Services" items={page.services} icon={FaBriefcase} />}
      {page.roadmap && <JourneyBand title="Career Roadmap" steps={page.roadmap} />}

      {pageKey === "placement" && (
        <>
          <Band eyebrow="Hiring Partners" title="Company & Opportunity Showcase" variant="stats">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {companyCards.map((company, index) => <InfoCard key={company} icon={FaBuilding} title={company} text="Connect with hiring opportunities through readiness programs, referrals, and guided placement support." tone={tones[index % tones.length]} />)}
            </div>
          </Band>
          <StoriesBand />
        </>
      )}

      <FaqBand />
      <FinalCta title={page.finalCta} primary={page.finalCta} />
    </PremiumShell>
  );
}

function PremiumAboutEdtechPage() {
  const page = aboutEdtechPage;

  return (
    <PremiumShell backTo="/" backLabel="Back to home" actionContext={{
      source: "about_edtech_phone_request",
      title: "Talk To Jawa EdTech",
      subtitle: "Career transformation guidance",
      program: "About Jawa EdTech",
      button: "Request Career Consultation",
      points: ["Program guidance", "Internship and project roadmap", "Placement readiness support"],
    }}>
      <HeroPanel
        eyebrow={page.eyebrow}
        title={page.title}
        headline={page.headline}
        description={page.description}
        chips={page.stats.map(([value, label]) => `${value} ${label}`)}
        highlights={page.why.slice(0, 5)}
        actions={["Talk To Jawa EdTech", "View Ecosystem", "Contact Team"]}
        visualTitle="Career Ecosystem"
        visualStats={page.stats}
      />
      <JourneyBand title="Our Learning Ecosystem" steps={page.ecosystem} />
      <CardsBand eyebrow="Why Jawa EdTech" title="Built For Practical Career Transformation" items={page.why} icon={FaRocket} />
      <Band eyebrow="Contact" title="Reach The Jawa EdTech Team" variant="split">
        <div className="grid gap-4 md:grid-cols-3">
          {page.contact.map((item, index) => <InfoCard key={item} icon={index === 0 ? FaFileAlt : index === 1 ? FaPhoneAlt : FaBuilding} title={index === 0 ? "Email" : index === 1 ? "Phone" : "Location"} text={item} tone={tones[index]} />)}
        </div>
      </Band>
      <FaqBand />
      <FinalCta title="Ready To Build A Successful Career?" primary="Book Free Career Consultation" />
    </PremiumShell>
  );
}

function PremiumShell({ children, backTo, backLabel, actionContext }) {
  const [phoneOpen, setPhoneOpen] = useState(false);

  useEffect(() => {
    const openPhone = () => setPhoneOpen(true);
    window.addEventListener("jawa:open-lead-phone", openPhone);
    return () => window.removeEventListener("jawa:open-lead-phone", openPhone);
  }, []);

  return (
    <>
      <Navbar />
      <main className="course-detail-bg min-h-screen overflow-hidden text-white">
        <section className="relative px-6 pt-10 sm:px-10 lg:px-16 xl:px-24 2xl:px-32">
          <div className="relative z-10 mx-auto max-w-[1540px]">
            <Link to={backTo} className="mb-8 inline-flex items-center gap-2 text-sm font-black text-emerald-200 transition hover:text-white">
              <FaArrowLeft />
              {backLabel}
            </Link>
          </div>
        </section>
        {children}
        <FloatingActionPhone onClick={() => setPhoneOpen(true)} label={actionContext?.title || "Talk To Expert"} />
      </main>
      <LeadPhoneModal open={phoneOpen} onClose={() => setPhoneOpen(false)} context={actionContext} />
      <Footer1 />
    </>
  );
}

function HeroPanel({ eyebrow, title, headline, description, chips, highlights, actions, visualTitle, visualStats }) {
  return (
    <section className="relative px-6 pb-16 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 lg:pb-24">
      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="course-hero-panel course-sparkle-field grid gap-10 rounded-[2.25rem] border border-emerald-200/15 bg-white/[0.055] p-6 shadow-[0_30px_120px_-70px_rgba(34,197,94,0.8)] backdrop-blur-2xl sm:p-9 lg:grid-cols-[1.06fr_0.94fr] lg:p-12 xl:p-14">
          <div className="relative z-10">
            <p className="mb-5 inline-flex rounded-full border border-emerald-200/20 bg-emerald-300/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-emerald-100">{eyebrow}</p>
            <h1 className="max-w-5xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">{title}</h1>
            <p className="mt-5 max-w-4xl text-2xl font-black tracking-[-0.02em] text-emerald-200">{headline}</p>
            <p className="mt-6 max-w-3xl text-base font-semibold leading-8 text-slate-200 sm:text-lg">{description}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {chips.map((chip) => <span key={chip} className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-4 py-2 text-xs font-black text-cyan-100">{chip}</span>)}
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => <span key={item} className="flex items-center gap-3 text-sm font-black text-slate-100"><FaCheck className="text-emerald-300" />{item}</span>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("jawa:open-lead-phone"))} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 px-6 text-sm font-black text-slate-950 shadow-xl shadow-emerald-400/25 transition hover:-translate-y-0.5"><FaRocket />{actions[0]}</button>
              <a href="#faq" className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-emerald-200/20 bg-white/[0.08] px-6 text-sm font-black text-white backdrop-blur-xl transition hover:-translate-y-0.5"><FaCloudDownloadAlt />{actions[1]}</a>
              <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("jawa:open-lead-phone"))} className="inline-flex min-h-13 items-center justify-center gap-2 rounded-2xl border border-cyan-200/25 bg-cyan-300/10 px-6 text-sm font-black text-cyan-100 transition hover:-translate-y-0.5"><FaPhoneAlt />{actions[2]}</button>
            </div>
          </div>
          <div className="relative z-10 rounded-[1.9rem] border border-emerald-200/15 bg-slate-950/42 p-5 shadow-inner shadow-emerald-950/30">
            <div className="course-device-card flex min-h-[29rem] flex-col justify-between rounded-[1.45rem] border border-emerald-300/18 bg-[radial-gradient(circle_at_72%_20%,rgba(34,197,94,0.22),transparent_34%),linear-gradient(145deg,rgba(15,23,42,0.88),rgba(0,0,0,0.74))] p-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-300 text-3xl text-slate-950 shadow-[0_0_54px_rgba(52,211,153,0.55)]"><FaRocket /></div>
              <div>
                <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-emerald-200">{visualTitle}</p>
                <div className="grid grid-cols-2 gap-3">
                  {visualStats.map(([value, label]) => (
                    <div key={`${value}-${label}`} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <p className="text-2xl font-black text-emerald-200">{value}</p>
                      <p className="mt-1 text-xs font-bold text-slate-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold leading-7 text-slate-300">Premium glass UI, mentor-led workflow, portfolio outcomes, and career support built for real execution.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Band({ id, eyebrow, title, children, variant = "compact" }) {
  return (
    <section id={id} className={`course-section-shell course-section-${variant} relative px-6 py-12 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 lg:py-16`}>
      <div className="relative z-10 mx-auto max-w-[1540px]">
        <div className="course-section-panel rounded-[2rem] border border-emerald-200/10 bg-slate-950/22 p-5 backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-emerald-200">{eyebrow}</p>
              <h2 className="max-w-4xl text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
            </div>
            <span className="hidden h-px flex-1 bg-gradient-to-r from-emerald-300/40 via-cyan-300/20 to-transparent lg:block" />
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, text, tone = tones[0] }) {
  return (
    <article className={`course-glass-card ${tone} p-5 transition hover:-translate-y-1 xl:p-6`}>
      <Icon className="mb-4 text-2xl text-emerald-200" />
      <h3 className="text-lg font-black text-white">{title}</h3>
      <p className="mt-3 text-sm font-semibold leading-7 text-slate-300">{text}</p>
    </article>
  );
}

function LabelList({ label, items }) {
  return (
    <div className="mt-5">
      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">{label}</p>
      <div className="mt-2 grid gap-2">
        {items.map((item) => <span key={item} className="flex items-start gap-2 text-sm font-bold leading-6 text-slate-200"><FaCheck className="mt-1 shrink-0 text-emerald-300" />{item}</span>)}
      </div>
    </div>
  );
}

function TimelineBand() {
  return (
    <Band eyebrow="Daily Workflow Timeline" title="Six Weeks From Learning To Certification" variant="timeline">
      <div className="course-timeline-grid grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        {workflow.map((step, index) => <StepCard key={step} index={index + 1} title={`Week ${index + 1}`} text={step} tone={tones[index]} />)}
      </div>
    </Band>
  );
}

function StepCard({ index, title, text, tone }) {
  return (
    <article className={`course-timeline-card ${tone} p-5 transition hover:-translate-y-1 xl:p-6`}>
      <span className="course-step-dot mb-4 flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-slate-950">{index}</span>
      <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-200">{title}</p>
      <h3 className="mt-2 text-lg font-black text-white">{text}</h3>
    </article>
  );
}

function ToolsBand({ title = "Tools You Will Use", tools }) {
  const toolIcons = [FaFileAlt, FaUserTie, FaClipboardCheck, FaLinkedin, FaGraduationCap, FaSlack, FaJira, FaGithub, FaCode, FaTools];
  return (
    <Band eyebrow="Tools & Platforms" title={title} variant="compact">
      <div className="flex flex-wrap gap-3">
        {tools.map((tool, index) => {
          const Icon = toolIcons[index % toolIcons.length];
          return <span key={tool} className={`course-tool-badge ${tones[index % tones.length]} inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black`}><Icon />{tool}</span>;
        })}
      </div>
    </Band>
  );
}

function SkillsBand() {
  return (
    <Band eyebrow="Skills You Will Gain" title="Technical Confidence + Professional Readiness" variant="split">
      <div className="grid gap-5 lg:grid-cols-2">
        {skillGroups.map(([title, ...items], index) => (
          <article key={title} className={`course-glass-card ${tones[index]} p-6`}>
            <h3 className="text-2xl font-black text-white">{title}</h3>
            <LabelList label="Skill Areas" items={items} />
          </article>
        ))}
      </div>
    </Band>
  );
}

function CertificateBand({ title, text }) {
  return (
    <Band eyebrow="Certification" title={title} variant="certificate">
      <div className="course-certificate-wrap grid gap-8 rounded-[2rem] border border-emerald-200/15 bg-white/[0.055] p-6 backdrop-blur-2xl lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
        <div className="rounded-3xl border border-emerald-300/20 bg-[linear-gradient(145deg,rgba(236,253,245,0.95),rgba(167,243,208,0.86))] p-6 text-slate-950 shadow-[0_28px_90px_-48px_rgba(34,197,94,0.95)]">
          <FaCertificate className="mb-10 text-5xl text-emerald-700" />
          <p className="text-sm font-black uppercase tracking-[0.24em] text-emerald-800">Jawa EdTech</p>
          <h3 className="mt-3 text-3xl font-black tracking-[-0.04em]">Professional Certificate</h3>
          <p className="mt-4 text-sm font-bold leading-7 text-slate-700">Industry Recognition • Verification Enabled • Portfolio Ready</p>
        </div>
        <div className="flex flex-col justify-center">
          <FaAward className="mb-5 text-4xl text-emerald-200" />
          <p className="text-lg font-semibold leading-9 text-slate-200">{text}</p>
        </div>
      </div>
    </Band>
  );
}

function CareerImpactBand() {
  return (
    <Band eyebrow="Career Impact" title="How This Experience Helps You Get Ready" variant="showcase">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {["Job readiness", "Resume enhancement", "Interview confidence", "Industry experience", "Networking"].map((item, index) => (
          <InfoCard key={item} icon={FaRocket} title={item} text="Build proof of practical work, stronger career conversations, and clearer next steps." tone={tones[index]} />
        ))}
      </div>
    </Band>
  );
}

function CardsBand({ eyebrow, title, items, icon }) {
  return (
    <Band eyebrow={eyebrow} title={title} variant="mesh">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => <InfoCard key={item} icon={icon} title={item} text="Receive structured guidance, practical review, and career-focused execution support." tone={tones[index % tones.length]} />)}
      </div>
    </Band>
  );
}

function JourneyBand({ title, steps }) {
  return (
    <Band eyebrow="Roadmap" title={title} variant="timeline">
      <div className="course-timeline-grid grid gap-4 md:grid-cols-3 xl:grid-cols-6">
        {steps.map((step, index) => <StepCard key={step} index={index + 1} title={`Step ${index + 1}`} text={step} tone={tones[index % tones.length]} />)}
      </div>
    </Band>
  );
}

function StoriesBand() {
  return (
    <Band eyebrow="Success Stories" title="Student Testimonials & Placed Candidate Signals" variant="showcase">
      <div className="grid gap-5 lg:grid-cols-3">
        {stories.map(([name, role, quote], index) => (
          <article key={name} className={`course-glass-card ${tones[index]} p-6`}>
            <p className="text-2xl font-black text-emerald-200">★★★★★</p>
            <h3 className="mt-5 text-xl font-black text-white">{name}</h3>
            <p className="mt-1 text-sm font-black text-cyan-200">{role}</p>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">{quote}</p>
          </article>
        ))}
      </div>
    </Band>
  );
}

function FaqBand() {
  return (
    <Band id="faq" eyebrow="FAQ" title="Questions Learners Ask" variant="compact">
      <div className="grid gap-3 lg:grid-cols-2">
        {commonFaqs.map(([question, answer]) => (
          <details key={question} className="course-glass-card group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-black text-white">
              <span className="flex items-center gap-3"><FaQuestionCircle className="text-emerald-200" />{question}</span>
              <span className="text-emerald-200 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 text-sm font-semibold leading-7 text-slate-300">{answer}</p>
          </details>
        ))}
      </div>
    </Band>
  );
}

function FinalCta({ title, primary }) {
  return (
    <section className="relative px-6 py-16 sm:px-10 lg:px-16 xl:px-24 2xl:px-32 lg:py-24">
      <div className="course-final-cta course-sparkle-field relative z-10 mx-auto max-w-[1540px] overflow-hidden rounded-[2.25rem] border border-emerald-200/15 bg-white/[0.06] p-8 text-center shadow-[0_32px_130px_-72px_rgba(34,197,94,0.85)] backdrop-blur-2xl lg:p-12">
        <FaRocket className="mx-auto mb-6 text-5xl text-emerald-200" />
        <h2 className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-3xl text-xl font-black leading-9 text-emerald-100">Learn Skills. Gain Experience. Build Confidence. Get Hired.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => window.dispatchEvent(new CustomEvent("jawa:open-lead-phone"))} className="inline-flex min-h-13 items-center rounded-2xl bg-emerald-300 px-7 text-sm font-black text-slate-950 transition hover:-translate-y-0.5">{primary}</button>
          <a href="mailto:hr@jawaedtech.com" className="inline-flex min-h-13 items-center rounded-2xl border border-emerald-200/20 bg-white/[0.08] px-7 text-sm font-black text-white transition hover:-translate-y-0.5">Book Free Career Consultation</a>
        </div>
      </div>
    </section>
  );
}

function FloatingActionPhone({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-5 right-5 z-40 flex h-16 w-16 items-center justify-center rounded-[1.35rem] border border-emerald-200/25 bg-[linear-gradient(145deg,rgba(3,10,7,0.96),rgba(0,0,0,0.92))] text-2xl text-emerald-200 shadow-[0_22px_70px_-26px_rgba(34,197,94,0.95)] ring-1 ring-white/10 transition hover:-translate-y-1 hover:text-white sm:h-auto sm:w-auto sm:gap-3 sm:px-5 sm:py-4 sm:text-sm sm:font-black"
      aria-label={label}
      title={label}
    >
      <FaPhoneAlt />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}

function LeadPhoneModal({ open, onClose, context }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (!open) return null;

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await saveExpertLead({
        source: context?.source || "premium_page_phone_request",
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        name: `${firstName} ${lastName}`.trim(),
        email: email.trim(),
        phone: phone.trim(),
        profile: goal,
        language: "English",
        program: context?.program || "",
      });
      setMessage("Your request is saved. Our team will contact you soon.");
      setGoal("");
    } catch (err) {
      setMessage(err.message || "Unable to save your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/72 px-4 py-6 backdrop-blur-xl">
      <button type="button" onClick={onClose} className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20" aria-label="Close phone form">×</button>
      <div className="phone-login-frame relative w-full max-w-[430px] overflow-hidden rounded-[3.1rem] border border-emerald-200/25 bg-[linear-gradient(145deg,rgba(3,10,7,0.98),rgba(0,0,0,0.96))] p-2.5 shadow-[0_38px_110px_-42px_rgba(34,197,94,0.95)] ring-1 ring-white/10">
        <div className="absolute left-1/2 top-4 z-20 h-2.5 w-24 -translate-x-1/2 rounded-full bg-black" />
        <div className="network-glass-panel relative min-h-[690px] overflow-hidden rounded-[2.65rem] px-5 pb-7 pt-12">
          <div className="relative z-10">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-200">{context?.subtitle || "Jawa EdTech"}</p>
            <h2 className="mt-3 text-3xl font-black leading-tight tracking-[-0.04em] text-white">{context?.title || "Talk To Our Expert"}</h2>
            <div className="mt-5 grid gap-2">
              {(context?.points || ["Personal guidance", "Career roadmap", "Next-step support"]).map((point) => (
                <span key={point} className="flex items-center gap-2 rounded-2xl border border-emerald-200/12 bg-white/[0.055] px-3 py-2 text-xs font-black text-emerald-50">
                  <FaCheck className="text-emerald-300" />
                  {point}
                </span>
              ))}
            </div>
            <form onSubmit={submit} className="mt-6 grid gap-3">
              <div className="grid grid-cols-2 gap-3">
                <input required value={firstName} onChange={(event) => setFirstName(event.target.value)} className={phoneInputClass} placeholder="First name" />
                <input value={lastName} onChange={(event) => setLastName(event.target.value)} className={phoneInputClass} placeholder="Last name" />
              </div>
              <input type="email" required value={email} onChange={(event) => setEmail(event.target.value)} className={phoneInputClass} placeholder="Email address" />
              <input type="tel" required value={phone} onChange={(event) => setPhone(event.target.value)} className={phoneInputClass} placeholder="+91 mobile number" />
              <select required value={goal} onChange={(event) => setGoal(event.target.value)} className={phoneInputClass}>
                <option value="">Choose your goal</option>
                <option>Apply for internship</option>
                <option>Start practice/project hub</option>
                <option>Placement assistance</option>
                <option>Mentorship session</option>
                <option>Career services consultation</option>
              </select>
              {message && <p className="rounded-xl border border-emerald-300/20 bg-emerald-400/10 px-3 py-2.5 text-xs font-bold text-emerald-100">{message}</p>}
              <button disabled={loading} className="mt-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-green-500 py-4 text-base font-black text-slate-950 shadow-xl shadow-emerald-400/25 transition hover:-translate-y-0.5 disabled:opacity-60">
                {loading ? "Saving..." : context?.button || "Submit Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const phoneInputClass = "w-full rounded-2xl border border-cyan-200/35 bg-white/[0.15] px-4 py-4 text-sm font-bold text-white outline-none shadow-inner shadow-cyan-950/20 transition placeholder:text-blue-100/70 focus:border-cyan-300/90 focus:bg-white/[0.2] focus:ring-4 focus:ring-cyan-300/24";

export { PremiumAboutEdtechPage, PremiumCareerPage, PremiumInternshipPage, PremiumProjectPage };

export const internshipPrograms = [
  {
    slug: "human-resource-internship",
    name: "Human Resource Internship Program",
    domain: "Human Resources",
    headline: "Gain Real Industry Experience Before You Graduate",
    description:
      "Work on real business tasks, industry workflows, live assignments, and practical projects under expert mentorship.",
    highlights: [
      "Real-Time Experience",
      "Industry Mentorship",
      "Internship Certificate",
      "Portfolio Building",
      "Placement Support",
    ],
    overview:
      "Internships matter because employers look for practical exposure, workplace confidence, and evidence that you can execute real responsibilities. Jawa EdTech internships focus on corporate exposure, guided implementation, weekly review, documentation, and portfolio-ready outcomes.",
    workCards: [
      {
        title: "Recruitment Activities",
        description: "Support end-to-end hiring workflows from requirements to candidate follow-up.",
        tasks: ["Job description review", "Candidate sourcing", "Resume screening", "Follow-up tracking"],
        deliverables: ["Candidate tracker", "Shortlist report", "Interview schedule"],
        skills: ["Recruitment", "Screening", "Stakeholder coordination"],
      },
      {
        title: "Employee Database Management",
        description: "Maintain structured employee records with accuracy and confidentiality.",
        tasks: ["Data entry", "Record validation", "HRMS updates", "Dashboard hygiene"],
        deliverables: ["Employee master sheet", "Data quality report"],
        skills: ["HRMS", "Excel", "Data accuracy"],
      },
      {
        title: "HR Documentation",
        description: "Prepare and organize core HR documents used in day-to-day operations.",
        tasks: ["Offer templates", "Joining forms", "Policy files", "Letter drafts"],
        deliverables: ["Document folder", "HR checklist"],
        skills: ["Documentation", "Compliance basics", "Professional writing"],
      },
      {
        title: "Payroll Support",
        description: "Assist payroll preparation through attendance, leave, and salary inputs.",
        tasks: ["Attendance check", "Leave reconciliation", "Payroll input review"],
        deliverables: ["Payroll support sheet", "Exception report"],
        skills: ["Payroll basics", "Excel formulas", "Reporting"],
      },
      {
        title: "Attendance Management",
        description: "Track attendance patterns and support leave management workflows.",
        tasks: ["Daily tracking", "Late mark review", "Leave updates"],
        deliverables: ["Attendance dashboard", "Monthly summary"],
        skills: ["HR operations", "Analysis", "Process discipline"],
      },
      {
        title: "Interview Coordination",
        description: "Coordinate candidates, panels, feedback, and hiring communication.",
        tasks: ["Calendar scheduling", "Candidate calls", "Panel updates", "Feedback collection"],
        deliverables: ["Interview tracker", "Feedback report"],
        skills: ["Communication", "Coordination", "Follow-up discipline"],
      },
    ],
    liveProject: {
      title: "HR Operations & Recruitment Workflow System",
      problem:
        "A growing business needs a clean process to track hiring, documentation, attendance, and payroll inputs without losing visibility.",
      role: "HR intern supporting recruitment operations, employee data, coordination, and reporting.",
      tools: ["Excel", "HRMS", "ATS", "Google Workspace", "LinkedIn Recruiter", "Slack"],
      outcomes: ["Recruitment tracker", "Employee database", "Attendance report", "Payroll support sheet"],
    },
    tools: ["Excel", "HRMS", "ATS", "LinkedIn Recruiter", "Google Workspace", "Slack", "Jira", "GitHub"],
  },
  {
    slug: "full-stack-internship",
    name: "Full Stack Development Internship Program",
    domain: "Technology",
    headline: "Build Real Product Features With Mentor Guidance",
    description:
      "Practice frontend, backend, APIs, databases, testing, and deployment through guided product-style assignments.",
    highlights: ["Live Projects", "Code Reviews", "Portfolio Assets", "Internship Certificate", "Placement Support"],
    overview:
      "Technology internships bridge the gap between learning syntax and shipping working software. Learners practice real development workflows, collaboration habits, debugging, documentation, and project delivery.",
    workCards: [
      {
        title: "Frontend UI Development",
        description: "Build responsive screens, components, forms, and reusable interface patterns.",
        tasks: ["Component building", "Responsive fixes", "State handling"],
        deliverables: ["UI screens", "Reusable components"],
        skills: ["React", "JavaScript", "Responsive design"],
      },
      {
        title: "Backend API Support",
        description: "Create API routes, validation, and structured service logic.",
        tasks: ["CRUD endpoints", "API testing", "Error handling"],
        deliverables: ["API collection", "Backend module"],
        skills: ["Node.js", "Express", "REST APIs"],
      },
      {
        title: "Database Workflows",
        description: "Model data and connect application features to persistent storage.",
        tasks: ["Schema planning", "Queries", "Data checks"],
        deliverables: ["Database schema", "Seed data"],
        skills: ["MongoDB", "SQL thinking", "Data modeling"],
      },
      {
        title: "Testing & Fixes",
        description: "Validate user flows, document defects, and fix issues systematically.",
        tasks: ["Bug logging", "Manual testing", "Regression checks"],
        deliverables: ["Bug report", "Test checklist"],
        skills: ["QA thinking", "Debugging", "Release readiness"],
      },
      {
        title: "Git Collaboration",
        description: "Use professional source-control habits for teamwork and review.",
        tasks: ["Branching", "Commits", "Pull requests"],
        deliverables: ["GitHub repository", "Change notes"],
        skills: ["Git", "GitHub", "Collaboration"],
      },
      {
        title: "Deployment Practice",
        description: "Prepare projects for hosting and production-style delivery.",
        tasks: ["Build checks", "Env setup", "Deployment notes"],
        deliverables: ["Live project URL", "Deployment guide"],
        skills: ["Cloud basics", "CI/CD awareness", "Documentation"],
      },
    ],
    liveProject: {
      title: "Learning Management System Module",
      problem: "An education platform needs course, enrollment, assessment, and certificate workflows.",
      role: "Full stack intern building modules, APIs, UI screens, and documentation.",
      tools: ["React", "Node.js", "MongoDB", "GitHub", "Postman", "Vercel"],
      outcomes: ["Working LMS module", "Source code", "API docs", "Portfolio case study"],
    },
    tools: ["React", "Node.js", "MongoDB", "GitHub", "Postman", "Slack", "Jira", "Vercel"],
  },
];

export const defaultInternship = internshipPrograms[0];

[
  ["recruitment-internship", "Recruitment & Talent Acquisition Internship Program", "Recruitment & Talent Acquisition", "LinkedIn Sourcing Campaign"],
  ["python-internship", "Python Development Internship Program", "Python Development", "Business Automation Tool"],
  ["ai-ml-internship", "Artificial Intelligence & Machine Learning Internship Program", "Artificial Intelligence", "AI Prediction & Chatbot Workflow"],
  ["devops-internship", "DevOps Engineering Internship Program", "DevOps", "CI/CD Deployment Workflow"],
  ["software-testing-internship", "Software Testing & QA Internship Program", "Software Testing", "QA Test Execution & Defect Dashboard"],
  ["mulesoft-internship", "MuleSoft Development Internship Program", "MuleSoft", "Enterprise API Integration Flow"],
].forEach(([slug, name, domain, projectTitle]) => {
  internshipPrograms.push({
    ...internshipPrograms[1],
    slug,
    name,
    domain,
    liveProject: {
      ...internshipPrograms[1].liveProject,
      title: projectTitle,
      role: `${domain} intern supporting real workflows, documentation, implementation, review, and portfolio-ready delivery.`,
    },
  });
});

export const industryProjects = [
  {
    slug: "industry-project-lab",
    name: "Industry Project Lab",
    problem: "Learners need proof of real implementation experience before interviews.",
    domain: "HR, Software, AI, QA, DevOps, MuleSoft",
    duration: "4 to 6 Weeks",
    difficulty: "Beginner to Advanced",
    overview:
      "Jawa Practice Labs help learners build industry-standard projects guided by mentors. Projects convert classroom learning into business outcomes, technical deliverables, reports, presentations, and portfolio-ready assets.",
    objective:
      "Solve practical business use cases through structured analysis, design, development, testing, and delivery.",
    impact:
      "Projects improve job readiness, interview storytelling, practical confidence, and portfolio credibility.",
    technologies: ["Excel", "React", "Node.js", "Python", "MongoDB", "Selenium", "Docker", "MuleSoft", "Power BI"],
  },
];

export const careerPages = {
  placement: {
    eyebrow: "Placement Acceleration Center",
    title: "Get Career Ready & Get Hired",
    headline: "95% Career Readiness Programs. 300+ Hiring Opportunities.",
    description:
      "Our placement support framework helps students prepare for competitive hiring processes through resume support, interview training, profile optimization, referrals, and career mentorship.",
    stats: [
      ["95%", "Career Readiness Programs"],
      ["300+", "Hiring Opportunities"],
      ["5000+", "Learners Trained"],
      ["1000+", "Internship Opportunities"],
    ],
    journey: ["Learn", "Practice", "Intern", "Build", "Prepare", "Get Hired"],
    receives: [
      "Resume Building",
      "LinkedIn Optimization",
      "Mock Interviews",
      "HR Interviews",
      "Technical Interviews",
      "Portfolio Review",
      "Career Counseling",
      "Job Referrals",
    ],
    rounds: ["Technical Round", "HR Round", "Managerial Round", "Communication Round"],
    resumeLab: ["ATS Friendly Resume", "Industry Templates", "Personal Branding"],
    finalCta: "Launch Your Career Today",
  },
  mentorship: {
    eyebrow: "Industry Mentorship",
    title: "Learn Directly From Industry Experts",
    headline: "100+ Industry Mentors Guiding Your Career Roadmap",
    description:
      "Connect with professionals for career guidance, project support, interview preparation, industry insights, skill development, and networking.",
    stats: [
      ["100+", "Industry Mentors"],
      ["1:1", "Personal Guidance"],
      ["Weekly", "Progress Reviews"],
      ["Career", "Roadmap Support"],
    ],
    benefits: [
      "Career Guidance",
      "Project Support",
      "Interview Preparation",
      "Industry Insights",
      "Skill Development",
      "Networking",
    ],
    mentors: [
      ["Ananya R.", "HR Business Partner", "9+ Years", "HR operations, payroll, employee engagement"],
      ["Vikram S.", "Full Stack Architect", "11+ Years", "MERN, APIs, cloud deployment"],
      ["Meera K.", "AI Consultant", "8+ Years", "ML projects, GenAI workflows, analytics"],
      ["Arjun P.", "QA Lead", "10+ Years", "Manual testing, Selenium, Agile QA"],
    ],
    process: ["Book Session", "Assessment", "Roadmap", "Guidance", "Progress Review", "Career Support"],
    finalCta: "Connect With A Mentor",
  },
  careerServices: {
    eyebrow: "Career Services",
    title: "Everything You Need To Build A Successful Career",
    headline: "From Skill Clarity To Interview Confidence",
    description:
      "Jawa EdTech combines counseling, resume building, portfolio development, LinkedIn optimization, mock interviews, job search strategy, personal branding, and salary negotiation support.",
    stats: [
      ["5000+", "Learners"],
      ["100+", "Mentors"],
      ["300+", "Opportunities"],
      ["95%", "Readiness"],
    ],
    services: [
      "Career Counseling",
      "Resume Building",
      "Portfolio Development",
      "LinkedIn Optimization",
      "Mock Interviews",
      "Job Search Strategy",
      "Personal Branding",
      "Salary Negotiation",
    ],
    roadmap: ["Discover", "Learn", "Practice", "Intern", "Prepare", "Get Hired"],
    finalCta: "Start Your Career Transformation",
  },
};

export const aboutEdtechPage = {
  eyebrow: "About Jawa EdTech",
  title: "India's Career Transformation Platform",
  headline: "Learn. Practice. Intern. Build. Prepare. Get Hired.",
  description:
    "Jawa EdTech helps students, graduates, job seekers, and working professionals gain practical skills, real-world experience, mentorship, internships, live projects, and placement support through one career-focused ecosystem.",
  stats: [
    ["5000+", "Learners Empowered"],
    ["100+", "Industry Mentors"],
    ["300+", "Hiring Opportunities"],
    ["95%", "Career Readiness"],
  ],
  ecosystem: ["Learn", "Practice", "Intern", "Build", "Prepare", "Get Hired"],
  why: [
    "Industry-Oriented Curriculum",
    "Internship Integrated Programs",
    "Practical Project-Based Learning",
    "Expert Industry Mentors",
    "Placement Readiness Programs",
    "Affordable Career Growth Solutions",
  ],
  contact: [
    "hr@jawaedtech.com",
    "+91 97906 31286",
    "Jawa Incubation Centre, Saibaba Colony, Coimbatore",
  ],
};

export const commonFaqs = [
  ["Who can join?", "Students, graduates, job seekers, freshers, and working professionals can join based on their career goal."],
  ["Is this practical?", "Yes. Jawa EdTech focuses on assignments, live projects, internships, mentorship, and portfolio-ready deliverables."],
  ["Will I receive certification?", "Yes. Eligible learners receive professional certificates after successful completion and review."],
  ["Is mentor support available?", "Yes. Learners receive guidance from industry mentors and career support teams."],
  ["Do I get placement support?", "Yes. Placement assistance includes resume support, mock interviews, career counseling, and hiring opportunity guidance."],
  ["Are projects included?", "Yes. Project-based learning is a core part of the platform and helps learners demonstrate real work."],
  ["Can freshers apply?", "Yes. The pathways are designed for freshers and career starters as well as career switchers."],
  ["Will this help my resume?", "Yes. Internships, projects, certification, and portfolio assets make your profile stronger for interviews."],
  ["How do I start?", "Use the page CTA to apply, talk to a mentor, or book career counseling."],
  ["Is the program online or offline?", "Batch format and schedules can vary. The counseling team can guide you with the current options."],
];

export const BRAND = {
  name: "Jawa EdTech",
  tagline:
    "Transform Your Career with Industry-Focused HR & Technology Programs",
  motto: "Learn. Practice. Intern. Build. Get Hired.",
  description:
    "Jawa EdTech provides training, internships, real projects, mentorship, and placement support for HR and technology careers.",
  email: "hr@jawaedtech.com",
  phone: "+91 9790631286",
  website: "www.Jawaedtech.com",
  address:
    "Jawa Incubation Centre, 54, Bharathi Park 7th Cross Rd, near ICICI Bank, Saibaba Colony, Coimbatore, Tamil Nadu 641043",
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Programs", href: "#programs" },
  { label: "Learning Ecosystem", href: "#ecosystem" },
  { label: "Projects", href: "#projects" },
  { label: "Placements", href: "#placements" },
  { label: "About Us", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const STATS = [
  { value: "5000+", label: "Learners" },
  { value: "100+", label: "Industry Mentors" },
  { value: "300+", label: "Hiring Opportunities" },
  { value: "95%", label: "Career Readiness" },
];

export const HERO = {
  badge: "Career Transformation Platform",
  title: "Transform Your Career with Industry-Focused HR & Technology Programs",
  subtitle: "Learn. Practice. Intern. Build. Get Hired.",
  description:
    "Training, internships, real projects, mentorship, and placement support — everything you need to launch your HR or tech career.",
  pillars: [
    "Training",
    "Internships",
    "Projects",
    "Mentorship",
    "Placement Support",
  ],
  ctaPrimary: "Get Free Career Counseling",
  ctaSecondary: "Explore Programs",
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop",
};

export const CAREER_ROADMAP = [
  { id: "hr", label: "HR Career", icon: "users" },
  { id: "ta", label: "Talent Acquisition", icon: "search" },
  { id: "fullstack", label: "Full Stack", icon: "code" },
  { id: "python", label: "Python", icon: "python" },
  { id: "aiml", label: "AI & ML", icon: "brain" },
];

export const ECOSYSTEM = {
  title: "Learning Ecosystem",
  subtitle: "Your Complete Career Journey — In One Platform",
  description:
    "From first lesson to first offer letter — every step is designed, guided, and supported.",
  steps: [
    {
      step: "Learn",
      desc: "Master industry-relevant skills through structured, expert-led programs.",
      icon: "book",
    },
    {
      step: "Practice",
      desc: "Apply knowledge through assignments, labs, and hands-on exercises.",
      icon: "laptop",
    },
    {
      step: "Intern",
      desc: "Gain real workplace experience through guided internship programs.",
      icon: "briefcase",
    },
    {
      step: "Build",
      desc: "Create portfolio-ready projects that impress recruiters.",
      icon: "folder",
    },
    {
      step: "Prepare",
      desc: "Resume building, mock interviews, and interview readiness training.",
      icon: "user",
    },
    {
      step: "Get Hired",
      desc: "Connect with 300+ hiring partners and land your dream role.",
      icon: "rocket",
    },
  ],
};

export const FEATURED_PROGRAMS = [
  {
    id: "hr-executive",
    slug: "hr-executive",
    title: "Human Resource Executive Program",
    tag: "HR",
    desc: "Become an industry-ready HR professional with end-to-end HR operations expertise.",
    skills: [
      "HR Fundamentals",
      "Recruitment Basics",
      "Payroll Processing",
      "HR Operations",
      "Labour Law",
      "HRMS",
    ],
    duration: "4–6 Months",
    projects: 5,
    internship: true,
    placement: true,
    careers: ["HR Executive", "HR Coordinator", "HR Operations"],
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    modules: [
      "HR Fundamentals",
      "Recruitment & Selection",
      "Payroll Processing",
      "HR Operations",
      "Labour Law",
      "HR Analytics",
      "HRMS",
      "Employee Engagement",
    ],
  },
  {
    id: "talent-acquisition",
    slug: "talent-acquisition",
    title: "Recruitment & Talent Acquisition",
    tag: "HR",
    desc: "Master end-to-end hiring — sourcing, screening, interviewing, and onboarding.",
    skills: [
      "LinkedIn Sourcing",
      "Boolean Search",
      "ATS Tools",
      "Interview Techniques",
      "Offer Management",
    ],
    duration: "3–4 Months",
    projects: 4,
    internship: true,
    placement: true,
    careers: ["TA Specialist", "Technical Recruiter", "Sourcing Lead"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    modules: [
      "Recruitment Fundamentals",
      "Sourcing Strategies",
      "Boolean & LinkedIn Search",
      "ATS & CRM Tools",
      "Interview Coordination",
      "Offer & Onboarding",
      "Employer Branding",
      "Recruitment Analytics",
    ],
  },
  {
    id: "full-stack",
    slug: "full-stack",
    title: "Full Stack Development",
    tag: "Tech",
    desc: "Build modern web applications with MERN/MEAN stack and deploy to production.",
    skills: ["HTML/CSS/JS", "React", "Node.js", "MongoDB", "REST APIs", "Git"],
    duration: "6–8 Months",
    projects: 8,
    internship: true,
    placement: true,
    careers: ["Full Stack Developer", "Front-End Dev", "Back-End Dev"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    modules: [
      "Web Fundamentals",
      "JavaScript & ES6+",
      "React.js",
      "Node.js & Express",
      "MongoDB & Database Design",
      "REST APIs & Authentication",
      "DevOps Basics",
      "Capstone Project",
    ],
  },
  {
    id: "python",
    slug: "python",
    title: "Python Development",
    tag: "Tech",
    desc: "From programming fundamentals to Django, APIs, and automation.",
    skills: [
      "Python Core",
      "OOP",
      "Django",
      "APIs",
      "Automation",
      "Data Handling",
    ],
    duration: "4–6 Months",
    projects: 6,
    internship: true,
    placement: true,
    careers: ["Python Developer", "Backend Developer", "Automation Engineer"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop",
    modules: [
      "Python Fundamentals",
      "Object-Oriented Programming",
      "Data Structures",
      "Web Development with Django",
      "REST APIs",
      "Automation & Scripting",
      "Database Integration",
      "Final Project",
    ],
  },
  {
    id: "ai-ml",
    slug: "ai-ml",
    title: "Artificial Intelligence & Machine Learning",
    tag: "Tech",
    desc: "ML, deep learning, NLP, computer vision, and generative AI applications.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "Gen AI",
      "Python",
    ],
    duration: "6–8 Months",
    projects: 7,
    internship: true,
    placement: true,
    careers: ["AI Engineer", "ML Engineer", "Data Scientist"],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    modules: [
      "Python for AI/ML",
      "Statistics & Probability",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Generative AI",
      "Capstone AI Project",
    ],
  },
];

export const PROGRAMS = FEATURED_PROGRAMS;

export const CAREER_PATH_STEPS = [
  "Learn",
  "Practice",
  "Project",
  "Internship",
  "Interview",
  "Placement",
];

export const PROJECTS = [
  {
    title: "HR Management System",
    category: "HR",
    desc: "End-to-end employee lifecycle management platform.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Recruitment Dashboard",
    category: "HR",
    desc: "Real-time hiring pipeline and candidate tracking.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Employee Management System",
    category: "HR",
    desc: "Attendance, leave, and performance management.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "CRM Platform",
    category: "Tech",
    desc: "Customer relationship management with analytics.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "LMS Platform",
    category: "Tech",
    desc: "Learning management system with course tracking.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Inventory Management",
    category: "Tech",
    desc: "Stock tracking and warehouse management system.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    category: "Tech",
    desc: "Full-featured online store with payment integration.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
];

export const WHY_JAWA = [
  {
    title: "Industry Curriculum",
    desc: "Programs designed with hiring partners and industry experts.",
    icon: "curriculum",
  },
  {
    title: "Internship Opportunities",
    desc: "Real workplace experience integrated into every program.",
    icon: "internship",
  },
  {
    title: "Real Projects",
    desc: "Build portfolio-ready applications, not just assignments.",
    icon: "projects",
  },
  {
    title: "Placement Assistance",
    desc: "300+ hiring connections and dedicated placement support.",
    icon: "placement",
  },
  {
    title: "Industry Mentors",
    desc: "100+ mentors from top companies guide your journey.",
    icon: "mentors",
  },
  {
    title: "Certification",
    desc: "Industry-recognized certificates upon program completion.",
    icon: "cert",
  },
  {
    title: "Career Coaching",
    desc: "Personalized guidance for career planning and growth.",
    icon: "coaching",
  },
  {
    title: "Mock Interviews",
    desc: "Technical and HR interview prep with expert feedback.",
    icon: "interview",
  },
];

export const PLACEMENT_ROADMAP = {
  title: "From Enrollment to Employment",
  subtitle: "Your Placement Journey — Step by Step",
  stats: [
    { value: "500+", label: "Career Transitions" },
    { value: "300+", label: "Hiring Partners" },
    { value: "92%", label: "Interview Readiness" },
    { value: "48h", label: "Avg. Expert Callback" },
  ],
  steps: [
    { step: "Enrollment", desc: "Choose your program and start your journey." },
    { step: "Learning", desc: "Structured training with expert instructors." },
    { step: "Projects", desc: "Build real-world portfolio projects." },
    { step: "Internship", desc: "Gain professional workplace experience." },
    { step: "Resume Building", desc: "ATS-optimized resume and LinkedIn profile." },
    { step: "Mock Interviews", desc: "Technical and HR interview preparation." },
    { step: "Placement Support", desc: "Dedicated placement team assistance." },
    { step: "Hiring Opportunities", desc: "Connect with 300+ partner companies." },
  ],
};

export const PLACEMENT = {
  title: "Placement Acceleration Center",
  subtitle: "Your Career Success Is Our Mission",
  items: [
    "Resume Building & ATS Optimization",
    "LinkedIn Profile Optimization",
    "Mock Interviews",
    "Technical & HR Interview Prep",
    "Communication Training",
    "Career Mentorship",
    "Placement Assistance",
  ],
};

export const TESTIMONIALS = [
  {
    name: "Priya S.",
    role: "HR Executive",
    company: "TechCorp India",
    program: "Human Resource Executive Program",
    review:
      "The HR program helped me understand recruitment, payroll, and compliance through real scenarios. I secured my first HR Executive role within two months.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop&crop=face",
    video: false,
  },
  {
    name: "Aravind Kumar",
    role: "Talent Acquisition Specialist",
    company: "Infosys",
    program: "Recruitment & Talent Acquisition",
    review:
      "LinkedIn sourcing, Boolean search, and ATS training made me industry-ready. Practical assignments and mock interviews were incredibly valuable.",
    photo:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop&crop=face",
    video: true,
  },
  {
    name: "Kavya R.",
    role: "Full Stack Developer",
    company: "Zoho",
    program: "Full Stack Development",
    review:
      "Every module was practical and project-oriented. I built a portfolio that impressed recruiters. Trainers were highly supportive throughout.",
    photo:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop&crop=face",
    video: true,
  },
  {
    name: "Nivetha M.",
    role: "AI & ML Engineer",
    company: "TCS",
    program: "Artificial Intelligence & Machine Learning",
    review:
      "Structured path covering ML, deep learning, NLP, and Generative AI. Projects and mentorship were outstanding.",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop&crop=face",
    video: false,
  },
  {
    name: "Vignesh S.",
    role: "QA Engineer",
    company: "Wipro",
    program: "Software Testing & QA",
    review:
      "Highly practical—from manual testing to automation basics. Real-world examples and industry methodologies throughout.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop&crop=face",
    video: true,
  },
];

export const HIRING_PARTNERS = [
  "Infosys",
  "TCS",
  "Wipro",
  "Zoho",
  "Freshworks",
  "Cognizant",
  "HCL",
  "Accenture",
  "Capgemini",
  "Tech Mahindra",
  "LTI Mindtree",
  "Mphasis",
];

export const PRACTICE_LABS = [
  {
    title: "HR Practice Hub",
    desc: "Practice recruitment, payroll, employee management & HR documentation.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Coding Practice Hub",
    desc: "Solve coding challenges and strengthen programming concepts.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Project Lab",
    desc: "Build industry-standard projects guided by mentors.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Interview Preparation Hub",
    desc: "Practice technical and HR interviews with expert feedback.",
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200&auto=format&fit=crop",
  },
];

export const INTERNSHIP = {
  title: "Internship Hub",
  subtitle: "Learn Like a Professional. Work Like a Professional.",
  description:
    "Real-world implementation, mentorship, and professional development—not just traditional internships.",
  domains: [
    "Human Resources",
    "Recruitment & Talent Acquisition",
    "Full Stack Development",
    "Python Development",
    "Artificial Intelligence",
    "Machine Learning",
  ],
  benefits: [
    "Industry Projects",
    "Professional Mentorship",
    "Weekly Performance Reviews",
    "Internship Certification",
    "Portfolio Development",
    "Placement Preparation",
  ],
};

export const SUCCESS_STORIES = [
  {
    before: "Graduate",
    after: "HR Executive",
    title: "From Graduate to HR Executive",
  },
  {
    before: "Non-IT Professional",
    after: "Full Stack Developer",
    title: "From Non-IT to Developer",
  },
  {
    before: "Fresher",
    after: "AI Professional",
    title: "From Fresher to AI Professional",
  },
  {
    before: "Learner",
    after: "Industry Professional",
    title: "From Learner to Professional",
  },
];

export const ABOUT = {
  title: "About Jawa EdTech",
  description:
    "We help students, graduates, job seekers, and working professionals gain practical skills, real-world experience, and career opportunities. Whether you aspire to become an HR Professional, Full Stack Developer, Python Developer, or AI Engineer — Jawa EdTech provides the complete roadmap.",
  highlights: [
    "5000+ Students Trained",
    "1000+ Internship Opportunities",
    "500+ Career Transitions",
    "300+ Hiring Connections",
  ],
};

export const CORPORATE = {
  title: "Corporate Solutions",
  subtitle: "Empowering Organizations Through Talent Development",
  services: [
    {
      title: "Corporate Training",
      desc: "Upskill employees with customized learning programs.",
    },
    {
      title: "Recruitment Solutions",
      desc: "Access trained and job-ready talent.",
    },
    {
      title: "Internship Partnerships",
      desc: "Collaborate with emerging professionals.",
    },
    {
      title: "Campus Hiring Support",
      desc: "Connect with skilled graduates.",
    },
  ],
};

export const CTA_FINAL = {
  title: "Ready to Transform Your Career?",
  description:
    "Your dream career begins with the right skills, practical experience, and professional guidance. Join Jawa EdTech today.",
  button: "Get Free Career Consultation",
  footer: "Jawa EdTech – Transforming Learners into Professionals.",
};

export const SEO = {
  title: "Jawa EdTech | Career Transformation Platform — HR & Tech Programs",
  description:
    "Transform your career with Jawa EdTech. Industry-focused HR training, Full Stack, Python, AI/ML programs with internships, real projects, and placement assistance.",
  keywords:
    "HR Training, HR Executive Program, Recruitment Training, Talent Acquisition Program, Full Stack Development Course, Python Development Training, AI and Machine Learning Program, Internship Programs, Placement Assistance, Career Transformation Platform",
  ogImage:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
};

/** Build search index from all content */
export function buildSearchIndex() {
  const items = [];

  FEATURED_PROGRAMS.forEach((p) => {
    items.push({
      type: "Program",
      title: p.title,
      desc: p.desc,
      href: "#programs",
      keywords: [p.tag, ...p.skills, ...p.careers].join(" "),
    });
    p.modules.forEach((m) => {
      items.push({
        type: "Module",
        title: m,
        desc: `Part of ${p.title}`,
        href: "#programs",
        keywords: `${m} ${p.title}`,
      });
    });
  });

  PROJECTS.forEach((p) => {
    items.push({
      type: "Project",
      title: p.title,
      desc: p.desc,
      href: "#projects",
      keywords: `${p.title} ${p.category}`,
    });
  });

  FEATURED_PROGRAMS.forEach((p) => {
    p.careers.forEach((c) => {
      items.push({
        type: "Career Role",
        title: c,
        desc: `Career path via ${p.title}`,
        href: "#programs",
        keywords: c,
      });
    });
  });

  [
    { title: "Career Counseling", desc: "Free 1-on-1 expert guidance", href: "#contact" },
    { title: "Internship Programs", desc: "Real workplace experience", href: "#ecosystem" },
    { title: "Placement Support", desc: "300+ hiring partners", href: "#placements" },
    { title: "Mock Interviews", desc: "Interview preparation", href: "#placements" },
  ].forEach((r) =>
    items.push({ type: "Resource", ...r, keywords: r.title })
  );

  return items;
}

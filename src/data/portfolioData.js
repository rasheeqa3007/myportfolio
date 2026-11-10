/**
 * RASHEEQA SABREEN Z — PORTFOLIO DATA
 * Centralized, verifiable data source for all sections.
 */

export const personalData = {
  name: "Rasheeqa Sabreen Z",
  title: "AI & Data Science Student | Web Developer",
  shortTitle: "AI & Data Science Student & Web Developer",
  email: "rasheeqasabreen07@gmail.com",
  linkedin: "https://www.linkedin.com/in/rasheeqa-sabreen-z/",
  github: "https://github.com/rasheeqa3007",
  location: "Puducherry / India",
  portraitUrl: `${import.meta.env.BASE_URL}assets/images/rasheeqa-portrait.png`,
  resumeUrl: `${import.meta.env.BASE_URL}assets/docs/rasheeqa-resume.pdf`,
  heroIntroduction:
    "Exploring the intersection of artificial intelligence, web development and creative technology to build meaningful digital experiences.",
  aboutIntroduction:
    "I am an aspiring Artificial Intelligence and Data Science student with internship experience in front-end development and web development. I have a foundation in programming and enjoy learning new technologies, solving problems and exploring creative ways to build digital solutions.",
  roles: [
    "AI & Data Science Student",
    "Frontend & Web Developer",
    "Creative Technologist",
    "Problem Solver & Learner",
  ],
  interests: [
    {
      id: "ai",
      title: "Artificial Intelligence",
      icon: "Cpu",
      description:
        "Deeply curious about neural networks, machine learning algorithms, and intelligent human-centric systems.",
      badge: "Core Focus",
    },
    {
      id: "web",
      title: "Technology & Web Ecosystems",
      icon: "Code2",
      description:
        "Building modern, reactive web architectures, modular components, and responsive digital interfaces.",
      badge: "Development",
    },
    {
      id: "creative",
      title: "Creativity & UI/UX Design",
      icon: "Sparkles",
      description:
        "Translating complex logic into intuitive user experiences, glassmorphic visuals, and fluid digital aesthetics.",
      badge: "Design",
    },
    {
      id: "music",
      title: "Music & Rhythmic Harmony",
      icon: "Music",
      description:
        "Finding inspiration in acoustics and rhythm, bringing structured harmony and focus to coding workflows.",
      badge: "Inspiration",
    },
  ],
  careerAspiration:
    "Dedicated to engineering intelligent, accessible web platforms and AI-driven systems that solve real-world problems with elegance and efficiency.",
};

export const educationData = [
  {
    degree: "B.Tech in Artificial Intelligence and Data Science",
    institution: "Achariya College of Engineering and Technology",
    period: "2023 – 2027",
    status: "Pursuing",
    grade: "CGPA: 8.5",
    type: "Undergraduate Degree",
    description:
      "Core curriculum covering Artificial Intelligence principles, Machine Learning, Data Structures & Algorithms, Database Management Systems, Object-Oriented Programming, and Web Development.",
    highlights: [
      "Current CGPA: 8.5",
      "Specialization in AI & Data Science algorithms",
      "Hands-on technical laboratory projects & embedded computing",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Immaculate Heart of Mary Girls Higher Secondary School",
    period: "2022 – 2023",
    status: "Completed",
    grade: "Percentage: 76%",
    type: "Higher Secondary",
    description:
      "Completed secondary education with focused coursework in Mathematics, Computer Science, and Physical Sciences, building a solid analytical foundation.",
    highlights: [
      "Academic Score: 76%",
      "Strong foundation in Mathematics & Computer Science",
      "Active participant in science and computing exhibitions",
    ],
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    institution: "Immaculate Heart of Mary Girls Higher Secondary School",
    period: "2020 – 2021",
    status: "Completed",
    grade: "Result: Pass",
    type: "Secondary School",
    description:
      "Completed foundational schooling covering core disciplines in General Sciences, Mathematics, and Languages.",
    highlights: [
      "Completed secondary curriculum",
      "Early engagement with basic computer applications & logical reasoning",
    ],
  },
];

export const skillsCategories = [
  {
    id: "programming",
    name: "Programming Languages",
    icon: "Terminal",
    skills: [
      { name: "Python", icon: "FileCode", tag: "Core AI / Data", note: "Scripting, NLP & Automation" },
      { name: "Java", icon: "Coffee", tag: "OOP & Systems", note: "Object-Oriented Design & Logic" },
      { name: "C++", icon: "Binary", tag: "Algorithms", note: "System Foundations & Structures" },
      { name: "SQL", icon: "Database", tag: "Databases", note: "Relational Queries & Schemas" },
    ],
  },
  {
    id: "web",
    name: "Web Development",
    icon: "Layout",
    skills: [
      { name: "HTML", icon: "Code", tag: "Semantic Markup", note: "Accessible Web Structure" },
      { name: "CSS", icon: "Palette", tag: "Modern Styling", note: "Flexbox, Grid & Responsive UI" },
      { name: "JavaScript", icon: "Zap", tag: "Client Scripting", note: "DOM, ES6+ & Interactivity" },
      { name: "Spring Boot", icon: "Layers", tag: "Backend Framework", note: "Java Enterprise Architecture" },
    ],
  },
  {
    id: "tools",
    name: "Tools and Technologies",
    icon: "Wrench",
    skills: [
      { name: "UiPath RPA", icon: "Bot", tag: "Automation", note: "Robotic Process Automation" },
      { name: "Figma", icon: "PenTool", tag: "UI / UX", note: "Prototyping & Interface Design" },
      { name: "Canva", icon: "Image", tag: "Visuals", note: "Graphic & Digital Branding" },
      { name: "Stitch", icon: "Boxes", tag: "Workflow", note: "Creative Toolchain & Prototyping" },
    ],
  },
];

export const projectsData = [
  {
    id: "ai-voice-assistant",
    title: "AI Voice Assistant",
    category: "Artificial Intelligence",
    tagline: "Intelligent Multilingual Speech Recognition & Conversational Agent",
    shortDescription:
      "Developed an AI-powered voice assistant that understands voice commands and provides multilingual responses using speech recognition and natural language processing.",
    technologies: ["Python", "Speech Recognition", "NLP", "Multilingual Support", "Audio Synthesis"],
    image: `${import.meta.env.BASE_URL}assets/images/project-voice.svg`,
    github: "https://github.com/rasheeqa3007",
    featured: true,
    overview:
      "An intelligent conversational interface built in Python that captures acoustic audio input, converts speech to structured intent via natural language processing, and synthesizes accurate spoken responses across multiple languages.",
    problemStatement:
      "Standard voice interfaces are frequently restricted to single languages or require persistent internet access, creating usability barriers for non-native English speakers.",
    approach:
      "Implemented a modular audio pipeline integrating speech recognition libraries with phonetic parsing and a multi-lingual text-to-speech synthesizer. Designed configurable intent handlers for desktop navigation, inquiries, and voice feedback.",
    technologiesUsed: [
      "Python 3",
      "SpeechRecognition Engine",
      "Text-to-Speech (gTTS / pyttsx3)",
      "Natural Language Parsing",
      "Audio Device I/O Handling",
    ],
    outcomes:
      "Achieved responsive speech-to-intent conversion with multilingual feedback, proving effective voice-command execution in real time.",
  },
  {
    id: "library-management-java",
    title: "Library Management Using Java",
    category: "Software Engineering",
    tagline: "Object-Oriented Academic Records & Circulation System",
    shortDescription:
      "Developed a Java-based Library Management System to manage books, student records, issue/return transactions, and library operations.",
    technologies: ["Java", "OOP", "Data Structures", "Transaction Management", "File I/O"],
    image: `${import.meta.env.BASE_URL}assets/images/project-library.svg`,
    github: "https://github.com/rasheeqa3007",
    featured: true,
    overview:
      "A comprehensive software solution designed to automate campus library cataloging, student membership records, book circulation, and transaction timestamps.",
    problemStatement:
      "Manual library logging creates administrative overhead, misplaced asset records, and inaccurate penalty calculations for overdue materials.",
    approach:
      "Structured the system using core Object-Oriented Programming (OOP) paradigms — modular class hierarchies for Books, Students, and Transactions. Implemented data persistence algorithms and search indexing for immediate title and author lookup.",
    technologiesUsed: [
      "Java (Core SE)",
      "Object-Oriented Architecture (OOP)",
      "Collections Framework & File Persistence",
      "Input Validation & Exception Handling",
    ],
    outcomes:
      "Eliminated manual ledger errors, enabled instant book lookup and student transaction tracking, and ensured data consistency across all operations.",
  },
  {
    id: "peek-a-boo-vc02",
    title: "Peek-a-Boo Using VC02 AI Thinker Board",
    category: "Embedded & Edge AI",
    tagline: "Offline Edge AI Voice Recognition on Embedded Microcontroller",
    shortDescription:
      "Developed an offline voice assistant using the VC02 AI Thinker module to recognize voice commands and provide multilingual responses without an internet connection.",
    technologies: ["VC02 AI Thinker Board", "Embedded AI", "Voice Commands", "Offline NLP", "Microcontroller"],
    image: `${import.meta.env.BASE_URL}assets/images/project-peekaboo.svg`,
    
    featured: true,
    overview:
      "A low-latency, privacy-preserving voice assistant engineered directly on the VC02 AI Thinker embedded hardware module, capable of offline keyword recognition and voice response without requiring cloud connectivity.",
    problemStatement:
      "Cloud-based voice systems suffer from network latency, continuous bandwidth consumption, and data privacy vulnerabilities in secure or remote environments.",
    approach:
      "Programmed and fine-tuned offline acoustic speech models directly onto the VC02 board's onboard neural voice processing DSP. Configured custom wake-words and multilingual audio prompts stored in local flash memory.",
    technologiesUsed: [
      "VC02 AI Thinker Module",
      "Embedded C / Microcontroller Toolchain",
      "On-device Neural Acoustic DSP",
      "Hardware Audio Output & Microphones",
    ],
    outcomes:
      "Delivered instant, sub-second speech recognition with zero internet dependency, total local data privacy, and minimal power consumption.",
  },
  {
    id: "ai-resume-screening",
    title: "AI Resume Screening System",
    category: "Artificial Intelligence",
    tagline: "Intelligent Candidate Profile & Skill Keyword Parsing",
    shortDescription:
      "Engineered an automated resume screening and candidate qualification analyzer utilizing NLP algorithms to match applicant profiles with job specifications.",
    technologies: ["Python", "NLP", "Text Processing", "Skill Extraction"],
    image: `${import.meta.env.BASE_URL}assets/images/project-resume.svg`,
    github: "https://github.com/rasheeqa3007",
    featured: false,
    overview:
      "An automated tool designed to ingest unstructured resume documents, extract technical skills and credentials, and calculate compatibility with target job descriptions.",
    problemStatement:
      "Recruiters receive hundreds of resumes per posting, making manual evaluation time-consuming and subjective.",
    approach:
      "Developed text parsing pipelines to normalize candidate documents, identify key skill entities using NLP pattern matching, and generate objective match scores.",
    technologiesUsed: ["Python", "NLTK / Regex NLP", "Document Parsing", "Scoring Metrics"],
    outcomes:
      "Accelerated candidate profile evaluation with transparent, objective skill-matching outputs.",
  },
  {
    id: "digital-cert-verification",
    title: "Digital Certificate Verification",
    category: "Web & Security",
    tagline: "Cryptographic & Authenticated Credential Validation",
    shortDescription:
      "Developed a digital certificate verification application enabling institutions to validate authentic credentials and prevent fraudulent claims.",
    technologies: ["Web Technologies", "JavaScript", "Security Verification", "Authentication"],
    image: `${import.meta.env.BASE_URL}assets/images/project-cert.svg`,
    github: "https://github.com/rasheeqa3007",
    featured: false,
    overview:
      "A verification portal providing instant authenticity checks for academic and professional certificates through unique credential keys.",
    problemStatement:
      "Credential fraud undermines academic and professional trust without a rapid, decentralized validation mechanism.",
    approach:
      "Designed a clean interface where verifiers input unique credential codes to match against verified institutional records.",
    technologiesUsed: ["HTML5 / CSS3", "JavaScript", "Credential Validation API", "Responsive UI"],
    outcomes:
      "Provided an intuitive interface for real-time certificate authentication.",
  },
];

export const experienceData = [
  {
    role: "Java Intern",
    company: "Twilight IT Solutions",
    period: "January 2026",
    duration: "15 Days",
    type: "Internship",
    badge: "Recent",
    location: "Puducherry, India",
    focus: "Java Programming & Backend Logic",
    description:
      "Engaged in core Java development, object-oriented software engineering, modular code architecture, and backend application logic.",
    skillsGained: ["Java SE", "OOP Architecture", "Algorithm Optimization", "Code Review"],
  },
  {
    role: "Front-End Developer",
    company: "Twilight IT Solutions",
    period: "June – July 2025",
    duration: "1 Month",
    type: "Internship",
    badge: "Web Engineering",
    location: "Puducherry, India",
    focus: "Modern Front-End Web Development",
    description:
      "Built responsive, interactive user interfaces, styled modern web components, integrated client-side logic, and collaborated on front-end delivery standards.",
    skillsGained: ["Responsive Web Design", "Modern CSS & Flexbox", "JavaScript Interactivity", "UI Refactoring"],
  },
  {
    role: "Web Development Intern",
    company: "Ignite Labs",
    period: "January – March 2024",
    duration: "5 Months",
    
    type: "Internship",
    badge: "Foundations",
    location: "Puducherry, India",
    focus: "Web Foundations & Layout Architecture",
    description:
      "Created foundational web page structures, cross-browser responsive layouts, and strengthened core web design principles through hands-on development.",
    skillsGained: ["HTML5 Semantic Architecture", "CSS3 Layouts & Media Queries", "Cross-Browser Testing", "Git Collaboration"],
  },
];

export const certificationsData = [
  {
    id: "uipath-cert",
    title: "Automation Developer Associate Training (v2024.10)",
    issuer: "UiPath",
    type: "Diploma of Completion",
    date: "October 2024",
    category: "RPA & Automation",
    badge: "UiPath Certified",
    fileUrl: `${import.meta.env.BASE_URL}assets/certificates/uipath-certificate.pdf`,
    description:
      "Formal completion of the Automation Developer Associate curriculum, mastering Robotic Process Automation (RPA), workflow orchestrations, robotic bots, and automated business processes.",
    skills: ["UiPath Studio", "Robotic Process Automation", "Workflow Design", "Exception Handling"],
  },
  {
    id: "vrk-cert",
    title: "C, C++ Programming Language",
    issuer: "VRK Solutions",
    type: "Certificate of Training",
    date: "2024",
    category: "Core Programming",
    badge: "Systems Programming",
    fileUrl: `${import.meta.env.BASE_URL}assets/certificates/vrk-c-cpp-certificate.pdf`,
    description:
      "Comprehensive training in procedural and object-oriented paradigms in C and C++, focusing on memory management, pointers, algorithmic logic, and computational performance.",
    skills: ["C Programming", "C++ OOP", "Memory Pointers", "Algorithms"],
  },
  {
    id: "ibm-cert",
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    type: "Course Completion Certificate",
    date: "2024",
    category: "Artificial Intelligence",
    badge: "IBM AI",
    fileUrl: `${import.meta.env.BASE_URL}assets/certificates/ibm-ai-certificate.pdf`,
    description:
      "Comprehensive introduction to AI foundations, natural language processing, cognitive computing models, and ethical AI deployment principles.",
    skills: ["Artificial Intelligence", "NLP Fundamentals", "Cognitive Systems", "Machine Learning Concepts"],
  },
  {
    id: "mongodb-cert",
    title: "MongoDB Basics & Database Architecture",
    issuer: "MongoDB",
    type: "Technical Certificate",
    date: "2024",
    category: "Databases",
    badge: "NoSQL Database",
    fileUrl: `${import.meta.env.BASE_URL}assets/certificates/mongodb-certificate.pdf`,
    description:
      "Core training in document-oriented database design, NoSQL querying, JSON document structuring, indexing, and scalable data operations.",
    skills: ["MongoDB", "NoSQL Data Modeling", "Aggregation Pipelines", "CRUD Operations"],
  },
  {
    id: "ai-productivity-cert",
    title: "Digital Productivity in AI",
    issuer: "Professional AI Certification",
    type: "Professional Certificate",
    date: "2024",
    category: "Applied AI",
    badge: "AI Productivity",
    fileUrl: `${import.meta.env.BASE_URL}assets/certificates/ai-productivity-certificate.pdf`,
    description:
      "Training in leveraging modern AI-assisted workflows, generative tools, and digital automation frameworks to amplify analytical and development efficiency.",
    skills: ["Generative AI Workflows", "Prompt Engineering", "Digital Automation", "Productivity Systems"],
  },
];

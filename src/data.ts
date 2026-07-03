import { SkillGroup, Project, EducationItem, ExperienceItem, CertificationItem, AchievementItem } from "./types";

export const developerInfo = {
  name: "Tushar Sharma",
  primaryTitle: "Computer Science Student",
  subtitle: "AI & Data Science Enthusiast | Frontend Developer",
  typingTexts: [
    "B.tech Student",
    "Frontend Developer",
    "Python Programmer",
    "React Developer"
  ],
  bio: "I am a Computer Science Engineering student passionate about Artificial Intelligence, Data Science, and Modern Web Development. I enjoy solving real-world problems, building responsive applications, and continuously learning new technologies.",
  email: "tusharsharmats20074@gmail.com",
  location: "Jaipur, India",
  github: "https://github.com/tusharsharmats20074-art",
  linkedin: "https://www.linkedin.com/in/tushar-sharma-191363379/", // professional placeholder
  instagram: "https://www.instagram.com/tusharr._.sharma/",
  resumeUrl: "#", // will trigger interactive CV modal or download
  stats: [
    { label: "Projects Completed", value: "8+", detail: "Full stack & AI models" },
    { label: "Certifications", value: "10+", detail: "Oracle, Python & Web" },
    { label: "Coding Problems", value: "500+", detail: "LeetCode & HackerRank" },
    { label: "Technologies Learned", value: "15+", detail: "Languages & Frameworks" }
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: [
      { name: "Python", level: 90, iconName: "Terminal" },
      { name: "C", level: 80, iconName: "Code" },
      { name: "C++", level: 85, iconName: "Code2" },
      { name: "JavaScript", level: 88, iconName: "Layers" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95, iconName: "Globe" },
      { name: "CSS", level: 92, iconName: "Sparkles" },
      { name: "React", level: 88, iconName: "Laptop" },
      { name: "Tailwind CSS", level: 95, iconName: "Sparkles" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", level: 88, iconName: "GitBranch" },
      { name: "GitHub", level: 90, iconName: "Github" },
      { name: "VS Code", level: 95, iconName: "Laptop" },
      { name: "Firebase", level: 78, iconName: "Database" }
    ]
  },
  {
    category: "Learning & Future",
    skills: [
      { name: "Machine Learning", level: 75, iconName: "Cpu" },
      { name: "AI Technologies", level: 80, iconName: "Activity" },
      { name: "Data Science", level: 72, iconName: "PieChart" },
      { name: "Node.js", level: 70, iconName: "Server" }
    ]
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology",
    field: "Computer Science (AI & Data Science)",
    institution: "JECRC University",
    duration: "2025 – 2029",
    description: "Focusing on artificial intelligence, neural networks, advanced data structures, statistical modeling, and deep learning algorithms alongside core computer science disciplines."
  },
  {
    id: "edu-2",
    degree: "Higher Secondary Education",
    field: "Physics, Chemistry, Mathematics (PCM)",
    institution: "MCS School",
    duration: "Completed 2025",
    description: "Completed higher secondary education with distinction, focusing on analytical skills, mathematics, and science."
  }
];

export const experienceHistory: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Data Science Intern",
    company: "SmartED Innovations",
    duration: "March 2026 – June 2026",
    description: `Developing data science projects using Python by applying data preprocessing, exploratory data analysis (EDA), visualization, and machine learning techniques. Leveraging libraries such as Pandas, NumPy, Matplotlib, and Scikit-learn to solve real-world problems and gain practical analytical experience.
`
  },
  {
    id: "exp-2",
    role: "Community Member",
    company: "Devcrest Community",
    duration: "2025 – Present",
    description: "Helping peers solve coding challenges, organizing technical workshops, and engaging in collaborative coding projects with junior developers."
  },
  {
    id: "exp-3",
    role: "School Captain",
    company: "MCS School",
    duration: "2023 – 2025",
    description: "Led student teams of over 50 members, coordinated major cultural and athletic events, and represented the student body to administrators, fostering communication and leadership abilities."
  }
];

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "Netflix Clone",
    description: "A highly responsive and visually rich web streaming platform clone with seamless authentication, personalized lists, and optimized image rendering.",
    features: [
      "React.js and Tailwind CSS UI",
      "Firebase Authentication for user login/signup",
      "Dynamic movie catalogs integrated with TMDB API",
      "Responsive carousel slider and movie trailers",
      "Personalized 'My List' collection stored in Firestore",
      "Lazy loading and optimized image performance for high-speed scrolling"
    ],
    image: "https://repository-images.githubusercontent.com/652767005/d19216ff-6905-4ed1-b5ee-82820b78006b",
    tags: ["React", "Firebase", "Tailwind CSS", "API Integration"],
    demoUrl: "https://netflix-clone-demo.vercel.app",
    githubUrl: "https://github.com/tusharsharmats20074-art/netflix-clone-"
  },
  {
    id: "proj-2",
    title: "AI Predictive Modeling Hub",
    description: "A machine learning and predictive analytics pipeline under active development. Designed to showcase real-time model inference and training visualizations.",
    features: [
      "Interactive data preprocessing dashboard",
      "Real-time linear & logistic regression model trainer",
      "Live loss & accuracy graphs using D3/Recharts",
      "Custom dataset upload and prediction console",
      "Under development: Convolutional neural network preview"
    ],
    image: "https://www.techtarget.com/rms/onlineimages/ways_customers_are_segmented-f_mobile.png",
    tags: ["Python", "Machine Learning", "React", "Data Science"],
    demoUrl: "#",
    githubUrl: "https://github.com/tusharsharmats/ai-predictive-hub"
  },
  {
    id: "proj-3",
    title: "Developer Portfolio Website",
    description: "This premium, high-fidelity developer portfolio website designed with glassmorphism aesthetics, beautiful animations, and an interactive contact engine.",
    features: [
      "Vite React and Tailwind CSS v4 architecture",
      "Framer Motion layout transitions and floating card physics",
      "Dynamic GitHub statistics panel integration",
      "Responsive navigation drawer and page state indicators",
      "Complete client-side EmailJS messaging integration"
    ],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS"],
    demoUrl: "#",
    githubUrl: "https://github.com/tusharsharmats/personal-portfolio"
  }
];

export const certificationsData: CertificationItem[] = [
  {
    id: "cert-1",
    title: "Oracle Data Analytics Professional Certificate",
    issuer: "Oracle Academy",
    date: "2026",
    credentialUrl: "https://academy.oracle.com"
  },
  {
    id: "cert-2",
    title: "Advanced Programming in Python",
    issuer: "Python Software Foundation & Coursera",
    date: "2025",
    credentialUrl: "https://python.org"
  },
  {
    id: "cert-3",
    title: "Professional Frontend Development Certificate",
    issuer: "Meta & Coursera",
    date: "2025",
    credentialUrl: "https://coursera.org"
  },
  {
    id: "cert-4",
    title: "Full Stack Web Development Program",
    issuer: "FreeCodeCamp",
    date: "2025",
    credentialUrl: "https://freecodecamp.org"
  }
];

export const achievementsData: AchievementItem[] = [
  {
    id: "ach-1",
    title: "Leadership Excellence",
    description: "Appointed as MCS School Captain, heading a student council of 50+ members and pioneering collaborative activities.",
    iconName: "ShieldAlert" // we will map this to Shield or Award
  },
  {
    id: "ach-2",
    title: "Core Community Member",
    description: "Inducted into Devcrest and Socialz Club as a core decision-maker for organizing regional hackathons.",
    iconName: "Users"
  },
  {
    id: "ach-3",
    title: "Rapid Skill Acquisition",
    description: "Mastered full-stack web development and machine learning pipelines concurrently alongside first-year engineering coursework.",
    iconName: "Zap"
  },
  {
    id: "ach-4",
    title: "AI Specialist",
    description: "Designed custom regression models and natural language preprocessors, establishing a strong foundation in AI research.",
    iconName: "BrainCircuit"
  },
  {
    id: "ach-5",
    title: "Hackathon Ready",
    description: "Prepared for inter-university programming challenges with 500+ solved algorithmic problems on global platforms.",
    iconName: "Trophy"
  }
];

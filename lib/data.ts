export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  problem: string;
  approach: string;
  architecture: string;
  technologies: string[];
  results: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
  technologies: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  featured?: boolean;
}

export const personalInfo = {
  name: "Aryan Khanna",
  title: "AI / ML Engineer & Full Stack Developer",
  tagline: "Bridging artificial intelligence with clean, premium web architectures.",
  location: "Chennai, India",
  email: "aryankhanna3605@gmail.com",
  phone: "+91-9829956596",
  github: "https://github.com/khanna03",
  linkedin: "https://www.linkedin.com/in/aryankhanna03",
  resumeUrl: "/resume.pdf",
  bio: "Motivated Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning. Experienced in building production-ready web apps, developing offline and online retrieval-augmented generation (RAG) pipelines, and architecting deep learning solutions.",
  education: [
    {
      institution: "SRM Institute of Science and Technology",
      degree: "B.Tech in Computer Science Engineering (AI-ML)",
      period: "Aug 2023 – Present",
      location: "Kattankulathur, Chennai",
      details: "CGPA: 8.0"
    },
    {
      institution: "Jayshree Periwal High School",
      degree: "Higher Secondary (XII)",
      period: "Completed 2023",
      location: "Jaipur, Rajasthan",
      details: "Focus on Science and Mathematics"
    }
  ],
  stats: [
    { label: "CGPA", value: "8.0" },
    { label: "Internships", value: "2" },
    { label: "Public Repos", value: "9" },
    { label: "Certifications", value: "9" }
  ]
};

export const experiences: Experience[] = [
  {
    id: "npcil",
    company: "NPCIL (Nuclear Power Corporation of India Limited)",
    role: "AI Intern",
    location: "Mumbai, India",
    period: "Jun 2025",
    points: [
      "Designed and implemented an offline AI-powered PDF chatbot using BERT models for natural language interaction.",
      "Developed offline semantic retrieval pipelines (RAG) to query complex technical manuals secure from external internet access.",
      "Built a responsive HTML/CSS/JavaScript front-end integrated with a FastAPI back-end to support low-latency document search."
    ],
    technologies: ["Python", "FastAPI", "BERT", "RAG", "HTML5", "CSS3", "JavaScript"]
  },
  {
    id: "srmist",
    company: "SRM Institute of Science and Technology",
    role: "Full Stack Developer & AI Intern",
    location: "Kattankulathur, India",
    period: "Aug 2025 – Nov 2025",
    points: [
      "Co-developed the institutional Placement Analytics Dashboard to visualize campus recruitment trends.",
      "Implemented secure JWT user authentication and user permission schemas.",
      "Built a conversational AI assistant using LangGraph and MongoDB vector search to query placement statistics in real-time."
    ],
    technologies: ["React.js", "FastAPI", "MongoDB", "LangGraph", "JWT", "Tailwind CSS"]
  }
];

export const projects: Project[] = [
  {
    id: "latex-resume-tailorer",
    title: "LaTeX Resume Tailorer",
    shortDesc: "AI-powered ATS optimization engine that tailors LaTeX resumes to match job descriptions.",
    description: "An advanced, enterprise-grade AI workflow that parses raw job descriptions, analyzes them for semantic skills, and dynamically updates LaTeX resume source code to improve applicant tracking system (ATS) match scores.",
    problem: "Tailoring resumes manually to match varying job descriptions takes hours, and candidates struggle to find the exact phrasing or keywords that trigger ATS success.",
    approach: "Utilized Google's Gemini API to analyze job descriptions and optimize professional bullet points, and sentence-transformers (all-MiniLM-L6-v2) for ATS scoring. Implemented pgvector for fast cosine-similarity semantic matching of skills.",
    architecture: "FastAPI handles document ingestion and AI pipelines. PostgreSQL + pgvector stores and queries skill embeddings. The React/JS interface displays a side-by-side LaTeX code editor and visual ATS match differential.",
    technologies: ["React.js", "Python", "FastAPI", "Gemini AI", "Sentence-Transformers", "PostgreSQL", "pgvector", "SQLAlchemy"],
    results: [
      "Provides real-time ATS match rating improvement metrics.",
      "Automated side-by-side code diff visualization for immediate validation.",
      "Processes resumes in under 5 seconds with zero server dependencies."
    ],
    githubUrl: "https://github.com/khanna03/Latex-Resume-Tailorer",
    featured: true
  },
  {
    id: "ai-doctor",
    title: "AI-DOCTOR",
    shortDesc: "An AI-powered symptom analyzer and healthcare advice chatbot built with FastAPI and Grok AI.",
    description: "A secure, dockerized clinical advisor chatbot that processes user symptom descriptions and provides preliminary medical guidance and recommended follow-up questions.",
    problem: "People in remote areas or with minor complaints lack direct, instant access to primary medical guidance, leading to self-diagnosis errors.",
    approach: "Designed a clean chatbot workflow powered by Grok AI APIs. Encapsulated in Docker for immediate cross-platform deployment. Gradio and FastAPI provide a dual-access point for API consumers and human users.",
    architecture: "FastAPI processes symptom requests, routes them to Grok LLM with pre-configured clinical system instructions, and returns formatted responses. Gradio handles the chat interface.",
    technologies: ["Python", "FastAPI", "Grok AI API", "Gradio", "Docker", "REST API"],
    results: [
      "Fully containerized with automated Docker setup.",
      "Provides structured preliminary triage output in markdown format.",
      "Enables clean integration with external clinical scheduling systems."
    ],
    githubUrl: "https://github.com/khanna03/AI-DOCTOR",
    featured: true
  },
  {
    id: "cardiac-arrhythmia",
    title: "ECG Arrhythmia Detection",
    shortDesc: "Deep learning system for cardiac arrhythmia classification using CNN, DenseNet, and attention.",
    description: "A research-grade deep learning model that processes ECG readings to classify and detect cardiac arrhythmias, utilizing explainable AI techniques.",
    problem: "Electrocardiograms require expert reading. Delays in manually interpreting complex arrhythmia patterns can lead to critical patient outcomes.",
    approach: "Developed an ensemble neural network utilizing CNN feature extractors, a pre-trained DenseNet backbone, and self-attention layers to identify key temporal ECG shifts. Addressed class imbalance using Focal Loss.",
    architecture: "Raw ECG signaling data is cleaned and segmented, passed to a 1D-CNN and DenseNet block, and processed through self-attention before classification. Grad-CAM generates heatmaps to visualize critical signals.",
    technologies: ["Python", "TensorFlow", "PyTorch", "DenseNet", "Grad-CAM", "NumPy", "Pandas"],
    results: [
      "Achieved ~98% detection accuracy across 5 major cardiac classes.",
      "Integrated Grad-CAM to output heatmaps showing exactly which ECG waves triggered the classification.",
      "Reduced processing latency to sub-100ms per waveform scan."
    ],
    githubUrl: "https://github.com/khanna03/Early-Detection-of-Cardiac-Arrhythmias-using-DL",
    featured: true
  },
  {
    id: "learnable",
    title: "LearnAble",
    shortDesc: "Accessible native iOS learning application featuring voice control and real-time braille translation.",
    description: "A native iOS application designed for visually impaired students, providing voice-commanded navigation and real-time text-to-braille screen rendering.",
    problem: "Conventional educational apps are heavily reliant on visual interactions, excluding blind and visually impaired students from digital learning.",
    approach: "Leveraged Apple's native AVFoundation and Speech framework to allow total speech-to-intent navigation. Created a custom haptic/tactile braille screen layout translator.",
    architecture: "SwiftUI UI binds with a speech engine observer. A custom parser translates standard English strings into 6-dot braille character representations dynamically displayed on screen.",
    technologies: ["Swift", "SwiftUI", "AVFoundation", "Speech Framework", "iOS SDK"],
    results: [
      "100% hands-free navigation utilizing custom spoken commands.",
      "Interactive braille learning interface.",
      "Awarded outstanding accessibility project honors in regional tech exhibitions."
    ],
    githubUrl: "https://github.com/khanna03/LearnAble",
    featured: true
  },
  {
    id: "placement-analytics",
    title: "Placement Analytics Dashboard",
    shortDesc: "Full-stack dashboard with LangGraph conversational AI for campus recruitment data.",
    description: "An institutional platform that aggregates historical and active placement data, exposing it through analytics dashboards and a natural language query interface.",
    problem: "Placement officers spent hours writing manual SQL or spreadsheet queries to extract hiring metrics for reports.",
    approach: "Constructed a dashboard with chart visualizations and integrated an LLM agent using LangGraph to write queries and analyze data based on chat prompts.",
    architecture: "React.js client queries a FastAPI backend. MongoDB holds analytical data. The RAG assistant routes questions through a graph-based reasoning pipeline to fetch database records.",
    technologies: ["React.js", "FastAPI", "MongoDB", "LangGraph", "Chart.js", "Tailwind CSS"],
    results: [
      "Shortened administrative reporting workflows from hours to seconds.",
      "Achieved high accuracy on multi-table placement query answers.",
      "Active deployment within the university placement cell."
    ],
    featured: false
  }
];

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: ["Python", "C / C++", "Swift", "JavaScript", "HTML5", "CSS3", "SQL"]
  },
  {
    id: "frameworks",
    name: "Frameworks & Tools",
    skills: ["FastAPI", "Flask", "Gradio", "React.js", "Next.js", "Node.js", "Express.js", "Django", "Docker", "Git"]
  },
  {
    id: "ml-ds",
    name: "Data Science & AI",
    skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "Scikit-Learn", "BERT", "RAG Systems", "LangGraph", "ChromaDB", "pgvector"]
  },
  {
    id: "cv",
    name: "Computer Vision",
    skills: ["OpenCV", "YOLOv11", "Grad-CAM", "Image Segmentation"]
  },
  {
    id: "databases",
    name: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "ElasticSearch"]
  }
];

export const certifications: Certification[] = [
  {
    id: "aws-ml",
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "Apr 2026",
    featured: true
  },
  {
    id: "oracle-genai",
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    date: "Sep 2025",
    featured: true
  },
  {
    id: "aws-cloud",
    title: "AWS Academy Graduate – AWS Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "Mar 2026"
  },
  {
    id: "cisco-network",
    title: "Cisco Networking Basics",
    issuer: "Cisco",
    date: "Nov 2025"
  },
  {
    id: "kaggle-ml",
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    date: "Mar 2026"
  },
  {
    id: "robo-ai",
    title: "ROBO-AI: 30 Days Industrial Training",
    issuer: "My Equation",
    date: "Jan 2024"
  },
  {
    id: "udemy-cpp",
    title: "Beginning C++ Programming",
    issuer: "Udemy",
    date: "Apr 2024"
  },
  {
    id: "udemy-c",
    title: "C Programming For Beginners",
    issuer: "Udemy",
    date: "Nov 2023"
  },
  {
    id: "nptel-java",
    title: "Programming in Java",
    issuer: "NPTEL",
    date: "Oct 2024"
  }
];

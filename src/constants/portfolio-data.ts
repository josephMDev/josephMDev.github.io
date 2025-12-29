// Portfolio Configuration
// Update this file with your personal information

export const personalInfo = {
  name: "Joseph Moraru",
  title: "Software + AI Engineer",
  tagline: "Building elegant solutions to complex problems",
  email: "jos.moraru@gmail.com",
  location: "Canada",
  bio: `Passionate full-stack developer with expertise in building modern web applications. 
        I love creating clean, efficient code and beautiful user experiences.`,
  
  social: {
    github: "https://github.com/josephMDev",
    linkedin: "https://www.linkedin.com/in/joseph-moraru-443bb41b9/",
    twitter: "https://twitter.com/josephMDev",
  },
};

export const skills = {
  frameworks: [
    "Angular",
    "React",
    "NestJS",
    "Express",
    "Tailwind CSS",
    "Django",
    "Flask",
    "FastAPI",
    "Swift",
    "Kotlin",
  ],
  
  tools: [
    "Git",
    "Docker",
    "AWS",
    "MongoDB",
    "PostgreSQL",
    "Redis",
  ],
  
  categories: [
    {
      title: "Frontend",
      skills: ["Angular", "Ionic", "Swift", "React", "React Native", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Nest.js", "MongoDB", "FastAPI", "Django"],
    },
    {
      title: "AI",
      skills: ["Python", "TensorFlow", "PyTorch", "AWS Bedrock", "LangChain", "Pandas"],
    },
    {
      title: "DevOps",
      skills: ["Docker", "AWS", "Github Actions", "Git", "Linux"],
    },
  ],
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with payment integration, admin dashboard, and real-time inventory management.",
    image: "/projects/ecommerce.jpg", // Add your project images to public/projects/
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and analytics.",
    image: "/projects/taskapp.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo.example.com",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with location-based forecasts, interactive maps, and weather alerts.",
    image: "/projects/weather.jpg",
    tags: ["React", "API Integration", "Charts.js"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo.example.com",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "A modern, responsive portfolio template for developers with dark mode and smooth animations.",
    image: "/projects/portfolio.jpg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/yourusername/project",
    demo: "https://demo.example.com",
    featured: false,
  },
];

export const experience = [
  {
    id: 1,
    company: "SuiteSpot Inc.",
    position: "Software Engineer",
    period: "Jul. 2024 - Present",
    description: "Lead development of web applications, mentored junior developers, and implemented best practices.",
    achievements: [
      "Improved application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    id: 2,
    company: "Linvest21 Inc.",
    position: "AI Engineer",
    period: "Mar. 2024 - Jul. 2024",
    description: "Developed and maintained multiple client projects using modern web technologies.",
    achievements: [
      "Built 10+ client applications",
      "Reduced bugs by 60%",
      "Implemented automated testing",
    ],
  },
  {
    id: 3,
    company: "Canadian Agricultural Soil Microbes Labratory (CCASM)",
    position: "Full Stack Engineer",
    period: "Sep. 2023 - Mar. 2024",
    description: "Worked with various clients to deliver custom web solutions.",
    achievements: [
      "Completed 20+ projects",
      "100% client satisfaction rate",
      "Built long-term relationships",
    ],
  },
  {
    id: 4,
    company: "Bank of Montreal (BMO)",
    position: "Software Automation Engineer",
    period: "May. 2023 - Aug. 2023",
    description: "Worked with various clients to deliver custom web solutions.",
    achievements: [
      "Automated 100+ projects",
      "Reduced bugs by 60%",
      "Built long-term relationships",
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at Tech Corp",
    content: "Joseph is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    avatar: "/avatars/client1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager at Startup",
    content: "Working with Joseph was a pleasure. He understood our requirements perfectly and delivered beyond our expectations.",
    avatar: "/avatars/client2.jpg",
  },
];

export const education = [
  {
    id: 1,
    school: "University Name",
    degree: "Bachelor of Science in Computer Science",
    period: "2014 - 2018",
    description: "Focused on software engineering, algorithms, and web development.",
  },
];

export const certifications = [
  {
    id: 1,
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
  },
  {
    id: 2,
    name: "Professional Scrum Master",
    issuer: "Scrum.org",
    date: "2022",
  },
];


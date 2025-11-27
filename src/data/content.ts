import {
  FaAws,
  FaReact,
  FaNodeJs,
  FaJs,
  FaAngular,
  FaDocker,
  FaGithub,
  FaPython,
  FaVuejs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTerraform,
  SiVercel,
  SiRedux,
  SiSvelte,
  SiDeno,
} from "react-icons/si";

const WORK_EXPERIENCE = [
  {
    dateRange: "2025-Current",
    imgPath: "zenvia.webp",
    title: "Zenvia Frontends",
    company: "Zenvia",
    location: "São Paulo, brazil",
    liveUrl: "https://zenvia.com",
    description:
      "Zenvia is Brazil's largest SMS provider. Following their NASDAQ listing, I joined the team to architect a multi-framework micro-frontend structure.",
    technologies: [
      "TypeScript",
      "React",
      "Vue",
      "Svelte",
      "Node.js",
      "Java",
      "Docker",
    ],
  },
  {
    dateRange: "2025-Current",
    imgPath: "pingback.webp",
    title: "Pingback",
    company: "Pingback",
    location: "Belo Horizonte, brazil",
    liveUrl: "https://pingback.com",
    description:
      "I founded Pingback to help creators in Brazil reach audiences and monetize content. I am incredibly proud of the product, the infrastructure, and especially the team we built.",
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "Terraform",
    ],
  },
  {
    dateRange: "2025-Current",
    imgPath: "wella.webp",
    title: "Wella Education",
    company: "Usabit",
    location: "Rio de Janeiro, brazil",
    liveUrl: "https://wellaedu.com.br/",
    description:
      "As a Team Lead at Usabit, I spearheaded the development of Wella Education, a platform designed by Wella to support beauty professionals.",
    technologies: [
      "Angular",
      "Ruby",
      "Node.js",
      "AWS",
      "Docker",
      "TypeScript",
      "React.js",
    ],
  },
  {
    dateRange: "2025-Current",
    imgPath: "gov.webp",
    title: "Gov Compete Ai & Data",
    company: "GovCompete",
    location: "Belo Horizonte, Brazil",
    liveUrl: "https://govcompete.com/",
    description:
      "I served as Lead Developer at Gov Compete, a startup focused on extracting government opportunity data using machine learning and AI. We built a comprehensive suite of AI-enabled tools to streamline the application process.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "LLMs",
      "Machine Learning",
    ],
  },
  {
    dateRange: "2025-Current",
    imgPath: "mercatorio.webp",
    title: "Mercatório Big Data",
    company: "Mercatório",
    location: "Belo Horizonte, brazil",
    liveUrl: "https://mercatorio.com.br",
    description:
      "At the start of my entrepreneurial journey, I explored various technologies and markets before co-founding Mercatório. It became the largest database for Precatórios (Brazilian government debt securities), offering intelligent insights in a pre-AI era.",
    technologies: ["Angular", "Ruby", "Node.js", "AWS", "Docker", "Terraform"],
  },
  {
    dateRange: "2025-Current",
    imgPath: "a11y.webp",
    title: "VIX Extension",
    company: "Algoma University",
    location: "Toronto, Canada",
    githubUrl: "https://github.com/hiitsgabe/visible-ai-v0",
    liveUrl: "https://ieeexplore.ieee.org/document/11126726",
    description:
      "During my research at Algoma University, we developed a browser extension capable of detecting missing context in the accessibility tree, enhancing the web navigation experience for visually impaired users.",
    technologies: [
      "Machine Learning",
      "LLMs",
      "Web Extensions",
      "WCAG",
      "TypeScript",
      "Docker",
      "React",
    ],
  },
];

const STACK = [
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: FaReact, name: "React" },
  { Icon: FaAws, name: "AWS" },
  { Icon: FaNodeJs, name: "Node.js" },
  { Icon: FaJs, name: "JavaScript" },
  { Icon: SiTerraform, name: "Terraform" },
  { Icon: FaAngular, name: "Angular" },
  { Icon: FaDocker, name: "Docker" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: FaGithub, name: "GitHub" },
  { Icon: SiSvelte, name: "Svelte" },
  { Icon: FaVuejs, name: "Vue.js" },
  { Icon: FaPython, name: "Python" },
  { Icon: SiDeno, name: "Deno" },
];

const TOOLS_CONTENT = {
  title: "Tools I am using.",
  description:
    "I see frameworks and languages simply as tools, so I don't obsess over a specific stack. As an entrepreneur and developer, I've had to master a little bit of everything—from infrastructure and coding to product management. That said, I really enjoy working with TypeScript, React, and Node.js.",
};

const ABOUT_CONTENT = {
  title: "Nice to meet you, let me introduce myself",
  description1:
    "I'm Gabe, a software engineer passionate about creating innovative solutions. I truly believe that we can change the world through code.",
  description2:
    "I have been working in tech since 2014, building and scaling impactful projects. As a serial entrepreneur, I am passionate about turning ideas into products and solving real customer problems.",
  description4:
    "Throughout my career, I've had the privilege of working with incredible people. Together, we've achieved significant milestones, from scaling products to 10k+ users and coordinating enterprise micro-frontend architectures, to founding startups that raised thousands of users and millions in funding. I am a strong team player and believe collaboration is one of my greatest strengths.",
};

const WORK_CONTENT = {
  title: "Projects I'm Proud Of 🚀",
  description: "Checkout my full journey.",
};

export { WORK_EXPERIENCE, STACK, TOOLS_CONTENT, ABOUT_CONTENT, WORK_CONTENT };

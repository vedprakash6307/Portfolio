import { SkillCategory, Project, Training, Education, Strength, SocialLink } from './types';
import profileImg from './assets/images/vedprakash_headshot_new_1779853793981.png';

export const personalInfo = {
  name: 'Vedprakash Kushwaha',
  title: 'MERN Stack Developer',
  subtitle: 'Aspiring Full-Stack Developer',
  tagline: 'Passionate BCA final-year student focused on building modern full-stack web applications using MERN Stack technologies.',
  email: 'pk7645115@gmail.com',
  phone: '+91-6307616454',
  location: 'Lucknow, India',
  profileImage: profileImg,
  resumeUrl: '#', // Placeholder for mock download or client routing
};

export const typingText = [
  'MERN Stack Developer',
  'React Developer',
  'Full Stack Learner',
];

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', iconName: 'Html5', level: 95 },
      { name: 'CSS', iconName: 'Css3', level: 90 },
      { name: 'JavaScript', iconName: 'Js', level: 85 },
      { name: 'React.js', iconName: 'React', level: 88 },
    ],
  },
  {
    category: 'Backend & Databases',
    items: [
      { name: 'Node.js', iconName: 'Node', level: 80 },
      { name: 'Express.js', iconName: 'Express', level: 82 },
      { name: 'MongoDB', iconName: 'MongoDB', level: 85 },
      { name: 'MySQL (Basic)', iconName: 'MySQL', level: 65 },
    ],
  },
  {
    category: 'Tools & Version Control',
    items: [
      { name: 'Git', iconName: 'Git', level: 85 },
      { name: 'GitHub', iconName: 'GitHub', level: 88 },
      { name: 'VS Code', iconName: 'VSCode', level: 92 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: 'Tourism Place Finder and Travel Booking System',
    description: 'A comprehensive MERN Stack-based tourism and travel booking platform. Features full-stack routing, responsive user panels, custom database schema modeling, and fluid state-driven interactive experiences.',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/pk7645115',
    liveUrl: '#',
    featured: true,
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A highly polished, responsive personal portfolio website detailing developer journey, key technical skills, and projects, built using HTML, CSS, and modern utility styling.',
    techStack: ['ReactJS', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/pk7645115',
    liveUrl: '#',
    featured: false,
  },
];

export const trainingDetails: Training = {
  organization: 'PrepCode Office',
  duration: '45-Day Intensive MERN Training',
  details: [
    'Daily hands-on coding practice sessions implementing agile developer workflows.',
    'REST API development, routing architectures, and backend server middleware construction with Express.js and Node.js.',
    'Full-stack integration practices connecting React UI components with MongoDB backends using state synchronization.',
    'Built multiple production-ready mini-projects, establishing responsive front-ends linked to live RESTful services.',
  ],
};

export const educationList: Education[] = [
  {
    degree: 'BCA (Bachelor of Computer Applications)',
    school: 'Ambalika Institute of Management and Technology, Lucknow',
    completionDate: 'June–July 2026 (Expected)',
    score: 'Final Year Student',
  },
  {
    degree: 'Intermediate (12th Grade)',
    school: 'UP Board, Lucknow',
    completionDate: 'Completed',
    score: '76.6%',
  },
  {
    degree: 'High School (10th Grade)',
    school: 'UP Board, Lucknow',
    completionDate: 'Completed',
    score: '72.5%',
  },
];

export const strengths: Strength[] = [
  {
    title: 'Problem-Solving Mindset',
    description: 'Enjoys dissecting bugs, debugging logic, and building efficient solutions from scratch.',
    iconName: 'Cpu',
  },
  {
    title: 'Quick Learner',
    description: 'Excels at adapting to fast-changing developer ecosystems and modern libraries.',
    iconName: 'Zap',
  },
  {
    title: 'Strong Interest in MERN',
    description: 'Committed to mastering Node.js backend systems and React.js frontend component trees.',
    iconName: 'Database',
  },
  {
    title: 'Adaptability',
    description: 'Thrives in both solo hacking pipelines and structured developer environments.',
    iconName: 'Shuffle',
  },
  {
    title: 'Team Collaboration',
    description: 'Communicates technical requirements clearly, supporting shared release targets and positive group dynamics.',
    iconName: 'Users',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/pk7645115',
    username: 'pk7645115',
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/vedprakash-kushwaha', // Fitting placeholder based on name
    username: 'Vedprakash Kushwaha',
  },
  {
    platform: 'instagram',
    url: 'https://instagram.com/ved_kushwaha_official', // Fitting placeholder
    username: 'ved_kushwaha',
  },
  {
    platform: 'email',
    url: 'mailto:pk7645115@gmail.com',
    username: 'pk7645115@gmail.com',
  },
  {
    platform: 'phone',
    url: 'tel:+916307616454',
    username: '+91-6307616454',
  },
];

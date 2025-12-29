// Portfolio Data for Ritesh Roshan Jha
// Easy to edit - all personal information in one place

export const personalInfo = {
  name: 'Ritesh Roshan Jha',
  title: 'Associate Software Engineer',
  company: 'Sirion',
  email: 'riteshjha1969@gmail.com',
  phone: '+91-9268105889',
  location: 'Faridabad, Haryana',
  linkedin: 'https://linkedin.com/in/riteshjha',
  github: 'https://github.com/riteshjha',
  taglines: [
    'Associate Software Engineer @ Sirion',
    'Top 10% LeetCode (1780+)',
    'Full-Stack Backend Expert',
    'Microservices Architect',
    'System Design Enthusiast',
  ],
  summary: 'Passionate and detail-oriented Software Engineer with hands-on experience in designing and developing mission-critical applications using Java and Spring Boot. Proficient in the full software development lifecycle (SDLC) within Agile environments, specializing in building and managing RESTful APIs and microservices.',
}

export const skills = {
  languages: ['Java', 'Golang', 'C++', 'Python'],
  technologies: ['Spring Boot', 'Java EE', 'REST APIs', 'Microservices', 'Elasticsearch', 'Docker'],
  databases: ['MySQL', 'MongoDB', 'Solr', 'PostgreSQL'],
  concepts: ['Data Structures & Algorithms', 'Object-Oriented Design', 'Microservices', 'Distributed Systems'],
  tools: ['Git', 'Linux', 'JUnit', 'RabbitMQ'],
}

export const education = {
  university: 'J.C. Bose University of Science and Technology, YMCA',
  degree: 'B.Tech Computer Engineering with Data Science',
  cgpa: 8.369,
  maxCgpa: 10,
  duration: 'July 2020 – July 2024',
  location: 'Faridabad, Haryana',
}

export const workExperience = [
  {
    id: 'sirion',
    role: 'Associate Software Engineer',
    company: 'Sirion',
    duration: 'July 2024 – Present',
    technologies: ['Java', 'Spring Boot', 'Docker', 'SQL', 'Git', 'Linux', 'GoLang'],
    highlights: [
      'Engineered core platform services using Java, Spring Boot, and Golang, improving system performance.',
      'Led development of a core B2B API, driving full SDLC execution—design, coding, debugging, testing, and deployment.',
      'Optimized database interactions and integrated Elasticsearch, reducing search latency by 25%, improving customer experience for contract search modules.',
      'Collaborated with cross-functional teams and participated in requirement analysis and release support.',
    ],
    impactStat: '25% Latency Reduction',
  },
  {
    id: 'cynapto',
    role: 'Artificial Intelligence Engineer',
    company: 'Cynapto Technology',
    duration: 'Jan 2024 – June 2024',
    technologies: ['Python', 'ML', 'GenAI', 'CNN', 'YOLOv8'],
    highlights: [
      'Implemented object detection & pose estimation models using YOLOv8.',
      'Designed LLM based speech-to-text improving transcription efficiency by 20%.',
    ],
    impactStat: '20% Efficiency Boost',
  },
]

export const projects = [
  {
    id: 'erp-portal',
    title: 'Distributed Enterprise Resource (ERP) Portal',
    technologies: ['Java', 'Spring Boot', 'RabbitMQ', 'Microservices', 'Docker'],
    description: 'Scalable, microservices-based ERP portal for payroll and HR management.',
    highlights: [
      'Architected a scalable, microservices-based ERP portal (payroll, HR) using Spring Boot.',
      'Implemented polyglot persistence, leveraging MySQL for transactions, MongoDB for employee data, and Elasticsearch for optimized search.',
      'Implemented asynchronous pub-sub communication (via RabbitMQ) for a decoupled, resilient system.',
      'Deployed a central API Gateway to manage cross-cutting concerns for all services, including routing, security, and rate limiting.',
    ],
    architecture: {
      nodes: [
        { id: 'api-gateway', label: 'API Gateway', type: 'gateway', position: { x: 400, y: 50 } },
        { id: 'payroll-service', label: 'Payroll Service', type: 'service', position: { x: 200, y: 200 } },
        { id: 'hr-service', label: 'HR Service', type: 'service', position: { x: 600, y: 200 } },
        { id: 'rabbitmq', label: 'RabbitMQ', type: 'queue', position: { x: 400, y: 350 } },
        { id: 'mysql', label: 'MySQL', type: 'database', position: { x: 100, y: 450 } },
        { id: 'mongodb', label: 'MongoDB', type: 'database', position: { x: 400, y: 450 } },
        { id: 'elasticsearch', label: 'Elasticsearch', type: 'search', position: { x: 700, y: 450 } },
      ],
      edges: [
        { id: 'e1', source: 'api-gateway', target: 'payroll-service' },
        { id: 'e2', source: 'api-gateway', target: 'hr-service' },
        { id: 'e3', source: 'payroll-service', target: 'rabbitmq' },
        { id: 'e4', source: 'hr-service', target: 'rabbitmq' },
        { id: 'e5', source: 'payroll-service', target: 'mysql' },
        { id: 'e6', source: 'hr-service', target: 'mongodb' },
        { id: 'e7', source: 'hr-service', target: 'elasticsearch' },
      ],
    },
  },
  {
    id: 'b2b-gateway',
    title: 'Secure B2B Integration Gateway',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'OOD'],
    description: 'Secure REST API gateway for B2B integrations with enterprise clients.',
    highlights: [
      'Architected a secure B2B REST API using Spring Boot.',
      'Applied the Adapter Pattern to translate public UUIDs/External IDs into internal DB IDs, ensuring schema abstraction.',
      'Leveraged the Template Method Pattern to build a reusable validation and persistence framework, ensuring data integrity.',
    ],
    patterns: [
      {
        name: 'Adapter Pattern',
        description: 'Translates public UUIDs/External IDs into internal DB IDs for schema abstraction.',
        diagram: {
          client: 'External Client',
          adapter: 'ID Translator',
          adaptee: 'Internal Database',
          flow: ['Public UUID Request', 'Translate to Internal ID', 'Database Query', 'Response Mapping'],
        },
      },
      {
        name: 'Template Method Pattern',
        description: 'Reusable validation and persistence framework for data integrity.',
        diagram: {
          abstract: 'AbstractValidator',
          concrete: ['PayloadValidator', 'SchemaValidator', 'IntegrityValidator'],
          method: 'validateAndPersist()',
        },
      },
    ],
  },
]

export const competitiveProgramming = {
  leetcode: {
    platform: 'LeetCode',
    rating: 1780,
    questions: 700,
    percentile: 'Top 10%',
    icon: '🏆',
    color: '#ffa116',
    url: 'https://leetcode.com/riteshjha',
  },
  geeksforgeeks: {
    platform: 'GeeksForGeeks',
    rating: 1500,
    questions: 500,
    percentile: 'Top 30 in College',
    icon: '💡',
    color: '#2f8d46',
    url: 'https://geeksforgeeks.org/user/riteshjha',
  },
  codechef: {
    platform: 'CodeChef',
    rating: 1799,
    stars: 3,
    achievement: 'Ranked Top 50 in Long Challenge Div2',
    icon: '⭐',
    color: '#5b4638',
    url: 'https://codechef.com/users/riteshjha',
  },
}

export const achievements = [
  {
    id: 'olympiad-silver',
    title: 'Silver Medal - International Science Olympiad',
    description: 'Top 2nd in school',
    icon: '🥈',
  },
  {
    id: 'olympiad-bronze',
    title: 'Bronze Medal - International Math Olympiad',
    description: 'Top 3rd in school',
    icon: '🥉',
  },
  {
    id: 'hacktoberfest',
    title: 'HacktoberFest Contributor',
    description: '10 Pull Requests, Top 40,000 participants',
    icon: '🎃',
  },
]

export const aiMlProjects = {
  title: 'AI/ML Core Systems',
  subtitle: 'Neural Network & GenAI Implementations',
  projects: [
    {
      id: 'yolov8',
      name: 'YOLOv8 Object Detection',
      type: 'Computer Vision',
      description: 'Real-time object detection and pose estimation models for industrial applications.',
      technologies: ['Python', 'YOLOv8', 'CNN', 'OpenCV'],
      metrics: {
        accuracy: '94%',
        fps: '30+',
        objects: '80+ Classes',
      },
    },
    {
      id: 'speech-to-text',
      name: 'LLM Speech-to-Text',
      type: 'GenAI / NLP',
      description: 'Large Language Model based transcription system with 20% efficiency improvement.',
      technologies: ['Python', 'LLM', 'Transformers', 'Whisper'],
      metrics: {
        efficiency: '+20%',
        accuracy: '97%',
        languages: '10+',
      },
    },
  ],
}

export const systemMetrics = {
  latencyReduction: {
    value: 25,
    unit: '%',
    label: 'Search Latency Reduction',
    description: 'Elasticsearch Optimization',
  },
  transcriptionEfficiency: {
    value: 20,
    unit: '%',
    label: 'Transcription Efficiency',
    description: 'LLM Speech-to-Text',
  },
  cgpa: {
    value: 8.369,
    unit: '/10',
    label: 'Academic CGPA',
    description: 'J.C. Bose University (YMCA)',
  },
  problemsSolved: {
    value: 1200,
    unit: '+',
    label: 'Problems Solved',
    description: 'Combined CP Platforms',
  },
}

export const bootSequence = [
  { message: 'BIOS initializing...', delay: 200 },
  { message: 'Loading system kernel...', delay: 300 },
  { message: 'Mounting file systems...', delay: 250 },
  { message: 'Starting network services...', delay: 200 },
  { message: 'Initializing security protocols...', delay: 300 },
  { message: 'Loading user profile: RITESH_JHA...', delay: 400 },
  { message: 'Starting dashboard services...', delay: 300 },
  { message: 'System ready. Welcome, Engineer.', delay: 500 },
]


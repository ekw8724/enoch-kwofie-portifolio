import type {
  CertificationItem,
  CourseworkTrack,
  EducationItem,
  ExperienceItem,
} from '../types/portfolio';

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'european-hospital',
    role: 'Junior IT Support & Network Technician Attachment',
    organization: 'European Government Hospital',
    location: 'Takoradi, Ghana',
    period: 'Aug 2025 – Present',
    type: 'Clinical IT Attachment',
    highlights: [
      'Deliver front-line IT support, workstation diagnostics, and hardware maintenance across clinical and administrative departments.',
      'Troubleshoot local area network (LAN) connectivity issues, switch links, and networked peripherals to maintain reliable clinical workflows.',
      'Assist staff with system updates, printer integration, and timely resolution of hardware and software bottlenecks.',
    ],
  },
  {
    id: 'carlos-jop-supermarket',
    role: 'Network Provisioner',
    organization: 'Carlos Jop Supermarket',
    location: 'Takoradi, Ghana',
    period: 'Jan 2021 – Present',
    type: 'Infrastructure Provisioning',
    highlights: [
      'Provision and maintain local network links supporting point-of-sale terminals, back-office workstations, and store operations.',
      'Diagnose physical cabling faults, router/switch connectivity drops, and IP addressing conflicts to minimize downtime.',
      'Support ongoing hardware upkeep and network expansion as operational equipment requirements grow.',
    ],
  },
  {
    id: 'nzema-hall-ttu',
    role: 'Lead Network Deployment Technician',
    organization: 'Nzema Hall, Takoradi Technical University',
    location: 'Takoradi, Ghana',
    period: 'Aug 2026',
    type: 'Campus Network Deployment',
    highlights: [
      'Led on-site structured Ethernet cabling, wall outlet termination, and physical link verification for campus deployment.',
      'Coordinated port testing and endpoint connectivity checks to confirm clean Layer 1 and Layer 2 readiness.',
    ],
    proofImageUrl: '/assets/aistudio/image_475cd6f9.png',
    proofImageAlt: 'Enoch Kwofie performing on-site structured Ethernet cabling and wall jack termination at Nzema Hall, Takoradi Technical University',
    proofCaption: 'On-site structured cabling & wall jack termination — Nzema Hall, TTU (Aug 2026)',
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: 'ttu',
    institution: 'Takoradi Technical University',
    credential: 'Bachelor of Technology / Diploma in Network Engineering and Information Technology',
    location: 'Takoradi, Ghana',
    period: 'Present',
  },
  {
    id: 'esiama',
    institution: 'Esiama Technical High School',
    credential: 'Secondary Education',
    location: 'Esiama, Ghana',
    period: '2017 – 2020',
  },
];

export const CERTIFICATION_ITEMS: CertificationItem[] = [
  {
    id: 'google-it-support-v3',
    name: 'Google IT Support Professional Certificate (v.3)',
    issuer: 'Google / Coursera',
    issuedDate: 'Jul 2, 2026',
    verificationUrl: 'https://www.credly.com/go/vK0Lyjvj',
    notes: 'End-to-end IT support readiness covering networking, operating systems, system administration, and security.',
  },
  {
    id: 'opswat-icip',
    name: 'Introduction to Critical Infrastructure Protection (ICIP)',
    issuer: 'OPSWAT Academy',
    issuedDate: 'Jun 21, 2026',
    expiresDate: 'Jun 21, 2027',
    credentialId: 'agNU-9TxnA',
    verificationUrl: 'https://learn.opswatacademy.com/certificate/agNU-9TxnA',
    notes: 'Foundational cybersecurity principles for protecting critical infrastructure and operational environments.',
  },
  {
    id: 'google-agile-pm',
    name: 'Agile Project Management',
    issuer: 'Google / Coursera',
    issuedDate: 'Aug 15, 2026',
    verificationUrl: 'https://coursera.org/verify/XE8OXMF3RZ6A',
    notes: 'Agile delivery frameworks, sprint planning, stakeholder communication, and iterative execution.',
  },
  {
    id: 'thrive-data-science',
    name: 'Data Science and Analytics',
    issuer: 'Thrive',
    issuedDate: 'Jan 20, 2025',
    notes: 'Structured training in data organization, operational analysis, and quantitative reporting.',
  },
  {
    id: 'google-pm-specialization',
    name: 'Google Project Management Specialization',
    issuer: 'Google / One Million Coders',
    issuedDate: 'Aug 23, 2026',
    notes: 'Full project management specialization covering initiation, planning, execution, agile practices, and real-world capstone delivery.',
  },
];

export const COURSEWORK_TRACKS: CourseworkTrack[] = [
  {
    id: 'google-cybersecurity',
    title: 'Google Cybersecurity Specialization (In Progress)',
    status: '4 completed courses',
    courses: [
      {
        id: 'cyber-tools-linux-sql',
        title: 'Tools of the Trade: Linux and SQL',
        issuer: 'Google / One Million Coders',
        completedDate: 'Nov 13, 2026',
      },
      {
        id: 'cyber-connect-protect',
        title: 'Connect and Protect: Networks and Network Security',
        issuer: 'Google / One Million Coders',
        completedDate: 'Oct 26, 2026',
      },
      {
        id: 'cyber-play-it-safe',
        title: 'Play It Safe: Manage Security Risks',
        issuer: 'Google / One Million Coders',
        completedDate: 'Oct 23, 2026',
      },
      {
        id: 'cyber-foundations',
        title: 'Foundations of Cybersecurity',
        issuer: 'Google / One Million Coders',
        completedDate: 'Oct 13, 2026',
      },
    ],
  },
  {
    id: 'google-it-support-track',
    title: 'Google IT Support',
    status: '6 completed courses',
    courses: [
      {
        id: 'coursera-it-security',
        title: 'IT Security: Defense against the digital dark arts',
        issuer: 'Google / Coursera',
        completedDate: 'Jul 2026',
        verificationUrl: 'https://coursera.org/verify/YYUWJ8FZJ6NU',
      },
      {
        id: 'coursera-sysadmin',
        title: 'System Administration and IT Infrastructure Services',
        issuer: 'Google / One Million Coders',
        completedDate: 'Jun 29, 2026',
      },
      {
        id: 'coursera-os-power-user',
        title: 'Operating Systems and You: Becoming a Power User',
        issuer: 'Google / Coursera',
        completedDate: 'Jun 2026',
        verificationUrl: 'https://coursera.org/verify/VDXH8HMXCI75',
      },
      {
        id: 'coursera-bits-bytes',
        title: 'The Bits and Bytes of Computer Networking',
        issuer: 'Google / One Million Coders',
        completedDate: 'Jun 8, 2026',
      },
      {
        id: 'coursera-tech-support-fundamentals',
        title: 'Technical Support Fundamentals',
        issuer: 'Google / Coursera',
        completedDate: 'Jun 2026',
        verificationUrl: 'https://coursera.org/verify/ZM3ZCU8E3FFG',
      },
      {
        id: 'coursera-job-search-ai',
        title: 'Accelerate Your Job Search with AI',
        issuer: 'Google / One Million Coders',
        completedDate: 'May 25, 2026',
      },
    ],
  },
  {
    id: 'google-pm-track',
    title: 'Google Project Management',
    status: 'Capstone completed',
    courses: [
      {
        id: 'pm-capstone',
        title: 'Capstone: Applying Project Management in the Real World',
        issuer: 'Google / One Million Coders',
        completedDate: 'Aug 23, 2026',
      },
    ],
  },
];

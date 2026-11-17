import type { AboutData, NavItem, ProfileData } from '../types/portfolio';

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
];

export const PROFILE: ProfileData = {
  name: 'Enoch Kwofie',
  roleTitle: 'IT Support Specialist | Network & Security',
  tagline:
    'IT Support Specialist and Network Engineer delivering Remote Support, Incident Management, Network Troubleshooting, Active Directory administration, VPN Configuration, Endpoint Security, and ITIL Helpdesk Operations.',
  location: 'Takoradi, Ghana',
  availability: 'Open to Remote, Hybrid & On-Site IT / Network Roles',
  shortBio:
    'BTech Information Technology student at Takoradi Technical University experienced in Remote Support, Network Troubleshooting, Incident Management, Active Directory, VPN Configuration, Endpoint Security, and ITIL Helpdesk Operations.',
  portraitUrl: '/assets/aistudio/image_2f38011c.png',
  portraitAlt: 'Portrait of Enoch Kwofie, IT Support Specialist and Network & Security Engineering student',
  cvImageUrl: '/assets/aistudio/image_98c0a707.png',
  email: 'enochkwofie9090@gmail.com',
  phone: '+233 0552159898 · +233 0208269562',
  terminalLines: [
    'LAN configuration, VPN Configuration & switch administration',
    'Endpoint Security, Active Directory & access control hardening',
    'Remote Support, Incident Management & ITIL Helpdesk Operations',
  ],
  metrics: [
    {
      value: '2',
      label: 'Hospital IT Units',
      detail: 'Effia Nkwanta & European Gov. Hospital',
    },
    {
      value: '5+',
      label: 'Verified Credentials',
      detail: 'Google IT Support, OPSWAT ICIP, Google PM',
    },
    {
      value: 'BTech',
      label: 'Information Technology',
      detail: 'Takoradi Technical University',
    },
    {
      value: 'Available',
      label: 'Remote · Hybrid · On-Site',
      detail: 'Takoradi, Ghana · Global Remote Ready',
    },
  ],
  socials: [
    {
      id: 'email',
      label: 'Email',
      href: 'mailto:enochkwofie9090@gmail.com',
      displayValue: 'enochkwofie9090@gmail.com',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/kwofie-enoch-it/',
      displayValue: 'linkedin.com/in/kwofie-enoch-it',
    },
    {
      id: 'github',
      label: 'GitHub',
      href: 'https://github.com/ekw8724',
      displayValue: 'github.com/ekw8724',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp (055)',
      href: 'https://wa.me/233552159898',
      displayValue: '+233 55 215 9898',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp (020)',
      href: 'https://wa.me/233208269562',
      displayValue: '+233 20 826 9562',
    },
  ],
};

export const ABOUT_DATA: AboutData = {
  eyebrow: 'Takoradi Technical University · BTech in Information Technology',
  heading: 'Bridging hands-on network infrastructure, systems administration, and diagnostic tooling.',
  portraitUrl: '/assets/aistudio/image_2abafced.png',
  portraitAlt: 'Studio headshot of Enoch Kwofie in a white dress shirt and dark trousers',
  bioParagraphs: [
    'I am pursuing a Bachelor of Technology in Information Technology at Takoradi Technical University, combining hands-on Network Troubleshooting, Remote Support, and systems administration across clinical, retail, and campus environments.',
    'My infrastructure background covers Incident Management, ITIL Helpdesk Operations, Active Directory user and group administration, VPN Configuration, and Endpoint Security — from terminating structured cabling and provisioning switches on-site to maintaining dependable Windows and Linux servers.',
    'Alongside field infrastructure work, I built NetToolkit — a live, browser-based network diagnostics and security suite for subnet planning, TLS certificate verification, MAC vendor lookup, and SSH command workflows.',
  ],
  quickHighlights: [
    {
      label: 'Focus Areas',
      value: 'Network Engineering, Systems Administration & Security',
      detail: 'LAN cabling, switch operations, server administration, and diagnostic utilities',
    },
    {
      label: 'Education',
      value: 'BTech in Information Technology',
      detail: 'Takoradi Technical University · Takoradi, Ghana',
    },
    {
      label: 'Location',
      value: 'Takoradi, Ghana',
      detail: 'Open to full-time roles and remote/on-site infrastructure support',
    },
  ],
  lookingForTitle: 'What I Am Looking For',
  lookingForText:
    'Seeking full-time entry-level or junior roles in IT Support, Network Administration, or Security Operations, as well as freelance LAN deployment, switch configuration, and endpoint hardening engagements.',
  coreFocus: [
    {
      title: 'LAN & Switch Administration',
      description:
        'Structured cabling, access switch provisioning, VLAN segmentation, and Layer 1–3 fault isolation for dependable multi-user operations.',
      scope: 'TCP/IP · VLANs · Subnetting',
    },
    {
      title: 'Systems & Virtualization',
      description:
        'Deploying and administering Windows Server, Ubuntu Server, and Kali Linux environments across VMware, Hyper-V, WSL 2, and Docker.',
      scope: 'Windows Server · Linux · Virtualization',
    },
    {
      title: 'Security & Diagnostic Tooling',
      description:
        'Applying critical infrastructure protection principles alongside custom web utilities like NetToolkit for fast TLS and subnet verification.',
      scope: 'TLS/SSL · Risk Assessment · NetToolkit',
    },
  ],
};

import type { SkillDomain } from '../types/portfolio';

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'networking-infrastructure',
    title: 'Networking & Infrastructure',
    summary: 'Core routing, switching, addressing, and browser/CLI diagnostic workflows.',
    skills: [
      {
        name: 'TCP/IP',
        level: 'Proficient',
        note: 'Protocol stack troubleshooting across physical link, transport, and application layers.',
      },
      {
        name: 'VLANs',
        level: 'Proficient',
        note: '802.1Q trunking, access port assignment, and broadcast domain segmentation.',
      },
      {
        name: 'Subnetting',
        level: 'Proficient',
        note: 'CIDR calculation, VLSM address planning, and gateway allocation.',
      },
      {
        name: 'DNS/DHCP',
        level: 'Proficient',
        note: 'Scope verification, lease troubleshooting, and name resolution diagnostics.',
      },
      {
        name: 'TLS/SSL',
        level: 'Working',
        note: 'X.509 certificate chain verification, expiry inspection, and HTTPS validation.',
      },
      {
        name: 'Cisco Packet Tracer',
        level: 'Proficient',
        note: 'Multi-subnet switch/router topology simulation and pre-deployment validation.',
      },
      {
        name: 'CLI diagnostics',
        level: 'Proficient',
        note: 'ping, tracert/traceroute, ipconfig, nslookup, netstat, and arp triage.',
      },
    ],
  },
  {
    id: 'systems-virtualization',
    title: 'Systems & Virtualization',
    summary: 'Cross-platform server administration, hypervisors, and container labs.',
    skills: [
      {
        name: 'Windows Server',
        level: 'Working',
        note: 'Active Directory fundamentals, shared resource permissions, and print services.',
      },
      {
        name: 'Ubuntu Server',
        level: 'Working',
        note: 'Headless Linux administration, systemd services, SSH configuration, and package hygiene.',
      },
      {
        name: 'Kali Linux',
        level: 'Working',
        note: 'Lab-based network enumeration, traffic verification, and security testing tools.',
      },
      {
        name: 'Docker',
        level: 'Working',
        note: 'Containerized utility packaging and isolated local service environments.',
      },
      {
        name: 'VMware',
        level: 'Proficient',
        note: 'Multi-VM lab topologies, virtual switch bridging, and snapshot management.',
      },
      {
        name: 'Hyper-V',
        level: 'Working',
        note: 'Windows-native virtual machine provisioning and internal virtual networking.',
      },
      {
        name: 'WSL 2',
        level: 'Proficient',
        note: 'Integrated Linux shell workflows and CLI tooling on Windows workstations.',
      },
    ],
  },
  {
    id: 'cybersecurity-risk',
    title: 'Cybersecurity & Risk',
    summary: 'Infrastructure protection, defensive tooling, and operational risk management.',
    skills: [
      {
        name: 'OPSWAT ICIP',
        level: 'Working',
        note: 'Critical infrastructure protection principles verified through OPSWAT Academy.',
      },
      {
        name: 'Linux/SQL Security Tooling',
        level: 'Working',
        note: 'Permissions auditing, log inspection, and structured security querying.',
      },
      {
        name: 'Risk Assessment',
        level: 'Working',
        note: 'Threat identification, asset prioritization, and mitigation planning.',
      },
    ],
  },
  {
    id: 'development-delivery',
    title: 'Development & Delivery',
    summary: 'Full-stack diagnostic utility development, cloud hosting, and agile execution.',
    skills: [
      {
        name: 'Node.js',
        level: 'Working',
        note: 'Backend network diagnostic APIs and TLS inspection services (NetToolkit).',
      },
      {
        name: 'Python',
        level: 'Working',
        note: 'Automation scripts, host reachability checks, and data analysis utilities.',
      },
      {
        name: 'JavaScript',
        level: 'Working',
        note: 'Interactive browser utilities and responsive diagnostic interfaces.',
      },
      {
        name: 'GitHub',
        level: 'Proficient',
        note: 'Version control, repository maintenance, and collaborative code workflows.',
      },
      {
        name: 'Render',
        level: 'Working',
        note: 'Production Node.js web service deployment and environment configuration.',
      },
      {
        name: 'Agile Project Management',
        level: 'Working',
        note: 'Sprint planning, milestone tracking, and stakeholder communication.',
      },
    ],
  },
];

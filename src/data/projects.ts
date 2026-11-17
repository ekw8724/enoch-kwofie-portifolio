import type { ProjectCaseStudy } from '../types/portfolio';

export const PROJECT_CATEGORIES = [
  'All',
  'Networking',
  'Cybersecurity',
  'IT Systems',
] as const;

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: 'nettoolkit-diagnostics-suite',
    title: 'NetToolkit — Web-Based Network Diagnostics & Security Suite',
    category: 'Networking',
    summary:
      'A mobile-responsive network engineering utility designed to streamline rapid troubleshooting, subnet planning, and TLS certificate verification from any browser.',
    isFeatured: true,
    timeframe: 'Live Web Application',
    tags: ['Node.js', 'TLS/SSL', 'IP Subnetting', 'Render'],
    liveUrl: 'https://network-multitool-app.onrender.com',
    repoUrl: 'https://github.com/ekw8724',
    problem:
      'Network engineers and IT support technicians frequently troubleshoot connectivity, verify HTTPS certificate chains, or plan CIDR subnets from mobile devices or locked-down workstations where local CLI utilities (OpenSSL, ipcalc, or SSH clients) are unavailable.',
    approach:
      'Built a unified browser-accessible diagnostic suite powered by a Node.js backend and mobile-first interface so common Layer 3/4/7 checks can be executed cleanly from any device.',
    architecture:
      'Modular Express/Node.js service architecture organized into four operational utilities: TLS Inspector Terminal for live X.509 certificate chain and expiry checks, IP Calculator for CIDR subnetting and host range planning, MAC Vendor Lookup for OUI hardware identification, and SSH Tools for connection command generation and session reference.',
    architectureNodes: [
      'TLS Inspector Terminal',
      'IP Calculator',
      'MAC Vendor Lookup',
      'SSH Tools',
    ],
    deployment:
      'Deployed as a live Node.js web service on Render (https://network-multitool-app.onrender.com) with automated TLS termination, environment-based configuration, and responsive layout testing across desktop and mobile viewports.',
    tools: ['Node.js', 'TLS/SSL', 'IP Subnetting', 'Render', 'JavaScript'],
    result:
      'Consolidated four everyday troubleshooting and planning workflows into a single zero-install browser utility accessible anywhere during field support.',
    lessonsLearned:
      'Separating client-side deterministic math (CIDR subnet calculations) from server-side network inspection (TLS handshake verification) keeps latency low while preserving accurate certificate diagnostics.',
    codeTitle: 'TLS Certificate Inspection Pattern (Node.js tls module)',
    codeSnippet: `import tls from 'node:tls';

export function inspectCertificate(host: string, port = 443) {
  return new Promise((resolve, reject) => {
    const socket = tls.connect({ host, port, servername: host, rejectUnauthorized: false }, () => {
      const cert = socket.getPeerCertificate(true);
      socket.end();
      resolve({
        subject: cert.subject?.CN,
        issuer: cert.issuer?.O,
        validTo: cert.valid_to,
        authorized: socket.authorized,
      });
    });
    socket.setTimeout(5000, () => socket.destroy(new Error('TLS inspection timed out')));
    socket.on('error', reject);
  });
}`,
  },
  {
    id: 'segmented-clinic-lan',
    title: 'Segmented Clinical & Admin VLAN Topology',
    category: 'Networking',
    summary:
      'VLAN isolation blueprint separating administrative workstations, clinical terminals, and switch management traffic using RFC 1918 subnetting.',
    timeframe: 'Network Architecture Study',
    tags: ['802.1Q VLANs', 'Switch CLI', 'DHCP Relay'],
    repoUrl: 'https://github.com/ekw8724',
    problem:
      'Flat Layer 2 networks expose clinical and administrative workstations to unnecessary broadcast traffic and lateral movement risk when unmanaged endpoints connect to access ports.',
    approach:
      'Designed a three-VLAN segmentation model (Clinical, Admin, Management) with trunked uplinks, isolated DHCP scopes per subnet, and inter-VLAN access restrictions.',
    architecture:
      'Core Router-on-a-Stick gateway (10.10.1.1/24) connected over an 802.1Q trunk to a managed Layer 2 access switch partitioning VLAN 10 Clinical (10.10.10.0/24), VLAN 20 Admin (10.10.20.0/24), and VLAN 99 Management (10.10.99.0/24).',
    architectureNodes: [
      'Gateway Router (10.10.x.1)',
      '802.1Q Trunk Link',
      'VLAN 10 · Clinical',
      'VLAN 20 · Admin',
      'VLAN 99 · Management',
    ],
    deployment:
      'Validated in a virtualized switch and router lab topology using sanitized RFC 1918 addressing and port-level documentation.',
    tools: ['Managed L2 Switch CLI', '802.1Q VLANs', 'DHCP Relay', 'Spanning Tree'],
    result:
      'Verified broadcast domain isolation across subnets and restricted management interface access exclusively to VLAN 99.',
    lessonsLearned:
      'Maintaining an accurate port-to-VLAN mapping sheet prior to cutover prevents trunk mismatch downtime during switch maintenance.',
    codeTitle: 'Sanitized Switch VLAN & Trunk Configuration',
    codeSnippet: `vlan 10
 name CLINICAL_WORKSTATIONS
vlan 20
 name ADMIN_OPERATIONS
vlan 99
 name SWITCH_MGMT
!
interface GigabitEthernet0/1
 description UPLINK_TO_GATEWAY
 switchport mode trunk
 switchport trunk allowed vlan 10,20,99
!
interface range FastEthernet0/1 - 8
 switchport mode access
 switchport access vlan 10
 spanning-tree portfast`,
  },
  {
    id: 'endpoint-access-baseline',
    title: 'Windows Workstation & Access Control Baseline',
    category: 'Cybersecurity',
    summary:
      'Read-only PowerShell audit baseline verifying local firewall profiles, privilege separation, and legacy SMBv1 protocol status on Windows endpoints.',
    timeframe: 'Security Hardening Utility',
    tags: ['Windows Server', 'PowerShell', 'Access Control'],
    repoUrl: 'https://github.com/ekw8724',
    problem:
      'Shared operational workstations often retain inconsistent firewall states, overly broad local administrator permissions, or legacy SMB protocols.',
    approach:
      'Created a structured endpoint verification checklist aligned with least-privilege access control and automated non-destructive inspection checks.',
    architecture:
      'Read-only PowerShell inspection script -> Firewall profile & protocol verification -> Local Administrators group audit -> Structured CSV summary.',
    architectureNodes: [
      'Audit Script (.ps1)',
      'Firewall Profile Check',
      'Local Admin Group Audit',
      'SMBv1 Protocol Check',
      'CSV Triage Report',
    ],
    deployment:
      'Tested on local Windows lab virtual machines with standard user and domain-joined configurations.',
    tools: ['Windows Server', 'PowerShell', 'Access Control', 'Local Security Policy'],
    result:
      'Standardized workstation security verification into a repeatable sub-minute read-only check before endpoint deployment.',
    lessonsLearned:
      'Running read-only audits prior to remediation establishes a clean baseline and prevents accidental disruption to legacy peripheral drivers.',
    codeTitle: 'Read-Only Endpoint Baseline Check (PowerShell)',
    codeSnippet: `$report = [PSCustomObject]@{
  Host = $env:COMPUTERNAME
  DomainFirewall = (Get-NetFirewallProfile -Profile Domain).Enabled
  PublicFirewall = (Get-NetFirewallProfile -Profile Public).Enabled
  SMBv1Enabled = (Get-WindowsOptionalFeature -Online -FeatureName SMB1Protocol).State
}
$report | Format-Table -AutoSize`,
  },
  {
    id: 'lan-fault-isolation-runbook',
    title: 'Layer 1–3 LAN Fault Isolation Runbook',
    category: 'IT Systems',
    summary:
      'Structured bottom-up diagnostic sequence for isolating physical link drops, switch port errors, DHCP failures, and DNS timeouts.',
    timeframe: 'IT Support Runbook',
    tags: ['LAN Troubleshooting', 'OSI Diagnostics', 'CLI Utilities'],
    repoUrl: 'https://github.com/ekw8724',
    problem:
      'Ad-hoc workstation troubleshooting during busy operational hours leads to skipped physical checks and longer resolution times.',
    approach:
      'Codified a disciplined OSI Layer 1 to Layer 3 triage workflow combining physical link testing with targeted CLI verification commands.',
    architecture:
      'Support Ticket -> L1 Cable & Wall Jack Test -> L2 Switch Port & ARP Table -> L3 Gateway & DNS Resolution -> Incident Handoff Log.',
    architectureNodes: [
      'L1 Cable & Link LED',
      'L2 Switch Port & MAC',
      'L3 DHCP & Gateway Ping',
      'DNS Resolution Test',
      'Incident Handoff Note',
    ],
    deployment:
      'Structured for daily field IT support operations and technician shift handoffs.',
    tools: ['Ethernet Cable Tester', 'ipconfig / ping / tracert', 'nslookup', 'Switch Port Logs'],
    result:
      'Separates endpoint NIC faults from upstream switch or DNS issues consistently and produces clean escalation notes.',
    lessonsLearned:
      'Testing patch cords and keystone jacks at Layer 1 first eliminates a high proportion of intermittent workstation disconnects.',
    codeTitle: 'Diagnostic Verification Sequence (Windows CLI)',
    codeSnippet: `ipconfig /all
arp -a
ping 192.0.2.1 -n 4
nslookup intranet.example.test
tracert -d 198.51.100.10`,
  },
];

export const FEATURED_PROJECT =
  PROJECTS.find((project) => project.isFeatured) ?? PROJECTS[0];

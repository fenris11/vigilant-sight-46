export type Severity = "critical" | "warning" | "info" | "low";

export interface LogEntry {
  timestamp: string;
  eventId: string;
  source: string;
  severity: Severity;
  description: string;
}

const now = new Date();
const ts = (minutesAgo: number) => {
  const d = new Date(now.getTime() - minutesAgo * 60000);
  return d.toISOString().replace("T", " ").slice(0, 19);
};

export const userLogs: LogEntry[] = [
  { timestamp: ts(2), eventId: "USR-4821", source: "admin@corp.net", severity: "critical", description: "Brute-force login detected — 47 failed attempts in 2 min" },
  { timestamp: ts(5), eventId: "USR-4820", source: "j.smith@corp.net", severity: "warning", description: "Login from unrecognized geo-location (Lagos, NG)" },
  { timestamp: ts(8), eventId: "USR-4819", source: "m.jones@corp.net", severity: "info", description: "Password changed successfully" },
  { timestamp: ts(12), eventId: "USR-4818", source: "svc-deploy", severity: "warning", description: "Service account accessed outside maintenance window" },
  { timestamp: ts(15), eventId: "USR-4817", source: "r.chen@corp.net", severity: "low", description: "MFA re-enrollment completed" },
  { timestamp: ts(22), eventId: "USR-4816", source: "admin@corp.net", severity: "critical", description: "Privilege escalation: user added to Domain Admins" },
  { timestamp: ts(30), eventId: "USR-4815", source: "k.lee@corp.net", severity: "info", description: "Session timeout — user re-authenticated" },
  { timestamp: ts(45), eventId: "USR-4814", source: "t.wang@corp.net", severity: "warning", description: "Concurrent sessions detected from 3 different IPs" },
  { timestamp: ts(60), eventId: "USR-4813", source: "guest-wifi", severity: "low", description: "Guest account login from lobby kiosk" },
  { timestamp: ts(90), eventId: "USR-4812", source: "b.taylor@corp.net", severity: "info", description: "Account unlocked by helpdesk" },
];

export const networkLogs: LogEntry[] = [
  { timestamp: ts(1), eventId: "NET-7701", source: "10.0.14.88", severity: "critical", description: "C2 beacon detected — outbound to 185.220.101.42:443" },
  { timestamp: ts(3), eventId: "NET-7700", source: "192.168.1.105", severity: "warning", description: "DNS tunneling pattern detected on port 53" },
  { timestamp: ts(7), eventId: "NET-7699", source: "10.0.3.22", severity: "info", description: "SSL certificate renewed for internal gateway" },
  { timestamp: ts(11), eventId: "NET-7698", source: "172.16.0.50", severity: "critical", description: "Port scan detected — 1,024 ports probed in 8 seconds" },
  { timestamp: ts(18), eventId: "NET-7697", source: "10.0.8.14", severity: "warning", description: "Unusual data exfiltration volume: 2.4 GB outbound" },
  { timestamp: ts(25), eventId: "NET-7696", source: "192.168.4.200", severity: "low", description: "DHCP lease renewed" },
  { timestamp: ts(33), eventId: "NET-7695", source: "10.0.14.91", severity: "critical", description: "ARP spoofing detected on VLAN 20" },
  { timestamp: ts(48), eventId: "NET-7694", source: "10.0.1.1", severity: "info", description: "Routing table updated — OSPF convergence complete" },
  { timestamp: ts(55), eventId: "NET-7693", source: "192.168.1.33", severity: "warning", description: "TLS 1.0 connection attempt blocked" },
  { timestamp: ts(72), eventId: "NET-7692", source: "10.0.5.60", severity: "low", description: "NTP sync completed with stratum 2 server" },
];

export const fileLogs: LogEntry[] = [
  { timestamp: ts(4), eventId: "FIL-3301", source: "admin@corp.net", severity: "critical", description: "Mass file deletion: 847 files removed from /finance/reports" },
  { timestamp: ts(6), eventId: "FIL-3300", source: "j.smith@corp.net", severity: "warning", description: "Sensitive file accessed: employee_salaries_2025.xlsx" },
  { timestamp: ts(10), eventId: "FIL-3299", source: "svc-backup", severity: "info", description: "Nightly backup completed — 12.8 TB archived" },
  { timestamp: ts(16), eventId: "FIL-3298", source: "m.jones@corp.net", severity: "warning", description: "USB drive mounted with executable files detected" },
  { timestamp: ts(20), eventId: "FIL-3297", source: "r.chen@corp.net", severity: "low", description: "Document shared via approved cloud storage" },
  { timestamp: ts(28), eventId: "FIL-3296", source: "unknown", severity: "critical", description: "Ransomware signature detected in uploaded .zip file" },
  { timestamp: ts(35), eventId: "FIL-3295", source: "k.lee@corp.net", severity: "info", description: "File permissions updated on /shared/engineering" },
  { timestamp: ts(50), eventId: "FIL-3294", source: "t.wang@corp.net", severity: "warning", description: "Large file upload: database_dump.sql (4.2 GB)" },
  { timestamp: ts(65), eventId: "FIL-3293", source: "svc-deploy", severity: "low", description: "Config file versioned — terraform.tfstate" },
  { timestamp: ts(80), eventId: "FIL-3292", source: "admin@corp.net", severity: "info", description: "Audit log exported to compliance archive" },
];

export const firewallLogs: LogEntry[] = [
  { timestamp: ts(1), eventId: "FWL-9901", source: "45.33.32.156", severity: "critical", description: "Inbound exploit attempt blocked — CVE-2024-3094 (xz backdoor)" },
  { timestamp: ts(4), eventId: "FWL-9900", source: "91.189.91.48", severity: "warning", description: "Geo-blocked traffic from sanctioned region (RU)" },
  { timestamp: ts(9), eventId: "FWL-9899", source: "10.0.2.15", severity: "info", description: "Firewall rule #47 updated — allow HTTPS outbound" },
  { timestamp: ts(14), eventId: "FWL-9898", source: "203.0.113.42", severity: "critical", description: "DDoS mitigation activated — 45k req/s from botnet" },
  { timestamp: ts(19), eventId: "FWL-9897", source: "198.51.100.7", severity: "warning", description: "Repeated connection attempts on deprecated port 8080" },
  { timestamp: ts(27), eventId: "FWL-9896", source: "10.0.0.1", severity: "low", description: "Scheduled rule audit passed — all rules compliant" },
  { timestamp: ts(36), eventId: "FWL-9895", source: "185.220.101.1", severity: "critical", description: "Known Tor exit node blocked attempting SSH access" },
  { timestamp: ts(44), eventId: "FWL-9894", source: "172.16.0.100", severity: "info", description: "VPN tunnel re-established to branch office" },
  { timestamp: ts(58), eventId: "FWL-9893", source: "10.0.14.5", severity: "warning", description: "Internal host attempting outbound IRC connection" },
  { timestamp: ts(75), eventId: "FWL-9892", source: "192.168.1.1", severity: "low", description: "Firmware update available for perimeter firewall" },
];

export const overviewMetrics = {
  totalEvents: 24847,
  activeThreats: 12,
  blockedIPs: 1483,
  criticalAlerts: 4,
};

export const eventsByCategory = [
  { name: "00:00", user: 120, network: 85, file: 45, firewall: 200 },
  { name: "04:00", user: 80, network: 65, file: 30, firewall: 150 },
  { name: "08:00", user: 320, network: 180, file: 120, firewall: 280 },
  { name: "12:00", user: 450, network: 220, file: 180, firewall: 350 },
  { name: "16:00", user: 380, network: 310, file: 200, firewall: 420 },
  { name: "20:00", user: 200, network: 150, file: 90, firewall: 300 },
];

export const severityBreakdown = [
  { name: "Critical", value: 18, fill: "hsl(0, 72%, 55%)" },
  { name: "Warning", value: 42, fill: "hsl(38, 92%, 55%)" },
  { name: "Info", value: 85, fill: "hsl(210, 80%, 55%)" },
  { name: "Low", value: 63, fill: "hsl(150, 60%, 45%)" },
];

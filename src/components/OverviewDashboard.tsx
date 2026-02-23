import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  overviewMetrics,
  eventsByCategory,
  severityBreakdown,
} from "@/data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { ShieldAlert, Ban, Activity, AlertTriangle } from "lucide-react";

const metricCards = [
  {
    title: "Total Events",
    value: overviewMetrics.totalEvents.toLocaleString(),
    icon: Activity,
    accent: "text-primary",
    glow: "glow-primary",
  },
  {
    title: "Active Threats",
    value: overviewMetrics.activeThreats,
    icon: AlertTriangle,
    accent: "text-warning",
    glow: "glow-warning",
  },
  {
    title: "Critical Alerts",
    value: overviewMetrics.criticalAlerts,
    icon: ShieldAlert,
    accent: "text-destructive",
    glow: "glow-destructive",
  },
  {
    title: "Blocked IPs",
    value: overviewMetrics.blockedIPs.toLocaleString(),
    icon: Ban,
    accent: "text-primary",
    glow: "glow-primary",
  },
];

const BAR_COLORS = {
  user: "hsl(185, 70%, 50%)",
  network: "hsl(210, 80%, 55%)",
  file: "hsl(38, 92%, 55%)",
  firewall: "hsl(0, 72%, 55%)",
};

export function OverviewDashboard() {
  return (
    <div className="space-y-6">
      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {metricCards.map((m) => (
          <Card key={m.title} className={`bg-card border-border ${m.glow}`}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className={`rounded-lg bg-muted p-2.5 ${m.accent}`}>
                <m.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{m.title}</p>
                <p className={`text-2xl font-bold font-mono ${m.accent}`}>
                  {m.value}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2 bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Events by Category — Last 24h
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={eventsByCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 14%, 20%)" />
                <XAxis dataKey="name" stroke="hsl(215, 14%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(215, 14%, 55%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 18%, 13%)",
                    border: "1px solid hsl(220, 14%, 20%)",
                    borderRadius: 8,
                    color: "hsl(210, 20%, 92%)",
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="user" name="User" fill={BAR_COLORS.user} radius={[3, 3, 0, 0]} />
                <Bar dataKey="network" name="Network" fill={BAR_COLORS.network} radius={[3, 3, 0, 0]} />
                <Bar dataKey="file" name="File" fill={BAR_COLORS.file} radius={[3, 3, 0, 0]} />
                <Bar dataKey="firewall" name="Firewall" fill={BAR_COLORS.firewall} radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Severity Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <PieChart>
                <Pie
                  data={severityBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {severityBreakdown.map((entry, i) => (
                    <Cell key={i} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 18%, 13%)",
                    border: "1px solid hsl(220, 14%, 20%)",
                    borderRadius: 8,
                    color: "hsl(210, 20%, 92%)",
                    fontSize: 12,
                  }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ fontSize: 12, color: "hsl(215, 14%, 55%)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

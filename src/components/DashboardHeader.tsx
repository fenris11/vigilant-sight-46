import { Activity, AlertTriangle, ShieldAlert, LogOut } from "lucide-react";
import { overviewMetrics } from "@/data/mockData";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  const { signOut, user } = useAuth();

  return (
    <header className="flex items-center justify-between border-b border-border bg-card px-4 py-3 md:px-6">
      <div className="flex items-center gap-2 md:hidden w-10" />
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 text-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-muted-foreground">System Status:</span>
          <span className="font-medium text-success">Active</span>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-1.5 text-destructive">
          <ShieldAlert className="h-4 w-4" />
          <span className="font-semibold">{overviewMetrics.criticalAlerts}</span>
          <span className="hidden sm:inline text-muted-foreground">Critical</span>
        </div>
        <div className="flex items-center gap-1.5 text-warning">
          <AlertTriangle className="h-4 w-4" />
          <span className="font-semibold">{overviewMetrics.activeThreats}</span>
          <span className="hidden sm:inline text-muted-foreground">Threats</span>
        </div>
        <div className="flex items-center gap-1.5 text-primary">
          <Activity className="h-4 w-4" />
          <span className="font-mono font-semibold">{overviewMetrics.totalEvents.toLocaleString()}</span>
          <span className="hidden sm:inline text-muted-foreground">Events</span>
        </div>
        <Button variant="ghost" size="sm" onClick={signOut} className="text-muted-foreground hover:text-destructive ml-2">
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline ml-1">Logout</span>
        </Button>
      </div>
    </header>
  );
}

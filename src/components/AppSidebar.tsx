import { useState } from "react";
import {
  LayoutDashboard,
  User,
  Globe,
  FolderOpen,
  Shield,
  Menu,
  X,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export type SectionId = "overview" | "user" | "network" | "file" | "firewall";

const navItems: { id: SectionId; label: string; icon: React.ElementType }[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "user", label: "User Logs", icon: User },
  { id: "network", label: "Network Logs", icon: Globe },
  { id: "file", label: "File Access", icon: FolderOpen },
  { id: "firewall", label: "Firewall", icon: Shield },
];

interface Props {
  active: SectionId;
  onNavigate: (id: SectionId) => void;
}

export function AppSidebar({ active, onNavigate }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = (
    <nav className="flex flex-col gap-1 p-3">
      <div className="flex items-center gap-2 px-3 py-4 mb-4">
        <Activity className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold text-foreground tracking-tight">
          SentinelSIEM
        </span>
      </div>
      {navItems.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => {
              onNavigate(item.id);
              setMobileOpen(false);
            }}
            className={`flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary/10 text-primary glow-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
            }`}
          >
            <item.icon className="h-4 w-4" />
            {item.label}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile trigger */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-3 left-3 z-50 md:hidden text-foreground"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-56 border-r border-border bg-sidebar transition-transform md:translate-x-0 md:static md:z-auto ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {nav}
      </aside>
    </>
  );
}

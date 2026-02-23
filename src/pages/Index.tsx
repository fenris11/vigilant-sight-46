import { useState } from "react";
import { AppSidebar, SectionId } from "@/components/AppSidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { OverviewDashboard } from "@/components/OverviewDashboard";
import { LogTable } from "@/components/LogTable";
import { userLogs, networkLogs, fileLogs, firewallLogs } from "@/data/mockData";

const logSections: Record<Exclude<SectionId, "overview">, { title: string; data: typeof userLogs }> = {
  user: { title: "User Activity Logs", data: userLogs },
  network: { title: "Network Traffic Logs", data: networkLogs },
  file: { title: "File Access Logs", data: fileLogs },
  firewall: { title: "Firewall Security Logs", data: firewallLogs },
};

const Index = () => {
  const [section, setSection] = useState<SectionId>("overview");

  return (
    <div className="flex min-h-screen w-full bg-background">
      <AppSidebar active={section} onNavigate={setSection} />
      <div className="flex flex-1 flex-col min-w-0">
        <DashboardHeader />
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {section === "overview" ? (
            <OverviewDashboard />
          ) : (
            <LogTable title={logSections[section].title} data={logSections[section].data} />
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;

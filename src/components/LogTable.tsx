import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search } from "lucide-react";
import type { LogEntry, Severity } from "@/data/mockData";

const severityConfig: Record<Severity, { className: string }> = {
  critical: { className: "bg-destructive/15 text-destructive border-destructive/30" },
  warning: { className: "bg-warning/15 text-warning border-warning/30" },
  info: { className: "bg-info/15 text-info border-info/30" },
  low: { className: "bg-success/15 text-success border-success/30" },
};

interface Props {
  title: string;
  data: LogEntry[];
}

export function LogTable({ title, data }: Props) {
  const [filter, setFilter] = useState("");

  const filtered = useMemo(() => {
    if (!filter) return data;
    const q = filter.toLowerCase();
    return data.filter(
      (e) =>
        e.eventId.toLowerCase().includes(q) ||
        e.source.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.severity.includes(q)
    );
  }, [data, filter]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Filter events…"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-9 bg-muted border-border text-foreground placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="rounded-lg border border-border overflow-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Timestamp</TableHead>
              <TableHead className="text-muted-foreground">Event ID</TableHead>
              <TableHead className="text-muted-foreground">Source</TableHead>
              <TableHead className="text-muted-foreground">Severity</TableHead>
              <TableHead className="text-muted-foreground">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                  No events match your filter.
                </TableCell>
              </TableRow>
            ) : (
              filtered.map((entry) => (
                <TableRow key={entry.eventId} className="border-border hover:bg-muted/50">
                  <TableCell className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                    {entry.timestamp}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-primary">
                    {entry.eventId}
                  </TableCell>
                  <TableCell className="text-sm">{entry.source}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={`text-xs capitalize ${severityConfig[entry.severity].className}`}
                    >
                      {entry.severity}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm max-w-xs truncate">
                    {entry.description}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

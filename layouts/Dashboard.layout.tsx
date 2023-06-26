import { DashboardNav } from "@/components/DashboardNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <DashboardNav />
    </div>
  );
}

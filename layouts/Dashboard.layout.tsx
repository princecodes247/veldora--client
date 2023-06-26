import withAuthHOC from "@/HOCs/withAuthHOC";
import { DashboardNav } from "@/components/DashboardNav";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <DashboardNav />
      {children}
    </div>
  );
}

export default withAuthHOC(DashboardLayout)
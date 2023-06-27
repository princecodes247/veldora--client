import withAuthHOC from "@/HOCs/withAuthHOC";
import { DashboardNav } from "@/components/DashboardNav";
import { IUserData } from "@/interfaces/services";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user: IUserData;
}

function DashboardLayout({ children, user }: DashboardLayoutProps) {
  return (
    <div>
      <DashboardNav user={user} />
      {children}
    </div>
  );
}

export default withAuthHOC(DashboardLayout)
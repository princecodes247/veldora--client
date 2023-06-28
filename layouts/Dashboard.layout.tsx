import withAuthHOC from "@/HOCs/withAuthHOC";
import { DashboardNav } from "@/components/DashboardNav";
import { AuthContext } from "@/contexts/Auth.context";
import { IUserData } from "@/interfaces/services";
import { useContext } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  user?: IUserData;
}

function DashboardLayout({ children, user }: DashboardLayoutProps) {
  const {userData} = useContext(AuthContext)
  return (
    <div>
      <DashboardNav user={user ?? userData ?? {
        email: "",
        phone: "",
        userID: "",
        metadata: {
          theme: "light",
          username:""
        }
      }} />
      {children}
    </div>
  );
}

export default withAuthHOC(DashboardLayout)
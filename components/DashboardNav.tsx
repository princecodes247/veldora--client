import { Input } from "@/components/ui/input";
import TeamSwitcher from "./TeamSwitcher";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import { Search } from "./Search";

export function DashboardNav() {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div className="hidden md:flex">{/* <TeamSwitcher /> */}</div>
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <div className="hidden md:block">{/* <Search /> */}</div>
          <UserNav />
        </div>
      </div>
    </div>
  );
}

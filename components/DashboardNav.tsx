import { Input } from "@/components/ui/input";
import TeamSwitcher from "./TeamSwitcher";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import { Search } from "./Search";
import wordmarkImg from "@/public/branding/wordmark_alt.svg"
import { Logo } from "./Logo";

export function DashboardNav({user}: {
  user: any;
}) {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-4">
        <div className="hidden md:flex">{/* <TeamSwitcher /> */}</div>
        <div className="w-24 text-[#171123]">
          <Logo variant="wordmark"/>
        </div>
        <MainNav className="mx-6" />
        <div className="flex items-center ml-auto space-x-4">
          <div className="hidden md:block">{/* <Search /> */}</div>
          <UserNav user={user} />
        </div>
      </div>
    </div>
  );
}

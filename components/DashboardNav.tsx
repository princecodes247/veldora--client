import { Input } from "@/components/ui/input";
import TeamSwitcher from "./TeamSwitcher";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import { Search } from "./Search";
import wordmarkImg from "@/public/branding/wordmark_alt.svg"
import { Logo } from "./Logo";
import { IUserData } from "@/interfaces/services";
import Link from "next/link";

export function DashboardNav({user}: {
  user: IUserData;
}) {
  return (
    <div className="border-b">
      <div className="flex items-center h-16 px-6 md:px-8">
        <div className="hidden md:flex">{/* <TeamSwitcher /> */}</div>
        <Link href="/dashboard" className="w-8 md:w-8 block text-[#171123]">
          <Logo variant="base"/>
        </Link>
        <MainNav className="mx-4" />
        <div className="flex items-center ml-auto space-x-4">
          <div className="hidden md:block">{/* <Search /> */}</div>
          <UserNav user={user} />
        </div>
      </div>
    </div>
  );
}

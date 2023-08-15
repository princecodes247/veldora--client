import { Input } from "@/components/ui/input";
import TeamSwitcher from "./TeamSwitcher";
import { MainNav } from "./MainNav";
import { UserNav } from "./UserNav";
import { Search } from "./Search";
import wordmarkImg from "@/public/branding/wordmark_alt.svg";
import { Logo } from "./Logo";
import { IUserData } from "@/interfaces/services";
import Link from "next/link";
import { docsUrl } from "@/constants";

export function DashboardNav({
  user,
  children,
}: {
  user: IUserData;
  children?: React.ReactNode;
}) {
  return (
    <div className="border-b">
      <div className="flex items-center px-6 py-2 md:px-8">
        <div className="hidden md:flex">{/* <TeamSwitcher /> */}</div>
        <Link href="/dashboard" className="block w-8 text-[#171123] md:w-8">
          <Logo variant="base" />
        </Link>
        <MainNav className="mx-4" />
        <div className="ml-auto flex items-center space-x-4">
          <Link
            href={docsUrl}
            target="_blank"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Docs
          </Link>
          <div className="hidden md:block">{/* <Search /> */}</div>
          <UserNav user={user} />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

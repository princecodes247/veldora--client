import Image from "next/image";
import DashboardLayout from "@/layouts/Dashboard.layout";
import { Separator } from "@/components/ui/separator";
import { SidebarNav } from "@/components/settings/SettingsSidebarNav";

const sidebarNavItems = [
  {
    title: "Account",
    href: "/settings",
  },
  {
    title: "Appearance",
    href: "/settings/appearance",
  },
  // {
  //   title: "Notifications",
  //   href: "/settings/notifications",
  // },
];

interface SettingsLayoutProps {
  children: React.ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <DashboardLayout>
      <div className="p-8 md:p-16">
        <div className="block space-y-6 p-10 pb-16">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-col gap-8 space-y-8 md:flex-row lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            {children}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

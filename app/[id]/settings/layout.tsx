"use client";

import SettingsLayout from "@/layouts/Settings.layout";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "",
  description: "",
};

export default function SingleBucketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const id = pathname?.split("/")[1] ?? "";
  return <SettingsLayout id={id}>{children}</SettingsLayout>;
}

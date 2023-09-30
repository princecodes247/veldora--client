"use client";
import { DashboardInnerNav } from "@/components/DashboardInnerNav";
import DashboardLayout from "@/layouts/Dashboard.layout";

export default function SingleBucketLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <>
      <DashboardLayout subNav={<DashboardInnerNav />}>
        {children}
      </DashboardLayout>
      {modal}
    </>
  );
}

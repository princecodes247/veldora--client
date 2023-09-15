"use client";
import { DashboardInnerNav } from "@/components/DashboardInnerNav";
import { Logo } from "@/components/Logo";
import DashboardLayout from "@/layouts/Dashboard.layout";

export default function SingleBucketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-[100vh] flex-col items-center justify-center bg-background md:grid md:grid-cols-3 lg:max-w-none lg:px-0">
      <div className="col-span-2 pt-4 md:border-r lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-4 sm:w-[350px]">
          <div className="w-full min-w-[200px] p-4 md:hidden md:min-w-[400px]">
            <div className="pb-8 pl-4">
              <div className="flex w-36 ">
                <Logo variant="wordmark" />
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
      <div className="relative hidden h-full flex-col justify-center p-10 md:flex">
        <div className="relative -left-12 w-44 bg-background py-4">
          <Logo variant="wordmark" />
        </div>

        {/* <div className="relative z-20 mt-auto">
            <AnimeQuote />
          </div> */}
      </div>
    </div>
  );
}

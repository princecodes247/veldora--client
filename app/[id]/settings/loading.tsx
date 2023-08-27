import { Loading } from "@/components/Loading";
import { PageHeaderSkeleton } from "@/components/PageHeaderSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function LoadingPage() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div>
      <div className="min-w-[100px] flex-1">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex-[4] space-y-4 p-4 pt-6 md:p-8">
        <PageHeaderSkeleton />
        <div className="flex h-[120px] flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-4">
          {React.Children.toArray(
            [...Array(4)].map((_, i) => <Skeleton className="h-full" />),
          )}
        </div>
        <div className="flex h-[280px] flex-col gap-4 sm:grid sm:grid-cols-2">
          {React.Children.toArray(
            [...Array(2)].map((_, i) => <Skeleton className="h-full" />),
          )}
        </div>
      </div>
    </div>
  );
}

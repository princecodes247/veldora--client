import { Skeleton } from "./ui/skeleton";

export function PageHeaderSkeleton() {
  return (
    <div className="flex w-full justify-between space-y-6">
      <div className="flex w-full flex-col space-y-0.5">
        <Skeleton className="h-4 w-1/2 rounded " />
        <Skeleton className="h-4 w-1/2 rounded " />
      </div>
      <div></div>
    </div>
  );
}

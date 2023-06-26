import { Skeleton } from "./ui/skeleton";

export function BucketCardSkeleton() {
  return (
    <div className="bg-base-200 flex flex-col items-start rounded-lg border-opacity-10 p-6 px-6">
      <div className="flex w-full items-center gap-4">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-4 w-[90%]" />
      </div>
      <div className="flex w-full flex-col">
        <Skeleton className="mt-2 h-3 w-[70%]" />
        <Skeleton className="mt-4 h-2 w-[40%]" />
      </div>
    </div>
  );
}

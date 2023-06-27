import { Logo } from "./Logo";
import { Skeleton } from "./ui/skeleton";

export function Loading({
  variant
}: {
  variant: "SCREEN" | "INLINE" | "TEXT"
}) {
  return (
    <div className="h-screen flex items-center justify-center">
      <Skeleton className="bg-transparent">

      <div className="w-24 text-[#171123] md:w-32">
      <Logo variant="base"/>
      </div>
      </Skeleton>
    </div>
  );
}

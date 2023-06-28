import clsx from "clsx";
import { Logo } from "./Logo";
import { Skeleton } from "./ui/skeleton";

export function Loading({
  variant
}: {
  variant: "SCREEN" | "INLINE" | "TEXT"
}) {
  return (
    <div className={clsx("flex items-center justify-center", variant === "SCREEN" && "h-screen")}>
      <Skeleton className="bg-transparent">

      <div className="w-16 animate-pulse text-[#171123] md:w-32">
      <Logo variant="base"/>
      </div>
      </Skeleton>
    </div>
  );
}

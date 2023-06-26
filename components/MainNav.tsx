import Link from "next/link";

import { cn } from "@/lib/utils";
import clsx from "clsx";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={clsx(
          "text-sm font-medium transition-colors hover:text-primary",
          "text-muted-foreground",
        )}
      >
        Overview
      </Link>
      {/* <Link
        href="/dashboard/analytics"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Analytics
      </Link> */}
    </nav>
  );
}

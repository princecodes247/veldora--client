import Link from "next/link";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { LucideChevronRight, LucideChevronRightSquare } from "lucide-react";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const id = pathname?.split("/")[1] ?? "";
  return (
    <nav
      className={cn("flex items-center space-x-2 lg:space-x-2", className)}
      {...props}
    >
      <Link
        href="/dashboard"
        className={clsx(
          "mr-6 text-sm font-medium transition-colors hover:text-primary",
          "text-muted-foreground",
        )}
      >
        Veldora
      </Link>
      {id.length > 0 && !id.includes("dashboard") ? (
        <>
          <Link
            href="/dashboard"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            Home
          </Link>
          <span className="-mx-2 self-end">
            <LucideChevronRight size={15} color="#444" />
          </span>

          <Link
            href=""
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {id.substring(0, 30)}
          </Link>
        </>
      ) : null}
    </nav>
  );
}

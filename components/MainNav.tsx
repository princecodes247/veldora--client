import Link from "next/link";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const id = pathname?.split("/")[1] ?? "";
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
        Veldora
      </Link>
      {id.length > 0 && !id.includes("dashboard") ? (
        <Link
          href="/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>
      ) : null}
    </nav>
  );
}

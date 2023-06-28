import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cva } from "class-variance-authority";
import clsx from "clsx";
import { Menu } from "lucide-react";
import { IBucketData } from "@/interfaces";
import { apiUrl } from "@/constants";

const bucketCardVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export function BucketCard({
  bucket,
  listView,
}: {
  bucket: IBucketData;
  listView?: boolean;
}) {
  return (
    <Link href="/bucket/[id]" as={"/bucket/" + bucket._id}>
      <Card
        className={clsx(
          "hover:shadow-md",
          listView && "flex flex-col justify-between gap-2 md:flex-row",
        )}
      >
        <CardHeader
          className={clsx(
            "flex flex-row items-center justify-between space-y-0 pb-1",
            listView && "py-4",
          )}
        >
          <CardTitle className="flex gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatars/01.png" alt="@shadcn" />
              <AvatarFallback className="text-sm">
                {bucket.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-xl font-bold">{bucket.name}</span>
          </CardTitle>
          {/* <DollarSign className="w-4 h-4 text-muted-foreground" /> */}
        </CardHeader>
        <CardContent className={clsx(listView && "py-4")}>
          <div  className="text-xs w-full truncate text-muted-foreground">
            {apiUrl}/bucket/{bucket._id}
          </div>
          <div className="text-sm mt-2 w-full truncate text-muted-foreground">
            {bucket.description }
          </div>
          <div className="mt-4 flex justify-between">
            <p className="text-xs text-muted-foreground">
              {bucket.submissionsCount} submissions
            </p>
          </div>
        </CardContent>
        {listView && (
          <div className="hidden items-center justify-center p-4 md:flex">
            <button>
              <Menu />
            </button>
          </div>
        )}
      </Card>
    </Link>
  );
}

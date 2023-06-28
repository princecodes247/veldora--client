import clsx from "clsx";
import { Logo } from "../Logo";
import Link from "next/link";
import { Button } from "../ui/button";
import { displayErrorMessages } from "@/constants";

export function BucketPage404({
  type
}: {
  type: "INVALID_BUCKET" | "GET_BUCKETS_FAILURE"
}) {

  const message = displayErrorMessages[type]
  return (
<>
<div className="flex flex-col justify-center p-8 py-14 md:p-16 md:pb-8 h-[80vh] items-center gap-4">
    <div className="w-16 md:w-24 text-gray-300">
    <Logo variant="error"/>
    </div>
    
    <h2 className="text-xl md:text-3xl">{message.title}</h2>
    <p> {message.body}</p>
      <Link href="/dashboard">
      <Button>Go back to dashboard</Button>
      </Link>
</div>
</>

  );
}

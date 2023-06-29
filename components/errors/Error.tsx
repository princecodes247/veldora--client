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
<div className="flex flex-col justify-center p-8 py-14 md:p-16 md:pb-8 h-[70vh] items-center gap-4">
    <div className="w-16 md:w-24 text-gray-300">
    <Logo variant="error"/>
    </div>
    
    <h2 className="text-xl text-center max-w-[600px] md:text-3xl">{message.title}</h2>
    <p className="mx-auto text-center text-gray-500 max-w-[600px]"> {message.body}</p>
      <Link href="/dashboard">
      <Button>Go back to dashboard</Button>
      </Link>
</div>
</>

  );
}

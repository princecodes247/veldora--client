import clsx from "clsx";
import { Logo } from "../Logo";
import Link from "next/link";
import { Button } from "../ui/button";

export function BucketPage404() {
  return (
<>
<div className="flex flex-col justify-center p-8 py-14 md:p-16 md:pb-8 h-[80vh] items-center gap-4">
    <div className="w-16 md:w-24 text-gray-300">
    <Logo variant="error"/>
    </div>
    
    <h2 className="text-xl md:text-3xl">Oops! It seems like this bucket got lost in the cloud.</h2>
    <p> We're sorry, but we can't find this bucket.</p>
      <Link href="/dashboard">
      <Button>Go back to dashboard</Button>
      </Link>
</div>
</>

  );
}

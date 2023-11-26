import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";
import { InAppLinks } from "@/constants/nav";
import { docsUrl } from "@/constants";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex w-full justify-between border-b border-white/10 bg-black/50 px-2 font-semibold backdrop-blur-md transition duration-200 ease-in-out sm:px-6">
      <div className="relative p-8 py-4 text-white">
        <Link href={InAppLinks.Home} className="block w-8 md:w-32 ">
          <Logo variant="responsive" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-4 text-white">
        <Link
          href={docsUrl}
          className="hidden px-2 text-sm font-medium tracking-wide text-gray-400 transition-all hover:text-white md:block"
        >
          Docs
        </Link>
        <Link
          href={InAppLinks.Login}
          className="px-2 text-sm font-medium tracking-wide text-gray-400 transition-all hover:text-white"
        >
          Login
        </Link>
        <Link href={InAppLinks.GetStarted}>
          <Button
            variant="outline"
            className="items-center border bg-transparent px-6 font-semibold hover:text-black"
          >
            Get Started
            <ArrowRight size={15} className="-mb-px -mr-2 ml-2" />
          </Button>
        </Link>
      </div>
    </header>
  );
}

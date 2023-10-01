import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-10 flex w-full justify-between border-b border-transparent border-white/10 bg-black/50 px-2 font-semibold backdrop-blur-md backdrop-blur-sm transition duration-200 ease-in-out sm:px-6">
      <div className="relative p-8 py-4 text-white">
        <Link href="/" className="block w-8 md:w-32 ">
          <Logo variant="responsive" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/login">
          <Button
            variant="outline"
            className="border bg-transparent px-6 font-semibold text-white"
          >
            Get Started
            <ArrowRight size={15} className="-mr-2 ml-2" />
          </Button>
        </Link>
      </div>
    </header>
  );
}

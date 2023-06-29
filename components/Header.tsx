import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex font-semibold justify-between px-2 sm:px-6 z-10 top-0 w-full sticky top-0 border-b border-transparent backdrop-blur-sm transition duration-200 ease-in-out border-white/10  bg-black/50 backdrop-blur-md">
      <div className="relative p-8 py-4 text-white">
        <Link href="/" className="block w-16 sm:w-32 h-8">

        <Logo variant="responsive" />
        </Link>
      </div>
      <div className="flex items-center justify-center">
        <Link href="/dashboard">
        <Button variant="outline" className="font-semibold px-6">Get Started
        <ArrowRight size={15} className="-mr-2 ml-2"/>
        </Button>
        </Link>
      </div>
    </header>
  );
}



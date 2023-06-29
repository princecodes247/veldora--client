import clsx from "clsx";
import { Logo } from "./Logo";
import Link from "next/link";

export function Footer() {
  return (
<>
<footer className="relative flex flex-col backdrop-blur-sm p-6 py-14 md:p-16 md:pb-8 bg-transparent border-t border-gray-900 items-center gap-4">
    <div className="w-24">
    <Logo variant="base"/>
    </div>
    <p className="text-gray-400 font-semibold">
    Simplify, Optimize, Succeed with Veldora
    </p>
    <Link href="www.github.com/princecodes247" className="text-gray-600 text-sm hover:underline hover:text-white">
    <p className="">Built by @princecodes247</p>
    </Link>
</footer>
</>

  );
}

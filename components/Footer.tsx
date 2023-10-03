import clsx from "clsx";
import { Logo } from "./Logo";
import Link from "next/link";
import { appData } from "@/constants";

export function Footer() {
  return (
    <>
      <footer className="relative flex flex-col items-center gap-4 p-6 bg-transparent border-t border-gray-900 py-14 backdrop-blur-sm md:p-16 md:pb-8">
        <div className="w-24">
          <Logo variant="base" />
        </div>
        <p className="font-semibold text-gray-400">{appData?.slogan ?? ""}</p>
          <p className="font-semibold text-gray-400 text-center">Made with &#10084; by <Link href="https://www.github.com/princecodes247">@princecodes247</Link> and <Link href="https://www.x.com/dtechoracle">dtechoracle</Link></p>
      </footer>
    </>
  );
}

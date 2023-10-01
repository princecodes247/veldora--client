import clsx from "clsx";
import { Logo } from "./Logo";
import Link from "next/link";

export function Footer() {
  return (
    <>
      <footer className="relative flex flex-col items-center gap-4 border-t border-gray-900 bg-transparent p-6 py-14 backdrop-blur-sm md:p-16 md:pb-8">
        <div className="w-24">
          <Logo variant="base" />
        </div>
        <p className="font-semibold text-gray-400">
          Simplify, Optimize, with Veldora
        </p>
        <Link
          href="https://www.github.com/princecodes247"
          className="text-sm text-gray-600 hover:text-white hover:underline"
        >
          <p className="">Made with @princecodes247's Special Sauce</p>
        </Link>
      </footer>
    </>
  );
}

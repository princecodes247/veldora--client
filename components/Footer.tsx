import clsx from "clsx";
import { Logo } from "./Logo";

export function Footer() {
  return (
<>
<footer className="flex flex-col backdrop-blur-sm p-6 py-14 md:p-16 md:pb-8 bg-transparent border-t border-gray-900 items-center gap-4">
    <div className="w-24">
    <Logo variant="base"/>
    </div>
    <p className="text-gray-400 font-semibold">
    Simplify, Optimize, Succeed with Veldora
    </p>
    <p className="text-gray-600 text-sm">© Veldora 2023. All Rights Reserved.</p>
</footer>
</>

  );
}

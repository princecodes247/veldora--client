import { Logo } from "./Logo";
import { Skeleton } from "./ui/skeleton";

export function Header() {
  return (
    <header className="flex px-6 z-10 top-0 w-full sticky top-0 border-b border-transparent backdrop-blur-sm transition duration-200 ease-in-out border-white/10  bg-black/50 backdrop-blur-md">
      <div className="relative p-8 py-3 text-white">
        <div className="w-32 ">

        <Logo variant="wordmark" />
        </div>
      </div>
    </header>
  );
}



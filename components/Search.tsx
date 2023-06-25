import { Input } from "@/components/ui/input";

export function Search({ className }: { className: string }) {
  return (
    <div className={className}>
      <Input type="search" placeholder="Search..." className="" />
    </div>
  );
}

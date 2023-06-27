import { Input } from "@/components/ui/input";

export function Search({
  className,
  value,
  onChange,
}: {
  className: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={className}>
      <Input
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search..."
        className=""
      />
    </div>
  );
}

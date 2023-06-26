import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function GeographicDistribution({
  data
}: {
data: {
  name: string
  count: number
}[]
}) {
  return (
    <div className="space-y-8">
      {
        data.map((country) => (
          <div className="flex items-center">
       
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{country.name}</p>
          <p className="text-sm text-muted-foreground">
            {/* {country.name} */}
          </p>
        </div>
        <div className="ml-auto font-medium">{country.count}</div>
      </div>
        ))
      }
    </div>
  );
}

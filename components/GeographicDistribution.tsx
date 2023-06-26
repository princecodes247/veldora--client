import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function GeographicDistribution({
  data
}: {
data: {
  name: string
  value: number
}[]
}) {
  return (
    <div className="space-y-8">
      {
        data.map(() => (
          <div className="flex items-center">
       
        <div className="ml-4 space-y-1">
          <p className="text-sm font-medium leading-none">{}</p>
          <p className="text-sm text-muted-foreground">
            olivia.martin@email.com
          </p>
        </div>
        <div className="ml-auto font-medium">+$1,999.00</div>
      </div>
        ))
      }
    </div>
  );
}

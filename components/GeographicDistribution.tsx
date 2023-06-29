import React from "react";
import { NoData } from "./errors/NoData";

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
        React.Children.toArray(
          data.map((country) => (
            <div className="flex items-center">
         
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{country.name.length > 0 ? country.name : "Unknown"}</p>
            <p className="text-sm text-muted-foreground">
              {/* {country.name} */}
            </p>
          </div>
          <div className="ml-auto font-medium">{country.count}</div>
        </div>
          ))
        )
      }
      {data?.length === 0 && <NoData/>}
    </div>
  );
}

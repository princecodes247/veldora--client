import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Skeleton } from "./ui/skeleton";
import { Delete, DeleteIcon, Trash } from "lucide-react";

export function DomainWhitelist({
  onAddDomain,
  isLoading,
  initialDomains,
}: {
  onAddDomain: (domain: string[]) => void;
  isLoading: boolean;
  initialDomains: string[];
}) {
  const [newDomain, setNewDomain] = useState("");
  const handleAddDomain = (newDomain: string) => {
    console.log(newDomain);
    onAddDomain([...initialDomains, newDomain]);
    setNewDomain("");
  };
  return (
    <div className="mb-4">
      <div className="flex gap-2">
        <Input
          id="text"
          value={newDomain}
          onChange={(e) => setNewDomain(e.target.value)}
          type="text"
          placeholder="https://domain.com"
        />
        <Button
          className="whitespace-nowrap"
          onClick={() => handleAddDomain(newDomain)}
          variant={"secondary"}
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Domain"}
        </Button>
      </div>
      <div className="py-2">
        {React.Children.toArray(
          initialDomains.map((domain, index) => (
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">{domain}</p>
              <Button variant={"ghost"}>
                <Trash size={14} />
              </Button>
            </div>
          )),
        )}
      </div>
    </div>
  );
}

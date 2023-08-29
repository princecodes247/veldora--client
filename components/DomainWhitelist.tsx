import React, { useState } from "react";
import { useForm, Controller, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Skeleton } from "./ui/skeleton";
import { Delete, DeleteIcon, Trash } from "lucide-react";

const linkSchema = z.object({
  link: z.string().url(),
});

export function DomainWhitelist({
  onAddDomain,
  isLoading,
  initialDomains,
}: {
  onAddDomain: (domain: string[]) => void;
  isLoading: boolean;
  initialDomains: string[];
}) {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(linkSchema),
  });
  const {
    field: { ref, ...inputProps },
    fieldState: { error },
  } = useController({
    name: "link",
    control,
    defaultValue: "",
  });
  const [newDomain, setNewDomain] = useState("");
  const handleAddDomain = (newDomain: string) => {
    
    onAddDomain([...initialDomains, newDomain]);
    setNewDomain("");
  };
  const handleDeleteDomain = (index: number) => {
    const newDomains = initialDomains.filter((_, i) => i !== index);
    onAddDomain(newDomains);
  };
  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit(({ link }) => handleAddDomain(link))}>
        <div className="flex gap-2">
          <Input
            id="text"
            type="text"
            // ref={ref}
            // {...inputProps}
            {...register("link")}
            // value={newDomain}
            // onChange={(e) => setNewDomain(e.target.value)}
            placeholder="https://domain.com"
          />
          <Button
            className="whitespace-nowrap"
            type="submit"
            variant={"secondary"}
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Domain"}
          </Button>
        </div>
        {error && (
          <span className="pl-2 text-xs text-red-400">{error.message}</span>
        )}
      </form>
      {/*
       */}
      <div className="py-2">
        {React.Children.toArray(
          initialDomains?.map((domain, index) => (
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-600">{domain}</p>
              <Button
                onClick={() => handleDeleteDomain(index)}
                variant={"ghost"}
              >
                <Trash size={14} />
              </Button>
            </div>
          )),
        )}
      </div>
    </div>
  );
}

// import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";
import { IBucketData, IBucketDataWithStats } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import { updateBucket } from "@/services/BucketService";

import { DataStructureBuilder } from "./DataStructureBuilder";

export function BucketStructure({ bucket }: { bucket?: IBucketDataWithStats }) {
  const updateBucketMutation = useMutate(updateBucket, {
    loadingMessage: "Updating Bucket",
  });

  const handleSubmit = () =>
    updateBucketMutation.mutate({
      id: bucket?._id ?? "",
      bucketData: {},
    });

  return (
    <>
      <Card className="max-w-[700px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Data Structure</CardTitle>
          <CardDescription>
            Configure the data structure of your bucket
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <DataStructureBuilder />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button onClick={handleSubmit} className="w-full">
            Update Data Structure
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

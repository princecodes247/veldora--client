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
import { useState } from "react";
import { IBucketDataWithStats } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import { updateBucket } from "@/services/BucketService";

import { DataStructureBuilder } from "./DataStructureBuilder";

export function BucketStructure({ bucket }: { bucket: IBucketDataWithStats }) {
  const [responseStyle, setResponseStyle] = useState(
    bucket?.responseStyle ?? "default",
  );
  const [customRedirect, setCustomRedirect] = useState(
    bucket?.customRedirect ?? "",
  );

  const updateBucketMutation = useMutate(updateBucket, {
    loadingMessage: "Updating Bucket",
  });

  const handleSubmitDataStructure = () =>
    updateBucketMutation.mutate({
      id: bucket?._id ?? "",
      bucketData: {
        customRedirect,
        responseStyle,
      },
    });

  return (
    <>
      <Card className="max-w-[700px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Validations</CardTitle>
          <CardDescription>Restrict data from being saved</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="text"></Label>
            <DataStructureBuilder bucket={bucket} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button onClick={handleSubmitDataStructure} className="w-full">
            Update Data Structure
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

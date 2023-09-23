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
import {
  regenerateAPIToken,
  updateBucket,
  updateWhitelist,
} from "@/services/BucketService";
import DeleteBucketDialog from "./dialogs/DeleteBucket.dialog";
import { APITokenInput } from "./APITokenInput";
import { DomainWhitelist } from "./DomainWhitelist";
import { DataStructureBuilder } from "./DataStructureBuilder";
import { BucketResponseStyle } from "./settings/BucketResponseStyle";

export function BucketConfig({ bucket }: { bucket?: IBucketDataWithStats }) {
  const [bucketName, setBucketName] = useState(bucket?.name ?? "");
  const [bucketDescription, setBucketDescription] = useState(
    bucket?.description ?? "",
  );

  const updateBucketMutation = useMutate(updateBucket, {
    loadingMessage: "Updating Bucket",
  });

  const handleSubmit = () =>
    updateBucketMutation.mutate({
      id: bucket?._id ?? "",
      bucketData: {
        description: bucketDescription,
        name: bucketName,
      },
    });

  return (
    <>
      <Card className="max-w-[700px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">General Configurations</CardTitle>
          <CardDescription>
            You can change details about your form here.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="text">Bucket Name</Label>
            <Input
              id="text"
              value={bucketName}
              onChange={(e) => setBucketName(e.target.value)}
              type="text"
              placeholder="Bucket Name"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="text">Bucket Description</Label>
            <Textarea
              value={bucketDescription}
              onChange={(e) => setBucketDescription(e.target.value)}
              id="text"
              placeholder="Bucket Description"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button
            onClick={handleSubmit}
            disabled={
              bucketDescription.trim().length === 0 ||
              bucketName.trim().length === 0
            }
            className="w-full"
          >
            Update Bucket
          </Button>
        </CardFooter>
      </Card>
      <BucketResponseStyle bucket={bucket} />
      <Card className="max-w-[700px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Delete Bucket</CardTitle>
          <CardDescription>Delete your form bucket</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4"></CardContent>
        <CardFooter className="flex flex-col gap-2">
          <DeleteBucketDialog
            id={bucket?._id ?? ""}
            name={bucket?.name ?? ""}
          />
        </CardFooter>
      </Card>
    </>
  );
}

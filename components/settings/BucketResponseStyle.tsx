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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { useState } from "react";
import { useMutate } from "@/hooks/useMutate";
import { updateBucket } from "@/services/BucketService";
import { IBucketDataWithStats } from "@/interfaces";

export function BucketResponseStyle({
  bucket,
}: {
  bucket?: IBucketDataWithStats;
}) {
  const [responseStyle, setResponseStyle] = useState(
    bucket?.responseStyle ?? "default",
  );
  const [customRedirect, setCustomRedirect] = useState(
    bucket?.customRedirect ?? "",
  );

  const updateBucketMutation = useMutate(updateBucket, {
    loadingMessage: "Updating Bucket",
  });

  const handleSubmitResponseStyle = () =>
    updateBucketMutation.mutate({
      id: bucket?._id ?? "",
      bucketData: {
        customRedirect,
        responseStyle,
      },
    });

  return (
    <Card className="mt-4 max-w-[700px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Response Style</CardTitle>
        <CardDescription>Configure the api response style.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="text"></Label>
          <RadioGroup
            className="py-4"
            value={responseStyle}
            onValueChange={(value: "default" | "json" | "params" | "custom") =>
              setResponseStyle(value)
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="default" id="default" />
              <Label htmlFor="default">Default</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="json" id="json" />
              <Label htmlFor="json">JSON</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="params" id="params" />
              <Label htmlFor="params">Params</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="custom" id="custom" />
              <Label htmlFor="custom">Custom</Label>
            </div>
          </RadioGroup>
        </div>
        {responseStyle === "custom" && (
          <div className="grid gap-2">
            <Label htmlFor="text">Custom Redirect</Label>
            <Input
              id="text"
              value={customRedirect}
              onChange={(e) => setCustomRedirect(e.target.value)}
              type="text"
              placeholder="https://redirect.com"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button onClick={handleSubmitResponseStyle} className="w-full">
          Update Response Style
        </Button>
      </CardFooter>
    </Card>
  );
}

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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useState } from "react";
import { IBucketData, IBucketDataWithStats } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import { regenerateAPIToken, updateBucket } from "@/services/BucketService";
import DeleteBucketDialog from "@/components/dialogs/DeleteBucket.dialog";
import { APITokenInput } from "@/components/APITokenInput";
import { Checkbox } from "@/components/ui/checkbox";
import { QueryObserverLoadingResult, QueryObserverSuccessResult } from "@tanstack/react-query";

export function BucketConfig({bucket}: {bucket?: QueryObserverSuccessResult<IBucketDataWithStats | undefined, unknown> | QueryObserverLoadingResult<IBucketDataWithStats | undefined, unknown>}) {
    const [bucketName, setBucketName] = useState(bucket?.data?.name ?? "")
    const [bucketDescription, setBucketDescription] = useState(bucket?.data?.description ?? "")
    const [responseStyle, setResponseStyle] = useState(bucket?.data?.responseStyle ?? "default")
    const [customRedirect, setCustomRedirect] = useState(bucket?.data?.customRedirect ?? "")

    const updateBucketMutation = useMutate(updateBucket, {
        loadingMessage: "Updating Bucket"
    })

    const handleSubmit = () => updateBucketMutation.mutate({id: bucket?.data?._id ??"", bucketData: {
        customRedirect,
        description: bucketDescription,
        name: bucketName,
        responseStyle
    }})

    const regenerateAPITokenMutation = useMutate(regenerateAPIToken, 
      {
        successMessage: "Token Generated",
        onSuccessFunction: () => bucket?.refetch()
      })

      const handleRegenerateAPIToken = () => {
        regenerateAPITokenMutation.mutate({
        id: bucket?.data?._id ?? ""
      })
    }
  return (
    <>
    <Card className="max-w-[700px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Bucket Configurations</CardTitle>
        <CardDescription>
          You can change details about your form here.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="text">Bucket Name</Label>
          <Input id="text" value={bucketName} onChange={(e) => setBucketName(e.target.value)} type="text" placeholder="Bucket Name" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="text">Bucket Description</Label>
          <Textarea value={bucketDescription} onChange={(e) => setBucketDescription(e.target.value)} id="text" placeholder="Bucket Description" />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="text">Response Style</Label>
          <RadioGroup className="py-4" value={responseStyle} onValueChange={(value: "default" | "json" | "params" | "custom") => setResponseStyle(value)}>
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
       {responseStyle === "custom" && <div className="grid gap-2">
          <Label htmlFor="text">Custom Redirect</Label>
          <Input id="text" value={customRedirect} onChange={(e) => setCustomRedirect(e.target.value)}  type="text" placeholder="https://redirect.com" />
        </div>}
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button onClick={handleSubmit} disabled={(responseStyle === "custom" && customRedirect.trim().length === 0) || bucketDescription.trim().length === 0 || bucketName.trim().length === 0} className="w-full">Update Bucket</Button>
      </CardFooter>
    </Card>
    <Card className="max-w-[700px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">API Configurations</CardTitle>
        <CardDescription>
          Change how your API works
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <APITokenInput token={bucket?.data?.accessToken ?? ""} regenerateFunction={handleRegenerateAPIToken} isRegenerating={bucket?.isLoading ?? true}/>

          <div className="flex items-center cursor-pointer space-x-2">
      <Checkbox id="token-security" />
      <label
        htmlFor="token-security"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Enable API Token Security
      </label>
    </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {/* <DeleteBucketDialog id={bucket?.data?._id ?? ""} name={bucket?.data?.name ?? ""}/> */}
      </CardFooter>
    </Card>
    <Card className="max-w-[700px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Delete Bucket</CardTitle>
        <CardDescription>
          Delete your form bucket
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
    
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <DeleteBucketDialog id={bucket?.data?._id ?? ""} name={bucket?.data?.name ?? ""}/>
      </CardFooter>
    </Card>
    </>
  );
}

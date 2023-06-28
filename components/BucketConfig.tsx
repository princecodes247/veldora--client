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
import { IBucketData } from "@/interfaces";

export function BucketConfig({bucket}: {bucket?: IBucketData}) {
    const [bucketName, setBucketName] = useState(bucket?.name ?? "")
    const [bucketDescription, setBucketDescription] = useState(bucket?.description ?? "")
    const [responseStyle, setResponseStyle] = useState(bucket?.responseStyle ?? "default")
    const [customRedirect, setCustomRedirect] = useState(bucket?.customRedirect ?? "")
  return (
    <Card>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Extra Configurations</CardTitle>
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
          <Input id="text" type="text" placeholder="https://redirect.com" />
        </div>}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card>
  );
}
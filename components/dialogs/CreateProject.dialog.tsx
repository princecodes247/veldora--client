import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useMutate } from "@/hooks/useMutate";
import { createBucket } from "@/services/BucketService";

export default function CreateProjectDialog() {
  const createBucketMutation = useMutate(createBucket, {
    loadingMessage: "",
  });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Bucket</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Form Bucket 🚀</DialogTitle>
          <DialogDescription>
            Buckets are used to gather data from your forms.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="">
              Bucket Name
            </Label>
            <Input
              id="name"
              placeholder="Bubble Project Bucket"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label htmlFor="description" className="text-left">
              Description
            </Label>
            <Textarea
              id="description"
              placeholder="A simple description of your bucket"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={() => createBucketMutation} type="submit">
            Create new Bucket!
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

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
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { clientUrl } from "@/constants";
import { IBucketData } from "@/interfaces";

export default function CreateBucketDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const createBucketMutation = useMutate(createBucket, {
    loadingMessage: "",
    onSuccessFunction: ({ data }) => {
      setOpen(false);
      router.push(clientUrl + "/" + data.data.slug);
    },
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        <form
          onSubmit={() =>
            createBucketMutation.mutate({
              description,
              name,
            })
          }
          className="grid gap-4 py-4"
        >
          <div className="flex flex-col gap-4">
            <Label htmlFor="name" className="">
              Bucket Name
            </Label>
            <Input
              id="name"
              placeholder="Bubble Project Bucket"
              className="col-span-3"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <DialogFooter>
          <Button
            onClick={() =>
              createBucketMutation.mutate({
                description,
                name,
              })
            }
            disabled={
              createBucketMutation.isLoading || name.trim().length === 0
            }
            type="submit"
          >
            {createBucketMutation.isLoading
              ? "Loading..."
              : "Create new Bucket!"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "../ui/textarea";
import { useMutate } from "@/hooks/useMutate";
import { deleteBucket } from "@/services/BucketService";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { clientUrl } from "@/constants";
import { IBucketData } from "@/interfaces";
import { Trash } from "lucide-react";

export default function DeleteBucketDialog({
  id,
  name,
}: {
  id: string;
  name: string;
}) {
  const router = useRouter();
  const deleteBucketMutation = useMutate(deleteBucket, {
    loadingMessage: "",
    onSuccessFunction: ({ data }: { data: IBucketData }) => {
      setOpen(false);
      router.push(clientUrl + "/dashboard");
    },
  });
  const [open, setOpen] = useState(false);
  const [nameToCompare, setNameToCompare] = useState("");
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger className="w-full border">
        <Button variant="destructive" className="w-full">
          <Trash size={16} className="mr-2" />
          Delete Bucket
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete{" "}
            <b>&quot;{name}&quot;</b>
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex flex-col gap-4">
          <Label htmlFor="name" className="">
            To confirm, type &quot;{name}&quot; in the box below
          </Label>
          <Input
            id="name"
            placeholder=""
            className="col-span-3"
            value={nameToCompare}
            onChange={(e) => setNameToCompare(e.target.value)}
          />
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* <AlertDialogAction> */}
          <Button
            onClick={() =>
              deleteBucketMutation.mutate({
                id,
              })
            }
            disabled={
              deleteBucketMutation.isLoading || !(nameToCompare === name)
            }
            type="submit"
          >
            Continue
          </Button>
          {/* </AlertDialogAction> */}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

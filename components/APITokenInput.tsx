import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormDescription } from "./ui/form";
import { useMutate } from "@/hooks/useMutate";
import { regenerateAPIToken } from "@/services/BucketService";

export function APITokenInput({
  token,
  regenerateFunction,
  isRegenerating,
}: {
  token: string;
  regenerateFunction: () => void;
  isRegenerating: boolean;
}) {
  return (
    <div>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="API Token" value={token} />
        <Button
          variant={"outline"}
          onClick={regenerateFunction}
          disabled={isRegenerating}
        >
          Regenerate
        </Button>
      </div>
      <p className="mt-1 text-xs text-gray-500">
        Previous api tokens will stop working after a regeneration.
      </p>
    </div>
  );
}

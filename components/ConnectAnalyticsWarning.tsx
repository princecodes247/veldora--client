import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { docsUrl } from "@/constants";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function ConnectAnalyticsWarning({
  id,
  onClick,
}: {
  id: string;
  onClick: () => void;
}) {
  const router = useRouter();
  return (
    <Alert variant="destructive">
      <AlertTriangleIcon className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        You haven&apos;t setup up your form analytics{" "}
        <Link href={docsUrl} className="underline">
          {" "}
          Let&apos;s fix it
        </Link>
      </AlertDescription>
    </Alert>
  );
}

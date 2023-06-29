import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertTriangleIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/router";

export function ConnectAnalyticsWarning({id, onClick}: {id: string; onClick: () => void}) {
    const router = useRouter()
  return (
    <Alert variant="destructive">
      <AlertTriangleIcon className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        You haven't setup up your form analytics {" "}
        <button className="underline" onClick={() => {
            onClick();
            router.push(`#analytics-setup`)
        }}> Let's fix it</button>
      </AlertDescription>
    </Alert>
  )
}

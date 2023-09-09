import { Button } from "@/components/ui/button";
import { displayErrorMessages } from "@/constants";
import Link from "next/link";



export default function Custom404() {
    return <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-xl md:text-3xl">{displayErrorMessages.UNKNOWN_ERROR.title}</h1>
      <p> {displayErrorMessages.UNKNOWN_ERROR.body}</p>
      <Link href="/dashboard">
      <Button>Go back to dashboard</Button>
      </Link>
    </main>
}
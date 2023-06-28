import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Custom404() {
    return <main className="h-screen flex flex-col gap-6 items-center justify-center">
      <h1 className="text-xl md:text-3xl">Oops! It seems like this bucket got lost in the cloud.</h1>
      <p> We&apos;re sorry, but it&apos;s gone on an unexpected adventure!</p>
      <Link href="/dashboard">
      <Button>Go back to dashboard</Button>
      </Link>
    </main>
}
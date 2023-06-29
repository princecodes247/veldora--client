import { Logo } from "@/components/Logo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import authBG from "@/public/bg_1.jpg";
import AnimeQuote from "@/components/AnimeQuote";
import Head from "next/head";

export default function Subscribed() {
  

  return (
    <>
     <Head>
        <title>Subscribed Successfully - Veldora</title>
        <meta name="description" content="Form data management made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container relative min-h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900">
            <img
              src={authBG.src}
              className="h-full w-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-zinc-900/80" />
          </div>
          <div className="relative z-20 flex items-center gap-4 text-lg font-medium">
            <div className="h-16 w-8">
              <Logo variant="base" />
            </div>
            Veldora
          </div>
          <div className="relative z-20 mt-auto">
            <AnimeQuote />
          </div>
        </div>
        <div className="pt-12 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="w-full min-w-[200px] p-4 md:min-w-[400px]">
              <div className="mx-auto flex h-8 w-24 items-center justify-center md:hidden ">
                <Logo variant="base" />
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-center font-semibold mb-6 text-3xl">Congratulations</h4>
                <p className="text-center">Your Form has been submitted successfully</p>

                <Link className="mt-6" href="/">
                <Button>Check out Veldora</Button>
                </Link>
              </div>
            </div>
            {/* <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
}

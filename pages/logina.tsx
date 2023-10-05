import { Logo } from "@/components/Logo";
import Head from "next/head";
import { useEffect } from "react";

import authBG from "@/public/bg_1.jpg";
import AnimeQuote from "@/components/AnimeQuote";
import { useQuery } from "@tanstack/react-query";
import { wakeUpCall } from "@/services/UserService";

export default function Login() {
  const appID = process.env.NEXT_PUBLIC_APP_ID;

  const wakeUpCallQuery = useQuery({
    queryKey: ["wakeUp"],
    queryFn: wakeUpCall,
  });

  return (
    <>
      <Head>
        <title>Login - Veldora</title>
        <meta name="description" content="Form data management made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container relative min-h-[100vh] flex-col items-center justify-center bg-background md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
                <Logo variant="wordmark" />
              </div>
              {/* <passage-auth app-id={appID}></passage-auth> */}
            </div>
            {/* <p className="px-8 text-sm text-center text-muted-foreground">
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

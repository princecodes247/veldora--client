"use client";
import { Button } from "@/components/ui/button";
import Head from "next/head";
import { usePathname, useRouter } from "next/navigation";
import useBucket from "@/hooks/useBucket";
import useSubmissions from "@/hooks/useSubmissions";
import BucketAnalytics from "@/components/BucketAnalytics";
import { Copy, Trash } from "lucide-react";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useEffect, useMemo, useState } from "react";

import { BucketPage404 } from "@/components/errors/Error";

import { submissionApiUrl } from "@/constants";

import { Loading } from "@/components/Loading";

import { PageHeader } from "@/components/PageHeader";

export default function BucketPage({ id }: { id: string }) {
  const bucket = useBucket(id ?? "", () => {
    // router.push("/404")
  });

  const [isCopied, setIsCopied] = useState(false);
  const { copiedText, copy } = useCopyToClipboard();
  const handleCopy = (text: string) => {
    copy(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>{bucket.data?.name ?? ""} - Veldora</title>

        <meta name="description" content="Form data managment made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {bucket.isError && <BucketPage404 type="INVALID_BUCKET" />}

      {bucket.isLoading && (
        <div className="flex h-[85vh] items-center justify-center border">
          <div className="w-16 animate-pulse text-[#171123] md:w-32">
            <Loading variant="INLINE" />
          </div>
        </div>
      )}
      {!bucket.isError && !bucket.isLoading && (
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
          <PageHeader
            // title={bucket.data?.name ?? ""}
            // description={bucket.data?.description ?? ""}
            title="Bucket Summary"
            description="View and manage your bucket"
          >
            <p className="w-full text-xs md:w-fit">
              {submissionApiUrl}/{bucket.data?.slug ?? ""}
            </p>
            <TooltipProvider>
              <Tooltip open={isCopied}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() =>
                      handleCopy(
                        submissionApiUrl + "/" + (bucket.data?.slug ?? ""),
                      )
                    }
                    variant={"ghost"}
                    size={"icon"}
                  >
                    <Copy size={15} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copied to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </PageHeader>

          <BucketAnalytics goToSetupTab={() => {}} bucket={bucket.data} />
        </div>
      )}
    </>
  );
}

"use client";

import Head from "next/head";

import { usePathname } from "next/navigation";
import useBucket from "@/hooks/useBucket";

import { BucketPage404 } from "@/components/errors/Error";

import { BucketConfig } from "@/components/BucketConfig";
import { Loading } from "@/components/Loading";

export default function BucketSettingsPage({ id }: { id: string }) {
  const bucket = useBucket(id ?? "", () => {
    // router.push("/404")
  });

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
        <div className="flex-1 space-y-4 p-0 md:p-8">
          <div className="flex w-full justify-between">
            <div>
              {/* <DeleteBucketDialog id={bucket?.data?._id ?? ""} name={bucket?.data?.name ?? ""}/> */}
            </div>
          </div>
          {!bucket.isLoading && <BucketConfig bucket={bucket.data} />}
        </div>
      )}
    </>
  );
}

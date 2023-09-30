"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from "next/head";
import { DataTable } from "@/components/Table/DataTable";
import { submissionColumns } from "@/constants/mock/Columns";
import { usePathname, useRouter } from "next/navigation";
import useBucket from "@/hooks/useBucket";

import { useEffect, useMemo, useState } from "react";
import DashboardLayout from "@/layouts/Dashboard.layout";
import DeleteBucketDialog from "@/components/dialogs/DeleteBucket.dialog";
import { BucketPage404 } from "@/components/errors/Error";
import { HowToSetup } from "@/components/HowToSetup";
import { apiUrl, openApiUrl, submissionApiUrl } from "@/constants";
import { BucketConfig } from "@/components/BucketConfig";
import { Loading } from "@/components/Loading";
import { PaginationState, Updater } from "@tanstack/react-table";
import { PageHeader } from "@/components/PageHeader";
import { BucketHow } from "@/components/BucketHow";

export default function BucketAPIPage({ id }: { id: string }) {
  const bucket = useBucket(id ?? "", () => {
    // router.push("/404")
  });

  return (
    <>
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
            title={`${bucket.data?.name ?? ""} API`}
            description="A mini API guide"
          />
          <Tabs defaultValue="submit" className="space-y-4 ">
            <div className="w-full overflow-auto">
              <TabsList className="">
                <TabsTrigger value="submit">Submit Data</TabsTrigger>
                <TabsTrigger value="get-stats">Get Stats</TabsTrigger>
                <TabsTrigger value="get-all">Get All Data</TabsTrigger>

                {/* <TabsTrigger value="update-one">Update a Row</TabsTrigger> */}
                {/* <TabsTrigger value="delete-one">Delete a Row</TabsTrigger> */}
              </TabsList>
            </div>
            <div>
              <TabsContent value="submit" className="space-y-4">
                <BucketHow
                  title="Create a Submission"
                  endpoint={`${submissionApiUrl}/${bucket.data?.slug}`}
                  method="POST"
                  withHTML
                />
              </TabsContent>

              <TabsContent value="get-stats" className="space-y-4">
                <BucketHow
                  title="Get Bucket Stats"
                  accessToken={bucket.data?.accessToken}
                  endpoint={`${openApiUrl}/buckets/stats`}
                  method="GET"
                />
              </TabsContent>

              <TabsContent value="get-all" className="space-y-4">
                <BucketHow
                  title="Get all Submissions"
                  accessToken={bucket.data?.accessToken}
                  endpoint={`${openApiUrl}/buckets`}
                  method="GET"
                />
              </TabsContent>

              <TabsContent value="get-one" className="space-y-4">
                <BucketHow
                  title="Get Submission"
                  endpoint={`${openApiUrl}/submissions`}
                  method="GET"
                />
              </TabsContent>

              <TabsContent value="update-one" className="space-y-4">
                <BucketHow
                  title="Update a Submission"
                  endpoint="/get"
                  method="PUT"
                />
              </TabsContent>

              <TabsContent value="delete-one" className="space-y-4">
                <BucketHow
                  title="Delete a Submission"
                  endpoint="/get"
                  method="POST"
                />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      )}
    </>
  );
}

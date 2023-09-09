"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from "next/head";
import { DataTable } from "@/components/Table/DataTable";
import { submissionColumns } from "@/constants/mock/Columns";
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
import DashboardLayout from "@/layouts/Dashboard.layout";
import DeleteBucketDialog from "@/components/dialogs/DeleteBucket.dialog";
import { BucketPage404 } from "@/components/errors/Error";
import { HowToSetup } from "@/components/HowToSetup";
import { apiUrl } from "@/constants";
import { BucketConfig } from "@/components/BucketConfig";
import { Loading } from "@/components/Loading";
import { PaginationState, Updater } from "@tanstack/react-table";
import { ISubmissionData } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import { deleteSubmissions } from "@/services/BucketService";
import { DashboardInnerNav } from "@/components/DashboardInnerNav";
import { PageHeader } from "@/components/PageHeader";
import { BucketHow } from "@/components/BucketHow";

export default function BucketAPIPage() {
  const router = useRouter();
  const pathname = usePathname();
  const id = pathname?.split("/")[1] ?? "";

  const bucket = useBucket(id ?? "", () => {
    // router.push("/404")
  });
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
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
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
          <PageHeader
            // title={bucket.data?.name ?? ""}
            // description={bucket.data?.description ?? ""}
            title="Bucket API"
            description="A mini API guide"
          />
          <Tabs className="space-y-4 ">
            <div className="w-full overflow-auto">
              <TabsList className="">
                <TabsTrigger value="get-all">Get All Rows</TabsTrigger>
                <TabsTrigger value="get-one">Get a Row</TabsTrigger>

                <TabsTrigger value="create-one">Add a Row</TabsTrigger>
                <TabsTrigger value="delete-one">Delete a Row</TabsTrigger>
                <TabsTrigger value="update-one">Update a Row</TabsTrigger>
              </TabsList>
            </div>
            <div>
              <TabsContent value="get-all" className="space-y-4">
                <BucketHow
                  title="Get all Submissions"
                  endpoint="/get"
                  method="GET"
                />
              </TabsContent>

              <TabsContent value="get-one" className="space-y-4">
                <BucketHow
                  title="Get Submission"
                  endpoint="/get"
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

              <TabsContent value="create-one" className="space-y-4">
                <BucketHow
                  title="Create a Submission"
                  endpoint="/get"
                  method="POST"
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

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
import { BucketStructure } from "@/components/BucketStructure";
import { ISubmissionData } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import { deleteSubmissions } from "@/services/BucketService";
import { DashboardInnerNav } from "@/components/DashboardInnerNav";
import { PageHeader } from "@/components/PageHeader";

export default function BucketConfigPage() {
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

  const submissions = useSubmissions({
    id: id ?? "",
    page: pageIndex,
    pageSize,
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

  const [tab, setTab] = useState(
    submissions.data?.data?.length === 0 ? "how" : "submissions",
  );
  useEffect(() => {
    setTab(submissions.data?.data?.length === 0 ? "how" : "submissions");
  }, [submissions.isLoading]);

  const deleteSubmissionsMutation = useMutate(deleteSubmissions, {
    successMessage: "Submissions Deleted",
    onSuccessFunction: () => {
      submissions.refetch();
    },
  });
  return (
    <>
      <Head>
        <title>{bucket.data?.name ?? ""} - Veldora</title>

        <meta name="description" content="Form data managment made easy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(bucket.isError || submissions.isError) && (
        <BucketPage404 type="INVALID_BUCKET" />
      )}

      {bucket.isLoading && submissions.isLoading && (
        <div className="flex h-[85vh] items-center justify-center border">
          <div className="w-16 animate-pulse text-[#171123]  md:w-32">
            <Loading variant="INLINE" />
          </div>
        </div>
      )}
      {!bucket.isError &&
        !submissions.isError &&
        (!bucket.isLoading || !submissions.isLoading) && (
          <div className="flex-1 p-4 pt-6 space-y-4 md:p-8">
            <PageHeader
              // title={bucket.data?.name ?? ""}
              // description={bucket.data?.description ?? ""}
              title="Bucket Configurations"
              description="Configure your bucket to your liking"
            />

            {!submissions.isLoading && (
              <Tabs value={tab} onValueChange={setTab} className="space-y-4 ">
                <div className="w-full overflow-auto">
                  <TabsList className="">
                    {/* <TabsTrigger value="how">How to Use</TabsTrigger> */}
                    {/* <TabsTrigger value="api">Bucket API</TabsTrigger> */}
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="submissions">Submissions</TabsTrigger>
                    {/* <TabsTrigger value="structure">
                      Bucket Structure
                    </TabsTrigger> */}
                    <TabsTrigger value="config">Configuration</TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent value="how" className="space-y-4">
                  <HowToSetup id={bucket.data?._id ?? ""} />
                </TabsContent>
                <TabsContent value="summary" className="space-y-4">
                  <BucketAnalytics
                    goToSetupTab={() => {
                      setTab("how");
                    }}
                    bucket={bucket.data}
                  />
                </TabsContent>
                <TabsContent value="submissions" className="space-y-4">
                  <DataTable
                    deleteFunction={(rows) =>
                      deleteSubmissionsMutation.mutate({
                        ids: rows.map((row) => row._id),
                      })
                    }
                    data={
                      submissions?.data?.data?.map((submission) => {
                        console.log({ submission });
                        return {
                          ...submission,
                          ...submission.data,
                        };
                      }) ?? []
                    }
                    columns={submissionColumns(
                      Array.from(
                        new Set(
                          submissions?.data?.data?.flatMap((submission) =>
                            Object.keys(submission.data),
                          ),
                        ),
                      ),
                    )}
                    pageIndex={pageIndex}
                    pageSize={pageSize}
                    pageCount={submissions.data.pageInfo.pages}
                    onPaginationChange={setPagination}
                  />
                </TabsContent>
                <TabsContent value="structure" className="space-y-4">
                  <BucketStructure bucket={bucket.data} />
                </TabsContent>

                <TabsContent value="config" className="space-y-4">
                  <BucketConfig bucket={bucket.data} />
                </TabsContent>
              </Tabs>
            )}
          </div>
        )}
    </>
  );
}

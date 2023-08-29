"use client";
import Head from "next/head";
import { DataTable } from "@/components/Table/DataTable";
import { submissionColumns } from "@/constants/mock/Columns";
import { usePathname, useRouter } from "next/navigation";
import useBucket from "@/hooks/useBucket";
import useSubmissions from "@/hooks/useSubmissions";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

import { useEffect, useMemo, useState } from "react";
import { BucketPage404 } from "@/components/errors/Error";
import { Loading } from "@/components/Loading";
import { PaginationState } from "@tanstack/react-table";
import { useMutate } from "@/hooks/useMutate";
import { deleteSubmissions } from "@/services/BucketService";
import { PageHeader } from "@/components/PageHeader";

export default function BucketSubmissionsPage() {
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
          <div className="w-16 animate-pulse text-[#171123] md:w-32">
            <Loading variant="INLINE" />
          </div>
        </div>
      )}
      {!bucket.isError &&
        !submissions.isError &&
        (!bucket.isLoading || !submissions.isLoading) && (
          <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
            <PageHeader
              // title={bucket.data?.name ?? ""}
              // description={bucket.data?.description ?? ""}
              title="Bucket Submissions"
              description="View and manage your bucket submissions"
            />
            {!submissions.isLoading && (
              <DataTable
                deleteFunction={(rows) =>
                  deleteSubmissionsMutation.mutate({
                    ids: rows.map((row) => row._id),
                  })
                }
                data={
                  submissions?.data?.data?.map((submission) => {
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
                        Object.keys(submission?.data ?? {}),
                      ),
                    ),
                  ),
                )}
                pageIndex={pageIndex}
                pageSize={pageSize}
                pageCount={submissions.data.pageInfo.pages}
                onPaginationChange={setPagination}
              />
            )}
          </div>
        )}
    </>
  );
}

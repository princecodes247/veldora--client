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
import SettingsLayout from "@/layouts/Settings.layout";
import DeleteBucketDialog from "@/components/dialogs/DeleteBucket.dialog";
import { BucketPage404 } from "@/components/errors/Error";
import { HowToSetup } from "@/components/HowToSetup";
import { apiUrl } from "@/constants";
import { BucketConfig } from "@/components/BucketConfig";
import { Loading } from "@/components/Loading";
import { PaginationState, Updater } from "@tanstack/react-table";
import { IBucketDataWithStats, ISubmissionData } from "@/interfaces";
import { useMutate } from "@/hooks/useMutate";
import {
  deleteSubmissions,
  regenerateAPIToken,
  updateBucket,
  updateWhitelist,
} from "@/services/BucketService";
import { DashboardInnerNav } from "@/components/DashboardInnerNav";
import { BucketStructure } from "@/components/BucketStructure";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { DomainWhitelist } from "@/components/DomainWhitelist";
import { APITokenInput } from "@/components/APITokenInput";

export default function BucketSecuritySettingsPage() {
  const pathname = usePathname();
  const id = pathname?.split("/")[1] ?? "";

  const bucket = useBucket(id ?? "", () => {
    // router.push("/404")
  });

  const [apiToken, setAPIToken] = useState(bucket.data?.accessToken ?? "");
  const [whitelist, setWhitelist] = useState(bucket.data?.whiteList ?? []);

  const regenerateAPITokenMutation = useMutate(regenerateAPIToken, {
    loadingMessage: "Regenerating API Token",
    successMessage: "API Token Regenerated",
    onSuccessFunction: ({data}) => {
      setAPIToken(data.data);
    },
  });

  const updateWhitelistMutation = useMutate(updateWhitelist, {
    loadingMessage: "Updating Whitelist",
    successMessage: "Whitelist Updated",
    onSuccessFunction: ({ data }) => {
      console.log({ ww: data?.data?.whiteList });
      setWhitelist(data?.data?.whiteList ?? []);
    },
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
        <div className="flex-1 p-0 space-y-4 md:p-8">
          <div className="flex justify-between w-full">
            <div>
              {/* <DeleteBucketDialog id={bucket?.data?._id ?? ""} name={bucket?.data?.name ?? ""}/> */}
            </div>
          </div>
          <div>
            <Card className="max-w-[700px]">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Security</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="text">Authorized domains</Label>
                  <p>
                    Add domain to allow your API request. Add valid domain url.
                    For example https://example.com or https://for.example.com
                  </p>
                  <DomainWhitelist
                    initialDomains={whitelist}
                    isLoading={updateWhitelistMutation.isLoading}
                    onAddDomain={(domains) =>
                      updateWhitelistMutation.mutate({
                        id: bucket.data?._id ?? "",
                        domains,
                      })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="text">API Token</Label>

                  <APITokenInput
                    token={apiToken}
                    regenerateFunction={() =>
                      regenerateAPITokenMutation.mutate({
                        id: bucket.data?._id ?? "",
                      })
                    }
                    isRegenerating={regenerateAPITokenMutation.isLoading}
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-2"></CardFooter>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

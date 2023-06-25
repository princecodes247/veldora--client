import { LayoutGrid, List } from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search } from "@/components/Search";
import { DashboardNav } from "@/components/DashboardNav";
import Head from "next/head";
import { BucketCard } from "@/components/BucketCard";
import CreateBucketDialog from "@/components/dialogs/CreateBucket.dialog";
import useUserBuckets from "@/hooks/useUserBuckets";
import React, { useState } from "react";

export default function Dashboard() {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const buckets = useUserBuckets({
    page,
    pageSize,
  });

  console.log({ buckets: buckets.data?.pages });

  return (
    <>
      <div className="flex flex-col">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <DashboardNav />
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex flex-col justify-between space-y-2 md:flex-row md:items-center">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>

          <Tabs defaultValue="grid-view" className="space-y-4">
            <div className="flex gap-2">
              <Search className="flex-1" />
              <TabsList>
                <TabsTrigger value="grid-view">
                  <LayoutGrid size={18} />
                </TabsTrigger>
                <TabsTrigger value="list-view">
                  <List size={18} />
                </TabsTrigger>
                {/* <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger> */}
              </TabsList>
              {/* <Button>
                <p className="mr-2">Create New</p> <Plus size={14} />
              </Button> */}
              <CreateBucketDialog />
            </div>

            <TabsContent value="grid-view" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {React.Children.toArray(
                  buckets.data?.pages?.map((group) =>
                    group?.map(() => <BucketCard />),
                  ),
                )}
              </div>
            </TabsContent>
            <TabsContent value="list-view" className="space-y-4">
              <div className="flex flex-col gap-4">
                {React.Children.toArray(
                  buckets.data?.pages?.map((group) =>
                    group?.map(() => <BucketCard listView />),
                  ),
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

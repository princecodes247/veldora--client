import { Activity, BarChart, Users, Vote } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Overview } from "@/components/Overview";
import { GeographicDistribution } from "@/components/GeographicDistribution";
import { IBucketDataWithStats } from "@/interfaces";
import { ConnectAnalyticsWarning } from "./ConnectAnalyticsWarning";

export default function BucketAnalytics({
  bucket,
  goToSetupTab,
}: {
  bucket?: IBucketDataWithStats;
  goToSetupTab: () => void;
}) {
  return (
    <>
      {((bucket?.stats?.submissionCount ?? 0) > 0 && ((bucket?.views?.length ?? 0) === 0)) && (
        <ConnectAnalyticsWarning
          onClick={goToSetupTab}
          id={bucket?._id ?? ""}
        />
      )}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Submissions
            </CardTitle>
            <Vote className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bucket?.stats?.submissionCount ?? 0}
            </div>
            {/* <p className="text-xs text-muted-foreground">+0% from last month</p> */}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Conversion Rate
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bucket?.views?.length ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {/* +180.1% from last month */}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Views</CardTitle>
            <BarChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bucket?.views?.length ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {/* +19% from last month */}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Views</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {bucket?.views?.length ?? 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {/* +201 since last hour  */}
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={bucket?.stats?.dailySubmissions} />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Geographic Distribution</CardTitle>
            <CardDescription>
              You reached {bucket?.stats?.countries?.length ?? 0} countries this
              month.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <GeographicDistribution data={bucket?.stats?.countries ?? []} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}

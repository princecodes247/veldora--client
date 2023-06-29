import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Head from "next/head";
import { DataTable } from "@/components/Table/DataTable";
import { submissionColumns } from "@/constants/mock/Columns";
import { useRouter } from "next/router";
import useBucket from "@/hooks/useBucket";
import useSubmissions from "@/hooks/useSubmissions";
import BucketAnalytics from "@/components/BucketAnalytics";
import { Copy, Trash } from "lucide-react";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import DashboardLayout from "@/layouts/Dashboard.layout";
import DeleteBucketDialog from "@/components/dialogs/DeleteBucket.dialog";
import { BucketPage404 } from "@/components/errors/Error";
import { HowToSetup } from "@/components/HowToSetup";
import { apiUrl } from "@/constants";
import { BucketConfig } from "@/components/BucketConfig";

export default function Bucket() {
  const router = useRouter();
  const { id } = router.query as { id: string };

  const bucket = useBucket(id ?? "", () => {
    // router.push("/404")
  });
  const submissions = useSubmissions({
    id: id ?? "",
    page: 1,
    pageSize: 10,
  });
  const [isCopied, setIsCopied] = useState(false)
  const {copiedText, copy} = useCopyToClipboard()
 const handleCopy = (text: string) => {
  copy(text)
  setIsCopied(true)
  setTimeout(() => {
  setIsCopied(false)
  }, 1000)
 }
  return (
    <DashboardLayout>
        <Head>
          <title>{bucket.data?.name ?? ""} - Veldora</title>
          
          <meta name="description" content="Form data managment made easy" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {
        bucket.isError && (
          <BucketPage404 type="INVALID_BUCKET"/>
        )
}
       {
        !bucket.isError && (
          
       <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
       <div className="flex w-full justify-between">
       <div className="flex w-full flex-col space-y-2">
         <h2 className="text-2xl w-full md:text-3xl font-bold tracking-tight">
           {bucket.data?.name ?? ""}
         </h2>
         <p className="w-full">{bucket.data?.description ?? ""}</p>
         <div className="flex w-full flex-col md:flex-row gap-2 justify-start md:items-center">
         <p className="text-xs w-full md:w-fit">{apiUrl}/buckets/{bucket.data?._id ?? ""}</p>
         <TooltipProvider>
<Tooltip open={isCopied} >
 <TooltipTrigger asChild>
 
         <Button onClick={() => handleCopy(apiUrl + "/buckets/" + (bucket.data?._id ?? ""))} variant={"ghost"} size={"icon"}>
           <Copy size={15}/>
         </Button>
 </TooltipTrigger>
 <TooltipContent>
   <p>Copied to clipboard</p>
 </TooltipContent>
</Tooltip>
</TooltipProvider>

         </div>
       </div>
       <div>
       {/* <DeleteBucketDialog id={bucket?.data?._id ?? ""} name={bucket?.data?.name ?? ""}/> */}
       </div>
       </div>
       {
        !submissions.isLoading && (
          <Tabs defaultValue={submissions.data?.length === 0 ? "how" : "submissions"} className="space-y-4 ">
         <div className="w-full overflow-auto">
         <TabsList className="">
           <TabsTrigger value="how">How to Use</TabsTrigger>
           <TabsTrigger value="summary">Summary</TabsTrigger>
           <TabsTrigger value="submissions">Submissions</TabsTrigger>
           <TabsTrigger value="config">Configuration</TabsTrigger>
         </TabsList>

         </div>
         <TabsContent value="how" className="space-y-4">
          <HowToSetup id={bucket.data?._id ?? ""}/>
         </TabsContent>
         <TabsContent value="summary" className="space-y-4">
           <BucketAnalytics bucket={bucket.data} />
         </TabsContent>
         <TabsContent value="submissions" className="space-y-4">
           <DataTable
             data={
               submissions?.data?.map((submission) => {
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
                   submissions?.data?.flatMap((submission) =>
                     Object.keys(submission.data),
                   ),
                 ),
               ),
             )}
           />
         </TabsContent>
         <TabsContent value="config" className="space-y-4">
          <BucketConfig bucket={bucket.data}/>
         </TabsContent>
         
       </Tabs>
        )
       }
     </div>
    
        )
       }
    </DashboardLayout>
  );
}

import { apiUrl } from "@/constants";
import { lazy, Suspense, useState } from "react";
import { Loading } from "./Loading";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { useCopyToClipboard } from "react-use";
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Lazy load the react-syntax-highlighter package
// const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

// Lazy load the atomOneDark style
// @ts-ignore
// const {dark} = lazy(() => import('react-syntax-highlighter/dist/esm/styles/prism'));

const CodeBoard = ({code, language}:{code:string; language:string; }) => {
  const [state, copyToClipboard] = useCopyToClipboard()
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = (text: string) => {
    copyToClipboard(text)
   setIsCopied(true)
   setTimeout(() => {
   setIsCopied(false)
   }, 1000)
  }
  return (
   <div className="relative">
   <SyntaxHighlighter  language={language}>
 {code}
</SyntaxHighlighter>
<TooltipProvider>
<Tooltip open={isCopied}>
 <TooltipTrigger asChild>
 
         <Button className="absolute top-2 right-2" onClick={() => handleCopy(code)} variant={"ghost"} size={"icon"}>
           <Copy size={15}/>
         </Button>
 </TooltipTrigger>
 <TooltipContent>
   <p>Copied to clipboard</p>
 </TooltipContent>
</Tooltip>
</TooltipProvider>
   </div>
)
}
export function HowToSetup({id}:{id: string}) {
  const targetLink = `${apiUrl}/buckets/${id}`
  const step1CodeString = `
  ${targetLink}
  `;
  const step2CodeString = `
  <form action="${targetLink}" method="POST">
  </form>
  `;
  const step3CodeString = `
  <img src="${targetLink}/view" hidden alt="Veldora analytics"/>
  `;

  const step4CodeString = `
  <form action="${targetLink}" method="POST">
    <img src="${targetLink}/view" hidden alt="Veldora analytics"/>
  </form>
  `;
  return (
    <Suspense fallback={<Loading variant="INLINE"/>}>
      <div className="p-3 max-w-[1200px] md:p-8 rounded-xl border">
 
 <div className="pb-16 ">
   <p><b>Step 1</b> - Copy your bucket link</p>
   <CodeBoard code={step1CodeString} language="http"/>
 </div>
 <div className="pb-16">
   <p><b>Step 2</b> - Paste in your form action (Use POST method) and that&apos;s it 🥂</p>
   <div className="rounded-md p-1">
<CodeBoard code={step2CodeString} language="xml"/>
   </div>
 </div>

   <h3 id="analytics-setup" className="text-2xl font-semibold">Additional Steps</h3>
   <div className="pb-12 pt-6">
   <p><b></b> - Add this to your form to get data for the view analytics</p>
   <CodeBoard code={step3CodeString} language="xml"/>
 </div>
 <div className="pb-16">

   <p className="p-4">Like this</p>
   <div className="rounded-md">
   <CodeBoard code={step4CodeString} language="xml"/>
   </div>
 </div>
</div>
    </Suspense>
  );
}

import { apiUrl } from "@/constants";
import { lazy, Suspense } from "react";
import { Loading } from "./Loading";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Lazy load the react-syntax-highlighter package
// const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

// Lazy load the atomOneDark style
// @ts-ignore
// const {dark} = lazy(() => import('react-syntax-highlighter/dist/esm/styles/prism'));
export function HowToSetup({id}:{id: string}) {
  const targetLink = `${apiUrl}/buckets/${id}`
  const step1CodeString = `
  ${targetLink}
  `;
  const step2CodeString = `
  <form action="${targetLink}">
  </form>
  `;
  const step3CodeString = `
  <img src="${targetLink}/view" alt="Veldora analytics"/>
  `;

  const step4CodeString = `
  <form action="${targetLink}">
    <img src="${targetLink}/view" alt="Veldora analytics"/>
  </form>
  `;
  return (
    <Suspense fallback={<Loading variant="INLINE"/>}>
      <div className="p-8 rounded-xl border">
 
 <div className="pb-16 ">
   <p><b>Step 1</b> - Copy your bucket link</p>
   <SyntaxHighlighter  language="http">
 {step1CodeString}
</SyntaxHighlighter>
 </div>
 <div className="pb-16">
   <p><b>Step 2</b> - Paste in your form action (Use POST method) and that&apos;s it 🥂</p>
   <div className="rounded-md p-1">
   <SyntaxHighlighter  language="xml">
 {step2CodeString}
</SyntaxHighlighter>
   </div>
 </div>

   <h3 className="text-2xl font-semibold">Additional Steps</h3>
   <div className="pb-12 pt-6">
   <p><b></b> - Add this to your form for analytics</p>
 
   <SyntaxHighlighter  language="xml">
 {step3CodeString}
</SyntaxHighlighter>
 </div>
 <div className="pb-16">

   <p className="p-4">Like this</p>
   <div className="rounded-md">
   <SyntaxHighlighter  language="xml">
 {step4CodeString}
</SyntaxHighlighter>
   </div>
 </div>
</div>
    </Suspense>
  );
}

import { apiUrl } from "@/constants";
import { lazy, Suspense, useState } from "react";
import { Loading } from "./Loading";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { useCopyToClipboard } from "react-use";
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Lazy load the react-syntax-highlighter package
// const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

// Lazy load the atomOneDark style
// @ts-ignore
// const {dark} = lazy(() => import('react-syntax-highlighter/dist/esm/styles/prism'));

const CodeBoard = ({ code, language }: { code: string; language: string }) => {
  const [state, copyToClipboard] = useCopyToClipboard();
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = (text: string) => {
    copyToClipboard(text);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };
  return (
    <div className="relative">
      <SyntaxHighlighter language={language}>{code}</SyntaxHighlighter>
      <TooltipProvider>
        <Tooltip open={isCopied}>
          <TooltipTrigger asChild>
            <Button
              className="absolute right-2 top-2"
              onClick={() => handleCopy(code)}
              variant={"ghost"}
              size={"icon"}
            >
              <Copy size={15} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Copied to clipboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
export function BucketHow({
  endpoint,
  title,
  description,
  method = "GET",
}: {
  endpoint: string;
  description?: string;
  title: string;
  method: "GET" | "POST" | "DELETE" | "PUT";
}) {
  const targetLink = `${apiUrl}${endpoint}`;
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
    <Suspense fallback={<Loading variant="INLINE" />}>
      <div className="max-w-[1200px] rounded-xl border p-3 md:p-8">
        <h2>{title}</h2>
        <p>{description ?? ""}</p>
        <div className="pb-16">
          <div className="rounded-md p-1">
            <CodeBoard code={step2CodeString} language="xml" />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

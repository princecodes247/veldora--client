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
import { queryParamsColumns } from "@/constants/mock/Columns";
import { DataTable } from "./Table/DataTable";
import { IParamData } from "@/interfaces";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import {
  generateIntegrationSnippets,
  SnippetLanguages,
  SnippetMethods,
} from "@/constants/snippets";
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Lazy load the react-syntax-highlighter package
// const SyntaxHighlighter = lazy(() => import('react-syntax-highlighter'));

// Lazy load the atomOneDark style
// @ts-ignore
// const {dark} = lazy(() => import('react-syntax-highlighter/dist/esm/styles/prism'));
function Component() {
  return (
    <aside className="w-full max-w-lg rounded-lg bg-black p-6 font-mono text-white">
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 text-red-500">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <div className="h-3 w-3 rounded-full bg-yellow-500" />
          <div className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      <div className="mt-4">
        <p className="text-green-400">$ npm install next</p>
        <p className="text-white">+ next@10.2.3</p>
        <p className="text-white">
          added 1 package, and audited 2 packages in 3s
        </p>
        <p className="text-green-400">$</p>
      </div>
    </aside>
  );
}
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
  accessToken,
  params,
  withHTML,
}: {
  endpoint: string;
  description?: string;
  title: string;
  accessToken?: string;
  method: SnippetMethods;
  params?: IParamData[];
  withHTML?: boolean;
}) {
  const [currentLanguage, setCurrentLanguage] = useState<SnippetLanguages>(
    withHTML ? "html" : "fetch",
  );

  const snippets = generateIntegrationSnippets(endpoint, method, accessToken);

  return (
    <Suspense fallback={<Loading variant="INLINE" />}>
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description ?? ""}</p>
      </div>
      <div>
        <div className="flex flex-col gap-2 md:flex-row">
          <Input value={endpoint} />
          <Button>
            <Copy size={14} />
            <p className="ml-2 md:hidden">Copy</p>
          </Button>
        </div>
      </div>
      {params && (
        <div>
          <h3>Query Params</h3>
          <DataTable
            data={params}
            hideToolbar={true}
            columns={queryParamsColumns}
          />
        </div>
      )}
      <div className="max-w-[1200px] rounded-xl border p-3 md:p-8">
        <div className="pb-0">
          <div className="rounded-md p-1">
            <div className="mb-6 flex max-w-[400px]">
              <Select
                onValueChange={(value: SnippetLanguages) => {
                  setCurrentLanguage(value);
                }}
                value={currentLanguage}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a input type" />
                </SelectTrigger>
                <SelectContent className="h-36">
                  {withHTML ? (
                    <SelectItem value={"html"}>
                      <span className="font-medium">HTML</span> -{" "}
                      <span className="text-muted-foreground">Form Data</span>
                    </SelectItem>
                  ) : null}
                  <SelectItem value={"fetch"}>
                    <span className="font-medium">Javascript</span> -{" "}
                    <span className="text-muted-foreground">Fetch</span>
                  </SelectItem>
                  <SelectItem value={"axios"}>
                    <span className="font-medium">Javascript</span> -{" "}
                    <span className="text-muted-foreground">Axios</span>
                  </SelectItem>
                  <SelectItem value={"flutter"}>
                    <span className="font-medium">Flutter</span> -{" "}
                    <span className="text-muted-foreground">Dart</span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <CodeBoard
              code={snippets[currentLanguage].code}
              language={snippets[currentLanguage].language}
            />
          </div>
        </div>
      </div>
    </Suspense>
  );
}

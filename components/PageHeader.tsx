import clsx from "clsx";
import { Logo } from "./Logo";
import Link from "next/link";
import { IBucketData, IBucketDataWithStats } from "@/interfaces";
import { apiUrl } from "@/constants";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { useState } from "react";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";

export function PageHeader({
  title,
  description,
  children,
  buttons,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  buttons?: React.ReactNode;
}) {
  return (
    <div className="flex w-full justify-between space-y-6">
      <div className="flex w-full flex-col space-y-0.5">
        <h2 className="w-full text-xl font-bold tracking-tight md:text-2xl">
          {title ?? ""}
        </h2>
        <p className="w-full text-muted-foreground">{description ?? ""}</p>
        <div className="flex w-full flex-col justify-start gap-2 md:flex-row md:items-center">
          {children}
        </div>
      </div>
      <div>{buttons}</div>
    </div>
  );
}

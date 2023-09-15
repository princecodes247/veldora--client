"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { AuthProvider } from "@/contexts/Auth.context";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children, ...props }: ThemeProviderProps) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
  );

  return (
    
    <NextThemesProvider {...props}>
    <QueryClientProvider client={client}>
      <AuthProvider>
      <TooltipProvider>{children}</TooltipProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
    </NextThemesProvider>
  );
}

export default Providers;

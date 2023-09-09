"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/contexts/Auth.context";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } }),
  );

  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        {children}
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default Providers;

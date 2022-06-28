import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function FullStackPage() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      hello world
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default FullStackPage;

"use client";
import React from "react";

// Importing the QueryClient and QueryClientProvider from @tanstack/react-query.
// QueryClient is used to create a new instance of the query client.
// QueryClientProvider is a context provider that allows child components to access the query client.
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

type Props = {
  children: React.ReactNode;
};

// This allows child components to access the query client using the useQuery hook from @tanstack/react-query.
const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryProvider;

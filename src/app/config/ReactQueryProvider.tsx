'use client';

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React, { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export default function ReactQueryProvider({ children } : PropsWithChildren) {
  return <QueryClientProvider client = {queryClient}>
    {children}
  </QueryClientProvider>
}
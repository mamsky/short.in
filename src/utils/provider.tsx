import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

type chld = {
  children: ReactNode;
};

const Provider = ({ children }: chld) => {
  const [queryclient] = useState(new QueryClient());
  return (
    <QueryClientProvider client={queryclient}>{children}</QueryClientProvider>
  );
};

export default Provider;

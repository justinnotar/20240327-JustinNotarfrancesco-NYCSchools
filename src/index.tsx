import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { DirectoryDataContextProvider } from "./providers/DirectoryDataContextProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DirectoryDataContextProvider>
        <App />
      </DirectoryDataContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

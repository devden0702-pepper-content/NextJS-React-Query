import { QueryClient, QueryClientProvider } from "react-query";
import { persistQueryClient } from "react-query/persistQueryClient-experimental";
import { createWebStoragePersistor } from "react-query/createWebStoragePersistor-experimental";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 20000,
      staleTime: 10000,
    },
  },
});

const sessionStoragePersistor = createWebStoragePersistor({
  storage: window.sessionStorage,
});

persistQueryClient({
  queryClient,
  persistor: sessionStoragePersistor,
});

export default function QueryClientWrapper({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

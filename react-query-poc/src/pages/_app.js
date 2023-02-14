import dynamic from "next/dynamic";

const QueryClientWrapper = dynamic(
  () => {
    return import("../components/QueryClientWrapper/QueryClientWrapper");
  },
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <QueryClientWrapper>
      <Component {...pageProps} />
    </QueryClientWrapper>
  );
}

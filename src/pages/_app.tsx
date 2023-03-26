import MDXComponents from "@components/layout/MDXComponents";
import { RadioProvider } from "@components/radio";
import { MDXProvider } from "@mdx-js/react";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="soulprovidr.fm">
      <MDXProvider components={MDXComponents}>
        <QueryClientProvider client={queryClient}>
          <RadioProvider>
            <Component {...pageProps} />
          </RadioProvider>
        </QueryClientProvider>
      </MDXProvider>
    </PlausibleProvider>
  );
}

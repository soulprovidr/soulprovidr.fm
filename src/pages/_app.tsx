import { Layout } from "@components/layout";
import { WebRadioProvider } from "@components/radio";
import "@styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextPage } from "next";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP> & {
  isStandalone?: boolean;
};

type CustomAppProps = AppProps & {
  Component: CustomNextPage;
};

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: CustomAppProps) {
  return (
    <PlausibleProvider
      customDomain="https://analytics.amnoob.cool"
      domain="soulprovidr.fm"
    >
      <QueryClientProvider client={queryClient}>
        {Component.isStandalone ? (
          <Component {...pageProps} />
        ) : (
          <WebRadioProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </WebRadioProvider>
        )}
      </QueryClientProvider>
    </PlausibleProvider>
  );
}

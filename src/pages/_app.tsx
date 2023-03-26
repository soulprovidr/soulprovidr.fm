import MDXComponents from "@components/layout/MDXComponents";
import { RadioProvider } from "@components/radio";
import { MDXProvider } from "@mdx-js/react";
import "@styles/global.scss";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="soulprovidr.fm">
      <MDXProvider components={MDXComponents}>
        <RadioProvider>
          <Component {...pageProps} />
        </RadioProvider>
      </MDXProvider>
    </PlausibleProvider>
  );
}

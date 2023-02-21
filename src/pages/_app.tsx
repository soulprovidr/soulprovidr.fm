import { MDXProvider } from "@mdx-js/react";
import PlausibleProvider from "next-plausible";
import type { AppProps } from "next/app";
import MDXComponents from "../components/MDXComponents";
import { RadioProvider } from "../components/radio";
import "../styles/global.scss";

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

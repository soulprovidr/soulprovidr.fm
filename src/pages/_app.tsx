import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import MDXComponents from "../components/MDXComponents";
import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={MDXComponents}>
      <Component {...pageProps} />
    </MDXProvider>
  );
}

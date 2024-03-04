import { MDXProvider as MDXJsProvider } from "@mdx-js/react";
import { ReactNode } from "react";
import { MDXComponents } from "./MDXComponents";

interface IMDXProviderProps {
  children: ReactNode;
}

export const MDXProvider = ({ children }: IMDXProviderProps) => (
  <MDXJsProvider components={MDXComponents}>{children}</MDXJsProvider>
);

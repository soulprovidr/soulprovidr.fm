import { MDXProvider } from "@components/mdx";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import css from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => (
  <MDXProvider>
    <Header />
    <main className={css.main}>{children}</main>
    <Footer />
  </MDXProvider>
);

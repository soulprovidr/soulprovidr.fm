import { MDXProvider } from "@components/mdx";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import css from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const { asPath } = useRouter();
  return (
    <MDXProvider>
      <div className={css.layout}>
        <Header />
        <main className={css.main}>{children}</main>
        <Footer className={css.footer} />
      </div>
    </MDXProvider>
  );
};

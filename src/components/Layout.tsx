import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Head, IHeadProps } from "./Head";
import { Header } from "./Header";

import css from "./Layout.module.scss";

interface LayoutProps extends IHeadProps {
  children: ReactNode;
}

export const Layout = ({ children, description, title }: LayoutProps) => (
  <>
    <Head description={description} title={title} />
    <Header />
    <div className={css.container}>
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  </>
);

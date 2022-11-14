import { ReactNode } from "react";
import { Head, HeadProps } from "./Head";
import { Header } from "./Header";
import { Footer } from "./Footer";

import css from "./Layout.module.scss";
import { PanelBear } from "./PanelBear";

interface LayoutProps extends HeadProps {
  children: ReactNode;
}

export const Layout = ({ children, description, title }: LayoutProps) => (
  <>
    <Head description={description} title={title} />
    <PanelBear />
    <Header />
    <div className={css.container}>
      <main className={css.main}>{children}</main>
      <Footer />
    </div>
  </>
);

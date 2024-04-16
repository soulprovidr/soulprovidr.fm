import cx from "classnames";
import { HTMLAttributes } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import css from "./Page.module.scss";

const Wide = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cx(css.wide, className)} {...rest} />
);

interface ContentProps extends HTMLAttributes<HTMLElement> {
  fixed?: boolean;
}

const Content = ({ className, fixed, ...rest }: ContentProps) => (
  <main
    className={cx(css.content, fixed ? css.fixed : css.default, className)}
    {...rest}
  />
);

const Page = ({ children }: HTMLAttributes<HTMLDivElement>) => (
  <div className={css.page}>
    <Header />
    {children}
    <Footer />
  </div>
);

Content.Wide = Wide;

Page.Header = Header;
Page.Content = Content;
Page.Footer = Footer;

export { Page };

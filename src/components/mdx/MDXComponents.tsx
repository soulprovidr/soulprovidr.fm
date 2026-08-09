import { Page } from "@components/page";
import { Link } from "@tanstack/react-router";
import { LinkHTMLAttributes, ReactNode } from "react";

const MDXLink = ({
  children,
  href,
  ...rest
}: LinkHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  return isInternalLink ? (
    <Link to={href} {...(rest as any)}>
      {children}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

interface IMDXWrapperProps {
  children: ReactNode;
}

const MDXWrapper = ({ children }: IMDXWrapperProps) => (
  <Page>
    <Page.Content>{children}</Page.Content>
  </Page>
);

export const MDXComponents = {
  a: MDXLink,
  wrapper: MDXWrapper,
};

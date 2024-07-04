import { Meta } from "@components/meta";
import { Page } from "@components/page";
import Link from "next/link";
import { LinkHTMLAttributes, ReactNode } from "react";

const MDXLink = ({
  children,
  href,
  ...rest
}: LinkHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  return isInternalLink ? (
    <Link href={href} {...rest}>
      {children}
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
};

interface IMDXWrapperProps {
  /** Frontmatter `title` property. */
  title: string;
  /** Frontmatter `description` property.  */
  description: string;
  children: ReactNode;
}

const MDXWrapper = (props: IMDXWrapperProps) => (
  <Page>
    <Meta description={props.description} title={props.title} />
    <Page.Content>{props.children}</Page.Content>
  </Page>
);

export const MDXComponents = {
  a: MDXLink,
  wrapper: MDXWrapper,
};

import { Meta } from "@components/meta";
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
    <a target="_blank" rel="noopener noreferrer" {...rest}>
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
  <>
    <Meta description={props.description} title={props.title} />
    {props.children}
  </>
);

export const MDXComponents = {
  a: MDXLink,
  wrapper: MDXWrapper,
};

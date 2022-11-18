import Link from "next/link";
import { LinkHTMLAttributes } from "react";
import { Layout } from "./Layout";

const CustomLink = (props: LinkHTMLAttributes<HTMLAnchorElement>) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={href} passHref>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
  a: CustomLink,
  wrapper: Layout,
};

export default MDXComponents;

import remarkFrontmatter from "remark-frontmatter";
import { remarkMdxNext } from "remark-mdx-next";

import withMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: ["tsx", "mdx"],
};

const mdxConfig = {
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    remarkPlugins: [remarkFrontmatter, remarkMdxNext],
  },
};

export default withMDX(mdxConfig)(nextConfig);

import type { MDXContent } from "mdx/types";

export interface PostFrontmatter {
  title: string;
  /** Publish date, written as YYYY-MM-DD. */
  date: string;
  description?: string;
  /** Set to true to hide a post from the blog and the feed. */
  draft?: boolean;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  Content: MDXContent;
}

const modules = import.meta.glob<{
  default: MDXContent;
  frontmatter: PostFrontmatter;
}>("../content/blog/*.mdx", { eager: true });

const posts: Post[] = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split("/").pop()!.replace(/\.mdx$/, ""),
    frontmatter: mod.frontmatter,
    Content: mod.default,
  }))
  .filter((post) => !post.frontmatter.draft)
  .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

export const getPosts = () => posts;

export const getPost = (slug: string) =>
  posts.find((post) => post.slug === slug);

import { feed, FeedEntry, FeedKind } from "@content/feed";
import { getPosts } from "./blog";
import { formatMonth } from "./dates";

export type FeedItemKind = FeedKind | "post";

export interface FeedItem extends Omit<FeedEntry, "kind"> {
  kind: FeedItemKind;
  /** Internal link (blog posts); takes the place of `url`. */
  slug?: string;
}

/** All feed entries plus blog posts, newest first. */
export const getFeed = (): FeedItem[] => {
  const posts: FeedItem[] = getPosts().map(({ slug, frontmatter }) => ({
    kind: "post",
    date: frontmatter.date,
    title: frontmatter.title,
    comment: frontmatter.description,
    slug,
  }));
  return [...posts, ...feed].sort((a, b) => b.date.localeCompare(a.date));
};

/** Group items under "November 2026"-style headings, keeping order. */
export const groupByMonth = (items: FeedItem[]) => {
  const groups: { month: string; items: FeedItem[] }[] = [];
  for (const item of items) {
    const month = formatMonth(item.date);
    const last = groups[groups.length - 1];
    if (last?.month === month) last.items.push(item);
    else groups.push({ month, items: [item] });
  }
  return groups;
};

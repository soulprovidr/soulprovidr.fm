import { formatShortDate } from "@lib/dates";
import { FeedItem, FeedItemKind, getFeed, groupByMonth } from "@lib/feed";
import { Link } from "@tanstack/react-router";
import cx from "classnames";
import { ReactNode } from "react";
import css from "./NewsFeed.module.scss";

const LABELS: Record<FeedItemKind, string> = {
  post: "New on the blog",
  article: "Read",
  song: "On repeat",
  album: "Album",
  note: "Note",
};

const svg = (children: ReactNode) => (
  <svg
    aria-hidden
    fill="none"
    height="16"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="16"
  >
    {children}
  </svg>
);

const ICONS: Record<FeedItemKind, ReactNode> = {
  post: svg(
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
  article: svg(
    <>
      <path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2Z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7Z" />
    </>
  ),
  song: svg(
    <>
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </>
  ),
  album: svg(
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2.5" />
    </>
  ),
  note: svg(<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />),
};

const Title = ({ item }: { item: FeedItem }) => {
  if (item.slug) {
    return (
      <Link className={css.title} params={{ slug: item.slug }} to="/blog/$slug">
        {item.title}
      </Link>
    );
  }
  if (item.url) {
    return (
      <a className={css.title} href={item.url} rel="noopener noreferrer" target="_blank">
        {item.title}
        <span aria-hidden className={css.external}>
          ↗
        </span>
      </a>
    );
  }
  return <span className={css.title}>{item.title}</span>;
};

const Entry = ({ item }: { item: FeedItem }) => (
  <li className={cx(css.entry, css[item.kind])}>
    <span className={css.icon}>{ICONS[item.kind]}</span>
    <div className={css.body}>
      <div className={css.meta}>
        <span className={css.label}>{LABELS[item.kind]}</span>
        <span aria-hidden>·</span>
        <time dateTime={item.date}>{formatShortDate(item.date)}</time>
      </div>
      <Title item={item} />
      {item.by && <p className={css.by}>{item.by}</p>}
      {item.comment && <p className={css.comment}>{item.comment}</p>}
    </div>
    {item.image && <img alt="" className={css.cover} loading="lazy" src={item.image} />}
  </li>
);

export const NewsFeed = () => {
  const groups = groupByMonth(getFeed());

  return (
    <section className={css.feed}>
      {groups.map(({ month, items }) => (
        <div className={css.month} key={month}>
          <h3 className={css.monthHeading}>{month}</h3>
          <ul className={css.entries}>
            {items.map((item) => (
              <Entry item={item} key={`${item.date}-${item.title}`} />
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

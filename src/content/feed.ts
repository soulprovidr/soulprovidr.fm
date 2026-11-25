// The news feed on the homepage.
//
// Add new things to the top of this list. Blog posts from src/content/blog are
// added to the feed automatically, so you don't need to list them here.
//
//   kind     "article" | "song" | "album" | "note"
//   date     YYYY-MM-DD
//   title    What it is (for a note, the note itself)
//   by       Author, artist, or publication (optional)
//   url      Where it lives (optional)
//   image    Cover art or thumbnail URL (optional; best for songs and albums)
//   comment  A line or two in your own words (optional)

export type FeedKind = "article" | "song" | "album" | "note";

export interface FeedEntry {
  kind: FeedKind;
  date: string;
  title: string;
  by?: string;
  url?: string;
  image?: string;
  comment?: string;
}

// SAMPLE ENTRIES: replace these with your own.
export const feed: FeedEntry[] = [
  {
    kind: "note",
    date: "2026-11-21",
    title:
      "This is a note: a quick thought with no link. Swap it for something real.",
  },
  {
    kind: "song",
    date: "2026-11-19",
    title: "Lovely Day",
    by: "Bill Withers",
    url: "https://open.spotify.com/search/Lovely%20Day%20Bill%20Withers",
    comment: "Sample entry: add a line about why it's on repeat.",
  },
  {
    kind: "article",
    date: "2026-11-14",
    title: "An article you read this week",
    by: "Publication name",
    url: "https://example.com",
  },
  {
    kind: "album",
    date: "2026-10-30",
    title: "What's Going On",
    by: "Marvin Gaye",
    url: "https://open.spotify.com/search/What's%20Going%20On%20Marvin%20Gaye",
  },
];

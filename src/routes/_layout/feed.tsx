import { NewsFeed } from "@components/feed";
import { Page } from "@components/page";
import { createFileRoute } from "@tanstack/react-router";

const description =
  "Things I've read, songs on repeat, and new posts from the Soul Provider blog.";

export const Route = createFileRoute("/_layout/feed")({
  head: ({ match }) => ({
    meta: [
      { title: "Feed | Soul Provider" },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: `https://soulprovidr.fm${match.pathname}`,
      },
      { property: "og:title", content: "Feed" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
    ],
  }),
  component: FeedPage,
});

function FeedPage() {
  return (
    <Page>
      <Page.Content>
        <h1>Feed</h1>
        <p>{description}</p>
        <NewsFeed />
      </Page.Content>
    </Page>
  );
}

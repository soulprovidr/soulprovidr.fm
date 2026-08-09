import { createFileRoute } from "@tanstack/react-router";
import IndexContent from "@content/index.mdx";

const description = "Internet radio for those who like to groove.";

export const Route = createFileRoute("/_layout/")({
  head: ({ match }) => ({
    meta: [
      { title: "Live | Soul Provider" },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: `https://soulprovidr.fm${match.pathname}`,
      },
      { property: "og:title", content: "Live" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
      { property: "twitter:card", content: "summary" },
      { property: "twitter:title", content: "Live" },
      { property: "twitter:description", content: description },
      {
        property: "twitter:image",
        content: "https://soulprovidr.fm/preview.png",
      },
    ],
  }),
  component: IndexContent,
});

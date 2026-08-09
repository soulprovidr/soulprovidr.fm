import { createFileRoute } from "@tanstack/react-router";
import FaqContent from "@content/faq.mdx";

export const Route = createFileRoute("/_layout/faq")({
  head: ({ match }) => ({
    meta: [
      { title: "FAQ | Soul Provider" },
      { name: "description", content: "What is Soul Provider?" },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: `https://soulprovidr.fm${match.pathname}`,
      },
      { property: "og:title", content: "FAQ" },
      { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
    ],
  }),
  component: FaqContent,
});

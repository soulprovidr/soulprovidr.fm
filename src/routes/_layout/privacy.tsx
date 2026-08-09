import { createFileRoute } from "@tanstack/react-router";
import PrivacyContent from "@content/privacy.mdx";

export const Route = createFileRoute("/_layout/privacy")({
  head: ({ match }) => ({
    meta: [
      { title: "Privacy Policy | Soul Provider" },
      {
        property: "og:url",
        content: `https://soulprovidr.fm${match.pathname}`,
      },
      { property: "og:title", content: "Privacy Policy" },
      { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
    ],
  }),
  component: PrivacyContent,
});

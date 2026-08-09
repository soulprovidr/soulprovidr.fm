import { VideosView } from "@components/tv";
import { getVideos } from "@lib/api/tv";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const fetchVideos = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await getVideos();
  } catch {
    return [];
  }
});

const description = "I want my Soul Provider TV";

export const Route = createFileRoute("/_layout/tv")({
  head: ({ match }) => ({
    meta: [
      { title: "TV | Soul Provider" },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: `https://soulprovidr.fm${match.pathname}`,
      },
      { property: "og:title", content: "TV" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
      { property: "twitter:card", content: "summary" },
      { property: "twitter:title", content: "TV" },
      { property: "twitter:description", content: description },
      {
        property: "twitter:image",
        content: "https://soulprovidr.fm/preview.png",
      },
    ],
  }),
  loader: () => fetchVideos(),
  component: TvPage,
});

function TvPage() {
  const videos = Route.useLoaderData();
  return <VideosView videos={videos} />;
}

import { PlaylistsView } from "@components/playlists";
import { getPlaylists } from "@lib/api/playlists";
import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";

const fetchPlaylists = createServerFn({ method: "GET" }).handler(async () => {
  try {
    return await getPlaylists();
  } catch {
    return [];
  }
});

const description =
  "Find your new favourite song in one of Soul Provider's hand-crafted playlists.";

export const Route = createFileRoute("/_layout/playlists")({
  head: ({ match }) => ({
    meta: [
      { title: "Playlists | Soul Provider" },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      {
        property: "og:url",
        content: `https://soulprovidr.fm${match.pathname}`,
      },
      { property: "og:title", content: "Playlists" },
      { property: "og:description", content: description },
      { property: "og:image", content: "https://soulprovidr.fm/preview.png" },
      { property: "twitter:card", content: "summary" },
      { property: "twitter:title", content: "Playlists" },
      { property: "twitter:description", content: description },
      {
        property: "twitter:image",
        content: "https://soulprovidr.fm/preview.png",
      },
    ],
  }),
  loader: () => fetchPlaylists(),
  component: PlaylistsPage,
});

function PlaylistsPage() {
  const playlists = Route.useLoaderData();
  return <PlaylistsView playlists={playlists} />;
}

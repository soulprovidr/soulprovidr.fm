import { Meta } from "@components/meta";
import { Playlists } from "@components/playlists";
import { Spotify } from "@lib/spotify";

export default function PlaylistsPage({ playlists }) {
  return (
    <>
      <Meta
        title="Playlists"
        description="Find your new favourite song in one of Soul Provider's hand-crafted playlists."
      />
      <h1>Playlists</h1>
      <p>
        Looking for something new to listen to? Don&apos;t worry, Soul
        Provider&apos;s got you covered. Find your new favourite song in one of
        our hand-crafted playlists.
      </p>
      <Playlists playlists={playlists} />
    </>
  );
}

export const getStaticProps = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  const spotify = new Spotify(client_id, client_secret);

  if (await spotify.authenticate()) {
    const playlists = await spotify.getUserPlaylists("soulprovidr");
    return {
      props: {
        playlists,
      },
      revalidate: 3600,
    };
  }

  return {
    props: {
      playlists: [],
    },
    revalidate: 60,
  };
};

import { Playlists } from "@components/playlists";
import { Spotify } from "@lib/spotify";

const PlaylistsPage = ({ playlists }) => <Playlists playlists={playlists} />;

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

export default PlaylistsPage;

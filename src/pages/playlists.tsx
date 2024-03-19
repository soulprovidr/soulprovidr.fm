import { Meta } from "@components/meta";
import { Playlists } from "@components/playlists";
import { fetchJson } from "@lib/util";

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
  try {
    const playlists = await fetchJson(`${process.env.API_URL}/playlists`);
    return {
      props: { playlists },
      revalidate: 3600,
    };
  } catch (e) {
    return {
      props: { playlists: [] },
    };
  }
};

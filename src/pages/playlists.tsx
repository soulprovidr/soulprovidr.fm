import { PlaylistsView, PlaylistsViewProps } from "@components/playlists";
import { getPlaylists } from "@lib/api/playlists";
import { GetStaticProps } from "next";

export default PlaylistsView;

export const getStaticProps: GetStaticProps<PlaylistsViewProps> = async () => {
  try {
    return {
      props: { playlists: await getPlaylists() },
      revalidate: 60 * 60 * 24, // once a day
    };
  } catch (e) {
    return {
      props: { playlists: [] },
    };
  }
};

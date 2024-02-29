import { Layout } from "@components/layout";
import Fuse from "fuse.js";
import partition from "lodash.partition";
import { useState } from "react";
import { DAILY_LISTENING_PLAYLIST_ID } from "../constants";
import { ISpotifyPlaylist } from "../types";
import { Controls } from "./Controls";
import { Items } from "./Items";

interface IPlaylistsProps {
  playlists: ISpotifyPlaylist[];
}

export const Playlists = ({ playlists }: IPlaylistsProps) => {
  const [filterTerm, setFilterTerm] = useState<string>("");

  const [stickyPlaylists, otherPlaylists] = partition(playlists, (p) =>
    [DAILY_LISTENING_PLAYLIST_ID].includes(p.id)
  );

  const visiblePlaylists = filterTerm.length
    ? new Fuse(playlists, {
        keys: ["name", "description"],
        ignoreLocation: true,
        threshold: 0.3,
      })
        .search(filterTerm)
        .map((p) => p.item)
    : stickyPlaylists.concat(
        otherPlaylists.toSorted((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
      );

  return (
    <Layout title="Playlists">
      <h1>Playlists</h1>
      <p>
        Looking for something new to listen to? Don't worry, Soul Provider's got
        you covered. Find your new favourite song in one of our hand-crafted
        playlists.
      </p>
      <Controls setFilterTerm={setFilterTerm} />
      <Items playlists={visiblePlaylists} />
    </Layout>
  );
};

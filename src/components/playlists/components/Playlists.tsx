import { Layout } from "@components/layout";
import { useState } from "react";
import { DisplayMode, ISpotifyPlaylist } from "../types";
import { Controls } from "./Controls";
import { Items } from "./Items";

interface IPlaylistsProps {
  playlists: ISpotifyPlaylist[];
}

export const Playlists = ({ playlists }: IPlaylistsProps) => {
  const [displayMode, setDisplayMode] = useState<DisplayMode>(DisplayMode.GRID);
  const [filterTerm, setFilterTerm] = useState<string>("");

  const visiblePlaylists = playlists
    .sort((a) => {
      if (a.id === "5s9tY7Jrrh64aFVfgOBopi") return 1;
      return -1;
    })
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .filter((playlist) =>
      playlist.name.toLowerCase().includes(filterTerm.toLowerCase())
    );

  return (
    <Layout title="Playlists">
      <h1>Playlists</h1>
      <p>
        Looking for something new to listen to? Don't worry,{" "}
        <strong>SOUL PROVIDER®</strong>'s got your back. Find your new favourite
        song in one of our hand-crafted playlists.
      </p>
      <Controls
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        setFilterTerm={setFilterTerm}
      />
      <Items displayMode={displayMode} playlists={visiblePlaylists} />
    </Layout>
  );
};

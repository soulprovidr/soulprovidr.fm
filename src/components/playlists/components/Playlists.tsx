import { ISpotifyPlaylist } from "@lib/spotify";
import Fuse from "fuse.js";
import partition from "lodash.partition";
import { useState } from "react";
import { isSpecialPlaylist, sortPlaylists } from "../helpers";
import { Controls } from "./Controls";
import { Items } from "./Items";

interface IPlaylistsProps {
  playlists: ISpotifyPlaylist[];
}

export const Playlists = ({ playlists }: IPlaylistsProps) => {
  const [filterTerm, setFilterTerm] = useState<string>("");

  const [specialPlaylists, otherPlaylists] = partition(
    playlists,
    isSpecialPlaylist
  );

  const visiblePlaylists = filterTerm.length
    ? new Fuse(playlists, {
        keys: ["name", "description"],
        ignoreLocation: true,
        threshold: 0.3,
      })
        .search(filterTerm)
        .map((p) => p.item)
    : sortPlaylists(specialPlaylists).concat(sortPlaylists(otherPlaylists));

  return (
    <>
      <Controls setFilterTerm={setFilterTerm} />
      <Items playlists={visiblePlaylists} />
    </>
  );
};

import Fuse from "fuse.js";
import partition from "lodash.partition";
import { useState } from "react";
import { sortAlphabetically } from "../helpers";
import { Controls } from "./Controls";
import { Items } from "./Items";
import { Playlist } from "@lib/api";

interface IPlaylistsProps {
  playlists: Playlist[];
}

export const Playlists = ({ playlists }: IPlaylistsProps) => {
  const [filterTerm, setFilterTerm] = useState<string>("");

  const [featuredPlaylists, otherPlaylists] = partition(
    playlists,
    (p: Playlist) => p.featured
  );

  const visiblePlaylists = filterTerm.length
    ? new Fuse(playlists, {
        keys: ["name", "description"],
        ignoreLocation: true,
        threshold: 0.3,
      })
        .search(filterTerm)
        .map((p) => p.item)
    : sortAlphabetically(featuredPlaylists).concat(
        sortAlphabetically(otherPlaylists)
      );

  return (
    <>
      <Controls setFilterTerm={setFilterTerm} />
      <Items playlists={visiblePlaylists} />
    </>
  );
};

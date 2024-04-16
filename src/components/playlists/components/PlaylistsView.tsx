import { Meta } from "@components/meta";
import { Page } from "@components/page";
import { Playlist } from "@lib/api/playlists";
import Fuse from "fuse.js";
import partition from "lodash.partition";
import { useState } from "react";
import { sortAlphabetically } from "../helpers";
import { Controls } from "./Controls";
import { Items } from "./Items";

export interface PlaylistsViewProps {
  playlists: Playlist[];
}

export const PlaylistsView = ({ playlists }: PlaylistsViewProps) => {
  const [filterTerm, setFilterTerm] = useState<string>("");

  const [featuredPlaylists, otherPlaylists] = partition(
    playlists,
    (p: Playlist) => p.featured,
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
        sortAlphabetically(otherPlaylists),
      );

  return (
    <Page>
      <Page.Content>
        <Meta
          title="Playlists"
          description="Find your new favourite song in one of Soul Provider's hand-crafted playlists."
        />
        <h1>Playlists</h1>
        <p>
          Looking for something new to listen to? Don&apos;t worry, Soul
          Provider&apos;s got you covered. Find your new favourite song in one
          of our hand-crafted playlists.
        </p>
        <Controls setFilterTerm={setFilterTerm} />
        <Page.Content.Wide>
          <Items playlists={visiblePlaylists} />
        </Page.Content.Wide>
      </Page.Content>
    </Page>
  );
};

import { AsyncImage } from "@components/ui/AsyncImage";
import cx from "classnames";
import { useState } from "react";
import { ISpotifyPlaylist } from "../types";
import css from "./Playlists.module.scss";

const Controls = ({ displayMode, setDisplayMode, setFilterTerm }) => (
  <div className={css.controls}>
    <fieldset>
      <legend>Filter</legend>
      <input
        type="text"
        onChange={(e) => setFilterTerm(e.target.value)}
        placeholder="Start typing..."
      />
    </fieldset>
    <fieldset>
      <legend>Display Mode</legend>
      <label htmlFor="grid">Grid</label>
      <input
        aria-checked={displayMode === "list"}
        checked={displayMode === "grid"}
        id="grid"
        name="display"
        onChange={(e) => e.target.checked && setDisplayMode("grid")}
        type="checkbox"
      />
      <label htmlFor="list">List</label>
      <input
        aria-checked={displayMode === "list"}
        checked={displayMode === "list"}
        className={css.checkbox}
        id="list"
        name="display"
        onChange={(e) => e.target.checked && setDisplayMode("list")}
        type="checkbox"
      />
    </fieldset>
  </div>
);

interface IPlaylistsProps {
  playlists: ISpotifyPlaylist[];
}

export const Playlists = ({ playlists }: IPlaylistsProps) => {
  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");
  const [filterTerm, setFilterTerm] = useState<string>("");

  const visiblePlaylists = playlists
    .sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    })
    .filter((playlist) =>
      playlist.name.toLowerCase().includes(filterTerm.toLowerCase())
    );

  const renderGridItem = (playlist: ISpotifyPlaylist) => (
    <li key={playlist.id}>
      <AsyncImage src={playlist.images[0].url} />
      <div className={css.content}>
        <p className={css.title}>{playlist.name}</p>
        {!!playlist.description && (
          <p
            className={css.description}
            dangerouslySetInnerHTML={{ __html: playlist.description }}
          />
        )}
        <p className={css.attributes}>{playlist.tracks.total} songs</p>
        <a
          className={css.link}
          href={playlist.external_urls.spotify}
          target="_blank"
        >
          <AsyncImage
            src="/icons/spotify.svg"
            style={{ width: 21, height: 21 }}
          />{" "}
          Listen on Spotify
        </a>
      </div>
    </li>
  );

  const renderListItem = (playlist: ISpotifyPlaylist) => (
    <li key={playlist.id}>
      <AsyncImage src={playlist.images[0].url} />
      <div className={css.content}>
        <p className={css.title}>{playlist.name}</p>
        {!!playlist.description && (
          <p
            className={css.description}
            dangerouslySetInnerHTML={{ __html: playlist.description }}
          />
        )}
        <p className={css.attributes}>{playlist.tracks.total} songs</p>
        <a
          className={css.link}
          href={playlist.external_urls.spotify}
          target="_blank"
        >
          <AsyncImage
            src="/icons/spotify.svg"
            style={{ width: 21, height: 21 }}
          />{" "}
          Listen on Spotify
        </a>
      </div>
    </li>
  );

  return (
    <>
      <Controls
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
        setFilterTerm={setFilterTerm}
      />
      <ul
        className={cx(css.playlists, displayMode, {
          "layout-medium": displayMode === "grid",
        })}
      >
        {visiblePlaylists.map((playlist) =>
          displayMode === "grid"
            ? renderGridItem(playlist)
            : renderListItem(playlist)
        )}
      </ul>
    </>
  );
};

import { AsyncImage } from "@components/ui/AsyncImage";
import cx from "classnames";
import { ISpotifyPlaylist } from "../types";
import css from "./Items.module.scss";

interface IItemsProps {
  playlists: ISpotifyPlaylist[];
}

export const Items = ({ playlists }: IItemsProps) =>
  playlists.length ? (
    <ul className={cx(css.items, "w-medium")}>
      {playlists.map((playlist) => (
        <li key={playlist.id}>
          <AsyncImage className={css.image} src={playlist.images[0].url} />
          <div className={css.content}>
            <p className={css.title}>{playlist.name}</p>
            <p className={css.attribute}>{playlist.tracks.total} songs</p>
            {!!playlist.description && (
              <p
                className={css.description}
                dangerouslySetInnerHTML={{ __html: playlist.description }}
              />
            )}
            <a
              className={css.link}
              href={playlist.external_urls.spotify}
              target="_blank"
            >
              <AsyncImage
                alt=""
                src="/icons/spotify.svg"
                style={{ width: 21, height: 21 }}
              />{" "}
              Listen on Spotify
            </a>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <p>No playlists found.</p>
  );

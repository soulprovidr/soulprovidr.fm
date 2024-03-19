import { AsyncImage } from "@components/ui/AsyncImage";
import cx from "classnames";
import css from "./Items.module.scss";
import { VerifiedCheckmark } from "./VerifiedCheckmark";
import { Playlist } from "@lib/api";

interface IItemsProps {
  playlists: Playlist[];
}

export const Items = ({ playlists }: IItemsProps) =>
  playlists.length ? (
    <ul className={cx(css.items, "w-medium")}>
      {playlists.map((playlist) => (
        <li key={playlist.id}>
          <AsyncImage className={css.image} src={playlist.imageUrl} />
          <div className={css.content}>
            <h2 className={css.title}>
              {playlist.name}{" "}
              {playlist.verified && (
                <VerifiedCheckmark aria-hidden className={css.checkmark} />
              )}
            </h2>
            <p className={css.attribute}>{playlist.numTracks} songs</p>
            {!!playlist.description && (
              <p
                className={css.description}
                dangerouslySetInnerHTML={{ __html: playlist.description }}
              />
            )}
            <a
              className={css.link}
              href={playlist.externalUrls.spotify}
              rel="noopener noreferrer"
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

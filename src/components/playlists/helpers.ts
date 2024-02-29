import {
  DAILY_LISTENING_PLAYLIST_ID,
  FRESH_FRIDAYS_PLAYLIST_ID,
} from "./constants";
import { ISpotifyPlaylist } from "./types";

export const isSpecialPlaylist = (playlist: ISpotifyPlaylist) => {
  return [DAILY_LISTENING_PLAYLIST_ID, FRESH_FRIDAYS_PLAYLIST_ID].includes(
    playlist.id
  );
};

export const sortPlaylists = (playlists: ISpotifyPlaylist[]) =>
  playlists.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

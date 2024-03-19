import { Playlist } from "@lib/api";

export const sortPlaylists = (playlists: Playlist[]) =>
  playlists.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

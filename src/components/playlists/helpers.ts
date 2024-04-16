import { Playlist } from "@lib/api/playlists";

export const sortAlphabetically = (playlists: Playlist[]) =>
  playlists.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

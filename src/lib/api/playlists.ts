import { fetchJson } from "@lib/util";
import { API_URL } from "./constants";

export interface Playlist {
  id: string;
  description: string;
  externalUrls: {
    spotify: string;
  };
  featured: boolean;
  imageUrl: string;
  name: string;
  tracks: {
    total: number;
  };
}

export const getPlaylists = async (): Promise<Playlist[]> =>
  fetchJson<Playlist[]>(`${API_URL}/playlists`);

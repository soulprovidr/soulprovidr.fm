import axios from "axios";
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

export const getPlaylists = async (): Promise<Playlist[]> => {
  const { data } = await axios.get<Playlist[]>(`${API_URL}/playlists`);
  return data;
};

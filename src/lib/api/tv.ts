import { fetchJson } from "@lib/util";
import { API_URL } from "./constants";

export interface Video {
  id: string;
  thumbnailUrl: string;
  title: string;
  videoId: string;
  videoUrl: string;
}

export const getVideos = async (): Promise<Video[]> =>
  fetchJson<Video[]>(`${API_URL}/tv`);

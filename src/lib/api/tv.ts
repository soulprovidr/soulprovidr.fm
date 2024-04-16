import axios from "axios";
import { API_URL } from "./constants";

export enum VideoType {
  YOUTUBE = "youtube",
}

export interface Video {
  id: string;
  thumbnailUrl: string;
  title: string;
  videoId: string;
  videoUrl: string;
}

export const getVideos = async (): Promise<Video[]> => {
  const { data } = await axios.get<Video[]>(`${API_URL}/tv`);
  return data;
};

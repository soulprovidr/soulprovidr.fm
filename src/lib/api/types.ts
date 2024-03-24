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

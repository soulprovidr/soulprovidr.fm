export enum DisplayMode {
  GRID = "grid",
  LIST = "list",
}

export interface ISpotifyImageObject {
  height: number;
  width: number;
  url: string;
}

export interface ISpotifyPlaylist {
  id: string;
  name: string;
  description: string;
  images: ISpotifyImageObject[];
  external_urls: {
    spotify: string;
  };
  tracks: {
    href: string;
    total: number;
  };
  uri: string;
}

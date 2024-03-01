export interface ISpotifyImageObject {
  height: number;
  width: number;
  url: string;
}

export interface ISpotifyPaginationParams {
  limit: number;
  offset: number;
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

export interface ISpotifyTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface ISpotifyUserPlaylistsResponse {
  items: ISpotifyPlaylist[];
}

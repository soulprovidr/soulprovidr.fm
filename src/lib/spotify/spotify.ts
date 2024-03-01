import {
  ISpotifyPaginationParams,
  ISpotifyTokenResponse,
  ISpotifyUserPlaylistsResponse,
} from "./types";

export class Spotify {
  #clientId: string;
  #clientSecret: string;
  #token: string;

  #fetch = async <T>(
    path: string,
    params: Record<string, any> = {},
    options: RequestInit = {}
  ): Promise<T> => {
    const url = new URL(`https://api.spotify.com/v1${path}`);

    for (const key in params) {
      const stringValue = String(params[key]) ?? null;
      if (stringValue) {
        url.searchParams.append(key, stringValue);
      }
    }

    const headers = Object.assign(
      { Authorization: "Bearer " + this.#token },
      options.headers
    );

    const response = await fetch(
      url.toString(),
      Object.assign({ headers }, options)
    );

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return (await response.json()) as T;
  };

  get isAuthenticated() {
    return !!this.#token;
  }

  constructor(clientId: string, clientSecret: string) {
    this.#clientId = clientId;
    this.#clientSecret = clientSecret;
  }

  authenticate = async (): Promise<boolean> => {
    if (!this.#clientId || !this.#clientSecret) {
      console.error(
        "[Spotify] Client ID and secret are required to authenticate."
      );
      return false;
    }
    try {
      const authResponse = await fetch(
        "https://accounts.spotify.com/api/token",
        {
          method: "POST",
          headers: {
            Authorization:
              "Basic " +
              Buffer.from(this.#clientId + ":" + this.#clientSecret).toString(
                "base64"
              ),
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ grant_type: "client_credentials" }),
        }
      );

      const data: ISpotifyTokenResponse = await authResponse.json();
      this.#token = data.access_token;
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  getUserPlaylists = async (
    username: string,
    params: ISpotifyPaginationParams = { limit: 50, offset: 0 }
  ) => {
    if (!this.isAuthenticated) {
      console.error("[Spotify] Not authenticated.");
      return [];
    }

    try {
      const { items } = await this.#fetch<ISpotifyUserPlaylistsResponse>(
        `/users/${username}/playlists`,
        params
      );
      return items;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
}

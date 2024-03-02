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
    const url = new URL(
      path.startsWith("http") ? path : `https://api.spotify.com/v1${path}`
    );

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.append(key, value);
    }

    const response = await fetch(url, {
      ...options,
      headers: {
        Authorization: "Bearer " + this.#token,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new Error(`Status: ${response.status} ${await response.text()}`);
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
      const { access_token } = await this.#fetch<ISpotifyTokenResponse>(
        "https://accounts.spotify.com/api/token",
        {},
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

      this.#token = access_token;
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

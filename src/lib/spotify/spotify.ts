import { ISpotifyTokenResponse, ISpotifyUserPlaylistsResponse } from "./types";

export class Spotify {
  #clientId: string;
  #clientSecret: string;
  #token: string;

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

  getUserPlaylists = async (username: string) => {
    if (!this.isAuthenticated) {
      console.error("[Spotify] Not authenticated.");
      return [];
    }

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${username}/playlists`,
        {
          headers: {
            Authorization: "Bearer " + this.#token,
          },
        }
      );

      const data: ISpotifyUserPlaylistsResponse = await response.json();
      return data.items;
    } catch (e) {
      console.error(e);
      return [];
    }
  };
}

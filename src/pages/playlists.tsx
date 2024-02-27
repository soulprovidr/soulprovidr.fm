import { Layout } from "@components/layout";
import { Playlists } from "@components/playlists";

const PlaylistsPage = ({ playlists }) => {
  return (
    <Layout title="Playlists">
      <h1>Playlists</h1>
      <p>
        Looking for something new to listen to? Don't worry,{" "}
        <strong>SOUL PROVIDER®</strong>'s got your back. Find your new favourite
        song in one of our hand-crafted playlists.
      </p>
      <Playlists playlists={playlists} />
    </Layout>
  );
};

export const getStaticProps = async () => {
  const client_id = process.env.SPOTIFY_CLIENT_ID;
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET;

  const formData = new URLSearchParams();
  formData.append("grant_type", "client_credentials");

  const authResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(client_id + ":" + client_secret).toString("base64"),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData,
  });

  try {
    const { access_token } = await authResponse.json();

    const response = await fetch(
      "https://api.spotify.com/v1/users/soulprovidr/playlists",
      {
        headers: {
          Authorization: "Bearer " + access_token,
        },
      }
    );

    const data = await response.json();

    return {
      props: {
        playlists: data.items,
      },
    };
  } catch (e) {
    console.error(e);
    return {
      props: {
        playlists: [],
      },
    };
  }
};

export default PlaylistsPage;

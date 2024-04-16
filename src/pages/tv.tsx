import { VideosView, VideosViewProps } from "@components/tv";
import { getVideos } from "@lib/api/tv";
import { GetStaticProps } from "next";

export default VideosView;

export const getStaticProps: GetStaticProps<VideosViewProps> = async () => {
  try {
    return {
      props: { videos: await getVideos() },
      revalidate: 3600,
    };
  } catch (e) {
    return {
      props: { videos: [] },
    };
  }
};

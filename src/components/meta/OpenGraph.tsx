interface IOpenGraphProps {
  description?: string;
  image?: string;
  title: string;
  url: string;
}

export const OpenGraph = ({
  description = "Internet radio for those who like to groove.",
  image = "https://soulprovidr.fm/preview.png",
  title,
  url,
}: IOpenGraphProps) => {
  return (
    <>
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </>
  );
};

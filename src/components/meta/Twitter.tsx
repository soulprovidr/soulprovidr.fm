export interface ITwitterProps {
  description?: string;
  image?: string;
  title: string;
}

export const Twitter = ({
  description = "Internet radio for those who like to groove.",
  image = "https://soulprovidr.fm/preview.png",
  title,
}: ITwitterProps) => (
  <>
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={image} />
  </>
);

import NextHead from "next/head";
import { useRouter } from "next/router";

export interface IHeadProps {
  description?: string;
  image?: string;
  title: string;
}

export const Head = ({
  description = "Internet radio for those who like to groove.",
  image = "https://soulprovidr.fm/preview.png",
  title,
}: IHeadProps) => {
  const { asPath } = useRouter();
  const pageTitle = `${title} | Soul Provider`;
  const url = "https://soulprovidr.fm" + asPath;
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="shola,anozie,soul,music,radio,funk,disco,rnb,reggae,online,stream"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <link rel="icon" href="/logo.png" />
    </NextHead>
  );
};

import NextHead from "next/head";
import { useRouter } from "next/router";
import { OpenGraph } from "./OpenGraph";
import { Twitter } from "./Twitter";

export interface IMetaProps {
  description?: string;
  image?: string;
  title: string;
}

export const Meta = ({
  description = "Internet radio for those who like to groove.",
  image = "https://soulprovidr.fm/preview.png",
  title,
}: IMetaProps) => {
  const { asPath } = useRouter();
  const pageTitle = `${title} | Soul Provider`;
  const url = "https://soulprovidr.fm" + asPath;
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="shola,anozie,soul,music,radio,funk,disco,rnb,reggae,online,stream"
      />
      <link rel="icon" href="/logo.png" />

      <OpenGraph
        description={description}
        image={image}
        title={title}
        url={url}
      />
      <Twitter description={description} image={image} title={title} />

      <meta name="apple-itunes-app" content="app-id=1616086357" />
    </NextHead>
  );
};

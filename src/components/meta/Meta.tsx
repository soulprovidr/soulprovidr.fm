// Head/meta management is now handled via the `head()` function on each route.
// See src/routes/_layout/*.tsx

export interface IMetaProps {
  description?: string;
  image?: string;
  title: string;
}

export const Meta = (_props: IMetaProps) => null;

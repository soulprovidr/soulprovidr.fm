import cx from "classnames";
import { HTMLAttributes, ImgHTMLAttributes, useState } from "react";

import css from "./AsyncImage.module.scss";

interface AsyncImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  onLoad?: () => void;
}

export const AsyncImage = ({ className, onLoad, ...rest }: AsyncImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <img
      className={cx(css.asyncImage, {
        [css.isVisible]: isLoaded,
      })}
      onLoad={() => {
        setIsLoaded(true);
        onLoad?.();
      }}
      {...rest}
    />
  );
};

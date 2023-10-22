import cx from "classnames";
import { ImgHTMLAttributes, useState } from "react";

import css from "./AsyncImage.module.scss";

interface IAsyncImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  onLoad?: () => void;
}

export const AsyncImage = ({
  className,
  onLoad,
  ...rest
}: IAsyncImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <img
      className={cx(css.asyncImage, className, {
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

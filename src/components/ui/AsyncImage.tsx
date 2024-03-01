import cx from "classnames";
import { ImgHTMLAttributes, useCallback, useState } from "react";
import css from "./AsyncImage.module.scss";

export const AsyncImage = ({
  className = "",
  onLoad = undefined,
  ...rest
}: ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.(undefined);
  };

  const handleImageRef = useCallback((img: HTMLImageElement) => {
    if (img) {
      if (img.complete) {
        handleLoad();
      } else {
        img.onload = handleLoad;
      }
    }
  }, []);

  return (
    <img
      className={cx(css.asyncImage, className, { [css.isVisible]: isLoaded })}
      {...rest}
      ref={handleImageRef}
    />
  );
};

import { AsyncImage } from "../AsyncImage";
import { useRadioContext } from "./context";
import css from "./RadioCover.module.scss";

interface IRadioCoverProps {
  size: number;
}

export const RadioCover = ({ size }: IRadioCoverProps) => {
  const { metadata } = useRadioContext();
  return (
    <div
      className={css.radioCover}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      <AsyncImage
        alt={metadata && `Artwork for ${metadata.title} by ${metadata.artist}`}
        height={size}
        src={metadata?.cover}
        width={size}
      />
    </div>
  );
};

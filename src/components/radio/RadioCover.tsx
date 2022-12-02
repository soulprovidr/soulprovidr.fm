import cx from "classnames";
import last from "lodash.last";
import { useEffect, useState } from "react";
import { AsyncImage } from "../AsyncImage";
import { useRadioContext } from "./context";
import css from "./RadioCover.module.scss";
import { IRadioMetadata } from "./types";

interface IRadioCoverProps {
  size: number;
}

export const RadioCover = ({ size }: IRadioCoverProps) => {
  const { metadata } = useRadioContext();

  const [currentCover, setCurrentCover] = useState<string>();
  const [metadataItems, setMetadataItems] = useState<IRadioMetadata[]>([]);

  if (metadata) {
    if (!metadataItems.length) {
      setCurrentCover(metadata.cover);
      setMetadataItems([metadata]);
      return;
    }
    if (last(metadataItems)?.cover !== metadata.cover) {
      setMetadataItems([...metadataItems, metadata]);
      return;
    }
  }

  useEffect(() => {
    // Remove previous cover/metadata after transition has taken place.
    if (metadataItems.length > 1) {
      setTimeout(() => setMetadataItems([last(metadataItems)]), 250);
    }
  }, [currentCover]);

  return (
    <div
      className={css.radioCover}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {metadataItems.map((m, i) => {
        const isCurrent = currentCover === m.cover;
        const isComplete = i === 0 && !isCurrent;
        return (
          <div
            className={cx(css.wrapper, {
              [css.isCurrent]: isCurrent,
              [css.isComplete]: isComplete,
            })}
            key={m.cover}
          >
            <AsyncImage
              alt={m && `Artwork for ${m.title} by ${m.artist}`}
              className={css.image}
              height={size}
              onLoad={() => setCurrentCover(m.cover)}
              src={m.cover}
              width={size}
            />
          </div>
        );
      })}
    </div>
  );
};

import cx from "classnames";
import last from "lodash.last";
import { useEffect, useState } from "react";
import { AsyncImage } from "../AsyncImage";
import { useRadioContext } from "./context";
import css from "./RadioCover.module.scss";
import { IRadioMetadata } from "./types";

const TRANSITION_DURATION = "250ms";

interface IRadioCoverProps {
  size: number;
}

export const RadioCover = ({ size }: IRadioCoverProps) => {
  const { metadata } = useRadioContext();

  const [currentCover, setCurrentCover] = useState<string>();
  const [metadataItems, setMetadataItems] = useState<IRadioMetadata[]>([]);

  const appendMetadata = (m: IRadioMetadata) =>
    setMetadataItems([].concat(metadataItems, m));

  if (metadata) {
    // If no metadata is currently stored, initialize the currentCover and store metadata.
    if (!metadataItems.length) {
      setCurrentCover(metadata.cover);
      appendMetadata(metadata);
      return;
    }
    // If most recent metadata is different from current metadata, store current metadata.
    if (last(metadataItems)?.cover !== metadata.cover) {
      appendMetadata(metadata);
      return;
    }
  }

  useEffect(() => {
    // Remove previous track's metadata after `transitionDuration` when currentCover changes.
    // (This provides enough time for the exit transition to take place).
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
            style={{ transitionDuration: TRANSITION_DURATION }}
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

import { AsyncImage } from "@components/shared/AsyncImage";
import cx from "classnames";
import isEmpty from "lodash.isempty";
import { useEffect, useState } from "react";
import { useRadioContext } from "../context";
import { IRadioMetadata } from "../types";
import css from "./RadioCover.module.scss";

interface IRadioCoverProps {
  size: number;
}

export const RadioCover = ({ size }: IRadioCoverProps) => {
  const { metadata } = useRadioContext();

  const [currMetadataId, setCurrMetadataId] = useState<number>();
  const [metadataItems, setMetadataItems] = useState<IRadioMetadata[]>([]);

  if (metadata && isEmpty(metadataItems)) {
    setMetadataItems([metadata]);
    setCurrMetadataId(metadata.id);
  }

  useEffect(() => {
    if (metadata?.id !== currMetadataId) {
      setMetadataItems([...metadataItems, metadata]);
    }
  }, [metadata]);

  const handleImageLoad = () => {
    setCurrMetadataId(metadata.id);
    setTimeout(() => setMetadataItems([metadata]), 250);
  };

  return (
    <div
      className={css.radioCover}
      style={{ height: `${size}px`, width: `${size}px` }}
    >
      {metadataItems.map((m, i) => {
        const isCurrent = currMetadataId === m.id;
        const isPrevious = i === 0 && !isCurrent;
        return (
          <div
            className={cx(css.wrapper, {
              [css.isCurrent]: isCurrent,
              [css.isPrevious]: isPrevious,
            })}
            key={m.id}
          >
            <AsyncImage
              alt={m && `Artwork for ${m.title} by ${m.artist}`}
              className={css.image}
              height={size}
              onLoad={handleImageLoad}
              src={m.cover}
              width={size}
            />
          </div>
        );
      })}
    </div>
  );
};

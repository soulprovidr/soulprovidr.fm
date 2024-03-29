import { AsyncImage } from "@components/ui/AsyncImage";
import cx from "classnames";
import isEmpty from "lodash.isempty";
import { useEffect, useState } from "react";
import { useRadioContext } from "../context";
import { IRadioMetadata } from "../types";
import css from "./RadioCover.module.scss";

interface IRadioCoverProps {
  className?: string;
}

export const RadioCover = ({ className }: IRadioCoverProps) => {
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
    <div className={cx(css.radioCover, className)}>
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
              onLoad={handleImageLoad}
              src={m.cover}
            />
          </div>
        );
      })}
    </div>
  );
};

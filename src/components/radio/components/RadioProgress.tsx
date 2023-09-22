import { ProgressBar } from "@components/ui/ProgressBar";
import { prettyPrintMilliseconds } from "@lib/util";
import { HTMLAttributes } from "react";
import { useRadioContext } from "../context";
import { RadioStatus } from "../types";
import css from "./RadioProgress.module.scss";

interface IRadioProgressProps extends HTMLAttributes<HTMLDivElement> {
  disableTransition?: boolean;
}

export const RadioProgress = ({
  disableTransition,
  ...rest
}: IRadioProgressProps) => {
  const { elapsed, metadata, progress, status } = useRadioContext();
  return (
    <div {...rest}>
      <ProgressBar
        className={css.progressBar}
        disableTransition={disableTransition}
        isActive={status === RadioStatus.PLAYING}
        value={progress}
      />
      <div className={css.progressLabels}>
        <span>{prettyPrintMilliseconds(elapsed)}</span>
        <span>{prettyPrintMilliseconds(metadata?.duration * 1000)}</span>
      </div>
    </div>
  );
};
